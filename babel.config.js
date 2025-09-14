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
        plugins: [
            ['module-resolver', {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                alias: {
                    '@': './',
                    // '@tn/libs': './packages/libs',
                    '@tn/constants': './packages/constants',
                    '@tn/hooks': './packages/hooks',
                    // '@tn/atoms': './components/atoms',
                    // '@tn/molecules': './components/molecules',
                    // With Indexes
                    // '@libs': './packages/libs/index',
                    // '@atoms': './components/atoms/index',
                    // '@molecules': './components/molecules/index',
                    // '@constants': './constants/index',
                }
            }]
        ]
  };
};
