import { defineStore } from 'pinia'

export const useHelloStore = defineStore('hello', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
  },
})
