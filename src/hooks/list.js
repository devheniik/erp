import get from '../containers/Person/api/get'
import { onMounted, ref, watchEffect } from 'vue'
export default function (route) {
    const isLoad = ref(true)

    const data = ref()


    const load = async () => {
        isLoad.value = true
        data.value = await get(data.value)
        isLoad.value = false
    }

    onMounted(async () => {
        await load()
    })

    watchEffect(() => get(data.value))

    return { data, load, isLoad }



}