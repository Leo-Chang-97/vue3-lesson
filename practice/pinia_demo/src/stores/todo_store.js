import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todos', {
  // 儲存響應式資料（可直接修改）
  state: () => ({
    todos: [
      {
        id: 1,
        text: '寫作業',
        isFinished: false,
      },
      {
        id: 2,
        text: '看書',
        isFinished: false,
      },
      {
        id: 3,
        text: '運動',
        isFinished: false,
      },
    ],
  }),

  // 派生資料，可以取得資料的函式
  getters: {
    completedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },

  // 方法邏輯，取得/寫入資料的函式
  actions: {
    addTodo(text) {
      if (!text) return;
      this.todos.push({
        id: Math.floor(Math.random() * 100000),
        text,
        isFinished: false,
      });
    },
    toggleTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      this.todos[index].isFinished = !this.todos[index].isFinished;
    },
  },
});
