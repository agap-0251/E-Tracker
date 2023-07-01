/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    colors : {
      transparent : 'transparent',
      current : 'currentColor',
      cblack : {
        lighter : '#181717',
        light : '#2b2a2a',
      },
      cgreen : {
        light : '#5cdb95',
        lighter : ' #8ee4af',
        dark : '#379683',
        button : 'rgb(55, 151, 55)'
      },
      corange : {
        light : '#e35933'
      },
      cblue : {
        light : '#05386b'
      },
      cwheat : {
        light : '#edf5e1'
      }

    },
    boxShadow: {
      'darkShadow': ' 1px 1px 5px 0.1px rgba(255, 255, 255, 0.3)',
    },
    screens: {
      'xs' : '470px',
      'xxs' : '340px'
    }
    
  }
  },
  plugins: [],
}

