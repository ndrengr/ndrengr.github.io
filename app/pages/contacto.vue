<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';

useSeoMeta({
  title: 'Contacto'
})

const schema = z.object({
  email: z.pipe(z.string(), z.email('Debe ingresar un correo válido')),
  message: z.string().min(10, 'Debe ingresar un mensaje')
})

const state = reactive({ email: '', message: '' })
const isSubmitting = ref(false)
const toast = useToast()

type Schema = z.infer<typeof schema>

async function handleSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true
  try {
    const response = await $fetch('https://formspree.io/f/xbdbbwoo', {
      method: 'POST',
      body: event.data
    })
	toast.add({ title: 'Mensaje enviado', color: 'success' });
  } catch (error) {
    toast.add({ title: 'Envío fallido', color: 'error' });
  } finally {
	Object.assign(state, { email: '', message: '' });
	isSubmitting.value = false;
  }
}
</script>

<template>
	<UContainer>
		<UForm :schema="schema" :state="state" @submit="handleSubmit" class="mt-10 space-y-4 flex flex-col items-center">
			<UFormField label="Email" name="email" required class="w-fit">
				<UInput v-model="state.email" type="email" class="w-3xl" />
			</UFormField>
			<UFormField label="Message" name="message" required class="w-fit">
				<UTextarea v-model="state.message" class="w-3xl" />
			</UFormField>
			<UButton type="submit" :loading="isSubmitting" class="w-fit" icon="i-lucide-mail">Enviar</UButton>
		</UForm>
	</UContainer>
</template>