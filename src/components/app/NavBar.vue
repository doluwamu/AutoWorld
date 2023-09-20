<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar'
}
</script>

<template>
  <section class="bg-white sticky top-0 z-50">
    <nav class="m-auto py-3 px-2">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <img src="../../assets/img/logo.png" alt="img" style="width: 120px; height: 30px" />
        </a>
        <div class="flex md:order-2">
          <div class="flex flex-row gap-8">
            <a
              href="signup"
              type="button"
              class="hidden button py-2 px-4 bg-black text-white rounded-lg md:block"
              style="width: 118px"
            >
              Get started
            </a>

            <a
              href="/signin"
              type="button"
              class="hidden button py-2 px-4 bg-main text-white text-center rounded-lg md:block"
              style="width: 118px"
            >
              Login
            </a>
          </div>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:gap-8"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
          >
            <li>
              <a
                href="/"
                class="block py-2 pl-3 pr-4 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/cars"
                class="block py-2 pl-3 pr-4 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Cars</a
              >
            </li>
            <li>
              <a
                href="/support"
                class="block py-2 pl-3 pr-4 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >Support</a
              >
            </li>
            <li>
              <a
                href="/faqs"
                class="block py-2 pl-3 pr-4 text-gray-900 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >FAQs</a
              >
            </li>
          </ul>

          <div class="flex flex-col my-2 gap-3 items-center md:flex-row md:hidden">
            <a
              href="/signup"
              type="button"
              class="button py-2 px-4 bg-black text-white text-center rounded-lg"
              style="width: 118px"
            >
              Get started
            </a>
            <a
              href="/signin"
              type="button"
              class="button py-2 px-4 bg-main text-white text-center rounded-lg"
              style="width: 118px"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>

  <!-- <div
    class="flex justify-evenly items-center flex-wrap py-6 sticky top-0 z-50 bg-white md:flex-nowrap"
    style="max-width: 1400px; margin: 0 auto"
  >
    <img src="../../assets/img/logo.png" alt="img" style="width: 120px; height: 30px" />

    <div class="flex gap-6 nav-links">
      <a href="/#carzz" class="font-bold">Home</a>
      <RouterLink to="/cars" class="font-bold">Cars</RouterLink>
      <RouterLink to="/services" class="font-bold">Services</RouterLink>
      <RouterLink to="/supports" class="font-bold">Supports</RouterLink>
      <RouterLink to="/faqs" class="font-bold">FAQs</RouterLink>
    </div>

    <div class="auth-buttons flex gap-6">
      <a href="/signup" class="button py-2 px-4 bg-black rounded-lg">
        <span class="text-white">Get started</span>
      </a>

      <a href="/login" class="button py-2 px-4 bg-main rounded-lg">
        <span class="text-white">Login</span>
      </a>
    </div>
  </div> -->
</template>

<style>
nav {
  max-width: 1200px;
}

ul li a {
  color: #000 !important;
  font-weight: bolder;
}
</style>
