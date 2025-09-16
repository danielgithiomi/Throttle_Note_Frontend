import {TNFButton} from "./TNFButton";

const meta = {
    title: "Components/TNFButton",
    component: TNFButton,
    parameters: {
        notes: "A customizable button component with support for custom styling and labels.",
        itemsCenter: true,
        justifyCenter: true,
    },
    argTypes: {
        buttonLabel: {
            control: "text",
            description: "The text displayed inside the button",
        },
        className: {
            control: "text",
            description: "Custom CSS classes for styling (using NativeWind)",
        },
        id: {
            control: "text",
            description: "Unique identifier for the button",
        },
        onPress: {
            action: "pressed",
            description: "Function called when button is pressed",
        },
    },
    args: {
        id: "storybook-button",
        buttonLabel: "Click me",
    }
};

export default meta;

export const Default = {
    args: {
        buttonLabel: "Default Button",
    },
};

export const Primary = {
    args: {
        buttonLabel: "Primary Button",
        className: "bg-blue-500 px-4 py-2 rounded-lg",
    },
};

export const Secondary = {
    args: {
        buttonLabel: "Secondary Button",
        className: "bg-gray-500 px-4 py-2 rounded-lg",
    },
};

export const Large = {
    args: {
        buttonLabel: "Large Button",
        className: "bg-green-500 px-6 py-4 rounded-lg",
    },
};

export const Small = {
    args: {
        buttonLabel: "Small",
        className: "bg-red-500 px-2 py-1 rounded text-sm",
    },
};

export const Disabled = {
    args: {
        buttonLabel: "Disabled Button",
        className: "bg-gray-300 px-4 py-2 rounded-lg opacity-50",
        disabled: true,
    },
};

export const CustomStyle = {
    args: {
        buttonLabel: "Custom Style",
        className:
            "bg-purple-500 px-8 py-3 rounded-full border-2 border-yellow-400",
    },
};
