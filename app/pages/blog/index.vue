<script setup lang="ts">
const { data: posts } = await useAsyncData(
	'posts', () => queryCollection('blog').order('date', 'DESC').all()
);

useSeoMeta({
	title: 'Blog'
})
</script>

<template>
	<UContainer>
		<UBlogPosts orientation="horizontal" class="py-8">
			<UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post" :to="post.path" />
		</UBlogPosts>
	</UContainer>
</template>