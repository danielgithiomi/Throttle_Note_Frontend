/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Entry.jsx",
        "./App.jsx",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
};
