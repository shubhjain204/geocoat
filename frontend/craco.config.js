// craco.config.js
const path = require("path");
require("dotenv").config();

const config = {
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

const webpackConfig = {
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      webpackConfig.watchOptions = {
        ...webpackConfig.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/build/**",
          "**/dist/**",
          "**/coverage/**",
          "**/public/**",
        ],
      };

      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }

      return webpackConfig;
    },
  },
};

webpackConfig.devServer = (devServerConfig) => {
  const onBefore = devServerConfig.onBeforeSetupMiddleware;
  const onAfter = devServerConfig.onAfterSetupMiddleware;

  if (onBefore || onAfter) {
    delete devServerConfig.onBeforeSetupMiddleware;
    delete devServerConfig.onAfterSetupMiddleware;

    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (typeof onBefore === "function") onBefore(devServer);

      const out = typeof originalSetupMiddlewares === "function"
        ? originalSetupMiddlewares(middlewares, devServer)
        : middlewares;

      if (typeof onAfter === "function") onAfter(devServer);
      return out;
    };
  }

  if (typeof devServerConfig.https !== "undefined") {
    const httpsOpt = devServerConfig.https;
    delete devServerConfig.https;

    if (httpsOpt) {
      devServerConfig.server = httpsOpt === true
        ? "https"
        : { type: "https", options: httpsOpt };
    }
  }

  if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (originalSetupMiddlewares) {
        middlewares = originalSetupMiddlewares(middlewares, devServer);
      }

      setupHealthEndpoints(devServer, healthPluginInstance);
      return middlewares;
    };
  }

  return devServerConfig;
};

module.exports = webpackConfig;
