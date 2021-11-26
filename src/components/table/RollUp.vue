<template>
    <div class="flex flex-col flex-grow  border-r border-gray-200 pb-4   overflow-y-auto  hide-scroll w-full h-full z-20">  
        <div v-if="!isLoad" class="flex-grow flex flex-col">
            <nav class="flex-1 border"> 
                <template v-for="item in data" :key="item.name"> 
                    <Disclosure v-if="item.child" as="div" class="space-y-100" v-slot="{ open }"> 
                        <DisclosureButton   :class="[open ? ' text-gray-900' : ' text-gray-600 hover:bg-primary-100 hover:text-gray-900', 'group bg-gray-100 border-y border w-full flex items-center justify-between pr-2 py-4 text-left text-sm font-medium focus:outline-none focus:ring-b focus:ring-primary-500']">
                             
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
                          <DisclosurePanel class="cursor-pointer">
                          <!-- ; subItem.active = true -->
                              <a v-for="subItem in item.child" :key="subItem.name" @click="$emit('select', subItem.link); selected = subItem" :class="[open ? '' : '', 'bg-white group w-full flex items-center justify-between  text-sm font-medium text-gray-600  hover:text-gray-900  hover:bg-primary-50']">                                 
                                  <span  :class="[selected == subItem ? 'bg-primary-200' : '',  'pl-2 w-full text-center whitespace-nowrap truncate py-3']">
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

    const selected = ref(null)

     


 
    
// @click="disabled ? null : [ $log(item.uid), $emit('select', item.uid)]"

// ui 
// const handle = item => {
//     items.for
// }
 
</script>

<style lang="scss" scoped>

</style>