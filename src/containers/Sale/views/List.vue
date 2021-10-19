<template>
    <div class="h-full">
        <viewer :api="get" route_card="sale-update">
            <template v-slot:create>
                <create></create>
            </template>
        </viewer>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue'
    import Update from '../components/update.vue'
    import get from '../api/get' 
</script>
