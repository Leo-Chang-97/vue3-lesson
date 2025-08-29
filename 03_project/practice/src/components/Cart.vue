<template>
    <div class="container">
        <h2 class="mb-3">Shopping Cart</h2>
        <div>
            <h3 v-if="cartStore.carts.length === 0">購物車目前無資料</h3>
        </div>
        <div class="container">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(cart_item, index) in cartStore.carts">
                    <div class="col-2">
                        <img :src="cart_item.image" class="img-fluid" alt="">
                    </div>
                    <div class="col-8 d-flex justify-content-around">
                        <div>
                            <h5 class="mb-1">{{ cart_item.name }}</h5>
                            <p class="mb-1">{{ cart_item.description }}</p>
                        </div>
                        <div class="input-group">
                            <button class="btn btn-outline-secondary" type="button" @click="cartStore.decrement(index)">-</button>
                            <input type="text" class="form-control text-center" v-model="cart_item.quantity">
                            <button class="btn btn-outline-secondary" type="button" @click="cartStore.increment(index)">+</button>
                        </div>
                        
                    </div>
                    <div class="col-2">
                        
                        <button type="button" class="btn btn-danger" @click="openDeleteModal"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </li>
            </ul>
            <p class="mt-3">Total: {{ cartStore.totalItems }}</p>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="deleteConfirmModal" tabindex="-1" aria-labelledby="deleteConfirmModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteConfirmModalLabel">確認刪除</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    您確定要刪除此商品嗎？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="confirmDelete(index)" data-bs-dismiss="modal">刪除</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { useCartStore } from '../store/cartStore';
const cartStore = useCartStore();
const index = ref(null);

// Use this function to open the modal and set the index of the item to be deleted
const openDeleteModal = (i) => {
    index.value = i;
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    deleteModal.show();
};
</script>




<style scoped>
.cart {
    padding: 20px;
    border: 1px solid #ccc;
}
.input-group{
    width: 100px;
}
.input-group button, .input-group input{
    width: 30px;
    height: 40px;
}
</style>