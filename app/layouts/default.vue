<script setup lang="ts">
import { es } from '@nuxt/ui/locale';

useHead({
	titleTemplate: '%s — Andrengineer',
	htmlAttrs: { class: 'scroll-smooth' }
});
</script>

<template>
	<UApp :locale="es">
		<AppHeader />
		<main class="min-h-[80dvh]">
			<slot />
		</main>
		<USeparator />
		<AppFooter />
	</UApp>
</template>