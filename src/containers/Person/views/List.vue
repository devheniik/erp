<template>
    <div class="h-full">
        <uviewer :api="get" route_card="person-update">
            <template v-slot:create>
                <create></create>
            </template>
        </uviewer>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue'
    import Update from '../components/update.vue'
    import get from '../api/get' 
</script>
