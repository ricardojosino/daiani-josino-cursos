module.exports = {
  content: [
      './src/como-aliviar-a-colica-do-bebe/index.html',
      './src/como-aliviar-a-colica-do-bebe/typography.html',
      './src/como-aliviar-a-colica-do-bebe/asset/js/script.js',
      './src/como-aliviar-a-colica-do-bebe/compra-realizada/index.html'
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
