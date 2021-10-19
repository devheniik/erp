<template>
    <div class="w-full h-full flex flex-wrap">   
        <div  :class="[sideRef && !tree ? 'w-6/12' : sideRef && tree ? 'w-4/12' : 'w-1/12', 'h-full overflow-y-auto hide-scroll']">
            <component :is="!tree ? 'side-table' : 'side-bar'" class="relative" :api="api" @select="selected = $event">
                
            </component> 
        </div>
        <div :class="[sideRef && !tree ? 'w-6/12' : sideRef && tree ? 'w-8/12' : 'w-full', 'pl-4']">
            <slot :key="render" v-if="selected" >

            </slot> 
        </div> 
    </div>  
</template>

<script setup>
import {  computed, ref, watchEffect  } from 'vue'
const props = defineProps({
    api: String,
    tree: Boolean, 
}) 

const emit = defineEmits(['select'])

const selected = ref(null) 

const render = ref(1) 

const updateRender = () =>  render.value++

const sideRef = ref(true)


watchEffect(() => {
  emit('select', selected.value)
  console.log(selected.value);
  updateRender()
})
  

    
</script>