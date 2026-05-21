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
// const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
//   return queryCollectionItemSurroundings('blog', route.path, {
//     fields: ['description']
//   })
// });
useSeoMeta({
	title: data.value.title,
  description: data.value.description,

})
</script>

<template>
  <UContainer>
    <ContentRenderer :value="data.body" />
    <!-- <UContentSurround :surround="surround" /> -->
  </UContainer>
</template>