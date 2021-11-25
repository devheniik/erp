<template>
    <div class="w-full h-full flex flex-wrap">
        <splitpanes class=" h-full"> 
            <!-- sideRef && !component == 'tree' && !component == 'rollup' ? 'w-6/12' : sideRef && (component == 'tree' || component == 'tree-level') ? 'w-4/12' : sideRef && component == 'rollup' ? 'w-4/12' :  -->
            <pane class="hide-scroll overflow-y-auto" size="30">
                <div :class="['w-full h-full overflow-y-auto hide-scroll']">
                    <component :is="component" class="relative" :api="api" :params="params" :modalSelect="true" @select="selected = $event">
                    </component>
                </div>
            </pane>
            <pane class="hide-scroll overflow-y-auto ">

                <div :class="['w-full h-full']">
                    <slot :key="render" v-if="selected">

                    </slot>
                </div>
            </pane>
        </splitpanes>
    </div>
</template>

<script setup>
    import {
        Splitpanes,
        Pane
    } from 'splitpanes'
    import 'splitpanes/dist/splitpanes.css'
    import {
        computed,
        ref,
        watchEffect
    } from 'vue'
    const props = defineProps({
        api: String,
        component: String,
        params: Object,
        // tree: Boolean,
        // rollup: Boolean
    })

    const emit = defineEmits(['select'])

    const selected = ref(null)

    const render = ref(1)

    const updateRender = () => render.value++

    const sideRef = ref(true)


    watchEffect(() => { 
        console.log(selected.value, 'dt')
        if (selected.value) {
            if (typeof(selected.value) == 'object') {
                emit('select-params', selected.value.params)
                emit('select', selected.value.api) 
                return
            }
            emit('select', selected.value)
            updateRender()
        }
    })
</script>