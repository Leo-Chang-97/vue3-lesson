<script setup>
import { ref, defineProps } from 'vue';
defineProps(['name', 'age', 'job_title']);
const child_msg = ref('');
const emit = defineEmits(['update:message']);
const sendMsg = () => {
  emit('update:message', child_msg.value);
};
</script>

<template>
  <div class="container">
    <h2>個人資料</h2>
    <p>姓名: {{ name }}</p>
    <p>年齡: {{ age }}</p>
    <p>職稱: {{ job_title }}</p>
    <div>
      <input type="text" v-model="child_msg" />
      <button @click="sendMsg">送出</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-left: 10px;
  background-color: skyblue;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
