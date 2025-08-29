<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const data = ref([]);

onMounted( async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data[0].name);
        data.value = response.data;
    }catch(error){
        console.log(error)
    }
});
</script>
<template>
    <h2>使用Axios載入資料</h2>
    <ul>
        <li v-for="item in data">{{ item.email }}</li>
    </ul>
    <div class="container">
        <div class="row">
        <div class="col-4 mb-4" v-for="item in data" :key="item.id">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text"><strong>Email:</strong> {{ item.email }}</p>
                    <p class="card-text"><strong>Phone:</strong> {{ item.phone }}</p>
                    <p class="card-text"><strong>Company:</strong> {{ item.company.name }}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
/* 卡片的基礎樣式 */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 滑鼠滑入時的樣式 */
.card:hover {
    transform: scale(1.05); /* 放大效果 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 陰影效果 */
}
</style>