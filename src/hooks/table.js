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

    let aaa_ = start_data
    const isLoad = ref(true)
    const isReload = ref(true)
 

    const data = ref(undefined) 

    const load = async () => {
        let r_data = lodash.cloneDeep(data.value ?? {})
        isReload.value = true 
        if (start_data?.parent_filters?.length > 0) {
            console.log(start_data);
            if (r_data.filters?.length > 0) {
                r_data.filters = [ ...r_data.filters, ...start_data.parent_filters ]
                //delete start_data.parent_filters
            } else if (!r_data.filters) {
                r_data.filters = start_data.parent_filters
                delete start_data.parent_filters
            }
        }
        data.value = await list(_route, { ...r_data, ...start_data })
        // if (!data.value?.page) { 
        //     data.value.page = data.value?.meta?.pagination?.current_page 
        // }
        // if (!data.value?.limit) {
        //     data.value.limit = data.value?.meta?.pagination?.per_page
        // }
        isReload.value = false
    }

    const reLoad = async () => {
        let r_data = lodash.cloneDeep(data.value)
        isReload.value = true 
        if (start_data?.parent_filters?.length > 0) {
            if (r_data.filters?.length > 0) {
                r_data.filters = [ ...r_data.filters, ...start_data.parent_filters ]
                delete start_data.parent_filters
            } else if (!r_data.filters) {
                r_data.filters = start_data.parent_filters
                delete start_data.parent_filters
            }
            
        }

        if (r_data.filters) {  
            delete r_data.filters
        } 
        if (r_data?.page) {
            delete r_data.page 
        }
        if (r_data?.limit) { 
            delete r_data.limit 
        }
        data.value = await list(_route, { ...r_data, ...start_data })
        // if (!data.value?.page) { 
        //     data.value.page = data.value?.meta?.pagination?.current_page 
        // }
        // if (!data.value?.limit) {
        //     data.value.limit = data.value?.meta?.pagination?.per_page
        // }
        isReload.value = false
    }
 

    const start = async () => {
        isLoad.value = true
        await load()
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