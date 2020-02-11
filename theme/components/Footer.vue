<template>
	<footer id="footer">
    <!-- 授权许可 -->
		<p class="license">
      本站点所有内容采用
			<a
        class="license-link"
				rel="license"
				href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
			>知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议</a>
      进行许可。
		</p>
    <!-- 版权信息 -->
		<p class="copyright">
			Proudly published by 
			<a class="power" href="https://saber.land">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 402 402"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="200" cy="200" r="200.5" fill="#00838F" stroke="#00838F"></circle> <path fill="#FBB526" d="M152.842359,232.240687 L203.5,228 L213.023656,250 L180.330798,282.43453 L152.842359,321.07787 L156.470397,368 C129.583323,361.434315 111.677654,354.963171 102.753391,348.586566 C93.8291281,342.209961 84.2446643,333.040396 74,321.07787 L122,263.912735 L143,263.912735 L152.842359,232.240687 Z"></path> <rect width="120" height="14" x="143" y="131" fill="#FFF"></rect> <rect width="12" height="83" x="171" y="145" fill="#FFF"></rect> <rect width="12" height="105" x="224" y="145" fill="#FFF"></rect> <rect width="12" height="40" x="196" y="185" fill="#FFF"></rect> <rect width="33" height="40" x="187" y="91" fill="#FFF"></rect> <circle cx="203" cy="78" r="18" stroke="#FFF" stroke-width="14"></circle> <path stroke="#979797"></path> <circle cx="200" cy="200" r="179" stroke="#FFF" stroke-width="14"></circle> <polyline stroke="#FFF" stroke-width="14" points="70 325.805 119.368 260 147.868 260"></polyline> <polyline stroke="#FFF" stroke-width="14" points="122 314.069 144.748 294.338 150.248 236.435 205.248 226 220 250"></polyline> <polyline stroke="#FFF" stroke-width="14" points="177 286.058 196 274.41 205.188 250 250.379 254.615 267.648 277.437"></polyline> <polyline stroke="#FFF" stroke-width="14" points="242.721 274.41 279.618 274.41 330.993 324"></polyline> <polyline stroke="#FFF" stroke-width="14" points="200 331.156 221.037 311 240 320.931 280.63 326.441"></polyline></g></svg>
        <!-- <i class="fas fa-monument"></i> -->
        Saber
      </a> Themed by 
			<a class="theme" href="https://github.com/shyrz/saber-theme-aeon">
        <!-- <i class="fas fa-monument fa-rotate-180"></i> -->
        <!-- <i class="fas fa-star-half-alt"></i> -->
        Aeon
      </a>
		</p>
    <!-- 联系方式 -->
    <p class="social">
      <!-- Social -->
      <span class="social-item" v-for="(item, name, i) in social" v-if="social[name]">
        <a :href="getSocials(name, 'url') + item" :title="social[name]">
          <i v-if="getSocials(name, 'icon')" :class="getSocials(name, 'icon')"></i>
        </a>
      </span>
      <!-- RSS Feed -->
      <span class="social-item" v-if="feed">
        <a :href="feed.permalink" :title="feed.type">
          <i class="fas fa-rss"></i>
        </a>
      </span>
    </p>
	</footer>
</template>

<script>
import d_ from '../constants/defaults.yml';

export default {
  components: { },
  computed: {
    social() {
      return this.$themeConfig.social || {}
    },
    feed() {
      return this.$feed
    },
  },
  methods: {
    getSocials: function(name, key) {
      return d_.social[name] ? d_.social[name][key] : false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

#footer {
  position: relative;
  padding: 50px 0;
  // background: inherit;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: $gray;
  z-index: 9999;
}

.license {
  .license-link {
    font-weight: 500;
    img {
      margin-bottom: -1px;
    }
  }
}

.copyright {
  a.power,
  a.theme {
    margin-right: 2px;
    font-weight: 500;
  }
  a.power {
    // border-color:  #E9B439;
    color: #49828d;
    &:hover,
    &:active {
      // border-bottom-color: #49828D;
      // background: #49828D;
      color: #e9b439;
    }
    svg {
      margin-bottom: -2px;
    }
  }

  a.theme:hover,
  a.theme:active {
    color: $highlight;
  }
}


.social {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: 14px auto;
}

.social-item {
  padding: 0 2px;
  margin: 0 3px;
  a {
    color: $dark-4;
    &:hover {
      color: $black;
    }
  }
}

@media screen and (max-width: 732px) {
  #footer {
    padding: 1em 1em 2em;
  }
}
</style>
