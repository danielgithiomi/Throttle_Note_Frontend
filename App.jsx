import Constants from "expo-constants";
import { LogBox, StyleSheet, Text, View } from "react-native";

LogBox.ignoreAllLogs();

const storybookEnabled =
  Constants?.expoConfig?.extra?.storybookEnabled ?? false;

if (!storybookEnabled) {
  require("./global.css");
}

function App() {
  return (
    <View style={styles.container} className="bg-blue-500">
      <Text>This is your app running!</Text>
    </View>
  );
}

let AppEntryPoint = App;

if (storybookEnabled) {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
