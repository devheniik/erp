<template>
    <div class="w-full"> 
        <viewer :api="`sales/orders/get/${route.params.id}/specifications`">
        </viewer>
    </div>
</template>

<script setup> 
import description from './specifications/description.vue'
import SubTable_m from './specifications/sub-table.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()


 
const table_api = `sales/orders/get/${route.params.id}/specifications/data-table`

const top_bar_api = `sales/orders/get/${route.params.id}/specifications/top-table`

const sub_bar_api = `sales/orders/get/${route.params.id}/specifications/sub-table`

 




</script>

<style lang="scss" scoped>

</style>