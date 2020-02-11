<template>
	<Base :page="page">
		<div id="home">
			<slot name="default"></slot>

			<!-- 文章列表 -->
			<ul v-if="page.posts && page.posts.length > 0">
				<li
					v-for="post in page.posts"
					:key="post.attributes.permalink"
					class="post-item">
					
					<div class="post-item-wrapper">
						
						<div class="post-meta">
							<span class="date">{{ formatDate(post.attributes.createdAt) }}</span>
							・
							<span
								class="categories"
								v-for="category in post.attributes.categories"
								:key="category.toString()">
							{{ category }}
							</span>

						</div>
						
						<saber-link 
							:to="post.attributes.permalink"
							class="post-link"><h2>{{ post.title }}</h2></saber-link>
						<div 
							v-if="post.summary"
							class="post-summary">{{ post.summary }}</div>
						<!-- <div
							v-if="post.excerpt"
							v-html="post.excerpt"
							class="post-excerpt"></div> -->
					</div>
					
					<!-- <img
						v-if="post.assets.cover"
						:src="post.assets.cover.src"
						:srcset="post.assets.cover.srcSet"
						:data-srcset="post.assets.cover.srcSet"
						:width="post.assets.cover.width"
						class="post-cover" /> -->
					
				</li>
			</ul>

      <div class="pagination">
        <router-link class="prev" v-if="page.prevPost" :to="page.prevPost.permalink">
          <strong>{{ $siteConfig.pagination && $siteConfig.pagination.prevPost || '上一篇' }}</strong>
          <p>{{ page.prevPost.title }}</p>
        </router-link>
        <router-link class="next" v-if="page.nextPost" :to="page.nextPost.permalink">
          <strong>{{ $siteConfig.pagination && $siteConfig.pagination.nextPost || '下一篇' }}</strong>
          <p>{{ page.nextPost.title }}</p>
        </router-link>
      </div>
		</div>
	</Base>
</template>

<script>
import variables from "saber/variables";
import Base from "../components/Base.vue";

import formatDate from "../scripts/formatDate.js";

export default {
	props: ["page"],
	components: { Base },
	methods: {
		formatDate
	}
};
</script>

<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

#home {
	width: 732px;
	margin: 0 auto;
	padding: 9px 21px;
	border-radius: 7px;
	// background: #FFF;
}

@media screen and (max-width: 732px) {
	#home {
		width: 100%;
	}
}

#home ul {
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.post-item {
	position: relative;
	// display: flex;
	// flex-direction: column;
	// justify-content: space-between;
	margin: 0 0 12px;
	// padding: 21px;
	border-radius: 7px;
	background: #FFF;
}

.post-cover {
	width: 192px;
	border-radius: 4px;
}

.post-item-wrapper {
	padding: 21px;
}

.post-link {
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		// color: $highlight;
	}
	h2 {
		margin: 12px 0 0;
	}
}

.post-meta {
	font-weight: 300;
	color: $gray;
}

.post-summary {
	
	margin-top: 12px;
	line-height: 1.5;
	color: $dark-3;
}

.post-excerpt {
	line-height: 1.5;
	color: $gray;
}

// .post-link {
// 	position: relative;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	// padding-left: 1em;
	
// 	text-decoration: none;

// 	&:hover h2 {
// 		text-decoration: underline;
// 	}

// 	// &:hover h2:before {
// 	// 	color: $highlight;
// 	// }

// 	img {
// 		float: right;
// 		height: 96px;
// 		border-radius: 4px;
// 	}
// }

// .post-info {
// 	h2 {
// 		margin: 0 0 21px;
// 		font-weight: 700;
// 		// &:before {
// 		// 	content: "";
// 		// 	position: absolute;
// 		// 	left: -1em;
// 		// 	height: 1.5em;
// 		// 	line-height: 1.5em;
// 		// 	font-size: 0.7em;
// 		// 	color: $black;
// 		// }
// 	}
// 	p {
// 		font-weight: 300;
// 		// color: $dark-4;
// 	}
// }

// .post-meta {
// 	margin-bottom: 12px;
// 	font-size: 14px;
// 	font-weight: 300;
// 	// font-style: italic;
// 	color: $gray;
// 	.date, .category {

// 	}
// }

// .post-excerpt {
// 	margin-top: 1em;
// 	color: $dark-4;
// }

@media (prefers-color-scheme: dark) {
	#home {
		// background: black;
	}

	.post-item {
		background: #0D0D0F;
	}
}

</style>
