<template>
    <div class="flex flex-col flex-grow  border-r border-gray-200 pb-4 bg-white overflow-y-auto  hide-scroll w-full h-full">  
        <div v-if="data && !isLoad" class="mt-1 flex-grow flex flex-col">
            <nav class="flex-1 px-2 bg-white"> 
                <template v-for="item in data" :key="item.name"> 
                    <Disclosure v-if="item.child" as="div" class="space-y-100" v-slot="{ open }"> 
                        <DisclosureButton   :class="[open ? 'bg-secondary-300 text-gray-900' : 'bg-secondary-100 text-gray-600 hover:bg-primary-100 hover:text-gray-900', 'group w-full flex items-center justify-between pr-2 py-1 text-left text-sm font-medium focus:outline-none focus:ring-b focus:ring-primary-500']">
                             
                          <span class=" pl-2 w-full text-center whitespace-nowrap truncate">
                            {{ item.name }} 
                          </span>  
                        </DisclosureButton>
                        <transition
                          enter-active-class="transition duration-100 ease-out"
                          enter-from-class="transform -translate-x-full scale-x-95 opacity-0"
                          enter-to-class="transform scale-x-100 opacity-100"
                          leave-active-class="transition duration-100 ease-out"
                          leave-from-class="transform translate-x-full scale-100 opacity-100"
                          leave-to-class="transform scale-95 opacity-0"
                        > 
                          <DisclosurePanel>
                              <a v-for="subItem in item.child" :key="subItem.name" @click="$emit('select', subItem.link)" :class="[open ? 'bg-secondary-300' : 'bg-secondary-100', 'group w-full flex items-center justify-between py-1 text-sm font-medium text-gray-600  hover:text-gray-900  hover:bg-primary-50']">                                 
                                  <span class=" pl-2 w-full text-center whitespace-nowrap truncate">
                                    {{ subItem.name }}
                                  </span>  
                              </a>
                          </DisclosurePanel>
                        </transition>
                    </Disclosure>
                </template>
            </nav> 
        </div>
    </div>
</template>


<script setup> 
import {ref} from 'vue'
import get from '@/hooks/get'
const props = defineProps({
    api: String
})

    const {
        data,
        load,
        isLoad
    } = get(props.api)

     


 
    
// @click="disabled ? null : [ $log(item.uid), $emit('select', item.uid)]"

// ui 
// const handle = item => {
//     items.for
// }
 
</script>

<style lang="scss" scoped>

</style>