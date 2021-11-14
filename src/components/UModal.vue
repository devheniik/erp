<template>
    <div v-if="!isLoad" class="p-5">
        <form id="form" name="form" ref="form" class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div v-for="section in data.sections" :key="section.id" class="rounded-lg">
                <h1 class="label-big">{{section.config.title}}<span class="cursor-pointer"
                        @click="section.dop_open = !section.dop_open">{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div v-for="(col, col_id) in section.childs" :key="col_id">
                        <!--Первый блок-->
                        <div class="my-2" v-for="(component, i) in col.base" :key="i">
                            <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span> 
                            <component v-if="component.field.component" v-model="component.field.value" v-bind="component.field.bind" :is="component.field.component">  </component>  
                        </div>
                        <!-- FULL -->
                        <div v-show="section.dop_open">
                            <div class="my-2" v-for="(component, i) in col.full" :key="i">
                            <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span> 
                                <component v-if="component.field.component" v-model="component.field.value" v-bind="component.field.bind" :is="component.field.component">  </component> 
                            </div>                        
                        </div>

                    </div>
                </div>
            </div> 
        </form>
        <div v-if="data.buttons" class="flex items-center justify-center"> 
                <ubutton v-for="(button, i) in data.buttons" :key="i" v-bind="button" :post_data="form" class="px-4"> </ubutton> 
                {{form}}
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
        params: Object
    })

    const {
        data,
        load,
        isLoad
    } = get(props.api, props.params)
    
    const form = ref(null)
    // (new FormData(document.getElementById('formumodal'))) )

    // const formData = computed(() => !isLoad.value ? (new FormData(form.value)) : {})

    const ct = (c /* field*/) => {
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

        if (c.type == 'textarea') {
            return {
                component: 'input-area',
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

        if (c.type == 'group') { 
            return {
                component: 'group',
                value: c.content.hidden.value,
                bind: {
                    id: c.id,  
                    value_name: c.content.value,
                    label: c.label,
                    name: c.label,
                    params: c.content.action, 
                    type: 'text', 
                    placeholder: c.label,
                },
            }
        }

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