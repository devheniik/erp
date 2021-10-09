<template>
    <div v-if="!isLoad"> 
        <!-- TABS -->
        <div class="sm:hidden">
            <select  class="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md">
                <option  v-for="(b, i) in buttons" @click="handleClick(i)" :key="i"  :value="b.active">{{ b.label }}</option>
            </select>
        </div>

        <div class="hidden sm:block"> 
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex" aria-label="Tabs"> 
                    <a v-for="(b, i) in buttons" @click="handleClick(i)" :key="i" type="button" :class="[b.active ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm']" >{{ b.label }}</a>
                </nav>
            </div>
        </div>


        <main class="my-5">
            {{ data }}
            <div class="mr-5 mb-24">
                <slot>

                </slot>
            </div>
            
        </main>




        <!-- NAVIGATION -->
        <div class="bg-gray-100">
            <div class="fixed bottom-0 overflow-y-auto border-t border-gray-300 hide-scroll z-0 inline-flex items-center -ml-2 space-x-2 justify-center w-full lg:w-fixed bg-white py-3">
                <!-- <button class="inline-flex items-center px-1 text-xs font-medium">
                    Сущьность
                    <span class="text-secondary-600 ml-2">№</span>
                </button> -->

                <button class="button-hover-box-primary">
                    <SearchIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary" @click="$router.push({ name: 'person-update', params: { id: data.first } })">
                    <ChevronDoubleLeftIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary" @click="$router.push({ name: 'person-update', params: { id: data.prev } })">
                    <ChevronLeftIcon class="h-4 w-4" />
                </button> 
                <div class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-primary-600 focus-within:border-primary-600">
                    <label  class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900 uppercase">{{entity.name}}</label>
                    <input type="text"  class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="№" v-model="entityId" @keyup.enter="$router.push({ name: 'person-update', params: { id: entityId } })" />
                </div>
                <button class="button-hover-box-primary" @click="$router.push({ name: 'person-update', params: { id: data.next } })">
                    <ChevronRightIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary" @click="$router.push({ name: 'person-update', params: { id: data.last } })">
                    <ChevronDoubleRightIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary">
                    <XIcon class="h-4 w-4" />
                </button>
                <!-- <button class="button-hover-box-primary">
                    <PlusIcon class="h-4 w-4" />
                </button> -->
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
import { ref, watch, computed } from 'vue'
import dataLoad from '.././hooks/reload'
const props = defineProps({
    config: Array,
    entity: Object
})

// * tabs ux
const buttons = ref(props.config)

const emit = defineEmits(['update:config'])

const handleClick = (i) => {
    buttons.value.forEach(e => {
        e.active = false
    }) 
    buttons.value[i].active = true      
    emit('update:config', buttons.value)
}


// * firstly data logic 
const entityId = ref(route.params.id)

const { data, isLoad, id, load } = dataLoad(props.entity.api) 




// * runtime logic
watch(computed(() => route.params.id), async () =>{
  await load(route.params.id) 
  entityId.value = route.params.id
  
})




</script>

<style lang="scss" scoped>
.mr-fixed {
    margin-right: calc(100% - 288px);
}


</style>