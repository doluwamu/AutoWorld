<template>
  <section id="lifestyle" class="z-20 bg-subGrey relative py-12 pr-4 overflow-hidden">
    <!-- Large -->
    <h1 class="z-20 hidden header-300px text-grey text-center absolute lg:block">LIFESTYLE</h1>
    <!-- Medium -->
    <h1 class="z-20 hidden header-200px text-grey text-center absolute md:block lg:hidden">
      LIFESTYLE
    </h1>
    <!-- Small -->
    <h1 class="z-20 hidden header-120px text-grey text-center absolute sm:block md:hidden">
      LIFESTYLE
    </h1>
    <!-- Extra small -->
    <h1 class="z-20 header-80px text-grey text-center absolute sm:hidden">LIFESTYLE</h1>

    <!-- decoration -->
    <div class="decor absolute bg-main"></div>

    <div class="flex flex-col md:flex-row">
      <img
        src="../../assets/img/home/lifestyle.png"
        alt="img"
        class="mt-14 z-30 sm:mt-24 md:mt-40 md:w-2/3 lg:mt-60"
      />

      <div
        class="flex flex-col text-black justify-center py-12 items-center z-20 md:py-2 md:mt-56 md:items-start md:w-1/3 lg:mt-40"
      >
        <p class="text-center px-6 md:px-1 md:text-justify md:max-w-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum tempo ribus
          dignissimos harum amet delectus magnam
        </p>

        <button
          class="border border-main text-main font-black my-4 py-2 px-4 rounded-lg"
          style="max-width: 100px"
        >
          Drive in
        </button>
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
#lifestyle h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
  width: 100%;
  opacity: 0.7;
  top: 40px;
}

#lifestyle .header-300px {
  font-size: 300px;
  top: 0px;
}

#lifestyle .header-200px {
  font-size: 200px;
}

#lifestyle .header-120px {
  font-size: 120px;
}

#lifestyle .header-80px {
  font-size: 80px;
}

.decor {
  width: 3000px;
  height: 500px;
  left: -1000px;
  opacity: 0.2;
  transform: rotate(50deg);
}
</style>
