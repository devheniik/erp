<template>
    <div class="flex flex-col flex-grow pb-4  overflow-y-auto  hide-scroll w-full h-full z-20">  
        <div v-if="!isLoad" class="flex-grow flex flex-col">
            <nav class="flex-1"> 
                <template v-for="(item, i) in data" :key="i"> 
                    <Disclosure v-if="item.child" as="div" class="space-y-100" v-slot="{ open }"> 
                        <DisclosureButton   :class="[open ? 'text-gray-800 font-medium bg-gray-50' : ' text-gray-700 ', 'group bg-gray-50 hover:bg-primary-50  w-full flex items-center justify-between pr-2 py-2 text-left text-sm focus:outline-none focus:ring-b focus:ring-primary-500', (i == (data.length - 1) && i == 0 ) ? 'rounded-lg' : i == 0 ? 'rounded-t-lg' : i == (data.length - 1) ? 'rounded-b-lg' : '']">
                             
                          <span class=" pl-2 w-full text-center whitespace-nowrap truncate">
                            {{ item.name }} 
                          </span>  
                        </DisclosureButton>
                        <transition enter-active-class="transition ease-out duration-500" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1" > 
                          <DisclosurePanel class="cursor-pointer">
                          <!-- ; subItem.active = true -->
                              <a v-for="subItem in item.child" :key="subItem.name" @click="$emit('select', subItem.link); selected = subItem" :class="[open ? '' : '', 'bg-white group w-full flex items-center justify-between  text-sm text-gray-600  hover:text-gray-900  hover:bg-gray-50']">                                 
                                  <span  :class="[selected == subItem ? ' text-primary-400' : '',  'pl-2 w-full text-center whitespace-nowrap truncate py-1.5']">
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