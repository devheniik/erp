<template>
    <div class="w-full flex items-center mb-5">
        <div class="hidden sm:block w-full">
            <nav class="relative z-50 rounded-lg shadow flex divide-x  divide-gray-200 w-full" aria-label="Tabs">
                <div v-for="(tab, tabIdx) in tabs" :key="tab.name" class="w-full " @click="clear(tabIdx, !tab.current)">
                    <a  :class="[tab.current ? 'text-gray-50 border-b-2 border-gray-800 bg-gray-800 ' : 'text-gray-100 hover:text-gray-50 bg-gray-700 ', tabIdx === 0 ? 'rounded-tl-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-tr-lg' : '', ' h-8 flex items-center text-sm font-medium justify-center hover:bg-gray-800 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
                        <span>{{ tab.name }}</span> 
                    </a>

                    <div v-if="tab.child.length > 0 && tab.current" class="flex flex-col absolute bg-gray-700 divide-y border">
                        <div v-for="(subTab, subTabIdx) in tab.child" :key="subTabIdx" class="text-gray-200 hover:text-gray-100 hover:bg-gray-800">
                            <a class="px-3 py-4 ">
                                <span class="text-sm">{{ subTab.name }}</span> 
                            </a>
                        </div>
                    </div> 
                </div> 
            </nav>
        </div>
    </div>
</template>

<script setup>
import data from '../../data/appdevtools-json'
import {ref} from 'vue'

const  tabs = ref(data)
 

const clear = (i, bool) => {
    tabs.value.forEach(e => {
        e.current = false
    }) 
    tabs.value[i].current = bool
}

</script>

<style lang="scss" scoped>

</style>