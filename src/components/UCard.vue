<template>
    <div v-if="!isLoad" class="h-card">
        <layout v-model:config="data.tabs" @reload="load({ id: $event })" v-bind="data.global">   
        <!-- rid = $event; load()   -->
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
        
        const rid = ref(route.params.id)

        const {
            data,
            load,
            isLoad
        } = get(props.api, { id: rid.value }) 
 
        

        return {
            data,
            load,
            isLoad
        }
    }
}  
</script>

<style lang="scss" scoped>
.h-card{
    height: calc(100% - 110px);
}
</style>