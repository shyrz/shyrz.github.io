import './styles/aeon.scss'
import 'saber-highlight-css/default.css'

export default ({ router, Vue, setHead }) => {
  // Progress bar is not needed on server-side
  if (process.browser) {
    // These dependencies are only bundled in client build
    const nprogress = require('nprogress')
    require('nprogress/nprogress.css')

    const loaded = Object.create(null)

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        // Start progress bar before entering page
        nprogress.start()
      }
      next()
    })

    router.afterEach(to => {
      loaded[to.path] = true
      // Stop progress bar after entering page
      nprogress.done()
    })
  }




  setHead({
    // htmlAttrs: {
    //   lang: 'zh-Hans',
    //   class: 'serif'
    // },
    meta: [
      // favicons
      {
        name: 'msapplication-TileColor',
        content: '#7A7A7A'
      },
      {
        name: 'theme-color',
        content: '#FFFFFF'
      }
    ],
    link: [
      // favicons
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#7a7a7a'
      },
      // CDN preconnect
      {
        href: 'https://fonts.googleapis.com/',
        rel: 'preconnect',
        crossorigin: true
      },
      {
        href: 'https://unpkg.com/',
        rel: 'preconnect',
        crossorigin: true
      },
      {
        href: 'https://cdnjs.cloudflare.com/',
        rel: 'preconnect',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        media: 'all',
        href: '//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css'
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
      // }
    ],
    script: [
      // FontAwesome
      {
        src: 'https://kit.fontawesome.com/ed63d7c78e.js',
        crossorigin: 'anonymous'
      },
      
    ]
  })
}
