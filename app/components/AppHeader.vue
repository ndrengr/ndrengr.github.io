<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Sobre Mí', to: '/#about', active: false
  }, {
    label: 'Habilidades', to: '/#skills', active: false
  }, {
    label: 'Proyectos', to: '/#projects', active: false
  }, {
    label: 'Blog', to: '/blog', active: route.path.startsWith('/blog')
  }, {
    label: 'Contacto', to: '/contacto', active: route.path.startsWith('/contacto') 
  }
]);
</script>

<template>
  <UHeader class="sticky">
    <template #title>
      &lt;Andrengineer /&gt;
    </template>
    <UNavigationMenu :items="items" />
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>