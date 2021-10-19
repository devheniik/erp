import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import paginate from '@api_base/paginate'

export default function (_route) {
    const isLoad = ref(true)
    const isReload = ref(true)


    const route = useRoute()
    const entityId = route.params.id


    const data = ref({})

    const load = async (id) => {
        isLoad.value = true  
        isReload.value = true 
        data.value = await paginate(_route, id)  
        isLoad.value = false
        isReload.value = false
    }

    onMounted(async () => {
        await load(entityId) 
        
    })

    return {
        data,
        isLoad,
        id: entityId,
        isReload,
        load
    }
}
