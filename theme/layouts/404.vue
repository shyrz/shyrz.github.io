<template>
  <div id="_404">
    <div class="_404-info">
      <h1>404</h1>
      <p>我们生活在一个名为无知的平静小岛上，被无穷无尽的黑色海洋包围，而我们本就不该扬帆远航。</p>
    </div>
    <span v-if="isDemo">maybe it's moved to <a :href="demoURL" target="_blank">{{ demoURL }}</a></span>
    <div class="_404-back">
      <saber-link to="/">« 回到首页</saber-link>
    </div>
  </div>
</template>

<script>
const DEMO_RE = /^\/([\w\-]+)$/
export default {
  data() {
    return {
      isDemo: false
    }
  },
  mounted() {
    // We set `isDemo` at runtime since `path` is always `404.html` during SSR
    this.isDemo = DEMO_RE.test(this.$route.path)
  },
  computed: {
    demoURL() {
      return this.isDemo && `https://${DEMO_RE.exec(this.$route.path)[1]}.egoist.rocks`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

#_404 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

._404-info {
  h1 {
    margin: 0 0 48px;
    font-size: 240px;
  }
  p {
    width: 50vw;
    font-size: 36px;
    line-height: 2;
  }
}

._404-back {
  font-size: 24px;
  
  a {
    text-decoration: none;
    &:hover, &:active {
      color: $highlight;
    }
  }
}

</style>
