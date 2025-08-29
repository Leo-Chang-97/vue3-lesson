<script setup></script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <nav>
    <ul class="menu-list">
      <li><router-link to="/hello_world">建立組件</router-link></li>
      <li><router-link to="/data_binding">資料綁定</router-link></li>
      <li><router-link to="/life_cycle">生命週期</router-link></li>
      <li><router-link to="/button">按鈕</router-link></li>
      <li><router-link to="/computed">計算屬性(Computed)</router-link></li>
      <li><router-link to="/event">事件(Event)</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.menu-list {
  width: 1200px;
  margin: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.menu-list li {
  width: 100px;
  font-size: 18px;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
