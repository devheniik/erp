<template>  
            <viewer :api="list" route_card="finance-advance-reports-update"> 
                <template v-slot:create>
                    <create></create>
                </template>
            </viewer>   
</template>

<script setup>  
import create from '../../components/create.vue'
import list from '../../api/advance/list'
 
 

</script>

<style lang="scss" scoped>

</style>