<template>
    <div> 
        <!-- TABS -->
        <div class="sm:hidden">
            <select  class="block w-full focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md">
                <option  v-for="(b, i) in buttons" @click="handleClick(i)" :key="i"  :value="b.active">{{ b.label }}</option>
            </select>
        </div>

        <div class="hidden sm:block"> 
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex" aria-label="Tabs"> 
                    <a v-for="(b, i) in buttons" @click="handleClick(i)" :key="i" type="button" :class="[b.active ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm']" >{{ b.label }}</a>
                </nav>
            </div>
        </div>


        <main class="my-5">
            <div class="mr-5">
                <slot>

                </slot>
            </div>
            
        </main>




        <!-- NAVIGATION -->
        <div class="bg-gray-100">
            <div class="fixed bottom-0 overflow-y-auto border-t border-gray-300 hide-scroll z-0 inline-flex items-center -ml-2 space-x-2 justify-center w-full lg:w-fixed bg-white py-3">
                <!-- <button class="inline-flex items-center px-1 text-xs font-medium">
                    Сущьность
                    <span class="text-secondary-600 ml-2">№</span>
                </button> -->

                <button class="button-hover-box-primary">
                    <SearchIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary">
                    <ChevronDoubleLeftIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary">
                    <ChevronLeftIcon class="h-4 w-4" />
                </button> 
                <input class="input w-36" type="text" /> 
                <button class="button-hover-box-primary">
                    <ChevronRightIcon class="h-4 w-4" />
                </button>
                <button class="button-hover-box-primary">
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
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    config: Array
})

const emit = defineEmits(['update:config'])

const buttons = ref(props.config)

// const handleClear = () => {
//     buttons.value.forEach(e => {
//         e.active = false
//     })
// }

const handleClick = (i) => {
    buttons.value.forEach(e => {
        e.active = false
    })

    buttons.value[i].active = true                                                                  


    emit('update:config', buttons.value)
}

</script>

<style lang="scss" scoped>
.mr-fixed {
    margin-right: calc(100% - 288px);
}


</style>