<script>
export default {
  name: 'Hero'
}
</script>

<template>
  <section class="hero flex flex-col-reverse py-12 px-6 bg-subOrange md:flex-row">
    <div
      class="flex flex-col justify-center items-center gap-6 px-2 pt-12 md:items-start md:pt-2 md:px-8 md:w-1/2"
    >
      <form action="" class="flex gap-2">
        <input
          type="text"
          placeholder="Enter email..."
          class="p-3 rounded-lg outline-none"
          style="font-size: 12px; width: 220px !important"
          required
        />
        <input
          type="submit"
          value="Subscribe"
          class="py-3 px-4 bg-main rounded-lg text-white font-black"
          style="font-size: 12px"
        />
      </form>

      <div class="flex flex-col gap-2">
        <h1 class="text-5xl font-black text-center md:text-left">
          We <span class="text-main">Buy|</span>
        </h1>
        <p class="text-3xl font-black text-center md:text-left">
          Get the best deal for your next car
        </p>
      </div>

      <p class="text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum temporibus
        dignissimos harum amet delectus magnam molestiae, quia dolorum doloribus dolore
      </p>

      <a href="/signup" class="button py-2 px-4 bg-black rounded-lg" style="width: 120px">
        <span class="text-white">Get started</span>
      </a>
    </div>

    <div class="flex flex-col items-center justify-center gap-6 md:w-1/2">
      <img src="../../assets/img/hero-img.png" alt="img" />
    </div>
  </section>
</template>

<style></style>
