<template>
    <div>
        <div>
              <div>
                <label v-if="!noLabel" :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
                <div class="mt-0.5 flex rounded-md shadow-sm">
                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                    <input :value="local_label" :disabled="true" :type="type" :name="name" :id="id" :class="[`focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm`, required && (modelValue == 0 || !modelValue) ? 'border-danger-300' : 'border-gray-300']" :placeholder="placeholder" />
                </div> 
                <button :disabled="readonly" v-for="(btn, i) in buttons" :key="i" @click="!readonly ? load(btn,i) : null" type="button" :title="btn.help" :class="[i + 1 == buttons.length ? 'rounded-r-md' : '', '-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium  text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500']">
                    <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    <modal v-model="isOpen[i]" width="w-10/12">
                      <component @filter="filter($event)" @select="select($event, i)" :params="btn.params" :is="'finder'"></component>
                    </modal>
                </button>
                </div>
            </div>
            <label :for="id" class="block text-sm font-medium text-gray-700 sr-only">{{label}}</label>
            <input :value="Number(modelValue)" hidden="true" :required="required" type="hidden" :name="id"  class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300"  />
        </div>

    </div>
    <!--[$emit('update:modelvalue', $event.uid), label = $event.values[data.label_key]]--> 
</template>

<script setup>
import { ref } from 'vue' 
import get from '@api'
import { stringifyQuery } from 'vue-router'
const props = defineProps({
    id: String,  
    value_name: String,
    label: String,
    name: String,
    required: Boolean,
    readonly: {
        type: Boolean,
        default: false
    },
    noLabel: {
        type: Boolean,
        default: false
    },
    buttons: Object,
    type: String, 
    placeholder: String,
    modelValue: [String, Number]
})
console.log(props)
const isOpen = ref([])

props.buttons.forEach((btn,i) => {
  isOpen.value[i] = false
})
const emit = defineEmits(['update:modelValue', 'change'])


const local_label = ref(props.value_name)

const data = ref(null)

const load = async (e, key) => {
    // data.value = await get('finder', e.params)
    isOpen.value[key] = true
}


const select = (e,key) => {
    console.log(e)
    local_label.value = e[1] || e.label
    emit('update:modelValue', Number(e[0] || e.id))
    console.log(e[0])
    // label.value = e
    isOpen.value[key] = false
}

const filter = e => {  
    // emit('update:modelValue', e) 
    // label.value = e
    // isOpen.value = false
}

</script>

<style lang="scss" scoped>
</style>