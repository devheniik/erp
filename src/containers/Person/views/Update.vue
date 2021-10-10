<template>
    <layout v-model:config="config" :entity="{
            name: 'персона',
            pagination_api: pagination,
            api: get
        }">
        <update v-show="comoponent == 'update'"></update> 
        <properties v-show="comoponent == 'properties'"></properties> 
    </layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import get from '../api/get'
import pagination from '../api/pagination'
import update from '../components/update.vue'
import properties from '../components/properties.vue'
import layout from '@/layouts/Card.vue'

const config = ref([
    {
        label: 'Карточка',
        active: true,
        component: 'update',
        link: '/link'
    },
    {
        label: 'Свойства',
        active: false,
        component: 'properties',
        link: '/link'
    },
    {
        label: 'Фото',
        active: false,
        component: '',
        link: '/link'
    },
    {
        label: 'Задачи',
        active: false,
        component: '',
        link: '/link'
    },
    {
        label: 'Активность',
        active: false,
        component: '',
        link: '/link'
    },
    {
        label: 'Печать',
        active: false,
        component: '',
        link: '/link'
    },
    {
        label: '#',
        active: false,
        component: '',
        link: '/link'
    },
    {
        label: 'БП',
        active: false,
        component: '',
        link: '/link'
    },
    {
        label: 'ИКП',
        active: false,
        component: '',
        link: '/link'
    }
])

const comoponent = computed(() => config.value.find(e => e.active == true).component)



</script>

<style lang="scss" scoped>

</style>