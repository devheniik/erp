<template>
    <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto h-max bottom-scroll  sm:-mx-6 lg:-mx-8 ">
                    <div class="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
                        <div class="border-b border-gray-200 sm:rounded-lg">
                            <table class="w-full divide-y divide-gray-200">
                                <thead class="bg-primary-50 rounded-xl">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> 
                                            <Switch :value="isAllSelect" @click="allSelect(!isAllSelect)" :class="[isAllSelect ? 'bg-indigo-600' : 'bg-gray-200', 'relative z-0 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                                                <span aria-hidden="true" :class="[isAllSelect ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                                            </Switch>                             
                                        </th> 
                                        <th v-for="(header, i) in headers" :key="i" v-show="header.show" @click="$emit('sort', header.value)" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            <div class="flex flex-row items-center">
                                                <span> 
                                                    {{ header.label }}
                                                </span>
                                                <arrow-narrow-up-icon v-if="sort && sort.field == header.value && sort.order == 'asc' " class="h-3 w-3"></arrow-narrow-up-icon>
                                                <arrow-narrow-down-icon v-else-if="sort && sort.field == header.value && sort.order == 'desc'" class="h-3 w-3"></arrow-narrow-down-icon>
                                            </div>
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="col in body" :key="col.uid" :class="t_color(col.color)"> 
                                        <td class="px-6 py-4 whitespace-nowrap text-left text-sm text-primary-600 hover:underline cursor-pointer"> 
                                            <Switch v-model="col.selected" :class="[col.selected ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                                                <span aria-hidden="true" :class="[col.selected ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                                            </Switch>  
                                        </td>   
                                        <td @click="modalSelect ? $emit('select', col) : $open($router.resolve({name: 'person-update', params: { id: col.uid }}))" class="px-6 py-4 whitespace-nowrap text-left text-sm text-primary-600 hover:underline cursor-pointer"> 
                                            {{ col.uid }}
                                        </td> 
                                        <td  v-for="(field, i) in col.value" :key="i" class="px-6 py-4 whitespace-nowrap text-sm text-left">
                                             {{ field }}
                                        </td> 
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
</template>


<script setup>
import t_color from '@/functions/t_color'
import {ref, computed} from 'vue'
const props = defineProps({
    headers: Array,
    body: Array, 
    modalSelect: Boolean,
    sort: Object
})

    const emit = defineEmits(['select', 'sort', 'update:body'])

    const isAllSelect = computed(() => { 
        let res = true
        props.body.forEach(e => { 
            if (e.selected == undefined) {
                console.log(1);
                res = false
            }

            if (e.selected == false) {
                res = false
            }
        }) 
        return res
    })

    const allSelect = (bool) => {
        let data = props.body
        data.forEach(e => {
            e.selected = bool
        })  
        emit('update:body', data)
    }



</script>



<style lang="scss" scoped> 
    .bottom-scroll{
        scrollbar-width: thin;
        scrollbar-color: #2563eb #eff6ff;
    }

    .scroll-left{
        direction: rtl;
    }
</style>