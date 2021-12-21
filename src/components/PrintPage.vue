<template> 
    <div v-html="doc"> 
    </div> 
</template>

<script setup>
import {ref} from 'vue'
import post from '@api'
const props = defineProps({
    api: String
}) 

const doc = ref()
post(props.api).then(r => doc.value = r)
 
</script>

<style lang="scss" scoped>

</style>