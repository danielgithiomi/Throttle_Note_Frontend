import {useColorScheme, View} from "react-native";

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themedBackground: true,
    },
    decorators: [
        (Story, {parameters}) => {

            const theme = useColorScheme() ?? "light";

            return (
                <View
                    style={{
                        flex: 1,
                        backgroundColor:
                            parameters.themedBackground === true
                                ? theme === "light"
                                    ? "#0a7ea4"
                                    : "#004560"
                                : "#fff",
                        padding: 8,
                        alignItems: parameters.itemsCenter === true ? "center" : "start",
                        justifyItems: parameters.justifyCenter === true ? "center" : "start",
                    }}
                >
                    <Story/>
                </View>
            );
        },
    ],
};

export default preview;
