<template>
<div class="h-full">
    <div v-if="filters?.length" class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 mr-5 ml-2.5 py-3 border-b">
        <!-- :class="[filter.filter_type == 'list-input' ? 'col-span-2' : '']" -->
        <div :class="[filter.filter_type == 'list-input' ? 'col-span-2' : '']" v-for="(filter, i) in filters" :key="i" v-show="filter.filter_show">
            <group noLabel v-if="filter.filter_type == 'group'" :readonly="filter.readonly" v-bind="filter.bind" @change_value_name="filter.bind.value_name = $event" v-model="filter.value" @update:modelValue="$emit('touch', props)"></group>
            <component v-else @change="$emit('touch', props)" v-model="filter.value" :data="filter" :start_data="filters" :is="filter.filter_type"></component>
        </div>
    </div> 
    <double-table :component="component" :params="root_params" :api="menu" @select="link = $event" @select-params="right_params = $event">
        <viewer :api="link" :params="{ ...right_params, ...params, parent_filters: filters }">
        </viewer>
    </double-table>
</div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Splitpanes,
    Pane
} from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
const props = defineProps({
    filters: Array,
    menu: String,
    params: Object,
    root_params: Object,
    component: String
})

const right_params = ref(props.params)

const link = ref(null)
// @select="link = list($event)"
</script>

<style lang="scss" scoped>

</style>