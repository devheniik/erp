import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'


export default function (findById) {
    const isLoad = ref(true)

    const route = useRoute()
    const entityId = route.params.id


    const data = ref({})

    const load = async () => {
        isLoad.value = true  
        data.value = await findById(entityId)  
        console.log('load by id');
        isLoad.value = false
    }

    onMounted(async () => {
        await load() 
        
    })

    return {
        data,
        isLoad,
        id: entityId
    }
}
