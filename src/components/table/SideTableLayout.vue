<template> 
        <viewer modalSelect @select="$emit('select', $event.uid)" :api="api" route_card></viewer> 
</template>


<script setup>
import {
    ref
} from 'vue' 
const props = defineProps({
    api: String
})

const emit = defineEmits(['select'])

</script>

<style lang="scss" scoped>
</style>