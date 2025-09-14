import Constants from "expo-constants";
import {LogBox, StyleSheet, Text, View} from "react-native";

LogBox.ignoreAllLogs();

const storybookEnabled =
  Constants?.expoConfig?.extra?.storybookEnabled ?? false;

// Only import CSS when not in Storybook mode
if (!storybookEnabled) {
    require("./global.css");
}

function App() {
  return (
    <View style={[styles.container, { backgroundColor: "red" }]}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
