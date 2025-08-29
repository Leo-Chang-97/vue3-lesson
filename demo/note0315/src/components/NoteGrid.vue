<script setup>
import { useNoteStore } from '../stores/noteStore';
const noteStore = useNoteStore();
</script>
<template>
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="note in noteStore.notes" :key="note">
            <router-link :to="{ name: 'edit', params: { id: note.id }}">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">{{ note.title }}</h5>
                  <p class="card-text">{{ note.content }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
</template>
<style scoped>
/* 卡片的基礎樣式 */
.card {
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-body{
  padding: 10px;
}
/* 滑鼠滑入時的樣式 */
.card:hover {
    transform: scale(1.05); /* 放大效果 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 陰影效果 */
}
</style>