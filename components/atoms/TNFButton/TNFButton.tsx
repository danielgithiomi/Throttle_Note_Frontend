import {FC} from "react";
import {TNFButtonProps} from "./TNFButton.types";
import {Text, TouchableOpacity} from "react-native";

export const TNFButton: FC<TNFButtonProps> = ({
                                                  id,
                                                  disabled,
                                                  className,
                                                  buttonLabel,
                                                  onPress,
                                                  ...props
                                              }) => {
    return (
        <TouchableOpacity
            id={id}
            className={className}
            disabled={disabled}
            onPress={onPress}
            {...props}
        >
            <Text>{buttonLabel}</Text>
        </TouchableOpacity>
    );
};
