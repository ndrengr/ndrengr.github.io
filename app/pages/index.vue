<script setup lang="ts">
useSeoMeta({
  title: 'Inicio'
})
</script>

<template>
  <section class="min-h-[85vh] flex flex-col justify-center items-start" id="about">
    <UContainer>
      <h2 class="text-purple-500 dark:text-purple-300 text-3xl block mb-6">Hola, mi nombre es</h2>
      <h1 class="text-5xl">Andrés Olaya</h1>
      <h2 class="text-purple-500 dark:text-purple-300 text-3xl block my-6">Ingeniero de Sistemas. Desarrollador de Software</h2>
      <p class="mt-4 max-w-2xl">Me especializo en diseñar, construir y desplegar aplicaciones e infraestructura escalable. Apasionado por la arquitectura limpia, la optimización de algoritmos y la automatización de procesos.</p>
      <UButton to="#projects" class="mt-4 text-2xl px-6 py-2.5" color="info">
        Ver Proyectos
      </UButton>
    </UContainer>
  </section>

  <section class="min-h-[85vh] flex flex-col justify-center items-start" id="skills">
    <UContainer>
      <h3 class="text-4xl">Habilidades Técnicas</h3>
      <UCard title="Lenguajes" class="w-full mt-4">
        <div class="flex gap-2">
          <UBadge color="neutral" variant="soft" label="TypeScript" />
          <UBadge color="neutral" variant="soft" label="Python" />
          <UBadge color="neutral" variant="soft" label="Java" />
          <UBadge color="neutral" variant="soft" label="C#" />
          <UBadge color="neutral" variant="soft" label="SQL" />
        </div>
      </UCard>
      <UCard title="Frameworks y Entornos" class="w-full my-4">
        <div class="flex gap-2">
          <UBadge color="neutral" variant="soft" label="Nuxt" />
          <UBadge color="neutral" variant="soft" label="Laravel" />
          <UBadge color="neutral" variant="soft" label=".Net Core" />
        </div>
      </UCard>
      <UCard title="Herramientas y DevOps" class="w-full">
        <div class="flex gap-2">
          <UBadge color="neutral" variant="soft" label="Git" />
          <UBadge color="neutral" variant="soft" label="Docker" />
          <UBadge color="neutral" variant="soft" label="WSL" />
        </div>
      </UCard>
    </UContainer>
  </section>

  <section class="min-h-[85vh] mb-16 flex flex-col justify-center items-start" id="projects">
    <UContainer>
      <h3 class="text-4xl"><span class="border-b-4">Pro</span>yectos destacados</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-6">
        <UCard variant="subtle" class="w-full">
          <template #header>
            LandingPage Habilidades para la vida
          </template>
          <template #default>
            Maquetación y desarrollo del sitio web <strong>HPV</strong> <em>(Habilidades para la vida)</em> del Ministerio de Prosperidad Social 2022.
          </template>
          <template #footer>
            <UBadge color="neutral" variant="outline">HTML</UBadge>
            <UBadge color="neutral" variant="outline">CSS</UBadge>
            <UBadge color="neutral" variant="outline">JavaScript</UBadge>
          </template>
        </UCard>
        <UCard variant="subtle" class="w-full">
          <template #header>
            Plataforma E-Learning Defensa Civil de Zipaquirá
          </template>
          <template #default>
            Desarrollo de plataforma web de aprendizaje en <strong>PHP</strong> utilizando arquitectura orientada a objetos y patrón de diseño MVC.
          </template>
          <template #footer>
            <UBadge color="neutral" variant="outline">PHP</UBadge>
            <UBadge color="neutral" variant="outline">CSS</UBadge>
            <UBadge color="neutral" variant="outline">JavaScript</UBadge>
          </template>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
