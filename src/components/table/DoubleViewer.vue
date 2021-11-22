<template>
    <double-table :component="component" :params="root_params" :api="menu" @select="link = $event">
        <viewer :api="link" :params="params">  
        </viewer>  
    </double-table> 
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
    menu: String,
    params: Object,
    root_params: Object,
    component: String
})
 

const link = ref(null)
// @select="link = list($event)"
</script>

<style lang="scss" scoped>

</style>