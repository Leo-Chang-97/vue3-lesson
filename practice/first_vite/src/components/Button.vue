<script setup>
import { ref, reactive } from 'vue'
import logo_img from '../assets/vue.svg'

let my_img = logo_img
let count = ref(0)
let str = ref('Click')
let user = reactive({
  name: 'John',
  age: 50,
})
count.value++

console.log(count.value)
console.log(str.value)
</script>

<template>
  <h2>{{ user.value }}</h2>
  <button>{{ str }}</button>
  <div>
    <img src="../../public/vite.svg" alt="" />
  </div>
  <div>
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  </div>
</template>

<style scoped></style>
