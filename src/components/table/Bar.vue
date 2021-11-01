<template>
    <div class="w-full flex items-center mb-5">
        <div class="hidden sm:block w-full">
            <nav class="relative z-40 rounded-lg shadow flex divide-x  divide-gray-200 w-full" aria-label="Tabs">
                <div v-for="(tab, tabIdx) in tabs" :key="tab.name" class="w-full " @click="clear(tabIdx, !tab.current)">
                    <a  :class="[tab.current ? 'text-gray-50 border-b-2 border-gray-800 bg-gray-800 ' : 'text-gray-100 hover:text-gray-50 bg-gray-700 ', ' h-8 flex items-center text-sm font-medium justify-center hover:bg-gray-800 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
                        <span>{{ tab.name }}</span> 
                    </a>

                    <div v-if="tab.child.length > 0 && tab.current" class="flex flex-col absolute bg-gray-700  rounded-lg border ">
                        <div v-for="(subTab, subTabIdx) in  tab.child" :key="subTabIdx" @click="handle(subTab)" class="text-gray-200 py-1 hover:text-gray-100 rounded-lg hover:bg-gray-800">
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

import {ref, getCurrentInstance} from 'vue'
import send from '@api'
const app = getCurrentInstance()
const props = defineProps({
    params: Object,
    action_param_name: String,
    promt_param_name: String,
    data: Array
})

const params = ref(props.params)
const tabs = ref(props.data)
 

const clear = (i, bool) => {
    tabs.value.forEach(e => {
        e.current = false
    }) 
    tabs.value[i].current = bool
}

const  handle = async (obj) => {
        let response = {}
        switch (obj.type){
            case 'promt':
                const value = prompt("Введите штрих-код", "")
                params.value[props.promt_param_name] = value
                params.value[props.action_param_name] = obj.value
                response = await send(obj.url, params.value)
                break;

            case 'action':
                params.value[props.action_param_name] = obj.value
                response = await send(obj.url, params.value) 
                break;

            // case 'route':
            //     send(obj.value, config.params)
            //     break;

        } 
        app.config.globalProperties.$toast(response)
    }

</script>

<style lang="scss" scoped>

</style>