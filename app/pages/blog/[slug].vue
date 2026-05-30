<script setup>
const route = useRoute()
const { data } = await useAsyncData(`blog-${route.params.slug}`, () => {
  return queryCollection('blog').path(`/blog/${route.params.slug}`).first()
})
if(data.value === null)
  throw createError({
    status: 404,
    message: 'La entrada no se encuentra',
    statusMessage: 'Página no encontrada',
  })

useSeoMeta({
	title: data.value.title,
  description: data.value.description,

})
</script>

<template>
  <UContainer>
    <ContentRenderer :value="data.body" class="mt-8" />
  </UContainer>
</template>