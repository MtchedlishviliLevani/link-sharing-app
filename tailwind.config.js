/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["InstrumentSans", "sans-serif"],
      },
      colors: {
        // Primary Colors
        primary: "#007BFF", // Bright Blue
        darkBlue: "#003366", // Dark Blue

        // Secondary Colors
        lightGray: "#F5F5F5", // Light Gray Background
        white: "#FFFFFF", // White for Cards/Containers

        // Accent Colors
        success: "#28A745", // Green for success
        error: "#DC3545", // Red for error

        // Text Colors
        darkText: "#212529", // Dark Gray for primary text
        lightText: "#6C757D", // Light Gray for secondary text

        // Additional Colors
        lightBlue: "#B8DAFF", // Light Blue for hover effects
        softYellow: "#FFC107", // Soft Yellow for highlights/notifications
      },
    },
  },
  plugins: [],
};
