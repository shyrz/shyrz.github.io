<template>
  <Base :page="page">
    <!-- 文章 -->
    <div id="post">
      <!-- 头部信息 -->
      <header class="post-header">
        <h1 class="post-title" itemprop="name headline">
          {{ page.attributes.title }}
        </h1>
        <h2
          v-if="page.attributes.subtitle" class="post-subtitle">
          {{ page.attributes.subtitle }}
        </h2>
      </header>

      <!-- 文章内容 -->
      <article class="han-init-context">
        <slot name="default"></slot>
      </article>

      <!-- 底部信息 -->
      <footer class="post-footer">
        <div class="post-note">
          <p>
            欢迎在<strong>评论区</strong>留言，同时也欢迎<a href="mailto:i@sh7.me">发电子邮件</a>与我讨论。
          </p>
          <p>
            如果觉得本文还不错，欢迎<saber-link rel="donate" to="/donate">请我喝咖啡</saber-link>。
          </p>
          <p>
            本作品采用<a class="license-link" rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>进行许可。
          </p>
        </div>
        
        <!-- 文章信息 -->
        <div class="post-meta">
          <!-- 发布 -->
          <div class="publish">
            <!-- 作者 -->
            <span class="publish-author">{{ page.author ? page.author : $siteConfig.author }}</span>
            写于
            <!-- 时间 -->
            <time
              class="publish-time"
              :datetime="page.attributes.createdAt"
              itemprop="datePublished">{{ formatDate(page.attributes.createdAt) }}</time>
          </div>
          <!-- 分类 -->
          <div class="category" v-if="page.attributes.categories">
            <span class="label">
              <i class="fas fa-folder"></i>
            </span>
            <span class="categories">
              <a
                v-for="(category, i) in page.attributes.categories"
                :key="category.toString()"
                :href="page.attributes.categoriesInfo[i].permalink"
                >{{ category }}</a
              >
            </span>
          </div>
          <!-- 标签 -->
          <div class="tag" v-if="page.attributes.tags">
            <span class="label">
              <i class="fas fa-tag"></i>
            </span>
            <span class="tags">
              <a
                v-for="(tag, i) in page.attributes.tags"
                :key="tag.toString()"
                :href="page.attributes.tagsInfo[i].permalink"
                >{{ tag }}</a
              >
            </span>
          </div>
        </div>
      </footer>

      <!-- 分页 -->
      <div class="pagination">
        <router-link
          class="prev"
          v-if="page.prevPost"
          :to="page.prevPost.permalink"
        >
          <strong>{{
            ($siteConfig.pagination && $siteConfig.pagination.prevPost) ||
              "上一篇"
          }}</strong>
          <p>{{ page.prevPost.title }}</p>
        </router-link>
        <i class="separator"></i>
        <router-link
          class="next"
          v-if="page.nextPost"
          :to="page.nextPost.permalink"
        >
          <strong>{{
            ($siteConfig.pagination && $siteConfig.pagination.nextPost) ||
              "下一篇"
          }}</strong>
          <p>{{ page.nextPost.title }}</p>
        </router-link>
      </div>

      <!-- 第三方评论系统 -->
      <!-- Disqus -->
      <Disqus
        v-if="page.comments !== false && $themeConfig.disqus"
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
import Base from "../components/Base";

import Toc from "../components/Toc";
import Mermaid from "../components/Mermaid";

import Disqus from "../components/_plugins/Disqus";

import formatDate from "../scripts/formatDate";

export default {
  components: {
    Base,
    Toc,
    Mermaid,
    Disqus
  },
  props: ["page"],

  head() {
    const { title, layout, excerpt } = this.page.attributes;

    return {
      title: title ? `${title} » ${this.siteTitle}` : this.siteTitle
    };
  },
  methods: {
    formatDate
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/variable";
@import "../styles/components/font";

#post {
  position: relative;
  width: 732px;
  padding: 21px 0 12px;
  border-radius: 7px;
  background: #FFF;
  z-index: 9999;
}

.post-header {
  // padding-top: 21px;
}

h1.post-title {
  margin: 0 21px 12px;
  font-family: $aeon-font-latin-serif, $aeon-font-serif, serif, $aeon-font-emoji;
  font-size: 36px;
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

h2.post-subtitle {
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

.post-footer {
  padding: 30px 0;
}

.post-note {
  margin-bottom: 42px;
  padding: 30px 21px 21px;
  text-align: center;
  // background: $light-0;
  p {
    margin: 0 0 21px;
    font-weight: 200;
    strong,
    a {
      font-weight: 500;
    }
  }
}

.post-meta {
  margin: 0 21px;
}

.publish {
  // grid-column-start: 1;
  // grid-column-end: 3;
  color: $gray;
  
}
.publish-author, .publish-time {
  font-family: $aeon-font-latin-serif, $aeon-font-serif, sans-serif;
  font-weight: 600;
  color: $dark-3;
}

.category,
.tag {
  margin-top: 12px;
  color: $gray;
  a {
    margin-right: 12px;
    font-weight: 300;
    color: $gray;
    &:hover,
    &:active {
      color: $highlight;
      background: transparent;
    }
  }
}



.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 21px;
  padding: 21px 0;
  border-top: 1px solid $light-1;
  a {
    padding: 21px 0;
    // font-family: $aeon-font-latin-sans, $aeon-font-sans, sans-serif, $aeon-font-emoji;
    // font-weight: 00;
    text-decoration: none;
    &:hover,
    &:active {
      // background: $dark-0;
      strong {
        color: $black;
      }
      p {
        color: $highlight;
      }
    }

    p {
      font-weight: 200;
      margin: 10px 0 0;
    }
  }
  a.prev {
    text-align: left;
  }
  a.next {
    text-align: right;
  }
}

@media (prefers-color-scheme: dark) {
  #post {
    background: #0D0D0F;
  }

  h1.post-title {
    color: $gray;
    text-shadow: none;
  }

  h2.post-subtitle {
    color: $dark-4;
    &:before {
      color: $dark-4;
    }
  }

  .post-note {
    // background: $dark-0;
    border-left: 1px solid $dark-0;
    border-right: 1px solid $dark-0;
    a {
      color: $gray;
      &:hover,
      &:active {
        color: $light-3;
      }
    }
  }


  .publish-author, .publish-time {
    color: $light-3;
  }

  .pagination {
    border-top: 1px solid $dark-2;
    a:hover,
    a:active {
      strong {
        color: $light-3;
      }
    }
  }
}
</style>
