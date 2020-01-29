<template>
	<Base :page="page">
		<div class="home">
			<slot name="default"></slot>

			<ul class="post-list" v-if="page.posts && page.posts.length > 0">
				<li class="post" v-for="post in page.posts" :key="post.attributes.permalink">
					<span class="post-meta">
						<span class="date">{{ formatDate(post.attributes.createdAt) }}</span>
						<span
							class="categories"
							v-for="category in post.attributes.categories"
							:key="category.toString()"
						>{{ category }}</span>
					</span>
					<h3>
						<saber-link class="post-link" :to="post.attributes.permalink">{{ post.attributes.title }}</saber-link>
					</h3>
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
@import '../styles/aeon.scss';

.home {
	padding: 0 21px;
	.post-list {
		list-style: none;
		li.post {
			
			
			.post-meta {
				font-family: $aeon-font-sans, $aeon-font-latin-sans, sans-serif;
				font-size: 0.85em;
				font-weight: 300;
				font-style: italic;
				color: $gray;

				.date {
					margin-right: 5px;
				}
				.categories {

				}
			}
			h3 a.post-link {
				position: relative;
				font-weight: 600;
				text-shadow: 0 1px 1px rgba(0, 0, 0, .05);
				&:before {
					content: "»";
					position: absolute;
					left: -1em;
					// top: 50%;
					// margin-top: -8px;
					// width: 6px;
					// height: 6px;
					line-height: 1em;
					color: $gray;
					// background: $black;
				}

				&:hover {

				}

				&:hover:before {
					color: $highlight;
				}
			}
		}
	}
}
</style>
