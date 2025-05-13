module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
    "./src/**/*.{js,ts,jsx,tsx}", // Just in case you're inside /src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3552DD",
        secondary: "#5B4EE4",
      },
      fontFamily: {
        electrolize: ["Electrolize", "sans-serif"],
      },
    },
  },
  plugins: [],
}

