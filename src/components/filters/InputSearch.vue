<template>
  <div v-if="modelValue" class="flex flex-row">
    <Listbox
      as="div"
      :modelValue="modelValue?.list ?? data.value_default"
      @update:modelValue="select($event)"
    >
      <div class="relative">
        <ListboxButton
          class="
            relative
            w-full
            bg-white
            border border-gray-300
            rounded-l-md
            shadow-sm
            pl-3
            pr-10
            py-2
            text-left
            cursor-default
            focus:outline-none
            focus:ring-1
            focus:ring-primary-500
            focus:border-primary-500
            sm:text-base
          "
        >
          <span class="block truncate">{{
            data.label && modelValue.list == null && !data.value_default
              ? data.label
              : modelValue.list == null && data.value_default
              ? data?.list?.find((e) => e.value == data.value_default.list).label
              : data?.list?.find((e) => e.value == modelValue.list).label ??
                data.label ??
                data.list[0].label
          }}</span>
          <span
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              pointer-events-none
            "
          >
            <SelectorIcon
              v-if="!modelValue.list"
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <CheckIcon
              v-else
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
          <!-- $emit('update:modelValue.list', null) -->
        </ListboxButton>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="
              absolute
              z-10
              mt-1
              w-full
              bg-white
              shadow-lg
              max-h-60
              rounded-md
              py-1
              text-base
              ring-1 ring-black ring-opacity-5
              overflow-auto
              focus:outline-none
              sm:text-base
            "
          >
            <ListboxOption
              as="template"
              v-for="(option, i) in data.list"
              :key="i"
              :value="option.value"
              v-slot="{ active, selected }"
            >
              <li
                :class="[
                  active ? 'text-white bg-primary-600' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-8 pr-4'
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'block truncate'
                  ]"
                >
                  {{ option.label }}
                </span>

                <span
                  v-if="selected"
                  :class="[
                    active ? 'text-white' : 'text-primary-600',
                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
                  ]"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
    <input
      type="text"
      v-model="text"
      @keyup.enter="handle_enter"
      class="
        shadow-sm
        focus:ring-primary-500 focus:border-primary-500
        block
        w-full
        sm:text-base
        border-gray-300
        rounded-r-md
      "
      placeholder="Поиск"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  data: Object,
  modelValue: Object
})

if (props.modelValue === null) {
  if (typeof props.data.value_default == 'object') {
    emit('update:modelValue', {
      list: props.data.value_default.list,
      text: props.data.value_default.text
    })
  }
  emit('update:modelValue', { list: null, text: '' })
}

const text = ref(props.modelValue?.text ?? props.data.value_default.text)

const select = ($event) => {
  let value = props.modelValue
  value.list = $event
  emit('update:modelValue', value)
  emit('change')
}

const handle_enter = () => {
  let value = props.modelValue
  value.text = text.value
  emit('update:modelValue', value)
  emit('change')
}
</script>

<style lang="scss" scoped></style>
