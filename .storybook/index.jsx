import {getStorybookUI} from "@storybook/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorybookUIRoot = getStorybookUI({
    asyncStorage: AsyncStorage,
});

export default StorybookUIRoot;
