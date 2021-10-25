<template>
    <div> 
        <div class="w-full flex items-center">
            <bar></bar>
        </div>
        <div class="flex justify-center w-full">
            <description :api="top_bar_api" />
        </div>
        <div class="w-full mt-5 border-t-2 pt-5 border-b-2 pb-5  ">
            <viewer :api="table_api">

            </viewer>
        </div>
        <div class="w-full mt-5">
            <sub-table :api="sub_bar_api">

            </sub-table>
        </div>
    </div>
</template>

<script setup>
import description from './specifications/description.vue'
import SubTable from './specifications/sub-table.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()


 
const table_api = `sales/orders/get/${route.params.id}/specifications/data-table`

const top_bar_api = `sales/orders/get/${route.params.id}/specifications/top-table`

const sub_bar_api = `sales/orders/get/${route.params.id}/specifications/sub-table`

 




</script>

<style lang="scss" scoped>

</style>