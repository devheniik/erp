<template>
    <div class="mr-5" v-if="!isLoad">
          <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Выбор филиала
            </h2>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
                <list v-model=layer :data="{ list: layers, label: 'Слой'}">

                </list>
            </div>
        </div>
        <ul role="list" class=" grid grid-cols-4 divide-y divide-y-reverse divide-gray-200 mt-4">
            <li v-for="filial in data" :key="filial.uid" class="py-1.5 flex">
                <p class="text-sm text-primary-500 w-full text-center" @click="set(`system/filial/${filial.uid}`)" >{{ filial.sokrash }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import get from '@/hooks/get'
import set from '@/api/index'

import api from '../api/filial/list'

const { data, isLoad } = get(api)

    const layers = [
        {
            label: 'Основной',
            value: true
        },
        {
            label: 'Тестовый',
            value: false
        },
    ]

    const layer = ref(true)

</script>

<style lang="scss" scoped>

</style>