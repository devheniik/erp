<template>
    <div v-if="!isLoad" class="p-5">
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div v-for="section in sections" :key="section.id" class="rounded-lg">
                <h1 class="label-big">{{section.config.title}}<span class="cursor-pointer"
                        @click="section.dop_open = !section.dop_open">{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div v-for="(col, col_id) in section.childs" :key="col_id">
                        <!--Первый блок-->
                        <div class="my-4" v-for="(component, i) in col.base" :key="i">

                            <span v-if="!component.component">{{ component.type +  ' '  + component.label}} </span>
                            <component v-if="component.component" v-model="component.value" v-bind="component.bind" :is="component.component">  </component> 
                        </div>
                        <!-- FULL -->
                        <div v-show="section.dop_open">
                            <div class="my-5" v-for="(component, i) in col.full" :key="i">
                            <span v-if="!component.component">{{ component.type + ' ' + component.label}} </span> 
                                <component v-if="component.component" v-model="component.value" v-bind="component.bind" :is="component.component">  </component> 
                            </div>                        
                        </div>

                    </div>
                </div>
            </div>
            <!--<div class="w-full flex justify-center mt-6">
                <button @click="create(post_str(obj))" type="button" class="button-hover-primary">Добавить</button>
            </div>-->
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        computed,
        watchEffect
    } from 'vue'
    import get from '@/hooks/get'
    const props = defineProps({
        api: String,
        poster: String
    })

    const {
        data,
        load,
        isLoad
    } = get(props.api, {
        POSTER: props.poster
    })

    const sections = ref([])

    watchEffect(() => {
        if (data.value) {
            let resp = []
            data.value.sections.forEach((element, index) => {
                resp.push({
                    config: element,
                    childs: []
                })
                for (let i = 0; i < element.cols; i++) {
                    resp[index].childs.push({
                        base: [],
                        full: []
                    })
                }
            })

            data.value.base_fields.forEach((element, index) => {
                resp.find(e => e.config.id == element.section).childs[element.col - 1].base.push(
                    ct(element.field))
            })

            data.value.full_fields.forEach((element, index) => {
                resp.find(e => e.config.id == element.section).childs[element.col - 1].full.push(
                    ct(element.field))
            }) 

            console.log(resp)
            sections.value = resp
        }
    })

    const ct = (c) => {
        if (c.type == 'input') {
            return {
                component: 'input-text',
                value: c.value,  
                bind: {
                    id: c.id,
                    name: c.name,
                    label: c.label,
                    placeholder: c.placeholder,
                    type: 'text',
                },
            }
        }

        if (c.type == 'label') { 
            return {
                component: 'input-text',
                value: c.value,  
                bind: {
                    id: c.name,
                    name: c.name,
                    disabled: true,
                    label: c.label,
                    placeholder: null,
                    type: 'text',
                },
            }
        }

        if (c.type == 'boolean') {
            return {
                component: 'input-select',
                value: c.value,
                bind: {
                    id: c.label,
                    name: c.label,
                    label: c.label, 
                    options: c.content,
                }
            }
        }

        if (c.type == 'select') {
            return {
                component: 'input-select',
                value: c.value,
                bind: {
                    id: c.name,
                    name: c.name,
                    label: c.label, 
                    options: c.content.options,
                }
            }
        }

        // if (c.type == 'boolean') {
        //     return {
        //         component: 'input-switch',
        //         value: c.value,
        //         bind: {
        //             label: c.label
        //         },
        //     }
        // }

        return {
                component: false,
                type: c.type,
                value: c.value,
                label: c.label,
                // bind: {
                //     id: c.label,
                //     name: c.label,
                //     label: c.label, 
                //     options: c.content,
                // }
            }
    }
</script>

<style lang="scss" scoped>

</style>