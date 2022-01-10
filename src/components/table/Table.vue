<template>
<div class="flex flex-col">
    <div class="-my-2 bg-white overflow-x-auto overflow-y-visible h-max  bottom-scroll  sm:-mx-6 lg:-mx-8 ">
        <div class="py-1 align-middle inline-block w-full sm:px-6 lg:px-8">
            <div :class="[body.length ? 'border-b border-gray-200' : '',  'sm:rounded-lg']">
                <table class="w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50 rounded-xl">
                        <tr> 
                            <th v-show="isRow" class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <div class="rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                    <span class="sr-only">Open options</span>
                                    <MenuIcon class="h-5 w-5" aria-hidden="true" />
                                </div>
                            </th>
                            <th  class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input :checked="isAllSelect" @click="allSelect(!isAllSelect)" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded" />
                                <!-- <Switch :value="isAllSelect" @click="allSelect(!isAllSelect)" :class="[isAllSelect ? 'bg-primary-600' : 'bg-gray-200', 'relative z-0 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500']">
                                    <span aria-hidden="true" :class="[isAllSelect ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                                </Switch> -->
                            </th>
                            <th v-for="(header, i) in headers" :key="i" v-show="header.show" @click="$emit('sort', header.value)" scope="col" class="px-4 py-2 text-left text-xs font-normal text-gray-500 uppercase tracking-wider  ">
                                <div class="flex  cursor-pointer flex-row items-center">
                                    <span class="whitespace-nowrap flex flex-row items-center w-full text-left">
                                            {{ header.label }}
                                        <arrow-narrow-up-icon
                                            v-if="sort && sort.field == header.value && sort.order == 'asc'"
                                            class="h-3 w-3"></arrow-narrow-up-icon>
                                        <arrow-narrow-down-icon
                                            v-else-if="sort && sort.field == header.value && sort.order == 'desc'"
                                            class="h-3 w-3"></arrow-narrow-down-icon>
                                            </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="col in body" :key="col.uid" :class="t_color(col.color)">  
                            <td v-if="col?.row?.length > 0" class="px-4 py-2 whitespace-nowrap text-left text-base text-primary-600 hover:underline cursor-pointer">
                                <row :data="col.row"></row>
                            </td>
                            <td class="px-4 py-2 whitespace-nowrap text-left text-base text-primary-600 hover:underline cursor-pointer">
                            <input :checked="col.selected" @click="col.selected = !col.selected" type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded" />

                                <!-- <Switch v-model="col.selected" :class="[col.selected ? 'bg-primary-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500']">
                                    <span aria-hidden="true" :class="[col.selected ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                                </Switch> -->
                            </td>
                            <td v-for="(field, i) in col.value" :key="i" class="px-4 py-2 whitespace-nowrap text-base font-light text-left text-gray-900">
                                <div v-if="typeof(field) === 'object' && field?.component">
                                    <component :is="field.component" v-bind="field.config" v-model="field.value"></component>
                                </div>
                                <div v-else-if="typeof(field) === 'object'" class="text-primary-400 hover:underline cursor-pointer" @click="modalSelect ? $emit('select', field.data) : field.type == 'new-window' ? $open($router.resolve(field.data)) : field.type == 'window' ? $open($router.resolve({ name: field.name, params: field.params })) : field.type == 'select_api_params' ? $emit('select',field.data) : null">
                                    {{field?.label}}
                                </div>
                                <div class="text-primary-400 hover:underline cursor-pointer" v-else-if="finder && i == 1 && typeof(field) !== 'object'" @click="$emit('select', col.value)" >
                                    {{field}}
                                </div>
                                <div v-else>
                                    {{ field }}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <empty v-if="body.length == 0" v-bind="{ title: 'Создайте заказ' }"></empty>

            </div>
        </div>
    </div>

</div>
</template>


<script setup>
import router from "@/router"
import t_color from '@/functions/t_color'
import {
    ref,
    computed,
    getCurrentInstance
} from 'vue'
const props = defineProps({
    headers: Array,
    //row: Boolean,
    select: Boolean,
    body: Array,
    modalSelect: Boolean,
    finder: Boolean,
    sort: Object
})

const isRow = ref(props?.body.length ? props?.body[0]?.row?.length > 0 : false)


const app = getCurrentInstance()

const emit = defineEmits(['select', 'sort', 'update:body'])

const isAllSelect = computed(() => {
    let res = true
    if (props.body.length > 0) {
        props.body.forEach(e => {
            if (e.selected == undefined) {
                res = false
            }

            if (e.selected == false) {
                res = false
            }
        })
    }

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
.bottom-scroll {
    scrollbar-width: thin;
    scrollbar-color: #e0e0e0 #f0f1f1;
}

.scroll-left {
    direction: rtl;
}
</style>