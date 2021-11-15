import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import get from '@/api/index'
export default function (_route, body) {
    const isLoad = ref(true)

    const data = ref()
    const load = async () => {
        isLoad.value = true
        data.value =  await get(_route, body)
        data.value.filters = [
            {
                filter_name: 'Search',
                filter_type: 'search',
                filter_show: true,
                label: 'Поиск',
                label_key: 'search',
                value: null,
                value_default: null
            }
        ]
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