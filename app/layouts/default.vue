<script setup lang="ts">
useHead({
	titleTemplate: '%s — Andrengineer',
	htmlAttrs: { class: 'scroll-smooth' }
});
</script>

<template>
	<UApp>
		<AppHeader />
		<main class="min-h-[80dvh]">
			<slot />
		</main>
		<USeparator />
		<AppFooter />
	</UApp>
</template>