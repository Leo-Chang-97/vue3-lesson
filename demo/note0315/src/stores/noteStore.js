import { defineStore } from 'pinia';

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [
          {
            id: 1,
            title: "每日清潔檢查",
            content: "確保廚房、用餐區和洗手間的清潔工作已完成。",
            isMarked: true,
            date: "2025-03-01",
          },
          {
            id: 2,
            title: "食材庫存檢查",
            content: "檢查冷藏庫和乾貨區的食材庫存，記錄需要補貨的項目。",
            isMarked: false,
            date: "2025-03-02",
          },
          {
            id: 3,
            title: "員工排班表",
            content: "確認本週員工排班是否符合需求，調整臨時請假的人員。",
            isMarked: false,
            date: "2025-03-03",
          },
          {
            id: 4,
            title: "菜單更新",
            content: "新增季節性菜品，並移除不再供應的菜品。",
            isMarked: true,
            date: "2025-03-04",
          },
          {
            id: 5,
            title: "顧客反饋記錄",
            content: "記錄顧客對餐點和服務的反饋，並提出改進建議。",
            isMarked: true,
            date: "2025-03-05",
          },
    ], // 儲存筆記的陣列
    selectedNoteId: null, // 當前選中的筆記 ID
    keyword: '',
    searchResults: [],
  }),
  getters: {
    
  },
  actions: {
    pinNote(index) {
        this.notes[index].isMarked = !this.notes[index].isMarked;
    },
    // 編輯筆記
    editNote(id, title, content, date){
        const index = this.notes.findIndex((note) => note.id === id);
        if(index !== -1){
            this.notes[index].title = title
            this.notes[index].content = content
            this.notes[index].date = date
            return true;
        }else{
            return false;
        }
        
    },
    showNote(id){
        return this.notes.findIndex((note) => note.id === id);
    },
    // 新增筆記
    addNote(note) {
      this.notes.push(note);
    },
    // 刪除筆記
    deleteNote(id) {
       
    },
    // 設定選中的筆記 ID
    setSelectedNoteId(id) {
      this.selectedNoteId = id;
    },
    searchNotes(keyword){
        this.keyword = keyword;
        this.searchResults = this.notes.filter( note => 
            note.title.includes(this.keyword) ||
            note.content.includes(this.keyword)
        )
        console.log(this.searchResults);
    }
  },
});