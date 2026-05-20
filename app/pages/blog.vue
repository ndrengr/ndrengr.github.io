<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: 'Blog'
})
</script>

<template>
	<UContainer>
		Blog
	</UContainer>
</template>