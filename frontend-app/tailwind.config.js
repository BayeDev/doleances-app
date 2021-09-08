module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    //extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
     // 'primary': '#22D3EE',
     'primary': 'rgb(46, 68, 105)',
      'secondary': '#164E63',
      'tertiary': '#06B6D4',
      'quartery': "#ECFEFF"
     }),
     textColor: theme => ({
      ...theme('colors'),
     // 'primary': '#22D3EE',
     'primary': 'rgb(46, 68, 105)',
      'secondary': '#164E63',
      'danger': '#e3342f',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

//Nice colors:
//#006fcf
//#4D6D9