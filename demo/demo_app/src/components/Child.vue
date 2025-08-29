<script setup>
import { ref, defineProps, reactive } from 'vue';
const props = defineProps(['name', 'age', 'user']);
const user = reactive(JSON.parse(props.user));
const msg = ref('test');
const emit = defineEmits(['update:msg']);
function sendMessage(){
    emit('update:msg', msg);
}
</script>

<template>
    <p>姓名:{{ name }}</p>
    <p>年齡:{{ age }}</p>
    <p>生日:{{ user.birthday }}</p>

    <input type="text" class="form-control mb-3" v-model="msg">
    <button class="btn btn-primary" @click="sendMessage">傳送訊息至父組件</button>
</template>

<style scoped>
</style>