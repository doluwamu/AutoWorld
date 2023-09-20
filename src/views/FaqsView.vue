<template>
  <section class="md:p-8">
    <h1 class="text-3xl py-8 text-center">FAQs</h1>

    <div id="accordion-collapse" data-accordion="collapse" v-for="(faq, i) in faqs" :key="i">
      <h2 :id="`accordion-open-heading-${i.toString()}`" class="border-b">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:bg-gray-200 hover:bg-gray-100"
          :data-accordion-target="`#accordion-open-body-${i.toString()}`"
          aria-expanded="false"
          :aria-controls="`accordion-open-body-${i.toString()}`"
        >
          <span class="flex items-center"
            ><svg
              class="w-5 h-5 mr-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path></svg
            >{{ faq.question }}</span
          >
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        :id="`accordion-open-body-${i.toString()}`"
        class="hidden"
        :aria-labelledby="`accordion-open-heading-${i.toString()}`"
      >
        <div class="p-5 border border-b-0 border-gray-200">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useFaqsStore } from '../stores/faqs'

export default {
  name: 'FAQs',
  setup() {
    const faqsStore = useFaqsStore()
    const { faqs } = storeToRefs(faqsStore)

    console.log(faqs)

    return { faqs }
  }
}
</script>
