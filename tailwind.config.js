import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                heading: ["Forum", "serif"],
            },
            colors: {
                fontLight: "#efe7d2",
                fontLigtSecondary:"a8a6a1",
                fontDark: "#161f28",
                bgDark: "#161f28",
                primaryColor: "#efe7d2",
                secondaryColor: "#dabb67",
            },
            screens: {
                xs: "350px",
            },
            fontSize:{
                'own':"5rem"
            }
        },
    },

    plugins: [forms],
};
