module.exports = {
  content: [
      './src/index.html',
      './src/typography.html'
  ],
  theme: {
    colors: {
      'color01' : '#6666FF',
      'color02' : '#FF3399',
      'color03' : '#343434',
      'color04' : '#F4F4F4',
      'color05' : '#F3F3F3',
      'color06' : '#FFFFFF',
    },

    fontFamily : {
      'lato' : 'lato'
    },

    container : {
      center : true,
    },



    extend: {
      screens : {
        'xl' : '1140px'
      },
    },
  },
  plugins: [],
}
