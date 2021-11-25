<template>
    <div v-if="!isLoad" class="p-5"> 
        <form ref="form">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div v-for="section in data.sections" :key="section.id" class="rounded-lg">
                <h1 class="">{{section.config.title}}<span class="cursor-pointer" @click="section.dop_open = !section.dop_open">{{ section.dop_open ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div v-for="(col, col_id) in section.childs" :key="col_id">
                        <!--Первый блок-->
                        <div class="my-2" v-for="(component, i) in col.base" :key="i">
                            <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span> 
                            <component v-if="component.field.component" v-model="component.field.value" :required="component.field.required" v-bind="component.field.bind" :is="component.field.component">  </component>  
                        </div>
                        <!-- FULL -->
                        <div v-show="section.dop_open">
                            <div class="my-2" v-for="(component, i) in col.full" :key="i">
                            <span v-if="!component.field.component">{{ component.field.type + ' ' + component.field.label}} </span> 
                                <component v-if="component.field.component" v-model="component.field.value" :required="component.field.required" v-bind="component.field.bind" :is="component.field.component">  </component> 
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
    
    const form = ref(null) 

    const save = async (e) => {  
        const formData = new FormData(form.value)  
        data.value.hidden.forEach(e => {
            formData.append(e.name, e.value) 
        })
        let valid = true
        form.value.forEach(e => {   
            if (e['required']) {    
                if (!(e['hidden'] ? Number(e['value']) : e['value'])) { 
                    app.appContext.config.globalProperties.$toast({component: 'toast', data: {type: 'warning', message: e['labels'] ? e['labels'][0]?.textContent : e['name']}}) 
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