/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.html",
        "./src/*.{html,js,jsx}",
        "./src/pages/**/*.jsx",
        "./src/modules/**/*.jsx",
        "./src/components/**/*.jsx",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
