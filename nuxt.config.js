module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'trulvl-capstone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ] 
  },
  css: [
    // 'bulma/css/bulma.css',
    '~/css/main.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) =>
      {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f24153' }, // can set loading bar to 'none'
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
