<template>
    <div class="h-full w-full"> 
        <modal v-model="createOpen" width="w-11/12 lg:w-9/12 md:w-8/12">
            <slot name="create">

            </slot>
        </modal>
        <div v-if="!isLoad && data" class="w-full h-full  flex flex-col justify-between">
            <div class="w-full">
                <div class="w-full" v-if=data.bar> 
                    <bar v-bind=data.bar.config :data=data.bar.data @reload=load()> 
                    </bar>
                </div>
                
                <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5 ml-2.5 mt-3">
                    <div v-for="(filter, i) in data.filters" :key="i" v-show="filter.filter_show">
                        <group noLabel v-if="filter.filter_type == 'group'" :readonly="filter.readonly" v-bind="filter.bind" v-model="filter.value" @update:modelValue="load"></group>
                        <component v-else @change="load" v-model="filter.value" :data="filter" :start_data="data.filters" :is="filter.filter_type"></component>
                    </div>
                </div>

                <div v-if="data.buttons" class="flex justify-end mx-2.5 mt-5"> 
                        <ubutton v-for="(button, i) in data.buttons" :key="i" v-bind="button"> </ubutton> 
                </div>

                <div v-if="!modalSelect" class="fixed flex items-center mr-5 right-3 bottom-16 z-40">
                    <button @click="createOpen = true" class="btn-circle-primary">
                        <PlusSmIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                
                <div class="my-5 mr-5">
                    <utable @sort="sort($event)" :modalSelect=modalSelect @select="select($event)" :headers="data.headers" v-model:body="data.data" :sort="data.sort"></utable>
                </div>
            </div> 

            <div class="w-full mb-1.5">
                <pagination @change="load" v-model:headers="data.headers" :pagination="data.meta.pagination" v-model:page="data.page" v-model:limit="data.limit"></pagination>
            </div>
        </div>
        <loading v-if="isReload"></loading> 
        <!-- modalSelect ? $emit('select', $event) : -->
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

    const app = getCurrentInstance()

    // * hooks
    import table from '@/hooks/table'


    const props = defineProps({
        api: String,
        params: Object,
        modalSelect: Boolean,
        route_card: String
    })

    const emit = defineEmits(['select']) 

    const {
        data,
        load,
        isLoad,
        isReload
    } = table(props.api, props.params)


    // * props & emits init

    
    const select = (data) => {  
        if(props.modalSelect){
            emit('select', data)
        } 
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