/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
              queued: "#FBBF24", // Yellow
              inProgress: "#3B82F6", // Blue
              validation: "#10B981", // Green
              success: "#16A34A", // Dark Green
              failure: "#EF4444", // Red
          },
      scrollbar: {
        'hidden': 'hidden'
      }
	},
  },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
        // Other plugins...
    ],
}

