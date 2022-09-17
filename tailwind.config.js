/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1200px'
    },
    extend: {
      colors:{
        Very_Light_Gray:'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        Dark_Blue: 'hsl(233, 26%, 24%)',
        Lime_Green: 'hsl(136, 65%, 51%)',
        Bright_Cyan: 'hsl(192, 70%, 51%)',
        Grayish_Blue:' hsl(233, 8%, 62%)'
      }
    },
  },
  plugins: [],
}
