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


    const load = async (new_data) => {
        isLoad.value = true 
        data.value =  await get(_route, new_data ?? body)  
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