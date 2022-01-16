<template>
<div class="px-5 flex items-center justify-between w-full">
    <div class="w-1/3">
        <div class="label">
            {{data.label}}
        </div>
    </div>
    <div class="w-[150px]">
        <input-text v-bind="data.input" v-model="value"></input-text>
    </div>
    <div class="w-1/3 flex justify-end">
        <ubutton @click="handle" v-bind="data.button"></ubutton>
    </div>

</div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
import { ref ,getCurrentInstance} from 'vue'
    const app = getCurrentInstance()
const props = defineProps({
    data: Object
})

const value = ref(props.data.input.value)

const handle = () => {
    let window = props.data.window
    console.log(window);

    window.query[props.data.input.name] = value.value
    console.log(props.data.input.name);
    console.log(window);
    app.appContext.config.globalProperties.$open(router.resolve(window))

}


</script>

<style lang="scss" scoped>

</style>