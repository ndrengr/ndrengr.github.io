<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: 'Inicio'
})
</script>

<template>
  <section class="min-h-[85vh] flex flex-col justify-center items-start" id="about">
    <h2 class="text-purple-500 dark:text-purple-300 text-3xl block mb-6">Hola, mi nombre es</h2>
    <h1 class="text-5xl">Andrés Olaya</h1>
    <h2 class="text-purple-500 dark:text-purple-300 text-3xl block my-6">Ingeniero de Sistemas. Desarrollador de Software</h2>
    <p class="mt-4 max-w-2xl">Me especializo en diseñar, construir y desplegar aplicaciones e infraestructura escalable. Apasionado por la arquitectura limpia, la optimización de algoritmos y la automatización de procesos.</p>
    <UButton to="#projects" class="mt-4 text-2xl px-6 py-2.5" color="info">
      Ver Proyectos
    </UButton>
  </section>

  <section class="min-h-[85vh] flex flex-col justify-center items-start" id="skills">
    <h3 class="text-4xl">Habilidades Técnicas</h3>
    <UCard title="Lenguajes" description="TypeScript | Python | Java | C# | SQL" class="w-full mt-4" />
    <UCard title="Frameworks y Entornos" description="Nuxt | Laravel | .Net Core" class="w-full my-4" />
    <UCard title="Herramientas y DevOps" description="Git | Docker | WSL" class="w-full" />
  </section>

  <section class="min-h-[85vh] flex flex-col justify-center items-start" id="projects">
    <span class="text-purple-500">Proyectos</span>
  </section>
</template>
