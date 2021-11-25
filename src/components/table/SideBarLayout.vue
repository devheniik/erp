<template>
    <div v-if="!isLoad" class="flex flex-col flex-grow  border-r border-gray-200 pb-4 bg-white overflow-y-auto w-full h-full hide-scroll">  
        <div class="mt-1 flex-grow flex flex-col ">
            <nav class="flex-1 px-2 bg-white ">   
                <template v-for="item in data.data" :key="item.name"> 
                    <Disclosure v-if="item.category.data" as="div" class="space-y-1" v-slot="{ open }"> 
                        <DisclosureButton  @click="disabled ? null : item.uid ? [ $log(item.uid), $emit('select', item.uid) ] : nul" :class="[item.current ? 'bg-gray-100 text-secondary-900' : 'bg-white text-secondary-600 hover:bg-secondary-100 hover:text-secondary-900', 'group w-full flex items-center justify-between pr-2 py-1 text-left text-sm  rounded-md focus:outline-none focus:ring-b focus:ring-primary-500']">
                            <div class="flex flex-row items-center overflow-x-hidden">
                            <ChevronDownIcon :class="[open ? 'text-secondary-400' : 'text-secondary-300 -rotate-90', 'mx-2  flex-shrink-0 h-3 w-3 transform group-hover:text-secondary-400 transition-colors ease-in-out duration-150']" />
                                <span class="whitespace-nowrap truncate">
                                    {{ item.name }} 
                                </span> 
                            </div> 
                        </DisclosureButton>

                        <DisclosurePanel class="cursor-pointer">
                            <a v-for="subItem in item.category.data" :key="subItem.name" @click="subItem.link ? $emit('select', subItem.link) : null" class="group  pr-2 pl-7 w-auto flex items-center justify-between py-1 text-sm  text-secondary-600 rounded-md hover:text-secondary-900 bg-white hover:bg-secondary-100">                              
                                <div class="flex flex-row items-center overflow-x-hidden">
                                <span class="whitespace-nowrap truncate">
                                    {{ subItem.name }} 
                                </span> 
                            </div> 
                                <span v-if="subItem.count && subItem.count > 0" :class="[subItem.current ? ' bg-gray-800' : 'text-secondary-100 bg-ptimary-400', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
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
  
</script>

<style lang="scss" scoped>

</style>