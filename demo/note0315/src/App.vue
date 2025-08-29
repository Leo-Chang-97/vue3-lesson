<script setup>
import { ref } from 'vue';
import NoteList from './components/NoteList.vue';
import ToolBar from './components/ToolBar.vue';
import { useNoteStore } from './stores/noteStore';
const noteStores = useNoteStore();

</script>

<template>
  
  <ToolBar></ToolBar>
  <!-- 中間內容區域 -->
  <div class="container my-4">
    <div class="row">
      <!-- 左側選單區域 -->
      <div class="col-md-3">
        <NoteList></NoteList>
      </div>

      <!-- 右側筆記卡片列表 -->
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>

  <!-- 頁尾 -->
  <footer class="bg-light text-center py-3 mt-auto">
    <div class="container">
      <p class="mb-0">Copyright © 2025 筆記應用程式</p>
    </div>
  </footer>
</template>

<style scoped>

footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

.pinned{
    transform: rotate(45deg);
    color: red;
}
</style>