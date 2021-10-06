<template>
    <layout v-model:config="config">
        <create></create>
    </layout>
</template>

<script setup>
import { ref } from 'vue'
import Create from '../components/create.vue'
import layout from '@/layouts/Cart.vue'

const config = ref([
    {
        label: 'Карточка',
        active: true,
        component: '',
        link: '/link'
    },
    {
        label: 'Свойства',
        active: false,
        component: '',
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




</script>

<style lang="scss" scoped>

</style>