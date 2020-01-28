module.exports = {
  permalinks: {
    post: '/blog/:year/:month/:slug',
    page: '/:slug'
  },
  siteConfig: {
    url: 'https://shyrz.me',
    domain: 'shyrz.me',
    lang: 'zh-Hans',
    title: 'Shyrz',
    description: 'Life, the Universe and Everything.',
    keywords: 'shyrz, saber, saber-theme-aeon, blog, 博客',
    author: 'Shyrz <i@sh7.me>',
    pagination: {
      prevPage: '返回',
      nextPage: '更多文章',
      prevPost: '前一篇',
      nextPage: '后一篇'
    }
  },
  theme: './theme',
  themeConfig: {
    since: 2015,
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: '推介',
      link: '/recommend'
    }, {
      text: '关于',
      link: '/about'
    }, {
      text: '友人',
      link: '/friends'
    }],
    contact: {
      github: 'shyrz', // username
      medium: 'shyrz', // username
      neteasemusic: '17761516', // uid
      steam: 'phantr4x', // username
      twitter: 'shyrz__', // username
      weibo: '3703581552', // shortname or uid
      douban: 'creatorlanslot', // domain
      zhihu: 'Phantr4x', // username
      telegram: 'shyrzz', // username
      keybase: 'shyrz', // username
    },
    disqus: 'shyrz'
  },
  markdown: {
    options: {
      html: true,
      xhtmlOut: true,
      breaks: true,
      linkify: true,
      typographer: true
    },
    headings: {
      permalink: true
    },
    plugins: [
      {
        resolve: 'markdown-it-implicit-figures',
        options: {
          dataType: true,
          figcaption: true
        }
      },
      { resolve: 'markdown-it-sub' },
      { resolve: 'markdown-it-sup' },
      { resolve: 'markdown-it-ins' },
      { resolve: 'markdown-it-mark' },
      { resolve: 'markdown-it-abbr' },
      { resolve: 'markdown-it-task-lists' },
      { resolve: 'markdown-it-deflist' },
      { resolve: 'markdown-it-footnote' },
      { resolve: 'markdown-it-kramdown-attrs' },
      { resolve: 'markdown-it-toc' },
      // { resolve: 'markdown-it-container' },
    ]
  },
  plugins: [
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        permalinks: {
          category: '/category/:name',
          tag: '/tag/:name'
        }
      }
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    },
  ]
}
