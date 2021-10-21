<template>  
            <viewer :api="get($route.params.id)" route_card="operation-update"> 
                <!-- <template v-slot:create>
                    <create></create>
                </template> -->
            </viewer>   
</template>

<script setup>  
//import create from '../components/create.vue'

import get from '../api/eventlog' 
 
 

</script>

<style lang="scss" scoped>

</style>