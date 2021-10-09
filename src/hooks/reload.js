import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'


export default function (findById) {
    const isLoad = ref(true)

    const route = useRoute()
    const entityId = route.params.id


    const data = ref({})

    const load = async (id) => {
        isLoad.value = true  
        data.value = await findById(id) 
        console.log(data.value);
        isLoad.value = false
    }

    onMounted(async () => {
        await load(entityId) 
        
    })

    return {
        data,
        isLoad,
        id: entityId,
        load
    }
}
