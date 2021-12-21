<template>
<div v-if="!isLoad" class="h-full">
    <layout v-model:config="data.tabs" @update:config="check_print()" @reload="load({ id: $event })" v-bind="data.global"> 
        <div class="card">
            <component v-for="(component, i) in data.tabs" :key="i" v-show="component.active" :is="component.component" v-bind="component.config">
            </component>
        </div>
    </layout>
</div>
</template>

<script>
import {
    ref,
    computed,
    defineAsyncComponent,
    getCurrentInstance
} from 'vue'
import {
    useRoute, useRouter
} from 'vue-router'
import get from '@/hooks/get'
import layout from '.././layouts/Card.vue'
// * api import 


export default {
    components: {
        layout
    },
    props: {
        api: String
    },
    setup(props) {
        const route = useRoute() 
        const router = useRouter() 
        const app = getCurrentInstance()


        const check_print = () => {
            if (data.value.tabs.find(e => e.active)?.config?.url) {
                window.open(router.resolve({ name: 'print', params: { api: data.value.tabs.find(e => e.active).config.url }}).href, '_blank') 
                // app.appContext.config.globalProperties.$open(router.resolve({ name: 'print', params: { api: data.value.tabs.find(e => e.active).config.url }}))
                // router.push({ name: 'print', params: { api: data.value.tabs.find(e => e.active).config.url }}))
                data.value.tabs.forEach(e => {
                  e.active = false  
                })
                data.value.tabs[0].active = true
            }
        }

        

        const rid = ref(route.params.id)

        const {
            data,
            load,
            isLoad
        } = get(props.api, {
            id: rid.value
        })



        return {
            data,
            check_print,
            load,
            isLoad
        }
    }
}
</script>

<style lang="postcss" scoped>
.card {
    height: calc(100% - 58px);
}
</style>