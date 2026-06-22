"""Backend API tests for GeoCoat MVP."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://mineral-paint-visual.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root health ---
class TestRoot:
    def test_root_returns_alive_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "GeoCoat API is alive"


# --- Contact endpoints ---
class TestContact:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST_Aria Mendez",
            "email": "test_aria@example.com",
            "phone": "+91 9999 99999",
            "project_type": "Heritage / Restoration",
            "message": "TEST: Need quote for a 200 sqm lime substrate restoration.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert "id" in body and isinstance(body["id"], str) and len(body["id"]) > 0
        assert body["name"] == payload["name"]
        assert body["email"] == payload["email"]
        assert body["message"] == payload["message"]
        assert "timestamp" in body

        # verify persisted via GET
        list_r = client.get(f"{API}/contact")
        assert list_r.status_code == 200
        items = list_r.json()
        assert any(it["id"] == body["id"] for it in items)

    def test_create_contact_minimal_required_fields(self, client):
        payload = {
            "name": "TEST_Minimal",
            "email": "test_minimal@example.com",
            "message": "TEST minimal payload",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["name"] == payload["name"]
        assert body["phone"] is None
        assert body["project_type"] is None

    def test_create_contact_invalid_email_returns_422(self, client):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "message": "TEST invalid email",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_name_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"email": "x@y.com", "message": "hi"})
        assert r.status_code == 422

    def test_create_contact_missing_email_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "A", "message": "hi"})
        assert r.status_code == 422

    def test_create_contact_missing_message_returns_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "A", "email": "x@y.com"})
        assert r.status_code == 422

    def test_create_contact_empty_strings_return_422(self, client):
        r = client.post(f"{API}/contact", json={"name": "", "email": "x@y.com", "message": ""})
        assert r.status_code == 422

    def test_list_contacts_sorted_desc(self, client):
        # Create two contacts and ensure most-recent first ordering
        p1 = {"name": "TEST_Order1", "email": "test_o1@example.com", "message": "TEST first"}
        p2 = {"name": "TEST_Order2", "email": "test_o2@example.com", "message": "TEST second"}
        r1 = client.post(f"{API}/contact", json=p1); assert r1.status_code == 200
        r2 = client.post(f"{API}/contact", json=p2); assert r2.status_code == 200
        id1, id2 = r1.json()["id"], r2.json()["id"]

        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list) and len(items) >= 2
        # Find positions
        ids = [it["id"] for it in items]
        assert id1 in ids and id2 in ids
        # id2 was created after id1 -> should appear before id1
        assert ids.index(id2) < ids.index(id1), "Contacts not sorted most-recent first"
