import get from '../api/get'
import { onMounted , ref, watchEffect } from 'vue'
export default function() {
    const isLoad = ref(true)

    const data = ref({
        filtersRequest: {
            search: null,
            filial: null,
            job: null,
            status: null
        },
        filtersResponse: {
            search: null,
            filials: [ ],
            job: [],
            status: []
        },
        result: [

        ],
        pagination: {
            "total": 50,
            "per_page": 15,
            "current_page": 1,
            "last_page": 4,                      
            "prev_page_url": null, 
            "from": 1,
            "to": 15
        }
    })
 

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