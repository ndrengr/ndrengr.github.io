<script setup lang="ts">
useHead({
	titleTemplate: '%s | Andrengineer'
});
</script>

<template>
	<UApp>
		<UContainer>
			<slot />
		</UContainer>
	</UApp>
</template>