<template>
<div class="w-full">
    <modal v-model="show_modal" width="w-6/12">
        <component :params="params" :is="modal_name" @ready="ready($event)"></component>
    </modal>
    <div class="w-full flex items-center mb-5">
        <!-- <div class="hidden sm:block w-full"> -->
            <nav class="relative z-50 shadow bg-gray-100 flex justify-start divide-gray-200 w-full" aria-label="Tabs">
                <div v-for="(tab, tabIdx) in tabs" :key="tab.name" @click="clear(tabIdx, !tab.current)">
                    <a :class="[tab.current ? 'text-gray-900 bg-gray-200' : 'text-gray-800 hover:text-gray-900', 'mx-0.5 cursor-pointer px-2 h-6 flex items-center text-sm font-medium justify-center hover:bg-gray-200 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
                        <span>{{ tab.name }}</span>
                    </a> 
                    <div v-if="tab.child.length > 0 && tab.current" class="flex flex-col absolute rounded-lg bg-gray-100 bg-opacity-95 p-1 m-1 border">
                        <div v-for="(subTab, subTabIdx) in  tab.child" :key="subTabIdx">
                            <div v-if="subTab.type === 'divider'" class="my-1 mx-3  h-[1px] bg-gray-400">
                            </div>
                            <div v-else @click="handle(subTab)" class="text-gray-800 cursor-pointer text-left font-medium hover:text-gray-100 rounded-lg hover:bg-primary-500 ">
                                <a class="px-3">
                                    <span class="text-sm whitespace-nowrap truncate">{{ subTab.name }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        <!-- </div> -->
    </div>
</div>
</template>

<script setup>
import router from "@/router"
import {
    ref,
    getCurrentInstance
} from 'vue'
import send from '@api'
const app = getCurrentInstance()


const props = defineProps({
    params: Object,
    action_param_name: String,
    promt_param_name: String,
    data: Array
})

const emit = defineEmits(['reload'])

const modal_name = ref(null)

const show_modal = ref(false)

const params = ref(props.params)
const tabs = ref(props.data)


const clear = (i, bool) => {
    tabs.value.forEach(e => {
        e.current = false
    })
    tabs.value[i].current = bool
}

const ready = (response) => {
    console.log(response);
    show_modal.value = false
    response != false ? app.appContext.config.globalProperties.$toast(JSON.parse(JSON.stringify(response))) : null
    emit('reload')
}

const handle = async (obj) => {
    let response = false
    switch (obj.type) {
        case 'promt':
            const value = prompt(obj.promt_message ?? '')
            params.value[props.promt_param_name] = value
            params.value[props.action_param_name] = obj.value
            response = await send(obj.url, params.value)
            break;

        case 'action':
            params.value[props.action_param_name] = obj.value
            response = await send(obj.url, params.value)
            break;

        case 'modal':
            modal_name.value = obj.value
            show_modal.value = true
            break;

        case 'window':
            app.appContext.config.globalProperties.$open(router.resolve({ name: obj.value, query: obj?.query ?? {}, params: obj?.params ?? {} }))
            break;

    }


    // response != false ? app.appContext.config.globalProperties.$toast(JSON.parse(JSON.stringify(response))) : null
}
</script>

<style lang="scss" scoped>

</style>