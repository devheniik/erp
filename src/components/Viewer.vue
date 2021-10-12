<template>
    <modal v-model="createOpen" width="w-11/12 lg:w-9/12 md:w-8/12">
        <slot name="create"></slot>
    </modal>
    <div v-if="!isLoad" class="w-full h-full mr-5">
        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5">
            <div v-for="(filter, i) in data.filters" :key="i">
                <component @change="[data.meta.pagination.current_page = 1 , load]" v-model="filter.value" :data="filter" :is="filter.component"></component>
            </div>
        </div>
        <div v-if="!modalSelect" class="fixed flex items-center mr-5 right-3 bottom-16 z-50">
            <button @click="createOpen = true" class="btn-circle-primary">
                <PlusSmIcon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <div class="mt-5">
            <utable @sort="sort($event)" @select="!modalSelect ? $router.push({ name: route_card, params: { id: $event.uid }}) : $emit('select', $event)" :data="{ headers: data.headers, body: data.data}" :sort="{ sort: data.sort, sort_order: data.sort_order}"></utable>
        </div>
        <div> 
            <pagination class="w-full"  @change="load" :pagination="data.meta.pagination" v-model:page="data.page"></pagination> 
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        provide,
        inject,
        watchEffect,
        watch,
        onUpdated
    } from 'vue'

    // * hooks
    import table from '@/hooks/table'

    // * props & emits init

    const props = defineProps({
        api: String,
        modalSelect: Boolean,
        route_card: String
    })

    const emits = defineEmits(['select'])

    // * create ref
    const createOpen = ref(false) 

    // * sort 


    


    const sort = name => {
        data.value.sort = name
        if (data.value.sort_order == 'asc') {
            data.value.sort_order == 'desc'
            return
        }
        data.value.sort_order == 'asc' 
    }

    const {
        data,
        load,
        isLoad
    } = table(props.api)

    // watchEffect(() => {
    //     console.log('view', props.api);
    //     load()
    // });



    
 
 
 

    

</script>