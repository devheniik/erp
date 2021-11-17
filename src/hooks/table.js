import _ from 'lodash'

import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import * as  lodash from 'lodash'
import list from '@api'
export default function (_route, start_data) {
    const isLoad = ref(true)
    const isReload = ref(true)
 

    const data = ref(start_data ? start_data : undefined) 

    const load = async () => {
        isReload.value = true 
        if (!data?.value?.headers) {
            data.value.headers = []
        } 
        data.value = await list(_route, lodash.cloneDeep(data.value))
        if (!data?.value?.page) {
            data.value.page = data.value.meta.pagination.current_page
        }
        if (!data?.value?.limit) {
            data.value.limit = data.value.meta.pagination.per_page
        }
        isReload.value = false
    }

    const reLoad = async () => {
        isReload.value = true 
        if (!data?.value?.headers) {
            data.value.headers = []
        } 
        data.value = await list(_route)
        if (!data?.value?.page) {
            data.value.page = data.value.meta.pagination.current_page
        }
        if (!data?.value?.limit) {
            data.value.limit = data.value.meta.pagination.per_page
        }
        isReload.value = false
    }

    const start = async () => {
        isLoad.value = true
        isReload.value = true
        data.value = await list(_route, data.value) 
        // !data.value?.headers ?  data.value.headers : null  
        if (!data.value.page) { 
            data.value.page = data.value.meta.pagination.current_page 
    }
        if (!data.value.limit) {
            data.value.limit = data.value.meta.pagination.per_page
        }

        isReload.value = false,
        isLoad.value = false
    }
 

    onMounted(async () => {
        await start()
    })

    return {
        data,//:  data.value != null ? data.value.map(e => e.data.body.selected = false) : [],
        load,
        isReload,
        isLoad,
        reLoad
    }



}