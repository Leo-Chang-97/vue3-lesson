<script setup>
import {defineProps} from 'vue'
const props = defineProps(['msg']);
</script>

<template>
    <h2>{{msg}}</h2>
</template>
