<template>
<div :key="render_key" class="h-full w-full">
    <div v-if="!isLoad && data" class="w-full min-h-full flex flex-col justify-between">
        <form ref="form" @submit.prevent class="w-full h-full">

            <!-- BAR -->
            <div class="w-full" v-if=data.bar>
                <bar v-bind=data.bar.config :data=data.bar.data :body_data="data" @metki="data = $event" @reload=load()>
                </bar>
            </div>

            <!-- Titles and clear button -->
            <div class="w-full flex flex-row items-center  ml-2.5 mt-3 justify-between">
                <p class="text-2xl text-gray-700 whitespace-nowrap">{{ data.title ?? 'Таблица' }}</p>
                <div>
                    <button @click="filter_show = !filter_show" type="button" class="inline-flex items-center  p-2 mr-2 rounded-full shadow-sm text-primary-500 hover:bg-gray-100 hover:shadow-md">
                        <FilterIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button @click="load" type="button" class="inline-flex items-center  p-2 mr-2 rounded-full shadow-sm text-success-500 hover:bg-gray-100 hover:shadow-md">
                        <RefreshIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button @click="reLoad(); render_key++" type="button" class="inline-flex items-center  p-2 mr-5 rounded-full shadow-sm text-danger-500 hover:bg-gray-100 hover:shadow-md">
                        <XIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </div>

            <!-- Components Start -->
            <div v-if="data.components?.start.length" class="w-full my-5 mx-2">
                <component v-for="(component, i) in data.components?.start" :key="i" :data="component.data" v-bind="component.config" @edit="edit($event)" :is="component.component"></component>
            </div>
            
            <!-- Filters -->
            <div v-if="filter_show && data.filters?.length" class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5 ml-2.5 mt-3">
                <!-- :class="[filter.filter_type == 'list-input' ? 'col-span-2' : '']" -->
                <div :class="[filter.filter_type == 'list-input' ? 'col-span-2' : '']" v-for="(filter, i) in data.filters" :key="i" v-show="filter.filter_show">
                    <group noLabel v-if="filter.filter_type == 'group'" :readonly="filter.readonly" v-bind="filter.bind" v-model="filter.value" @update:modelValue="load"></group>
                    <component v-else @change="load" @touch="load" v-model="filter.value" :data="filter" :start_data="data.filters" :is="filter.filter_type"></component>
                </div>
            </div>

            <!-- Buttons -->
            <div v-if="data.buttons?.length" class="flex justify-end ml-2.5 mr-5 mt-5">
                <ubutton v-for="(button, i) in data.buttons" :key="i" v-bind="button"> </ubutton>
            </div>

            <!-- Table -->
            <div class="my-5 mr-5">
                <utable  @sort="sort($event)" :v-bind="{ row: data.show_row_select ?? false, select: data.show_row_burgers ?? false }" :modalSelect=modalSelect @select="select($event)" :headers="data.headers" v-model:body="data.data" :sort="data.sort"></utable>
            </div>

            <!-- Compoents End -->
            <div class="w-full my-5 mx-2" v-if="data?.components?.end?.length">
                <component @save="save" v-for="(component, i) in data.components.end" :key="i" :data="component.data" v-bind="component.config" :is="component.component"></component>
            </div>
        </form> 
        <!-- Pagination -->
        <div class="w-full mb-1.5">
            <pagination v-if="data.meta?.pagination" @change="load" v-model:headers="data.headers" :pagination="data.meta.pagination" v-model:page="data.page" v-model:limit="data.limit"></pagination>
        </div>
    </div>
    <loading v-if="isReload"></loading>
</div>
</template>

<script setup>
import {
    ref,
    provide,
    inject,
    watchEffect,
    watch,
    onUpdated,
    getCurrentInstance
} from 'vue'
import post from '@api'

const app = getCurrentInstance()

const render_key = ref(1)

const filter_show = ref(true)

// * hooks
import table from '@/hooks/table'


const props = defineProps({
    api: String,
    params: Object,
    root_filters: Array,
    modalSelect: Boolean
})

const emit = defineEmits(['select'])

const {
    data,
    load,
    isLoad,
    isReload,
    reLoad
} = table(props.api, props.params)


// * props & emits init


const select = (data) => {
    if (props.modalSelect) {
        console.log(data, 'viewer');
        emit('select', data)
    }
}

// * edit 
const form = ref(null)
const save = async (e) => { 
    const formData = new FormData(form.value)  
    if (e.params) {
       for (const [key, value] of Object.entries(e.params)) {
           formData.append(key, value)
        }
    } 
 
    // formData.append(e)
    if (data.value.edit_api) {
        await post(data.value.edit_api, formData) 
    } else if (e.api) { 
        await post(e.api, formData)  
    }
    // await post(data.edit_api, formData)
}




// * create ref
const createOpen = ref(false)



// * sort 





const sort = name => {
    data.value.sort.field = name
    if (data.value.sort.order == 'asc' && data.value.sort.field == name) {
        data.value.sort.order = 'desc'
    } else {
        data.value.sort.order = 'asc'
    }
    console.log(data.value.sort)
    load()
}


// watchEffect(() => {
//     console.log('view', props.api);
//     load()
// });
</script>