<template>
    <layout v-model:config="config" v-bind="{
            name: 'фирма',
            links: links,
            route_name: 'firm-update',
            api: get,
            current: comoponent,
            ls_name: 'finance'
        }">
        <update v-show="comoponent == 'update'"></update> 
        <properties v-show="comoponent == 'properties'"></properties> 
    </layout>
</template>

<script setup>
import { ref, computed } from 'vue'

// * api import 
import get from '../api/get'
import links from '../api/links'
 

// * component import
import update from '../components/update.vue'
import properties from '../components/properties.vue'

// * layout import
import layout from '@/layouts/Card.vue'

// * data import 
import d_config from '../config/card'

const config = ref(d_config)

const comoponent = computed(() => config.value.find(e => e.active == true).component)



</script>

<style lang="scss" scoped>

</style>