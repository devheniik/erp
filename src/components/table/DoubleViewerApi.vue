<template>
<div class="h-full">
    <div v-if="!isLoad && data">
        <double-viewer v-bind="data" @touch="load({ ...$event, ...params})">

        </double-viewer>
    </div>
    <loading v-else></loading> 
</div>
</template>

<script setup>

import { ref } from 'vue'
import get from '../../hooks/get'
const props = defineProps({
    api: String,
    params: Object 
})

const {
    data,
    load,
    isLoad
} = get(props.api, props.params)


</script>

<style lang="scss" scoped>

</style>