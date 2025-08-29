<script setup>
import { defineProps } from 'vue';
const props = defineProps(['name', 'price']);

const emit = defineEmits(['add-to-cart']);
const addToCart = () => {
  emit('add-to-cart', props.price);
};
</script>

<template>
  <div class="product">
    <span>{{ name }} - 1斤 {{ price }} 元</span>&nbsp;&nbsp;
    <button @click="addToCart">加入購物車</button>
  </div>
</template>

<style scoped>
button {
  margin-left: 10px;
  background-color: skyblue;
}
span {
  display: inline-block;
  margin-bottom: 20px;
}
</style>
