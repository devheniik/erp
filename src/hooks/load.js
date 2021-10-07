import {
    ref,
    onMounted
} from 'vue'
import {
    useRoute
} from 'vue-router'
export default function (findById) {
    const isLoading = ref(true)
    const route = useRoute()
    const id = route.params.id
    const data = ref()
    const load = async () => {
        isLoading.value = true
        data.value = await findById(route.params.id)
        isLoading.value = false
    }
    onMounted(async () => {

        await load()

    })
    return {
        data,
        isLoading,
        id
    }
}