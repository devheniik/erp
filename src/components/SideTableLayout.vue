<template>
    <div class="flex flex-wrap justify-between w-full">
        <div :class="[sideRef ? 'w-6/12' : 'w-1/12']">
            <div class="btn-circle-primary-md absolute right-2/4" @click="sideRef = !sideRef">
                <ChevronLeftIcon v-if="sideRef" class="h-4 w-4" />
                <ChevronRightIcon v-else class="h-4 w-4" />
            </div>
            <!-- <transition enter-active-class="opacity-0 -translate-x-6 h-0" leave-active-class="opacity-0 -translate-x-6"> -->
                <div v-if="sideRef" class="w-12/12"> 
                    <viewer modalSelect @select="$emit('select', $event.uid)" :api="api" route_card=""> 
                    </viewer>
                </div>
            <!-- </transition> -->

        </div>
        <div :class="[sideRef ? 'w-6/12' : 'w-full', 'pl-4']">
            <slot>

            </slot>
        </div>

    </div>
</template>


<script setup>
    import {
        ref
    } from 'vue'
    import find from '.././hooks/load'
    import get from '.././hooks/table'

    const props = defineProps({
        api: String
    })

    const sideRef = ref(true)
</script>

<style lang="scss" scoped>

</style>