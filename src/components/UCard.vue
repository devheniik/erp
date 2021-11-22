<template>
    <div v-if="!isLoad" class="h-full" >
        <layout v-model:config="data.tabs" @reload="load({ id: $event })" v-bind="data.global">
            <!-- rid = $event; load()   -->
            <div class="h-card" id="card123321">
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
                load,
                isLoad
            }
        }
    }
</script>

<style lang="scss" scoped>
    .h-card {
        height: calc(100% - 110px);
    }
</style>