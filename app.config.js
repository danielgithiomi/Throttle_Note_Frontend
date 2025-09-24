export default ({config}) => ({
    ...config,
    name: "Throttle Note",
    slug: "throttle-note",
    owner: "danielgithiomi",
    version: "1.0.0",
    userInterfaceStyle: "automatic",
    web: {
        bundler: "metro",
    },
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
});
