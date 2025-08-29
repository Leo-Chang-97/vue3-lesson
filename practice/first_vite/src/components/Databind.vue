<script setup>
import { reactive, ref } from 'vue';

// 文本插值
const message = ref('Hello, World!');

// 樣式繫節
const box_class = ref('box');
const styles = ref({ color: 'red', fontSize: '20px' });

// 資料陣列
const imgs = reactive([
  { name: 'basketball-course-1.jpg', alt: '籃球1' },
  { name: 'basketball-course-2.jpg', alt: '籃球2' },
]);
const habits = reactive([
  { name: '游泳', checked: false },
  { name: '看書', checked: false },
]);

// 函式
function changeStyle() {
  box_class.value = box_class.value === 'box' ? 'circle' : 'box';
}

function addUnderLine(index) {
  habits[index].checked = !habits[index].checked;
}
</script>

<template>
  <div>
    <!-- 文本插值 -->
    <p>{{ message }}</p>

    <img
      class="img-frame"
      v-for="pic in imgs"
      :src="`../../public/` + pic.name"
      :alt="pic.alt"
    />

    <div class="center-container">
      <div :class="box_class">Happy Birthday</div>
      <div :style="styles">This is your present</div>
      <button @click="changeStyle">切換樣式</button>
    </div>
    <hr />

    <div
      v-for="(habit, idx) in habits"
      :key="habit.name"
      :class="{ underline: habit.checked }"
    >
      <input
        type="checkbox"
        :checked="habit.checked"
        @change="addUnderLine(idx)"
      />
      {{ habit.name }}
    </div>
  </div>
</template>

<style scoped>
.underline {
  text-decoration: line-through;
}
.img-frame {
  width: 200px;
}
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}
.box {
  width: 200px;
  height: 100px;
  background-color: tomato;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.circle {
  width: 150px;
  height: 150px;
  background-color: rgb(166, 71, 255);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
</style>
