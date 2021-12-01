<template>
    <div>
        <div>
            <div>
                <label v-if="!noLabel" class="block text-sm font-medium text-gray-700">{{ label }}</label>
                <div class="flex rounded-md shadow-sm">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                        <input
                            :value="local_label"
                            :disabled="true"
                            :type="type"
                            :class="[`focus:ring-primary-500 h-[36px] focus:border-primary-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm`, required && (modelValue == 0 || !modelValue) ? 'border-danger-300' : 'border-gray-300']"
                            :placeholder="placeholder"
                        />
                    </div>
                    <button
                        v-if="modelValue != null"
                        @click="clear()"
                        title="Очистить"
                        :class="['-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium  text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500']"
                    >
                        <XIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
                    </button>
                    <button
                        :disabled="readonly"
                        v-for="(btn, i) in buttons"
                        :key="i"
                        @click="load(btn, i)"
                        type="button"
                        :title="btn.help"
                        :class="[i + 1 == buttons.length ? 'rounded-r-md' : '', '-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium  text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500']"
                    >
                        <SearchIcon class="h-4 w-4 text-gray-400" aria-hidden="true" />
                        <modal v-model="isOpen[i]" width="w-10/12">
                            <component
                                @select="select($event, i)"
                                v-bind="btn.bind"
                                :params="btn.params"
                                :is="'finder'"
                            ></component>
                        </modal>
                    </button>
                </div>
            </div>
            <label :for="id" class="block text-sm font-medium text-gray-700 sr-only">{{ label }}</label>
            <input
                :value="Number(modelValue)"
                type="text"
                :required="required"
                :name="id"
                :id="id"
                class="focus:ring-primary-500 sr-only focus:border-primary-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300"
            />
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
    modelValue: [String, Number, Array]
});
const emit = defineEmits(['update:modelValue', 'change', 'change_value_name']);

const isOpen = ref(props.buttons.map((e) => {
    return false
}))

props.buttons.forEach((btn, i) => {
    isOpen.value[i] = false
})



const local_label = ref(props.value_name)

const data = ref(null)

const load = async (e, key) => {
    // data.value = await get('finder', e.params)
    if (!props.readonly) {
        isOpen.value[key] = true
    }
}

const clear = async () => {
    local_label.value = null
    emit('update:modelValue', null)
}


const select = (e, key) => {
    local_label.value = e[1] ?? e.label 
    emit('change_value_name', String(e[1] ?? e.label))
    emit('update:modelValue', Number(e[0] ?? e.id))
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