<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/noteStore';
import { useRouter } from 'vue-router';
const router = useRouter();
const noteStore = useNoteStore();
const searchQuery = ref('');
const searchNotes = async () => {
    await noteStore.searchNotes(searchQuery.value);
    router.push({name: 'search'});
};
</script>
<template>
    <!-- 頂部導航欄 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/note_logo.png" alt="" class="pic">
      </a>
      <div class="collapse navbar-collapse">
        <form class="d-flex ms-auto" @submit.prevent="searchNotes">
          <input
            class="form-control me-2"
            type="search"
            placeholder="搜尋筆記"
            v-model="searchQuery"
          />
          <button class="btn btn-outline-success" type="submit">搜尋</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.pic{
  width: 100px;

}
</style>