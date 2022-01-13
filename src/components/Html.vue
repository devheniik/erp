<template> 
    <div v-html="doc"> 
    </div> 
</template>

<script setup>
import {ref} from 'vue'
import axios from 'axios'
const props = defineProps({
    api: String,
    query: Object
}) 

const doc = ref()
axios.get(props.api, props.query).then(r => doc.value = r)
 
</script>

<style lang="scss" scoped>

</style>