import { defineStore } from 'pinia'
import faqs from '../data/faqs'

export const useFaqsStore = defineStore('faqsStore', {
  state: () => ({
    faqs
  })
})
