<template>
    <div class="h-full"> 
        <!-- <div class="flex w-full justify-end mr-5">
            <list v-model="entity" :data="{ list: options}"></list> 
        </div> -->
        <double-table :api="get" tree :options="[]" @select="link = `transactions/operation-types/show?operationTypes=${$event}`"> 
            <viewer  :api="link" route_card="operation-update"> 
                <template v-slot:create>
                    <create></create>
                </template>
            </viewer>  
        </double-table>
    </div>
</template>

<script setup> 
import {ref} from 'vue'
import create from '../components/create.vue'

import get from '../api/get'

const link = ref(null)

 

 
 

</script>

<style lang="scss" scoped>

</style>