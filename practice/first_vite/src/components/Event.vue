<template>
  <div class="box" :style="{ backgroundColor: boxColor }"></div>
  <div class="container" @click="console.log('container click')">
    <input
      type="text"
      name="Text"
      style="margin-bottom: 30px"
      v-model="message"
      @keydown.enter="alertMsg"
    />
    <div class="buttons">
      <button @click.stop="changeColor('red')">Red</button>
      <button @click.prevent="changeColor('green')">Green</button>
      <button @click.capture="changeColor('blue')">Blue</button>
      <button @click.self="changeColor('yellow')">Yellow</button>
      <button @mouseover="changeColor('skyblue')">Mouse Over SkyBlue</button>
      <button @mouseleave="changeColor('tomato')">Mouse Leave Tomato</button>
      <button @click.once="changeColor('purple')">Purple只能變一次</button>

      <button @click.middle="changeColor('orange')">
        按滑鼠滾輪變成Orange
      </button>
      <button @wheel.passive="changeColor('pink')">滾動滑鼠滾輪Pink</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const boxColor = ref('initial');
let message = ref('');

const changeColor = (color) => {
  boxColor.value = color;
};

const alertMsg = () => {
  alert('key事件觸發了');
  message.value = 'Enter鍵被按下了';
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.box {
  width: 200px;
  height: 200px;
  margin: auto;
  margin-bottom: 30px;
  background-color: lightgray;
  border-radius: 15px;
}
</style>
