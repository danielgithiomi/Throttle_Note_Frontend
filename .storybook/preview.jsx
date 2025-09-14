import {useColorScheme, View} from "react-native";

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story, {parameters}) => {

            const theme = useColorScheme() ?? 'light';

            return (
                <View
                    style={{
                        flex: 1,
                        backgroundColor:
                            parameters.noBackground === true
                                ? theme === "light" ? "#0a7ea4" : "#004560"
                                : "#fff",
                        padding: 8,
                    }}
                >
                    <Story/>
                </View>
            )
        },
    ],
};

export default preview;
