<template>
    <div v-if="!isLoad" class="w-full mr-5">  
        <div class="w-full flex justify-between m-1">
            <div v-for="(filter, i) in data.filters.response" :key="i">  
                <component v-model="data.filters.request[filter.entity]" :data="filter" :is="filter.component"></component>
            </div>
            
        </div>
        <div v-if="!modalSelect" class="fixed flex items-center mr-5 right-3 bottom-16"> 
            <button @click="createOpen = true" class="btn-circle-primary">
                <PlusSmIcon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>  
        <modal v-model="createOpen" width="w-11/12 lg:w-9/12 md:w-8/12">
            <slot name="create"></slot>
        </modal>
        <modal v-model="editOpen" width="w-8/12">
            <slot name="update"></slot>
        </modal>
        <div class="mt-5">
            <utable @select="!modalSelect ? editOpen = true : $emit('select', $event)" :data="data.result"></utable>
        </div>
        <div>
            <pagination v-model:pagination="data.pagination"></pagination>
        </div>
    </div>
</template>

<script setup>
        import { ref, provide, watchEffect, defineAsyncComponent } from 'vue'
        import hooks from 'h_list'

        const props = defineProps({ 
            api: String,
            modalSelect: Boolean 
        })

        const createOpen = ref(false)
        const editOpen = ref(false)

        const select = e => console.log(e)

        const {
            data,
            isLoad
        } = hooks(props.api)
        
 
</script>
