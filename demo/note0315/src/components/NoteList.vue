<script setup>
import { useNoteStore } from '../stores/noteStore';
const noteStore = useNoteStore()
</script>
<template>
    <div class="bg-light p-3 rounded">
          <h5>選單</h5>
          <div class="btn btn-primary my-5">新增筆記</div>
          <ul class="list-group">
            <!-- 顯示筆記名稱列表 -->
            <li class="list-group-item" v-for="(item, index) in noteStore.notes">
              <i class="fa-solid fa-map-pin pinned" v-if="item.pinned" @click="noteStore.pinNote(index)"></i>
              <i class="fa-solid fa-map-pin" v-else @click="noteStore.pinNote(index)"></i>
              {{ item.title }}
            </li>
          </ul>
        </div>
</template>
<style scoped>
</style>