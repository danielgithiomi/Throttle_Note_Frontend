const path = require("path");
const {withNativeWind} = require("nativewind/metro");
const {getDefaultConfig} = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);
const isStorybookEnabled = process.env.STORYBOOK_ENABLED === "true";

let config = defaultConfig;

// Only apply NativeWind when not in Storybook mode
if (!isStorybookEnabled) {
    config = withNativeWind(config, {input: "./global.css"});
}

module.exports = withStorybook(config, {
    enabled: true,
    configPath: path.resolve(__dirname, "./.storybook"),
    useJs: true,
});
