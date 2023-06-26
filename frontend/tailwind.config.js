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
        light : '#181717',
        lighter : '#1f1d1d'
      },
      cgreen : {
        light : '#5cdb95',
        lighter : ' #8ee4af',
        dark : '#379683'
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
    }
    // keyframes : {
    //   bgGradient : {
    //     '0%' : {
    //       'background-position': '00% 200%'
    //     },
      
    //       '25%' : {
    //       'background-position': '250% 375%'
    //     },
      
    //     '50%' : {
    //       'background-position': '200% 250%'
    //     },
      
    //       '75%' : {
    //       'background-position': '300% 250%'
    //     },
      
    //     '100%' : {
    //       'background-position': '300% 100%'
    //     }
    //   }
    // },
    // animation : {
    //   bgGradient : 'ease-in-out 3s alternate-infinite'
    // }

    
  }
  },
  plugins: [],
}

