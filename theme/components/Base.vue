<template>
  <div id="app" v-on:mousemove="handleMouseMove">
    <div id="top">
      <div id="topbar"></div>
    </div>
    <div id="wrapper">
      <Header
        :siteTitle="siteTitle"
        :description="description"
        :style="{ transform: 'translateX(' + x*0.005 + 'px) translateY(' + y*0.005 + 'px)' }"
      />
      <main id="container">
        <div id="content">
          <slot name="default" />
        </div>
      </main>
      <Footer
        :siteTitle="siteTitle" />
      <!-- <script src="//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.js"></script> -->
      <!-- <script type="text/javascript">Han( document.getElementById('content')).render()</script> -->
    </div>
  </div>
</template>

<script>
import variables from 'saber/variables'
import Header    from '../components/Header'
import Footer    from '../components/Footer'

import defaults from '../constants/defaults.yml'

import formatDate from '../scripts/formatDate'

export default {
  props: ['page'],
  components: { Header, Footer },
  head() {
    const { title, layout, excerpt } = this.page.attributes

    let { description } = this.$siteConfig
    if (layout === 'page' || layout === 'post') {
      if (excerpt) {
        description = excerpt.replace(/<(?:.|\n)*?>/gm, '')
      }
    }

    return {
      title: title ? `${title} » ${this.siteTitle}` : this.siteTitle,
      meta: [
          description && {
          name: 'description',
          content: description
        },
        {
          name: 'apple-mobile-web-app-title',
          content: '#1c1c1c'
        },
        {
          name: 'application-name',
          content: 'Shyrz'
        },
        {
          name: 'msapplication-TileColor',
          content: '#1c1c1c'
        },
        {
          name: 'msapplication-TileImage',
          content: '/mstile-144x144.pn'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ].filter(Boolean),
      link: this.$feed ? [
        {
          rel: 'alternate',
          title: `${this.siteTitle} - Feed`,
          type: `application/${
            this.$feed.type === 'atom'
              ? 'atom+xml'
              : this.$feed.type === 'rss'
              ? 'rss+xml'
              : 'json'
          }`,
          href: this.$feed.permalink
        },
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
          color: '#8e8e93'
        },
        {
          rel: 'stylesheet',
          media: 'all',
          href: '//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.css',
        }
      ].filter(Boolean) : [],
      script: [
        // FontAwesome
        {
          src: 'https://kit.fontawesome.com/9e8cab954f.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  data() {
    return {
      x: 0,
      y: 0,
      
    };
  },
  computed: {
    siteTitle() {
      return this.$siteConfig.title;
    },
    description() {
      return this.$siteConfig.description;
    }
  },
  methods: {
    formatDate,
    handleMouseMove: function(e) {
      // console.log(e.clientX, e.clientY);
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }
}
</script>
