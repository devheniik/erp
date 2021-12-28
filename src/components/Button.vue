<template>
    <button @click="handle"
        :class="[`bg-gradient-to-t from-${type}-100 via-${type}-400 to-${type}-100`, 'inline-flex whitespace-nowrap px-2 items-center justify-center py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-0']">
        {{label}}
          <!-- type == 'warning' ? 'bg-warning-600 hover:bg-warning-700' : type == 'danger' ? 'bg-danger-600 hover:bg-danger-700' : type == 'success' ? 'bg-success-600 hover:bg-success-700' : 'bg-primary-600 hover:bg-primary-700' , -->
    </button>
</template>

<script setup>
    import router from '@/router'
    import post from '@api'
    import {getCurrentInstance} from 'vue'

    const emit = defineEmits(['save', 'select_all_and_up','select_selected_and_up'])
    const props = defineProps({
        type: String,  
        action: String,
        label: String,
        data: Object,
        params: Object
    })
    const app = getCurrentInstance();

    const handle = async () => {
        if (props.action == 'window') {
            app.appContext.config.globalProperties.$open(router.resolve(props.data))
            // router.push({ name: 'finder', params: {}, query: {} })
        }
        if (props.action == 'save') {  
            emit('save', props.data)
        }
        if (props.action == 'window-backend') { 
            window.open(`${import.meta.env.VITE_PORT}${props.data.api}${props.data.params ? '?' : ''}${(new URLSearchParams(props.data.params)).toString()}`, `${import.meta.env.VITE_PORT}${props.data.api}${(new URLSearchParams(props.data.params)).toString()}`, 'width=900,height=750')
        } 
        if (props.action == 'select_selected_and_up') { 
            emit('select_selected_and_up')
        }
        if (props.action == 'select_all_and_up') { 
            emit('select_all_and_up')
        }
    }


</script>

<style lang="scss" scoped>

</style>