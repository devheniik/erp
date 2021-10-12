<template>
    <div class="h-full"> 
        <double-table :api="get" :link="link" :options="options"></double-table>
    </div>
</template>

<script setup>
    import get from '../api/get'  

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

    const link = (id, entity) => {
        return `access/role/${id}/${entity}`
    }


</script>
