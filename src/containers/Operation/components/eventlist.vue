<template>  
            <viewer :api="`${get}/${route.params.id}`" route_card="firm-update"> 
                <template v-slot:create>
                    <create></create>
                </template>
            </viewer>   
</template>

<script setup> 
import {useRoute} from 'vue-router'
import create from '../components/create.vue'

import get from '../api/eventlist'

const route = useRoute()
 
 

</script>

<style lang="scss" scoped>

</style>