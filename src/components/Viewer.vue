<template>
    <modal v-model="createOpen" width="w-11/12 lg:w-9/12 md:w-8/12">
        <slot name="create"></slot>
    </modal>
    <div v-if="!isLoad" class="w-full mr-5">
        <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5">
            <div v-for="(filter, i) in data.filters" :key="i">
                <component @change="[pagination_reload, load]" v-model="filter.value" :data="filter" :is="filter.component"></component>
            </div>
        </div>
        <div v-if="!modalSelect" class="fixed flex items-center mr-5 right-3 bottom-16 z-50">
            <button @click="createOpen = true" class="btn-circle-primary">
                <PlusSmIcon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <div class="mt-5">
            <utable @select="!modalSelect ? [editOpen = true, editId = $event.uid] : $emit('select', $event)"
                :data="{ headers: data.headers, body: data.data}" r_update="person-update"></utable>
        </div>
        <div>

            <pagination @change="load" v-model:pagination="data.meta.pagination"></pagination>
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        provide,
        watchEffect,
        watch,
        onUpdated
    } from 'vue'
    import hooks from 'h_list'

    const props = defineProps({
        api: Function,
        modalSelect: Boolean
    })

    const createOpen = ref(false)
    // const editOpen = ref(false)
    const editId = ref(null)

    const select = e => console.log(e)

    const pagination_reload = () => {
        data.value.meta.pagination.current_page = 1 
    }

    const {
        data,
        load,
        isLoad
    } = hooks(props.api)
</script>