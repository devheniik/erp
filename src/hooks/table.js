import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import list from '@api_base/table'
export default function (_route) {
    const isLoad = ref(true)

    const data = ref()


    const load = async () => {
        isLoad.value = true
        data.value = await list(data.value, _route)
        data.value.page = data.value.meta.pagination.current_page
        data.value.limit = 10
        console.log('load')
        isLoad.value = false
    }

    onMounted(async () => {
        await load()
    })

    return {
        data,
        load,//: async () => [data.value = await list(data.value, _route), console.log('short load')],
        isLoad
    }



}