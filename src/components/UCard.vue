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
    defineAsyncComponent
} from 'vue'
import {
    useRoute
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

        const check_print = () => {
            if (data.value.tabs.find(e => e.active)?.config?.url) {
                window.open(data.value.tabs.find(e => e.active).config.url, '_blank')  
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