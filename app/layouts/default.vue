<script setup lang="ts">
useHead({
	titleTemplate: '%s — Andrengineer'
});
</script>

<template>
	<UApp>
		<AppHeader />
		<UContainer>
			<slot />
		</UContainer>
	</UApp>
</template>