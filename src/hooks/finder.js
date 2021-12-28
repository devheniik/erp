import {
    onMounted,
    ref,
    watch,
    computed,
    watchEffect,
    onUpdated
} from 'vue'
import get from '@/api/index'
export default function (_route, body, custom) {
    const isLoad = ref(true)

    const data = ref()
    const load = async () => {
        isLoad.value = true
        data.value =  await get(_route, body) 
        if (custom) {
          if (custom.selectable) {
            data.value.buttons = []
            data.value.buttons.push({
              type: 'primary',
              action: 'select_selected_and_up',
              label: 'Отмеченые'
            })

            data.value.buttons.push({
              type: 'primary',
              action: 'select_all_and_up',
              label: 'Все'
            })
          }
        }
        data.value.data = data.value.data.map(e => {
            return {
              selected: false,
              row: [],
              value: e
            } 
          })


        data.value.table_header = data.value.table_header.map(e => {
            return {
              label: e, 
              show: true, 
            } 
          })
        isLoad.value = false
    }

    onMounted(async () => {
        await load()
    })

    return {
        data,
        load,//: async () => [data.value = await list(data.value, _route), console.log('short load')],
        isLoad
    }



}