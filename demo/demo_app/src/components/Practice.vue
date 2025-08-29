<script setup>
import { ref } from 'vue';
const title = ref("這是組件標題");
const isShow = ref(true);
const fruits = ref(["蘋果", "香蕉", "橘子", "葡萄", "西瓜"]);
const bg_colors = ref(["red", "yellow", "orange", "purple", "pink"]);
const currentColor = ref(["white","white","white","white","white"]);
function changeColor(index) {
    console.log("index=", index);
    console.log("bg_colors=", bg_colors.value[index]);
    currentColor.value[index] = bg_colors.value[index];
}
function changeWhite(index){
    currentColor.value[index] = "white";
}

const bg_color = ref("gray");
function changeBgColor(color){
    bg_color.value = color;
}

</script>

<template>
  <!-- 組件的模板內容 -->
    <div class="container">
        <h1 :title="title">這是一個練習組件</h1>
        <p v-if="isShow">Hi, VIP會員</p>
        <p v-else><a href="#">會員登入</a></p>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in fruits" @click.right="changeColor(index)" @mouseleave="changeWhite(index)" :style="{backgroundColor: currentColor[index]}">
                第{{index +1}}個 {{ item }}

            </li>
        </ul>
        <hr>
        <div class="box mb-3" :style="{backgroundColor: bg_color}"></div>
        <button class="btn btn-secondary me-3" @click.left="changeBgColor('red')">變換顏色</button>
        <button class="btn btn-secondary me-3" @wheel.passive="changeBgColor('purple')">滾動滑鼠換顏色</button>
        <button class="btn btn-secondary" @click.passive="changeBgColor('purple')">滾動滑鼠換顏色</button>
    </div>
</template>

<style scoped>
/* 組件的樣式 */
.box{
    width: 100px;
    height: 100px;
    background-color: gray;
}
</style>