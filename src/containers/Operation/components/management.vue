<template>
    <double-table rollup  :api="api" @select="link = $event">
        <viewer :api="`${link}?id=${$route.params.id}`">  
        </viewer>  
    </double-table> 
</template>

<script setup>
import {ref} from 'vue'
import api from '../api/management'

const link = ref(null)
// @select="link = list($event)"
</script>

<style lang="scss" scoped>

</style>