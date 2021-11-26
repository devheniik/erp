<template>
    <div v-if="!isLoad" class="p-2"> 
      <div class="flex justify-between items-center mb-2">
        <div class="flex flex-row">
          <p v-for="l in letters_en" @click="request.TFILTR=l; load()" :key="l" class="text-xs mx-0.5 text-primary-400 hover:underline cursor-pointer">
            {{l}}
          </p>
        </div>
        <div class="flex flex-row">
          <p v-for="l in letters_ru" @click="request.TFILTR=l; load()" :key="l" class="text-xs mx-0.5 text-primary-400 hover:underline cursor-pointer">
            {{l}}
          </p>
        </div>
      </div>
        <div class="flex flex-col" v-if="data.type === 'table'" >
          <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5">
            <search v-model="request.TFILTR" :data="{ label: 'Поиск' }" @keyup.enter="load()" @update:modelValue="request.TFILTR=$event"></search>
          </div>
            <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr> 
                                    <th v-for="(h, i) in data.table_header" :key="i" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {{h}}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tr_d, Idx) in data.data" :key="Idx" :class="Idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                                    <td v-for="(td_d, i) in tr_d" :key="i" class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                                      <div v-if="typeof(td_d) == 'object'" @click="i == 1 ? $emit('select', tr_d) : null; habdle(td_d)" class="underline text-primary-400 cursor-pointer">
                                        {{ td_d?.label }}
                                      </div>
                                        <span v-else @click="i == 1 ? $emit('select', tr_d) : null" :class="i == 1 ? 'underline text-primary-400 cursor-pointer' : ''">
                                            {{ td_d }} 
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <empty v-if="data.data.length == 0" v-bind="{ title: 'Создайте заказ' }"></empty> 
                        
                    </div>
                </div>
            </div>
          <pagination @change="load"
                      v-model:header="data.header"
                      :pagination="paginationTransformer(data.pagination)"
                      :page="data.pagination.current_page"
                      @update:page="request.TPAGE=($event)"
                      v-model:limit="data.pagination.total_pages"></pagination>
        </div>
      <Tree v-else-if="data.type === 'tree'" :value="data.data" selectionMode="single" @node-select="onNodeSelect" v-model:selectionKeys="selectedKey" />
    </div>
  <loading v-if="isLoad"/>
</template>

<script setup>
  import Tree from 'primevue/tree'
  import router from '@/router'
    import finder from '@/hooks/finder'
    import {ref, getCurrentInstance} from 'vue'

    const props = defineProps({
      params: Object,
      arr_select: {
        type: Boolean,
        default: false
      }
    })

    const request = ref(props.params)

    const {
      data,
      load,
      isLoad
      
    } = finder('finder', request.value)

    const app = getCurrentInstance()

    const habdle = (e) => {
      if (e.type == 'window'){
        app.appContext.config.globalProperties.$open(router.resolve(e.data))
      }
    }

    const selectedKey = ref(null)

    const emit = defineEmits(['select'])

    const paginationTransformer = (pagination) => {
      return {
        total: +pagination.total,
        count: pagination.count,
        per_page: pagination.count,
        current_page: pagination.current_page,
        total_pages: pagination.total_pages
      }
    }

    const onNodeSelect = (e) => {
      if (!e.children) {
        emit('select', e)
      }
    }

    const letters_en = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const letters_ru = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "І", "Ї", "Є" ]


</script> 