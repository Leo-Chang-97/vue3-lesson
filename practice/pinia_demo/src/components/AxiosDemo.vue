<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
let posts = reactive([])
onMounted(async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    posts = response.data
    console.log(posts)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts">{{ post.title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
