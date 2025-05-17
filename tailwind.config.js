 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,jsx}"],
   theme: {
     extend: {
      colors: {
        blue: {
          500: '#3b82f6',
          600: '#2563eb'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          400: '#9ca3af',
          600: '#4b5563',
          800: '#1f2937'
        }
      }
     },
   },
   plugins: [],
 }

