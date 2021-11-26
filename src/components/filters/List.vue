<template>
    <div>
        <Listbox as="div" :modelValue="modelValue ?? data.value_default" @update:modelValue="$emit('update:modelValue', $event); $emit('change')"> 
            <div class="relative">
            <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                <span class="block truncate">{{ data.label && modelValue == null && !data.value_default ? data.label :  modelValue == null && data.value_default ? data?.list?.find(e => e.value == data.value_default).label : data?.list?.find(e => e.value == modelValue).label ?? data.label ?? data.list[0].label }}</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon v-if="!modelValue" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <CheckIcon v-else class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
                <!-- $emit('update:modelValue', null) -->
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="(option, i) in data.list" :key="i" :value="option.value" v-slot="{ active, selected }">
                    <li :class="[active ? 'text-white bg-primary-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-8 pr-4']">
                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                        {{ option.label }}
                    </span>

                    <span v-if="selected" :class="[active ? 'text-white' : 'text-primary-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                    </li>
                </ListboxOption>
                </ListboxOptions>
            </transition>
            </div>
        </Listbox>
        <!-- <div>
            <select placeholder="1231231" :disabled="data.readonly" @change="$emit('update:modelValue', $event.target.value); $emit('change')" class="dropdown-primary"> 
                <option  v-for="option in data.list" :key="option.value" :value="option.value" :selected="modelValue == option.value">
                    {{data.label ? data.label + ` (${option.label.toLowerCase()})` : option.label }}
                </option>
            </select>
        </div> -->
         <!-- @change=" $emit('change')" -->
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
    modelValue: [String, Number, Boolean, Array, Object]
})



</script>

<style lang="scss" scoped>
</style>