module.exports = function (api) {
  api.cache(true);

    const isStorybookEnabled = process.env.STORYBOOK_ENABLED === "true";

    if (isStorybookEnabled) {
        // Storybook configuration without NativeWind
        return {
            presets: [["babel-preset-expo"]],
        };
    }

    // Regular app configuration with NativeWind
    return {
        presets: [
            ["babel-preset-expo", {jsxImportSource: "nativewind"}],
            "nativewind/babel",
        ],
  };
};
