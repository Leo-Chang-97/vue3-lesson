<template>
  <div>
    <input type="number" v-model="num1" placeholder="請輸入第1個數字" />
    <input type="number" v-model="num2" placeholder="請輸入第2個數字" />
    <p>相加結果：{{ sum }}</p>
  </div>

  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <span v-if="todo.priority == '高'" class="circle danger"></span>
        <span v-if="todo.priority == '中'" class="circle warning"></span>
        <span v-if="todo.priority == '低'" class="circle normal"></span>
        <span>{{ todo.title }} - {{ todo.content }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let num1 = ref(0);
let num2 = ref(0);
const sum = computed(() => num1.value + num2.value);

const todos = [
  { id: 1, title: '完成作業', content: '完成數學作業', priority: '高' },
  { id: 2, title: '閱讀書籍', content: '閱讀新小說', priority: '中' },
  { id: 3, title: '運動', content: '去跑步', priority: '低' },
  { id: 4, title: '打掃房子', content: '洗衣服和碗盤', priority: '高' },
];

// 取得所有 priority 為「高」的待辦事項（todos），回傳一個只包含高優先的陣列。
const highPriorityTodos = computed(() => {
  return todos.filter((todo) => todo.priority === '高');
});

// 先複製 todos 陣列，依照 priority 進行排序（高、中、低），然後過濾掉 priority 為「高」的項目，只留下「中」和「低」的待辦事項。
const sortedTodos = computed(() => {
  return todos
    .slice()
    .sort((a, b) => {
      if (a.priority < b.priority) return -1;
      if (a.priority > b.priority) return 1;
      return 0;
    })
    .filter((todo) => todo.priority !== '高');
});

// 把 highPriorityTodos 和 sortedTodos 兩個陣列合併，得到一個先顯示高優先，再依排序顯示中、低優先的待辦事項陣列，供畫面渲染使用。
const filteredTodos = computed(() => {
  return highPriorityTodos.value.concat(sortedTodos.value);
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
ul li {
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
}
.circle {
  width: 15px;
  height: 15px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 20px;
}
.danger {
  background: red;
  border: 2px solid rgb(127, 7, 7);
}
.warning {
  background: rgb(239, 189, 8);
  border: 2px solid rgb(185, 155, 4);
}
.normal {
  background: rgb(69, 147, 226);
  border: 2px solid rgb(19, 16, 179);
}
</style>
