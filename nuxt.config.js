
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
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: `${process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolioVue/' : '/'}favicon.svg` }
    ]
  },
  loading: { color: '#08304c' },
  css: [
    '@fontsource-variable/manrope',
    '@fontsource-variable/plus-jakarta-sans',
    '@fontsource-variable/plus-jakarta-sans/wght-italic.css',
    '~/assets/site.css'
  ],
  ...routerBase
}
