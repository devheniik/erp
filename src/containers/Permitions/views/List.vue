<template>
    <div class="h-full"> 
        <side-table :api="get">

        </side-table>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue'
    import Update from '../components/update.vue'
    import get from '../api/get'  
</script>
