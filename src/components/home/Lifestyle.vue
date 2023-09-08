<template>
  <section id="lifestyle" class="bg-black relative py-12 pr-4">
    <h1 class="header text-white text-center absolute md:text-9xl">LIFESTYLE</h1>

    <div class="flex flex-col md:flex-row">
      <img
        src="../../assets/img/home/lambo-gold.png"
        alt="img"
        class="mt-48 z-20 md:w-2/3"
        width="800"
      />

      <div
        class="flex flex-col text-white justify-center py-12 md-py-2 items-center md:items-start md:w-1/3"
      >
        <p class="max-w-xs text-center md:text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum tempo ribus
          dignissimos harum amet delectus magnam
        </p>

        <button class="border my-4 py-2 px-4 rounded-lg" style="max-width: 100px">Drive in</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Lifestyle'
}
</script>

<style>
#lifestyle .header {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
  /* font-size: 300px; */
  top: 40px;
  width: 100%;
  opacity: 0.6;
}
</style>
