<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNoteStore } from '../stores/noteStore';
const route = useRoute()
console.log(parseInt(route.params.id));
const id = parseInt(route.params.id);
const noteStore = useNoteStore();
const currentNote = computed(() =>
    noteStore.notes.find( note => note.id === id)
)
console.log(currentNote)

const showSuccessAlert = ref(false);
const new_title = ref(currentNote.value.title);
const new_content = ref(currentNote.value.content);
const new_date = ref(currentNote.value.date);
watch(new_title, (newVal) => {
  currentNote.value.title = newVal;
});

function updateNote(){
    const result = noteStore.editNote(id, new_title, new_content, new_date)
    showSuccessAlert.value = result;
    setTimeout(()=>{
        showSuccessAlert.value = false;
    },1000);
}
</script>
<template>
    <div class="container mt-4">
        <div class="alert alert-success" v-if="showSuccessAlert">
            更新成功!
        </div>
    <h2>編輯筆記</h2>
    <form @submit.prevent="updateNote">
      <!-- 標題欄位 -->
      <div class="mb-3">
        <label for="title" class="form-label">標題</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="new_title"
          placeholder="輸入筆記標題"
          required
        />
      </div>

      <!-- 日期欄位 -->
      <div class="mb-3">
        <label for="date" class="form-label">日期</label>
        <input
          type="date"
          class="form-control"
          id="date"
          v-model="new_date"
          required
        />
      </div>

      <!-- 內容欄位 -->
      <div class="mb-3">
        <label for="content" class="form-label">內容</label>
        <textarea
          class="form-control"
          id="content"
          rows="5"
          v-model="new_content"
          placeholder="輸入筆記內容"
          required
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
            <!-- 送出按鈕 -->
            <button type="submit" class="btn btn-primary" >送出</button>
      </div>
      
    </form>
  </div>
</template>
<style scoped>

</style>