<template>
  <section class="flex items-center">
    <SideImage />
    <ContactForm />
  </section>
</template>

<script>
import SideImage from '../components/supports/SideImage.vue'
import ContactForm from '../components/supports/ContactForm.vue'

export default {
  name: 'Supports',
  components: {
    SideImage,
    ContactForm
  }
}
</script>
