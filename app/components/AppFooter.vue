<script setup lang="ts">
const year: number = new Date().getFullYear();
</script>

<template>
	<UFooter>
		<p class="p-8 text-sm">
			&copy; {{ year }} Andrengineer. Desarrollado bajo estándares modernos de Ingeniería de Software.
		</p>
	</UFooter>
</template>