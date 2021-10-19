<template>  
            <viewer :api="get" route_card="product-update"> 
                <template v-slot:create>
                    <create></create>
                </template>
            </viewer>   
</template>

<script setup> 

import create from '../components/create.vue'

import get from '../api/get'
 
 

</script>

<style lang="scss" scoped>

</style>