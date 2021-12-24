<template>
    <div v-if="!isLoad && data" class="p-5">
        <div v-if="data?.tabs?.length">
            <div class="w-full">
                <!-- <div class="sm:hidden">
                <select class="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300">
                        <option v-for="(b, i) in data.tabs"  :key="i" :value="b.active" :selected="active == b.component" >{{ b.label }}  </option>
                    </select>
                </div>-->
                <div class="hidden sm:block w-full">
                    <div class="bg-white w-full flex items-center justify-center">
                        <nav class="flex rounded-md bg-gray-200 p-0.5" aria-label="Tabs">
                            <a
                                @click="handle_tab(i)"
                                v-for="(b, i) in data.tabs"
                                :key="i"
                                type="button"
                                :class="[b.active ? 'bg-gradient-to-t from-primary-100 via-primary-400 to-primary-100 shadow-md text-gray-50' : 'text-gray-800', (i == (data.tabs.length - 1) && i == 0) ? 'rounded-md' : i == 0 ? 'rounded-l-md' : i == (data.tabs.length - 1) ? 'rounded-r-md' : '', 'px-3 rounded-md  flex  items-center py-2 h-[28px] font-medium text-sm']"
                            >{{ b.label }}</a>
                        </nav>
                    </div>
                </div>
            </div>
            <form ref="form">
                <div v-for="(tab, i) in data.tabs" :key="i">
                    <div
                        v-show="tab.active"
                        class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4"
                    >
                        <div v-for="section in tab.sections" :key="section.id" class="rounded-lg">
                            <h1 class>
                                {{ section.config.title }}
                                <span
                                    class="cursor-pointer"
                                    @click="section.dop_open = !section.dop_open"
                                >{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                            </h1>
                            <div class="grid-2-2-1 section">
                                <div v-for="(col, col_id) in section.childs" :key="col_id">
                                    <!--Первый блок-->
                                    <div class="my-2" v-for="(component, i) in col.base" :key="i">
                                        <span
                                            v-if="!component.field.component"
                                        >{{ component.field.type + ' ' + component.field.label }}</span>
                                        <component
                                            v-if="component.field.component"
                                            v-model="component.field.value"
                                            :required="component.field.required"
                                            v-bind="component.field.bind"
                                            :is="component.field.component"
                                        ></component>
                                    </div>
                                    <!-- FULL -->
                                    <div v-show="section.dop_open">
                                        <div
                                            class="my-2"
                                            v-for="(component, i) in col.full"
                                            :key="i"
                                        >
                                            <span
                                                v-if="!component.field.component"
                                            >{{ component.field.type + ' ' + component.field.label }}</span>
                                            <component
                                                v-if="component.field.component"
                                                v-model="component.field.value"
                                                :required="component.field.required"
                                                v-bind="component.field.bind"
                                                :is="component.field.component"
                                            ></component>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <form v-else ref="form">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
                <div v-for="section in data.sections" :key="section.id" class="rounded-lg">
                    <h1 class>
                        {{ section.config.title }}
                        <span
                            v-if="section.config.dop_fields"
                            class="cursor-pointer"
                            @click="section.dop_open = !section.dop_open"
                        >{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                    </h1>
                    <div class="grid-2-2-1 section">
                        <div v-for="(col, col_id) in section.childs" :key="col_id">
                            <!--Первый блок-->
                            <div class="my-2" v-for="(component, i) in col.base" :key="i">
                                <span
                                    v-if="!component.field.component"
                                >{{ component.field.type + ' ' + component.field.label }}</span>
                                <component
                                    v-if="component.field.component"
                                    v-model="component.field.value"
                                    :required="component.field.required"
                                    v-bind="component.field.bind"
                                    :is="component.field.component"
                                ></component>
                            </div>
                            <!-- FULL -->
                            <div v-show="section.dop_open">
                                <div class="my-2" v-for="(component, i) in col.full" :key="i">
                                    <span
                                        v-if="!component.field.component"
                                    >{{ component.field.type + ' ' + component.field.label }}</span>
                                    <component
                                        v-if="component.field.component"
                                        v-model="component.field.value"
                                        :required="component.field.required"
                                        v-bind="component.field.bind"
                                        :is="component.field.component"
                                    ></component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form> 

        <div v-if="data.buttons" class="flex items-center justify-center w-full mt-2">
            <ubutton
                @save="save($event)"
                v-for="(button, i) in data.buttons"
                :key="i"
                v-bind="button"
                class="px-4"
            ></ubutton>
        </div>
    </div>
    <loading v-else></loading>
</template>

<script setup>
// import  VueTinymce from "@panhezeng/vue-tinymce" 

import post from '@api'
import {
    ref,
    computed,
    watchEffect,
    getCurrentInstance
} from 'vue'
const app = getCurrentInstance()
import { useRouter } from 'vue-router'
const router = useRouter()
import get from '@/hooks/get'

const props = defineProps({
    api: String,
    params: Object
})


const {
    data,
    load,
    isLoad
} = get(props.api, props.params)

const handle_tab = (i) => {
    data.value.tabs.forEach(e => {
        e.active = false
    })
    data.value.tabs[i].active = true
}

// const render_data = ref(data.tabs ? data.tabs.find(active))

const form = ref(null)

const save = async (e) => {
    const formData = new FormData(form.value)
    if (data.value?.hidden) {
        data.value.hidden.forEach(e => {
            formData.append(e.name, e.value)
        })
    }
    if (e.params) {
        for (const [key, value] of Object.entries(e.params)) {
            formData.append(key, value)
        }
    }
    let valid = true
    form.value.forEach(e => {

        if (e['required']) {
            if (!(e['hidden'] ? (Number(e['value']) != 0) : e['value'])) {
                let label = null
                app.appContext.config.globalProperties.$toast({ component: 'toast', data: { type: 'warning', message: e['labels'] ? e['labels'][0]?.textContent : e['name'] } })
                valid = false
            }
        }
    })
    if (valid) {
        const response = await post(e.api, formData)
        if (response.redirect) {
            router.push(response.redirect)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>