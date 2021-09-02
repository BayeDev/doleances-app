module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#22D3EE',
      'secondary': '#164E63',
      'danger': '#e3342f',
     }),
     textColor: theme => ({
      ...theme('colors'),
      'primary': '#22D3EE',
      'secondary': '#164E63',
      'danger': '#e3342f',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
