import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import get from '@/api/index'
export default function (_route) {
    const isLoad = ref(true)

    const data = ref()


    const load = async () => {
        isLoad.value = true
        data.value = await get(_route)
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