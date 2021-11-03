<template>
    <layout v-model:config="config" v-bind="{
            name: 'заказ',
            links: links,
            route_name: 'sale-update',
            api: list,
            ls_name: 'order'
        }">
        <update v-show="comoponent == 'update'"></update> 
        <specifications v-show="comoponent == 'specifications'"></specifications> 
        <operation v-show="comoponent == 'operation'"></operation> 
    </layout>
</template>

<script setup>
import { ref, computed } from 'vue'

// * api import 
import list from '../api/list'
import links from '../api/links'

// * component import
import update from '../components/update.vue'
import specifications from '../components/specifications.vue'
import operation from '../components/operation.vue'

// * layout import
import layout from '@/layouts/Card.vue'

// * data import 
import d_config from '../config/card'

const config = ref(d_config)

const comoponent = computed(() => config.value.find(e => e.active == true).component)


</script>

<style lang="scss" scoped>

</style>