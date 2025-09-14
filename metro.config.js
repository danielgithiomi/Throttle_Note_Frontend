const path = require("path");
const { withNativeWind } = require("nativewind/metro");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = withStorybook(
  withNativeWind(defaultConfig, { input: "./global.css" }),
  {
    enabled: true,
    configPath: path.resolve(__dirname, "./.storybook"),
    useJs: true,
  }
);
