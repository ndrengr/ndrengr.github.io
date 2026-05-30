<script setup lang="ts">
const year: number = new Date().getFullYear();
</script>

<template>
	<UFooter>
		<p class="p-8 text-sm">
			&copy; {{ year }} Andrengineer.
		</p>
	</UFooter>
</template>