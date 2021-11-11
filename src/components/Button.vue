<template>
    <button type="button" @click="handle()"
        :class="`inline-flex items-center justify-center py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-${type}-600 hover:bg-${type}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type}-500`">
        {{label}}
    </button>
</template>

<script setup>
import router from '@/router'
import {getCurrentInstance} from 'vue'
    const props = defineProps({
        type: String,  
        action: String,
        label: String,
        data: Object
    })
    const app = getCurrentInstance();

    const handle = () => {
        if (props.action == 'window') {
            app.appContext.config.globalProperties.$open(router.resolve({ name: props.data.route, params: props.data.params ?? {} })) 
        }
        if (props.action == 'window-backend') {
            console.log((new URLSearchParams(props.data.params)).toString())
            window.open(`${import.meta.env.VITE_PORT}${props.data.api}?${(new URLSearchParams(props.data.params)).toString()}`, `${import.meta.env.VITE_PORT}${props.data.api}${(new URLSearchParams(props.data.params)).toString()}`, 'width=900,height=750')
        }
    }


</script>

<style lang="scss" scoped>

</style>