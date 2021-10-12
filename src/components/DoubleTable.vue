<template>
    <div class="w-full flex flex-wrap"> 
        <div class="flex w-full justify-end mr-5">
            <list v-model="entity" :data="{ list: options}"></list>
        </div>
            <side-table class="relative" :api="api" @select="selected = $event">
                <viewer :key="render" v-if="selected" :api="request"> 
                </viewer> 
            </side-table>   
    </div>  
</template>

<script setup>
import {  computed, ref, watchEffect  } from 'vue'
const props = defineProps({
    api: String,
    options: Array,
    link: Function
}) 

const selected = ref(null) 

const render = ref(1)

const entity = ref("users")

const request = ref('access/role/null/users')

watchEffect(() => {
  request.value = props.link(selected.value, entity.value)
  render.value++
})
  

    
</script>