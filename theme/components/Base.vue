<template>
	<div id="app" @mousemove="handleMouseMove">
		<!-- <div id="top">
			<div id="topbar"></div>
		</div> -->
		
		<EDC />
		<div id="wrapper">
			<Header
				:siteTitle="siteTitle"
				:description="description"
				:animation="'translateX(' + x * 0.005 + 'px) translateY(' + y * 0.005 + 'px)'"
			/>



			<main id="container">
				<div id="content">
					<slot name="default" />
				</div>
			</main>
			<Footer :siteTitle="siteTitle" />
			<!-- <script src="//cdnjs.cloudflare.com/ajax/libs/Han/3.3.0/han.min.js"></script> -->
			<!-- <script type="text/javascript">Han( document.getElementById('content')).render()</script> -->
		</div>

		
		
	</div>
</template>

<script>
import variables from 'saber/variables';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EDC from '../components/EDC';

// import defaults from '../constants/defaults.yml'

import formatDate from '../scripts/formatDate';

export default {
	props: ['page'],
	components: { Header, Footer, EDC },
	head() {
		const { title, layout, excerpt } = this.page.attributes;

		let { description } = this.$siteConfig;
		if (layout === 'page' || layout === 'post') {
			if (excerpt) {
				description = excerpt.replace(/<(?:.|\n)*?>/gm, '');
			}
		}

		return {
			title: title ? `${title} » ${this.siteTitle}` : this.siteTitle,
			link: [
				{
					rel: 'alternate',
					title: `${this.$siteConfig.title} » Feed`,
					href: this.$feed.permalink,
					type: this.$feed.type === 'atom'
						? 'application/atom+xml'
						: this.$feed.type === 'rss2'
							? 'application/rss+xml'
							: 'application/json'
				},
			]
		};
	},
	data() {
		return {
			x: 0,
			y: 0
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
};
</script>

<style lang="scss" scoped>
@import '../styles/components/variable';
@import '../styles/components/font';

#wrapper {
	position: relative;
	width: 100vw;
  max-width: 100vw;
	z-index: 1;
}

main#container {
	position: relative;
	width: 960px;
	margin: 0 auto;
	// overflow: hidden;
	> #content {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		// padding: 21px;
		border-radius: 7px;
		// background: white;
	}
}

@media screen and (max-width: 732px) {
	main#container {
		width: 100vw;
	}
}



@media (prefers-color-scheme: dark) {
	
}
</style>
