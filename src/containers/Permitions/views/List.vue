<template>
    <div class="h-full"> 
        <div class="flex w-full justify-end mr-5">
            <list v-model="entity" :data="{ list: options}"></list> 
        </div>
        <double-table :api="get" :link="link" :options="options" @select="id = $event"> 
            <viewer :key="render"  :api="link">  
            </viewer>  
        </double-table>
    </div>
</template>

<script setup>
    import {computed, ref, getCurrentInstance, watch} from 'vue'
    import get from '../api/get'  

    const render = ref(0) 

    const options = [
        {
            label: 'Пользователи',
            value: 'users'
        },
        {
            label: 'Права',
            value: 'permissions'
        },
        {
            label: 'Бизнес операции',
            value: 'business-operations'
        },
        {
            label: 'Инструкции',
            value: 'instructions'
        }
    ]

    

    const  entity = ref('users')
    const  id = ref(null)

    const link = computed(() => `access/role/${id.value}/${entity.value}`)

    watch(() => entity.value,
    () => {
      render.value++
    })


</script>
