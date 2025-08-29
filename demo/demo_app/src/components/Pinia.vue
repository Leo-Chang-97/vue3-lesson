<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/noteStore';
const noteStore = useNoteStore();
</script>

<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 col-md-3 mb-4" v-for="(item, index) in noteStore.notes">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content}}</p>
            <p class="card-text text-muted">
              <small>{{item.date}}</small>
            </p>
          </div>
          <div class="card-footer text-end">
            <!-- <i :class="{'fa-solid fa-map-pin':true, 'pinned': item.pinned }"></i> -->
            <i class="fa-solid fa-map-pin pinned" v-if="item.pinned" @click="noteStore.pinNote(index)"></i>
            <i class="fa-solid fa-map-pin" v-else @click="noteStore.pinNote(index)"></i>
          </div>
        </div>
      </div>
      
    </div>
    <h3>總計: {{ noteStore.noteCount }}</h3>
  </div>
</template>

<style scoped>
.card{
  padding: 20px; /* 移除卡片內容的內距 */
}

.card-footer {
  padding: 0; /* 移除卡片底部的內距 */
  background-color: transparent; /* 移除背景色，讓它更簡潔 */
  border-top: none; /* 移除分隔線 */
}
.pinned{
    transform: rotate(45deg);
    color: red;
}
</style>