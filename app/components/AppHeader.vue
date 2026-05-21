<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Sobre Mí', to: '/#about', active: route.fullPath.startsWith('/#about'), class: 'text-md'
  }, {
    label: 'Habilidades', to: '/#skills', active: route.fullPath.startsWith('/#skills'), class: 'text-md'
  }, {
    label: 'Proyectos', to: '/#projects', active: route.fullPath.startsWith('/#projects'), class: 'text-md'
  }, {
    label: 'Blog', to: '/blog', active: route.path.startsWith('/blog'), class: 'text-md'
  }, {
    label: 'Contacto', to: '/contacto', active: route.path.startsWith('/contacto'), class: 'text-md'
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