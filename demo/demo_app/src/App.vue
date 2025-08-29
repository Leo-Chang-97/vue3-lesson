<script setup>
import Practice from './components/Practice.vue';
import Child from './components/Child.vue'; 
import Pinia from './components/Pinia.vue';
import { ref, reactive } from 'vue';
const name = ref("Alice");
const age = ref(20);
const user = reactive({
  name: 'Mark',
  age: 10,
  birthday: '2014-08-17'
});
const receiveMessage = ref('');
function updateMsg(newMsg){
  receiveMessage.value = newMsg
}
const str = ref("今天星期五");
</script>

<template>
  
  <div class="container">
    <div class="row">
      <!-- 左邊區塊 -->
      <div class="col-3 bg-light">
        <h5>連結清單</h5>
        <ul class="list-group">
          <li class="list-group-item">
            <router-link to="/">Pinia</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/practice">Practice</router-link>
          </li>
          <li class="list-group-item">
            <router-link :to="{ path: '/data_send', query: {user_name: name, age: age, user: JSON.stringify(user)},}">Child</router-link>
          </li>
          <li class="list-group-item">
            <router-link :to="{ name: 'get_data', query: {message: str},}">GetData</router-link>
          </li>
          <li class="list-group-item">
            <router-link :to="{ name: 'axios'}">Axios Demo</router-link>
          </li>
        </ul>
      </div>
      
      <!-- 右邊區塊 -->
      <div class="col-9">
        
        <router-view @update:msg="updateMsg"></router-view>
        <!-- <h3>子組件傳來的訊息: {{ receiveMessage }} </h3> -->
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
