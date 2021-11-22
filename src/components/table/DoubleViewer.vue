<template>
    <double-table :component="component" :params="root_params" :api="menu" @select="link = $event" @select-params="right_params = $event">
        <viewer :api="link" :params="right_params">  
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

const right_params = ref(props.params)
  
const link = ref(null)
// @select="link = list($event)"
</script>

<style lang="scss" scoped>

</style>