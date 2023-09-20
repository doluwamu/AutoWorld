<template>
  <section class="signup flex flex-col md:flex-row p-4">
    <div class="md:w-1/2"></div>

    <div class="md:w-1/2 bg-white p-8">
      <h1 class="text-3xl font-black">SignUp</h1>
      <form action="" class="flex flex-col gap-6 pt-8">
        <div class="flex flex-col gap-2">
          <label class="font-black text-sm">Username:</label>
          <input
            type="text"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="username"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-black text-sm">Email:</label>
          <input
            type="email"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="email"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-black text-sm">Phone:</label>
          <input
            type="tel"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="tel"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-black text-sm">Password:</label>
          <input
            type="password"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="password"
            required
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-black text-sm">Confirm password:</label>
          <input
            type="password"
            class="placeholder:text-sm"
            placeholder="Write here"
            v-model="confirm"
            required
          />
        </div>

        <div class="flex items-center gap-2">
          <input type="checkbox" class="border-2" v-model="terms" required />
          <p>Agree with <a href="#" class="text-blue">Terms and Conditions</a></p>
        </div>

        <div class="">
          <div style="max-width: 200px; margin: 0 auto !important">
            <input
              type="button"
              value="Signup"
              class="button bg-main rounded-lg text-white py-2 px-4 w-full"
              required
            />
          </div>
        </div>

        <div>
          <p class="text-center">
            Already have an account? <a href="/signin" class="text-blue">Login</a>
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
              <span>Signup with Google</span>
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
    const username = ref('')
    const email = ref('')
    const tel = ref('')
    const password = ref('')
    const confirm = ref('')
    const terms = ref(false)

    return { username, email, tel, password, confirm, terms }
  }
}
</script>

<style>
.signup {
  background: url(../assets/img/forms/signup.jpg) #0007;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}

.signup input {
  box-shadow: 0 0 15px 0.2px rgb(228, 228, 228);
  border-radius: 5px;
}
</style>
