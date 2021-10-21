<template>
    <div class="h-full"> 
        123
        <div class="flex w-full justify-end mr-5">
            <list v-model="entity" :data="{ list: options}"></list> 
        </div>
        <double-table :api="roles" @select="id = $event; link = info($event, entity)"> 
            <viewer :key="render"  :api="link">  
            </viewer>  
        </double-table>
    </div>
</template>

<script setup>
    import {computed, ref, watch} from 'vue'
    import roles from '../api/roles/list'  
    import info from '../api/roles/info'  

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
    const link = ref(null)
    const id = ref(null)

    watch(() => entity.value,
    () => {
      link.value = info(id.value, entity.value)
      render.value++
    })


</script>
