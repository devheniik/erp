<template>
    <div v-if="!isLoad">
        <div class="flex flex-col" v-if="data.type === 'table'" >
          <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5 ml-2.5">
            <div v-for="(filter, i) in data.filters" :key="i" v-show="filter.filter_show">
              <component @change="load"
                         v-model="filter.value"
                         @update:modelValue="request.TFILTR=$event"
                         :data="filter"
                         :start_data="data.filters"
                         :is="filter.filter_type">
              </component>
            </div>
          </div>
            <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr >
                                    <th v-for="(h, i) in data.table_header" :key="i" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {{h}}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tr_d, Idx) in data.data" :key="Idx" :class="Idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                                    <td v-for="(td_d, i) in tr_d" :key="i" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <span @click="i == 1 ? $emit('select', tr_d) : null" :class="i == 1 ? 'underline text-primary-500 cursor-pointer' : null">
                                            {{ td_d }} 
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
import Tree from 'primevue/tree';
    import finder from '@/hooks/finder'
    import {ref} from 'vue'

    const props = defineProps({
      params: Object
    })

    const request = ref(props.params)

    const {
      data,
      load,
      isLoad
    } = finder('finder', request.value)

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


</script>

<style lang="scss" scoped>

</style>