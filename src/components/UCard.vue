<template>
    <div v-if="!isLoad">
        <layout v-model:config="data.tabs" v-bind="data.global">     
                <component :is="data.tabs.find(e => e.active).component" v-bind="data.tabs.find(e => e.active).config"> 
                </component> 
        </layout>
    </div>    
</template>

<script>
import { ref, computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
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

        const {
            data,
            load,
            isLoad
        } = get(props.api, { id: route.params.id }) 
 
        

        return {
             data,
            load,
            isLoad
        }
    }
}  
</script>

<style lang="scss" scoped>

</style>