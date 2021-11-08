<template>
    <div>
        <!-- @click="disabled ? null : item.uid ? [ $log(item.uid), $emit('select', item.uid) ] : nul" -->
        <div>
            <div @click="load(); current = !current"
                :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-gray-900', 'group w-full flex items-center justify-between pr-2 py-1 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-b focus:ring-primary-500']">
                <div class="flex flex-row items-center overflow-x-hidden">
                    <StopIcon class="h-3 w-3 text-primary-400 mx-3" />
                    <span class="whitespace-nowrap truncate">
                        {{ item.a_s1 }}
                    </span>
                </div>
                <ChevronDownIcon v-if="item.childs > 0" :class="[current ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-3 w-3 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" />
            </div>
            <div v-if="current && child.length" class="mt-1">
                <git @select="$emit('select', $event)" v-for="item in child" :api="api" :item="item" :key="item.name" class="p-1"></git>
            </div>
        </div>


        <!-- <DisclosurePanel>
                <a  v-for="subItem in item.category.data" :key="subItem.name"
                    @click="subItem.uid ? $emit('select', subItem.uid) : null"
                    class="group w-full flex items-center justify-between py-1 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 bg-white hover:bg-primary-50">
                    <div class="flex flex-wrap items-center whitespace-nowrap truncate">
                        <StopIcon class="h-3 w-3 ml-8 mr-3 text-primary-600" />
                        <span class=" whitespace-nowrap truncate">
                            {{ subItem.name }}
                        </span>

                    </div>
                    <span v-if="subItem.count && subItem.count > 0"
                        :class="[subItem.current ? ' bg-gray-800' : 'text-gray-100 bg-ptimary-400 group-hover:bg-primary-300', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
                        {{ subItem.count }}
                    </span>
                </a>
            </DisclosurePanel> -->
    </div>
</template>

<script setup>
import {ref} from 'vue'
import get from '@api'
    const props = defineProps({
        item: Object,
        api: String
    })

    const emit = defineEmits(['select'])

    
    
    const child = ref([])
    const current = ref(false)

    const load = async () => {
        if (props.item.childs == 0) { 
            emit('select', props.item.uid)
        } 
        if (child.value.length > 0) {
            return
        }  
        if (props.item.childs > 0) {
            child.value = (await get(props.api, { father: props.item.uid})).data
        } 
    } 

</script>

<style lang="scss" scoped>

</style>