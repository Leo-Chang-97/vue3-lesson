<script setup>
import { useNoteStore } from '../stores/noteStore';
const noteStore = useNoteStore();
</script>

<template>
    <h2 v-if="noteStore.searchResults.length == 0">查無相關資料</h2>
    <div v-else>
        <h2>搜尋結果</h2>
    
     <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4" v-for="note in noteStore.searchResults" :key="note">
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
    </div>
</template>
<style>

</style>