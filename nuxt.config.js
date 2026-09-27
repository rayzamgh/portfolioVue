
/* nuxt.config.js */
// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolioVue/'
  }
} : {
  router: {
    base: ''
  }
}

export default {
  mode: 'spa',
  head: {
    title: 'Rayza Mahendra | AI, Data & Engineering',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Rayza Mahendra is an AI and data governance practitioner and machine learning engineer based in Jakarta, Indonesia.'
      },
      { name: 'theme-color', content: '#e2dedb' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolioVue/' : '/'}favicon.ico` }
    ]
  },
  loading: { color: '#c03f13' },
  css: [
    '@fontsource/source-serif-4/300.css',
    '@fontsource/source-serif-4/400.css',
    '@fontsource/bodoni-moda/700.css',
    '~/assets/site.css'
  ],
  ...routerBase
}
