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
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway'
      },
      { rel: 'stylesheet', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://cdn.css-tricks.com/favicon.ico'
      }
    ] 
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) =>
      {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    // SCSS file in the project
    '@/assets/main.scss',
    'normalize.css', '@/assets/base.css'
  ],
  modules: [
  // provide path to the file with resources
  ['nuxt-sass-resources-loader', '@/assets/main.scss']
  ],
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
