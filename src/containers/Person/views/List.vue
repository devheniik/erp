<template>
    <div class="h-full"> 
        <viewer :api="get" route_card="person-update">
            <template v-slot:create>
                <create></create>
            </template>
        </viewer>  
    </div>
</template>

<script setup>
    import Create from '../components/create.vue' 
    import get from '../api/list' 
</script>
