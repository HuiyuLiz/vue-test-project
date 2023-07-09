<script setup lang="ts">
import { ref } from 'vue'
import { fetchPosts } from '../utils/posts'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const data = ref<Todo[]>()
const fetchData = async () => {
  const json = await fetchPosts()
  data.value = json
}
</script>

<template>
  <button @click="fetchData">Fetch Data</button>
  <ul>
    <li v-for="(item, idx) in data" :key="idx">{{ item?.title }}</li>
  </ul>
</template>

<style scoped></style>
