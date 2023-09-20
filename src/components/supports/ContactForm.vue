<template>
  <div class="contact-form bg-white px-8 py-8 w-full md:w-1/2 md:px-6">
    <form action="" class="flex flex-col gap-8 justify-center">
      <h1 class="text-xl font-black md:text-3xl">Send us a message</h1>

      <div class="flex flex-col gap-2">
        <label for="" class="font-bold text-sm md:text-xl">Name:</label>
        <input type="text" name="name" placeholder="Write here" required />
      </div>

      <div class="flex flex-col gap-2">
        <label for="" class="font-bold text-sm md:text-xl">Email:</label>
        <input type="email" name="email" placeholder="Write here" required />
      </div>

      <div class="flex flex-col gap-2">
        <label for="" class="font-bold text-sm md:text-xl">Phone:</label>
        <input type="tel" name="phone" placeholder="Write here" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="" class="font-bold text-sm md:text-xl">Subject:</label>
        <input type="text" name="subject" placeholder="Write here" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="" class="font-bold text-sm md:text-xl">Message:</label>
        <textarea name="message" id="" rows="7" placeholder="Write a message here"></textarea>
      </div>

      <div class="flex flex-col items-center gap-2">
        <input
          type="button"
          value="Submit"
          class="button bg-main text-white py-2 px-4"
          style="max-width: 200px"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style>
.contact-form input,
.contact-form textarea {
  box-shadow: 0 0 15px 0.2px rgb(228, 228, 228);
  border-radius: 5px;
}

.contact-form textarea {
  resize: none;
}
</style>
