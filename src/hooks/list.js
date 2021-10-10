import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
export default function (get) {
    const isLoad = ref(true)

    const data = ref()


    const load = async () => {
        isLoad.value = true
        data.value = await get(data.value)
        console.log('load')
        isLoad.value = false
    }

    onMounted(async () => {
        await load()
    })

    return {
        data,
        load,
        isLoad
    }



}