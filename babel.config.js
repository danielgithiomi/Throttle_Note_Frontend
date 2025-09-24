module.exports = function (api) {
    api.cache(true);

    const isStorybookEnabled = process.env.STORYBOOK_ENABLED === "true";

    const commonAliases = {
        "@": "./",
        "@tn/constants": "./packages/constants",
        "@tn/hooks": "./packages/hooks",
        "@constants": "./packages/constants/index",
        "@hooks": "./packages/hooks/index"
    };

    const commonPlugins = [
        [
            "module-resolver",
            {
                extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
                alias: commonAliases,
            },
        ],
        "@babel/plugin-transform-class-static-block"
    ];

    if (isStorybookEnabled) {
        // Storybook configuration with NativeWind
        return {
            presets: [
                ["babel-preset-expo", {jsxImportSource: "nativewind"}],
                "nativewind/babel",
            ],
            plugins: commonPlugins,
        };
    }

    // Regular app configuration with NativeWind
    return {
        presets: [
            ["babel-preset-expo", {jsxImportSource: "nativewind"}],
            "nativewind/babel",
        ],
        plugins: commonPlugins,
    };
};
