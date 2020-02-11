<template>
	<div :class="{ 'toc': true, 'toc-inline': mode === 'inline', 'toc-aside': mode === 'aside' }">
		<div class="toc-wrapper">
      <div class="toc-title">
        大纲
        <div
          class="toc-trigger"
          v-if="useTrigger"
          @click.stop.passive="trigger(mode)">
          <slot name="trigger"></slot>
        </div>
      </div>
      <div :class="{ 'toc-headings': true }">
        <ul :class="{ 'toc-heading-list': true, 'is-show': this.show }">
          <li
            v-for="heading in filteredHeadings">
            <a
              :class="{
                'toc-heading': true,
                'active-hash': `#${heading.slug}` === currentHash
              }"
              :data-level="heading.level"
              :key="heading.slug"
              :href="{ hash: heading.slug }"
            >
              {{ heading.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
export default {
	props: {
    mode: {
      type: String,
      default: 'inline'
    },
    level: {
			type: Number,
			default: 4
		},
		useTrigger: {
			type: Boolean,
			default: false
		},
		headings: {
			type: Array,
			required: true
		}
	},
	computed: {
		filteredHeadings() {
			return this.headings.filter(heading => heading.level <= this.level);
		}
	},
	watch: {
		$route() {
			this.isRoute = true;
			this.currentHash = this.$route.hash;
		}
	},
	data() {
		return {
			show: false,
			isRoute: false,
			currentHash: null,
			observer: null,
			justMounted: true
		};
	},
	mounted() {
		this.observer = new IntersectionObserver(([firstEntry]) => {
			if (this.isRoute || this.justMounted) {
				this.isRoute = false;
				this.justMounted = false;
			} else if (
				firstEntry.boundingClientRect.bottom <=
				firstEntry.intersectionRect.bottom
			) {
				const hash = `#${firstEntry.target.id}`;
				history.replaceState(null, null, hash);
				this.currentHash = hash;
			}
		});
		this.filteredHeadings.forEach(heading =>
			this.observer.observe(document.querySelector(`#${heading.slug}`))
		);
  },
  methods: {
    trigger: function(mode) {
      if (mode === 'inline') {
        this.show = !this.show;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

.toc {
  box-sizing: border-box;
  position: sticky;
  top: 0;
  // right: 0;
  // top: 175px;
  // right: calc((100vw - 960px) / 2 + 192px);
  width: 228px;
}

.toc-wrapper {
  // padding: 10px;
  
}

// .toc-aside {
// 	position: fixed;
// 	transform: translateX(-228px);
//   transition: transform 200ms cubic-bezier(0.2, 1, 0.2, 1);
//   z-index: 99;
//   &:hover {
//     transform: translateX(0);
//   }
// }

.toc-title {
  display: flex;
  justify-content: space-between;
	align-items: baseline;
	position: relative;
	height: 36px;
	padding-left: 21px;
	text-transform: uppercase;
	line-height: 36px;
}

.toc-trigger {
  // position: absolute;
  display: inline-block;
	// padding: 10px;
	border-radius: 0 4px 4px 0;
	background: inherit;
	cursor: pointer;

	svg {
		width: 16px;
		height: 16px;
	}
}

.toc-headings {
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding-left: 21px;
	font-size: 14px;
	
	a.toc-heading {
		width: 100%;
		text-decoration: none;
		// color: $light-3;
		&:hover,
		&:active {
			color: $highlight;
		}
	}
	.active-hash {
		color: $highlight;
	}
	a[data-level='1'] {
		font-weight: 700;
	}
	a[data-level='3'] {
		padding-left: 1em;
	}
	a[data-level='4'] {
		padding-left: 2em;
	}
	a[data-level='5'] {
		padding-left: 3em;
	}
	a[data-level='6'] {
		padding-left: 4em;
	}
}

.toc-heading-list {
  height: 0;
  transition: all 200ms cubic-bezier(0.2, 1, 0.2, 1);
}
.is-show {
  height: auto;
  margin-top: 12px;
}

ul, ol {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0px;
  list-style: none;
  line-height: 1.5;
  overflow: hidden;
  transition: all 200ms cubic-bezier(0.2, 1, 0.2, 1);
}

.is-show ul,
.is-show ol {
  height: auto;
}




@media (prefers-color-scheme: dark) {
	.toc {
		// background: $black;
	}
	// .toc-title {
	// 	border-left-color: $dark-0;
	// }
}
</style>
