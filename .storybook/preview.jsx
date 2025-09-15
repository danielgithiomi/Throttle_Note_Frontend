import {useColorScheme, View} from "react-native";

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        alignItems: false,
        justifyContent: false,
    },
    decorators: [
        (Story, {parameters}) => {

            // eslint-disable-next-line no-console
            console.log("Parameters", parameters);

            const theme = useColorScheme() ?? "light";

            return (
                <View
                    style={{
                        flex: 1,
                        backgroundColor:
                            parameters.noBackground === true
                                ? theme === "light"
                                    ? "#0a7ea4"
                                    : "#004560"
                                : "#fff",
                        padding: 8,
                        alignItems: parameters.itemsCenter === true ? "center" : "",
                        justifyItems: parameters.justifyCenter === true ? "center" : "",
                    }}
                >
                    <Story/>
                </View>
            );
        },
    ],
};

export default preview;
