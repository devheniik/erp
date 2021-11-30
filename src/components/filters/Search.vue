<template>
  <div> 
    <div class="relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input :disabled="data.readonly" type="text" @input="$emit('update:modelValue', $event.target.value)"  @keyup.enter="$emit('change')"  class="input-primary pl-10" :placeholder="data.label" :value="modelValue  ?? data.value_default"  />
      <div v-show="modelValue"  @click.stop="$emit('change')" class="absolute cursor-pointer inset-y-0 right-0 pr-2 flex items-center">
        <ArrowCircleRightIcon   class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
    </div>
  </div> 
</template>

<script setup> 
const props = defineProps({
    data: Object,
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue', 'change'])
 


</script>

<style lang="scss" scoped>
</style>