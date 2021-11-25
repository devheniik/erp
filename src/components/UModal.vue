<template>
<div v-if="!isLoad" class="p-5">
    <div v-if="data?.tabs?.length">
        <div class="w-full">
            <div class="sm:hidden">
                <select class="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300">
                        <option v-for="(b, i) in data.tabs"  :key="i" :value="b.active" :selected="active == b.component" >{{ b.label }}  </option>
                    </select>
            </div>
            <div class="hidden sm:block w-full">
                <div class=" bg-white w-full flex items-center justify-center">
                    <nav class="flex" aria-label="Tabs">
                        <a v-for="(b, i) in data.tabs" :key="i" type="button" :class="[b.active ? 'bg-primary-600 text-secondary-100' : 'text-secondary-50 hover:bg-primary-600 bg-primary-500 hover:text-secondary-50', (i == (data.tabs.length - 1) ?? i == 0 ) ? 'rounded-md' : i == 0 ? 'rounded-l-md' : i == (data.tabs.length - 1) ? 'rounded-r-md' : '', 'px-3 py-2 h-[32px] font-medium text-sm']">{{ b.label }}</a>
                    </nav>
                </div>
            </div>
        </div>
        <form ref="form">
            <div v-for="(tab, i) in data.tabs" :key="i">
                <div v-show="tab.active" class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
                    <div v-for="section in tab.sections" :key="section.id" class="rounded-lg">
                        <h1 class="">{{section.config.title}}<span class="cursor-pointer" @click="section.dop_open = !section.dop_open">{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                        </h1>
                        <div class="grid-2-2-1 section">
                            <div v-for="(col, col_id) in section.childs" :key="col_id">
                                <!--Первый блок-->
                                <div class="my-2" v-for="(component, i) in col.base" :key="i">
                                    <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span>
                                    <component v-if="component.field.component" v-model="component.field.value" :required="component.field.required" v-bind="component.field.bind" :is="component.field.component"> </component>
                                </div>
                                <!-- FULL -->
                                <div v-show="section.dop_open">
                                    <div class="my-2" v-for="(component, i) in col.full" :key="i">
                                        <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span>
                                        <component v-if="component.field.component" v-model="component.field.value" :required="component.field.required" v-bind="component.field.bind" :is="component.field.component"> </component>
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
                <h1 class="">{{section.config.title}}<span class="cursor-pointer" @click="section.dop_open = !section.dop_open">{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div v-for="(col, col_id) in section.childs" :key="col_id">
                        <!--Первый блок-->
                        <div class="my-2" v-for="(component, i) in col.base" :key="i">
                            <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span>
                            <component v-if="component.field.component" v-model="component.field.value" :required="component.field.required" v-bind="component.field.bind" :is="component.field.component"> </component>
                        </div>
                        <!-- FULL -->
                        <div v-show="section.dop_open">
                            <div class="my-2" v-for="(component, i) in col.full" :key="i">
                                <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span>
                                <component v-if="component.field.component" v-model="component.field.value" :required="component.field.required" v-bind="component.field.bind" :is="component.field.component"> </component>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </form>

    <div v-if="data.buttons" class="flex items-center justify-center w-full mt-2">
        <ubutton @save="save($event)" v-for="(button, i) in data.buttons" :key="i" v-bind="button" class="px-4"> </ubutton>
    </div>
</div>
</template>

<script setup>
import post from '@api'
import {
    ref,
    computed,
    watchEffect,
    getCurrentInstance
} from 'vue'
const app = getCurrentInstance()

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

// const render_data = ref(data.tabs ? data.tabs.find(active))

const form = ref(null)

const save = async (e) => {
    const formData = new FormData(form.value)
    if (data.value?.hidden) {
        data.value.hidden.forEach(e => {
            formData.append(e.name, e.value)
        })
    }
    let valid = true
    form.value.forEach(e => {
        if (e['required']) {
            if (!(e['hidden'] ? Number(e['value']) : e['value'])) {
                app.appContext.config.globalProperties.$toast({ component: 'toast', data: { type: 'warning', message: e['labels'] ? e['labels'][0]?.textContent : e['name'] } })
                valid = false
            }
        }
    })
    if (valid) {
        await post(e.api, formData)
    }
}
</script>

<style lang="scss" scoped>

</style>