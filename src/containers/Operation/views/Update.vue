<template>
    <layout v-model:config="config" v-bind="{
            name: 'операция',
            links: links,
            route_name: 'operation-update',
            api: list,
            current: component 
        }">
        <update v-show="component == 'update'"></update> 
        <eventlist v-show="component == 'eventlist'"></eventlist> 
    </layout>
</template>

<script setup>
import { ref, computed } from 'vue'

// * api import 
import list from '../api/operation/list'
import links from '../api/operation/links'

// * component import
import update from '../components/update.vue'
//import properties from '../components/properties.vue'
import eventlist from '../components/eventlist.vue'

// * layout import
import layout from '@/layouts/Card.vue'

// * data import 
import d_config from '../config/card'

const config = ref(d_config)

const component = computed(() => config.value.find(e => e.active == true).component)



</script>

<style lang="scss" scoped>

</style>