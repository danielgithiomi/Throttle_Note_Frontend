const path = require("path");
const { withNativeWind } = require("nativewind/metro");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const projectRoot = __dirname;
let config = getDefaultConfig(projectRoot);
const isStorybookEnabled = process.env.STORYBOOK_ENABLED === "true";

config.resolver = {
  ...config.resolver,
  resolveRequest: (context, moduleName, platform) => {
    if (moduleName === "Entry") {
      return {
        file: path.resolve(projectRoot, "Entry.jsx"),
      };
    }
    return context.resolveRequest(context, moduleName, platform);
  },
};

config = withStorybook(config, {
  enabled: isStorybookEnabled,
  configPath: path.resolve(projectRoot, "./.storybook"),
  useJs: true,
});

config = withNativeWind(config, { input: "./global.css" });

module.exports = config;
