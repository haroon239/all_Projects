/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      borderWidth: {
        '5': '5px',
        '20':'20px'
      },
      screens: {
        'mobile': {'min': '420px', 'max': '640px'},
        'xmobile':{'max':'420px'},
        'hidden':{'min':'421px','max':'767px'}
        // => @media (min-width: 992px) { ... }
      },
      colors:{
        
      }
    },
  },
  plugins: [],
}