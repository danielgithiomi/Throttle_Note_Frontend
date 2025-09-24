import {TouchableOpacityProps} from "react-native";

export interface TNFButtonProps extends TouchableOpacityProps {
    id: string;
    className?: string;
    buttonLabel: string;
}