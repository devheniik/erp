<template>
    <div class="h-full">
        <viewer :api="list" route_card="sale-update">
            <template v-slot:create>
                <create></create>
            </template>
        </viewer>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue' 
    import list from '../api/list' 
</script>
