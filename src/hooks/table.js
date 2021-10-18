import _ from 'lodash'

import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import _ from 'lodash'
import list from '@api_base/table'
export default function (_route) {
    const isLoad = ref(true)
    const isReload = ref(true)

    const data = ref()


    const load = async () => {
        isLoad.value = true
        isReload.value = true
        data.value = await list(data.value, _route)
        console.log('load')
        isReload.value = false,
        isLoad.value = false
    }

    onMounted(async () => {
        await load()
    })

    return {
        data,
        load: async () => [isReload.value = true, data.value = await list(_.cloneDeep(data.value), _route), isReload.value = false],
        isReload,
        isLoad
    }



}