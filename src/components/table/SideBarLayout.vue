<template>
    <div class="flex flex-col flex-grow  border-r border-gray-200 pb-4 bg-white overflow-y-auto w-full">  
        <div v-if="data" class="mt-1 flex-grow flex flex-col">
            <nav class="flex-1 px-2 bg-white">
                <template v-for="item in data" :key="item.name"> 
                    <Disclosure v-if="item.category.data" as="div" class="space-y-1" v-slot="{ open }"> 
                        <DisclosureButton :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-primary-100 hover:text-gray-900', 'group w-full flex items-center justify-between pr-2 py-1 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-b focus:ring-primary-500']">
                            <div class="flex flex-rpw items-center">
                                <StopIcon class="h-3 w-3 text-primary-400 mx-3" />
                                <span class="  whitespace-nowrap truncate">
                                    {{ item.name }}
                                </span> 
                            </div> 
                            <ChevronDownIcon :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-3 w-3 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" />
                        </DisclosureButton>

                        <DisclosurePanel>
                            <a v-for="subItem in item.category.data" :key="subItem.name" @click="$emit('select', subItem.uid)" class="group w-full flex items-center justify-between py-1 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 bg-white hover:bg-primary-50">
                                <div class="flex flex-wrap items-center whitespace-nowrap truncate">
                                    <StopIcon class="h-3 w-3 ml-8 mr-3 text-primary-600" />
                                    {{ subItem.name }}
                                </div> 
                                <span v-if="subItem.count && subItem.count > 0" :class="[subItem.current ? ' bg-gray-800' : 'text-gray-100 bg-ptimary-400 group-hover:bg-primary-300', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
                                    {{ subItem.count }}
                                </span>
                            </a>
                        </DisclosurePanel>
                    </Disclosure>
                </template>
            </nav> 
        </div>
    </div>
</template>


<script setup> 
import get from '@/hooks/get'
const props = defineProps({
    api: String
})

    const {
        data,
        load,
        isLoad
    } = get(props.api)
 
    


// ui 
// const handle = item => {
//     items.for
// }
 
</script>

<style lang="scss" scoped>

</style>