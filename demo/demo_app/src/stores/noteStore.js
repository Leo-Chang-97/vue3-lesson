import { defineStore } from 'pinia';

export const useNoteStore = defineStore('note', {
  state: () => ({
        notes: [
        {
            id: 1,
            title: '運動記錄',
            content: '有氧運動30分鐘',
            date: '2025-03-14',
            pinned: false
        },
        {
            id: 2,
            title: '學習計畫',
            content: '完成 Vue 3 教程第5章',
            date: '2025-03-13',
            pinned: true
        },
        {
            id: 3,
            title: '購物清單',
            content: '牛奶、麵包、雞蛋',
            date: '2025-03-12',
            pinned: false
        },
        {
            id: 4,
            title: '會議記錄',
            content: '討論專案進度與分工',
            date: '2025-03-11',
            pinned: false
        },
        {
            id: 5,
            title: '閱讀筆記',
            content: '完成《Clean Code》第3章',
            date: '2025-03-10',
            pinned: true
        },
        {
            id: 6,
            title: '運動記錄',
            content: '跑步5公里',
            date: '2025-03-09',
            pinned: false
        }
    ], // 存放筆記的陣列
  }),
  getters: {
    noteCount: (state) => state.notes.length, // 計算筆記數量
  },
  actions: {
    pinNote(index) {
    //   const current_id =  this.notes.findIndex((note) => note.id === index); //標記筆記
      this.notes[index].pinned = !this.notes[index].pinned;
    }
  },
});