<template>
  <section class="signin flex flex-col md:flex-row p-4">
    <div class="md:w-1/2"></div>

    <div class="md:w-1/2 bg-white p-8">
      <h1 class="text-3xl font-black">Login</h1>
      <form action="" class="flex flex-col gap-6 pt-8">
        <div class="flex flex-col gap-2">
          <label class="font-black">Email:</label>
          <input
            type="email"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="email"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-black">Password:</label>
          <input
            type="password"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="password"
            required
          />
        </div>

        <div class="">
          <div style="max-width: 200px; margin: 0 auto !important">
            <input
              type="button"
              value="Login"
              class="button bg-main rounded-lg text-white py-2 px-4 w-full"
              required
            />
          </div>
        </div>

        <div>
          <p class="text-center">
            Don't have an account? <a href="/signup" class="text-blue">Signup</a>
          </p>
        </div>

        <div class="">
          <div class="" style="max-width: 300px; margin: 0 auto !important">
            <button
              type="button"
              class="button flex justify-center items-center gap-3 bg-black rounded-lg text-white py-2 px-4 w-full"
              required
            >
              <img
                src="../assets/img/forms/google.png"
                style="width: 18px; height: 18px"
                alt="img"
              />
              <span>Signin with Google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SignUp',
  setup() {
    const email = ref('')
    const password = ref('')

    return { email, password }
  }
}
</script>

<style>
.signin {
  background: url(../assets/img/forms/login.jpg) #0007;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

.signin input {
  box-shadow: 0 0 15px 0.2px rgb(228, 228, 228);
  border-radius: 5px;
}
</style>
