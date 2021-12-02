<template>
<div class="w-full h-full">
    <div class="flex flex-col lg:flex-row w-full items-center justify-between px-2 border-b">
        <div class="bg-gray-100">
            <div class="overflow-y-auto  hide-scroll z-40 inline-flex items-center space-x-1 justify-center w-full bg-white py-3">
                <!-- <button class="inline-flex items-center px-1 text-xs font-medium">
                    Сущьность
                    <span class="text-gray-600 ml-2">№</span>
                </button> -->
                <modal-select @change="handle_link({ name: route_name, params: { id: $event }})" :data="{ api: api }" custom>
                    <button class="button-hover-box-primary">
                        <SearchIcon class="h-4 w-4" />
                    </button>
                </modal-select>
                <button v-show="data.first != null" class="button-hover-box-primary" @click="handle_link({ name: route_name, params: { id: data.first } })">
                    <ChevronDoubleLeftIcon class="h-4 w-4" />
                </button>
                <button v-show="data.prev != null" class="button-hover-box-primary" @click="handle_link({ name: route_name, params: { id: data.prev } })">
                    <ChevronLeftIcon class="h-4 w-4" />
                </button>
                <div class="relative border h-[32px] border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-primary-600 focus-within:border-primary-600">
                    <label class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900 uppercase">{{label ?? 'Сущьность'}}</label>
                    <input  type="text" class=" -mt-1  block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="№" v-model="entityId" @keyup.enter="handle_link({ name: route_name, params: { id: entityId } })" />
                </div>
                <button v-show="data.next != null" class="button-hover-box-primary" @click="handle_link({ name: route_name, params: { id: data.next } })">
                    <ChevronRightIcon class="h-4 w-4" />
                </button>
                <button v-show="data.last != null" class="button-hover-box-primary" @click="handle_link({ name: route_name, params: { id: data.last } })">
                    <ChevronDoubleRightIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary">
                    <XIcon class="h-4 w-4" />
                </button>
                <!-- <button class="button-hover-box-primary">
                    <PlusIcon class="h-4 w-4" />
                </button> -->
            </div>
        </div>
        <div class="sm:hidden mb-3  w-full">
            <select class="block  w-full focus:ring-primary-500 focus:border-primary-500 rounded-md border-gray-300">
                <option v-for="(b, i) in buttons" @click="handleClick(i)" :key="i" :value="b.active" :selected="current == b.component" >{{ b.label }}  </option>
            </select>
        </div>

        <div class="hidden sm:block">
            <div class="border-gray-200 sm:mb-4 lg:mb-0 bg-white">
                <nav class="flex rounded-md bg-gray-200 p-0.5" aria-label="Tabs">
                    <a v-for="(b, i) in buttons" @click="handleClick(i)" :key="i" type="button" :class="[b.active ? 'bg-gradient-to-t from-primary-100 via-primary-400 to-primary-100 shadow-md text-gray-50' : 'text-gray-800 ', 'px-3 rounded-md  flex  items-center py-2 h-[28px] font-medium text-sm']">{{ b.label }}</a>
                     <!-- (i == (buttons.length - 1) && i == 0 ) ? 'rounded-md' : i == 0 ? 'rounded-l-md' : i == (buttons.length - 1) ? 'rounded-r-md' : '' -->
                </nav>
            </div>
        </div>
    </div>

    <div v-if="!isLoad" class="w-full h-full">
        <!-- TABS -->


        <main class="h-full">
            <div class="h-full">
                <slot>

                </slot>
            </div>

        </main>




        <!-- NAVIGATION -->


    </div>
    <loading v-if="isReload"></loading>
</div>
</template>

<script setup>
 import { ref, watch, computed,  onBeforeUpdate } from 'vue'
 import store from "@/store"
 // * router init 
 import { useRoute, useRouter } from 'vue-router'
 const route = useRoute()
 const router = useRouter()

 // * hooks
 import dataLoad from '.././hooks/reload'

 // * props & emits init

 const props = defineProps({
     config: Array,
     name: String,
     label: String,
     route_name: String,
     links: String,
     api: String,
     current: String,
     ls_name: String
 })

 const emit = defineEmits(['update:config', 'reload'])

 // * tabs ux

 const buttons = ref(props.config)

 const handleClick = (i) => {
     buttons.value.forEach(e => {
         e.active = false
     })
     buttons.value[i].active = true
     emit('update:config', buttons.value)
 }



 // * firstly data logic 
 const entityId = ref(route.params.id)

 // * get data from hooks
 const {
     data,
     isLoad,
     isReload,
     id,
     load
 } = dataLoad(props.links)

 const handle_link = (data) => { 
     route.params.id ? store.commit('update_card', { name: props.ls_name, id: data.params.id }) : ''
     router.push(data)
     emit('reload', data.params.id)
 }

  onBeforeUpdate(() => { 
      console.log(route.params.id)
      if (route.params.id == 0) {
          handle_link({ name: props.route_name, params: { id: data.value.last } })
      }
  })




 // * runtime logic
 watch(computed(() => route.params.id), async () => {

 })
</script>

<style lang="scss" scoped>
.mr-fixed {
    margin-right: calc(100% - 288px);
}
</style>