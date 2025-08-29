<script setup>
import { useTodoStore } from '../stores/todo_store';
import { storeToRefs } from 'pinia';
const todoList = useTodoStore();
const { completedTodos } = storeToRefs(todoList);
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in todoList.todos">
        <span
          class="toggle"
          v-if="todo.isFinished"
          @click="todoList.toggleTodo(todo.id)"
        >
          <i class="fa-solid fa-2x fa-square-check"></i>&nbsp;
        </span>
        <span class="toggle" v-else @click="todoList.toggleTodo(todo.id)">
          <i class="fa-regular fa-2x fa-square"></i>&nbsp;
        </span>
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  height: 30px;
  border-radius: 8px;
  font-size: 18px;
  padding: 5px;
}
.items {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.items i {
  margin-right: 15px;
}
.toggle {
  cursor: pointer;
}
.line-through {
  text-decoration: line-through;
}
h3 {
  text-align: left;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
.finished {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
.finished li {
  font-size: 18px;
  font-weight: bold;
  color: brown;
}
</style>
