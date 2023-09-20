<template>
  <section class="support flex items-center justify-center p-2 sm:p-8">
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

<style>
.support {
  background: url(../assets/img/forms/support.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
}
</style>
