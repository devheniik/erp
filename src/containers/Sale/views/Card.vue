<template>
    <layout v-model:config="config" v-bind="{
            name: 'заказ',
            links: links,
            route_name: 'sale-update',
            api: list
        }">  
        <div v-show="view.active" v-for="(view, i) in config" :key="i"  class="space-y-5"> 
            <component v-for="(component, i) in view.components" :key="i" :is="component.component" v-bind="component.data">
                {{component.component}}
            </component>
        </div>
    </layout>
</template>

<script>
import { ref, computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
// * api import 
import list from '../api/list'
import links from '../api/links'

// * component import
import update from '../components/update.vue'

//const update = defineAsyncComponent
import specifications from '../components/specifications.vue'

// * layout import
import layout from '@/layouts/Card.vue'

// * data import 
import d_config from '../config/card'

export default {
    components: {
        update, layout
    },
    setup(props) {
        const route = useRoute()

        const config = ref([
            {
                label: 'Карточка',
                active: true,
                components: [
                    {
                        component: 'update'
                    }
                ]
            },
            {
                label: 'Спецификация',
                active: false,
                components: [
                    {
                        component: 'bar'
                    },
                    {
                        component: 'viewer',
                        data: {
                            api: `sales/orders/get/${route.params.id}/specifications/data-table` 
                        }
                    }
                ]
            },
            {
                label: 'Операция',
                active: false,
                components: [
                    {
                        component: 'bar'
                    },
                    {
                        component: 'viewer',
                        api: `sales/orders/get/${route.params.id}/specifications/data-table`
                    }
                ]
            }
        ])
 
        

        return {
            list,
            links,
            config
        }
    }
}









</script>

<style lang="scss" scoped>

</style>