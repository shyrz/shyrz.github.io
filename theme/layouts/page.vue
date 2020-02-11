<template>
  <Base :page="page">
    <div id="page">
      <!-- 头部信息 -->
      <header class="page-header">
        <h1 class="page-title" itemprop="name headline">
          {{ page.attributes.title }}
        </h1>
        <h2
          v-if="page.attributes.subtitle" class="page-subtitle">
          {{ page.attributes.subtitle }}
        </h2>
      </header>

      <article class="han-init-context">
        <slot name="default"></slot>
      </article>

      <!-- 第三方评论系统 -->
      <!-- Disqus -->
      <Disqus
        v-if="page.comments === true && $themeConfig.disqus"
        :url="$siteConfig.url"
        :permalink="page.attributes.permalink"
        :shortname="$themeConfig.disqus"
      />

      
    </div>

    <!-- Table of Contents -->
    <Toc
      v-if="page.toc === true && page.markdownHeadings && page.markdownHeadings.length > 0"
      :headings="page.markdownHeadings"
      useTrigger
      mode="inline"
      v-slot:trigger>
      <i class="fas fa-bars"></i>
    </Toc>
  </Base>
</template>

<script>
import Base from '../components/Base';

import Toc from "../components/Toc";
import Disqus from "../components/_plugins/Disqus";

export default {
  props: ['page'],
  components: { Base, Toc, Disqus },
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

#page {
  position: relative;
  width: 732px;
  padding: 21px 0 12px;
  z-index: 9999;
  // transition: opacity 0.25s;
  // background: #fafafa;
}

.page-header {
  // padding-top: 21px;
}

h1.page-title {
  margin: 0 21px 12px;
  font-family: $aeon-font-latin-serif, $aeon-font-serif, serif, $aeon-font-emoji;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

h2.page-subtitle {
  margin: 0 21px 12px;
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
  text-align: right;
  color: $gray;
  &:before {
    content: "——";
    color: $gray;
  }
}


@media (prefers-color-scheme: dark) {
  #page {
    // background: $dark-0;
  }

  h1.page-title {
    color: $gray;
    text-shadow: none;
  }

  h2.page-subtitle {
    color: $dark-4;
    &:before {
      color: $dark-4;
    }
  }
}


</style>
