<template>
  <section id="lifestyle" class="z-20 bg-subGrey relative py-12 pr-4 overflow-hidden">
    <!-- decoration -->
    <div class="decor absolute bg-main"></div>

    <!-- Large -->
    <h1 class="z-20 relative hidden header-300px text-white text-center lg:block">LIFESTYLE</h1>
    <!-- Medium -->
    <h1 class="z-20 relative hidden header-200px text-white text-center md:block lg:hidden">
      LIFESTYLE
    </h1>
    <!-- Small -->
    <h1 class="z-20 relative hidden header-120px text-white text-center sm:block md:hidden">
      LIFESTYLE
    </h1>
    <!-- Extra small -->
    <h1 class="z-20 relative header-80px text-white text-center sm:hidden">LIFESTYLE</h1>

    <div
      class="flex flex-col justify-center items-center z-20 relative"
      style="max-width: 900px; margin: 0 auto"
    >
      <p class="text-center text-white px-6 md:px-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum tempo ribus
        dignissimos harum amet delectus magnam Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Perferendis eaque reprehenderit illum autem accusantium velit quam enim culpa,
        dignissimos, repudiandae cum maxime, deserunt magni necessitatibus ea! Magni explicabo et
        similique!
      </p>

      <RouterLink
        to="/#"
        class="drive-in-btn border border-main text-white font-black bg-main my-4 py-2 px-4 rounded-lg cursor-pointer hover:bg-mainDeep hover:border-mainDeep"
        style="max-width: 100px"
      >
        Drive in
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Lifestyle'
}
</script>

<style>
#lifestyle {
  background: url(../../assets//img//home/lifestyle-bg.png) #0009;
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}

#lifestyle h1 {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
  width: 100%;
  opacity: 0.6;
  /* top: 40px; */
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
  font-size: 60px;
}

.drive-in-btn {
  transition: 0.5s;
  animation: btnBounce 0.4s infinite linear alternate;
}

@keyframes btnBounce {
  to {
    transform: scale(1.04);
  }
}

/* .drive-in-btn:hover {
  background-color: hsl(18, 93%, 40%);
  border: 1px solid ;
} */

.decor {
  width: 3000px;
  height: 500px;
  left: -1000px;
  opacity: 0.2;
  transform: rotate(50deg);
}
</style>
