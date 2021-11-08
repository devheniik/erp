<template>
    <div class="w-full h-full flex flex-wrap">
    <!-- sideRef && !component == 'tree' && !component == 'rollup' ? 'w-6/12' : sideRef && (component == 'tree' || component == 'tree-level') ? 'w-4/12' : sideRef && component == 'rollup' ? 'w-4/12' :  -->
        <div
            :class="['w-3/12', 'h-full overflow-y-auto hide-scroll']">
            <component :is="component" class="relative" :api="api"
                @select="selected = $event">

            </component>
        </div>
        <div
            :class="[sideRef && !component == 'tree' && !component == 'rollup' ? 'w-6/12' : sideRef && component == 'tree' ? 'w-8/12' : sideRef && component == 'rollup' ? 'w-8/12' : 'w-full', 'pl-4']">
            <slot :key="render" v-if="selected">

            </slot>
        </div>
    </div>
</template>

<script setup>
    import {
        computed,
        ref,
        watchEffect
    } from 'vue'
    const props = defineProps({
        api: String,
        component: String,
        // tree: Boolean,
        // rollup: Boolean
    })

    const emit = defineEmits(['select'])

    const selected = ref(null)

    const render = ref(1)

    const updateRender = () => render.value++

    const sideRef = ref(true)


    watchEffect(() => {
        if (selected.value) {
            emit('select', selected.value)
            updateRender()
        } 
    })
</script>