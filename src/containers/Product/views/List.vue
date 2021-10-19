<template>
    <div>
        <div class="h-full"> 
            <viewer :api="get"> 
                <template v-slot:create>
                    <create></create>
                </template>
            </viewer>  
        </div>
    </div>
</template>

<script setup> 

import create from '../components/create.vue'

import get from '../api/get'
 
 

</script>

<style lang="scss" scoped>

</style>