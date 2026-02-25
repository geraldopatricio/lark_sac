// Dentro de tailwind.config.cjs
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#06b6d4',
            }
        },
    },
    plugins: [],
}