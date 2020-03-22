const pkg = require('./package')
const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])

const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

export default {
  /* router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  }, */
  /*
  ** Error 404 https://liginc.co.jp/449575
  */
  generate: {
    routes() {
      return Promise.all([
        cdaClient.getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
        })
      ]).then(([ posts ]) => {
        return [
          ...posts.items.map(post => {
              return { route: post.fields.slug, payload: post }
          })
        ]
      })
    },
    fallback: true
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - きゃりかつルーム',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'reset-css',
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/contentful', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      /* if(!ctx.isDev) {
        config.output.publicPath = '_nuxt/'
      }*/
    }
  }
}
