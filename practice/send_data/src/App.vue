<script setup>
import { ref } from 'vue';
import Child from './components/Child.vue';
import Product from './components/Product.vue';
const name = ref('John');
const message = ref('初始訊息');
const receiveMsg = (msg) => {
  message.value = msg;
};

const totalPrice = ref(0);
const updateTotal = (price) => {
  totalPrice.value += price;
};
</script>

<template>
  <div class="container">
    <Child
      :name="name"
      :age="30"
      :job_title="'Manager'"
      @update:message="receiveMsg"
    ></Child>
    <p>{{ message }}</p>
  </div>
  <hr />
  <div>
    <Product name="蘋果" :price="30" @add-to-cart="updateTotal" />
    <Product name="香蕉" :price="20" @add-to-cart="updateTotal" />
    <Product name="橘子" :price="25" @add-to-cart="updateTotal" />
    <h2>🛒 購物總金額:{{ totalPrice }}元</h2>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
