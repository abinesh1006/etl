/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		 // Custom scrollbar utilities
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

