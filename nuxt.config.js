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
  /*
  ** Error 404 https://liginc.co.jp/449575
  */
  generate: {
    async routes() {
      return Promise.all([
        cdaClient.getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt',
        }),
      ]).then(([ posts ]) => {
        return [
          ...posts.items.map(post => {
            return {
							route: "work/" + post.fields.slug,
							payload: post
						}
          }),
        ]
      })
    },
    fallback: true
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  mode: 'universal', // spaにすると本番でリダイレクトループがindex以外で始まった。
  // mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: '%s - きゃりかつルーム',
    htmlAttrs: {
      lang: 'ja'
    },
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
  /* loading: { 
    color: 'blue',
    height: '5px'
  }, */
  loading: '~/components/loading.vue',
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
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa', // pwa https://qiita.com/b1san/items/e9b8d9622f5e81939fb5
    // site map
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-132766980-1'
    }],
  ],

  markdownit: {
    injected: true
  },
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
      if(!ctx.isDev) {
        config.output.publicPath = '_nuxt/'
      }
      ctx.loaders.imgUrl.limit = 100000
    }
  },
  manifest: {
    name: 'きゃりかつルーム',
    short_name: 'かつ部屋',
    title: 'きゃりかつルーム',
    'og:title': 'きゃりかつルーム',
    lang: 'ja',
    background_color: '#fff',
    theme_color: '#000',
    description: "きゃりかつルーム（塙克樹の部屋）",
    display: 'standalone',
    start_url: '/'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://hanakatsuruby.me',
    // generate: true, // WARN  [sitemap-module] The generate option isn't needed anymore in your config. Please remove it!
    async routes() {
      return Promise.all([
        cdaClient.getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt',
        }),
      ]).then(([ posts ]) => {
        return [
          ...posts.items.map(post => {
            return {
							route: "work/" + post.fields.slug,
							payload: post
						}
          }),
        ]
      })
    }
  }
}
