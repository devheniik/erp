<template>
    <layout v-model:config="config" v-bind="{
            name: 'товвар',
            pagination_api: pagination,
            route_name: 'product-update',
            api: get,
            current: component 
        }">
        <update v-show="component == 'update'"></update>  
    </layout>
</template>

<script setup>
import { ref, computed } from 'vue'

// * api import 
import get from '../api/get'
import pagination from '../api/pagination'

// * component import
import update from '../components/update.vue' 

// * layout import
import layout from '@/layouts/Card.vue'

// * data import 
import d_config from '../config/card'

const config = ref(d_config)

const component = computed(() => config.value.find(e => e.active == true).component)



</script>

<style lang="scss" scoped>

</style>