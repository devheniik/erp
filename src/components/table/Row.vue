<template>
    <div>
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="rounded-full flex items-center text-gray-400 hover:text-gray-600"
                >
                    <span class="sr-only">Open options</span>
                    <MenuIcon class="h-5 w-5" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
            >
                <MenuItems
                    class="z-40 origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                >
                    <div v-for="(group, i) in data" :key="i" class="py-1">
                        <MenuItem v-for="(item, i) in group" :key="i" v-slot="{ active }">
                            <span
                                @click="handle(item)"
                                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                            >{{ item.label }}</span>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup>
import router from '@/router'
import post from '@api'
import {
    ref,

    getCurrentInstance
} from 'vue'

const app = getCurrentInstance()


const handle = (item) => {
    if (item.type == 'window') {
        app.appContext.config.globalProperties.$open(router.resolve(item.data))
    }
    if (item.type == 'post') {
        post(item.data.api, item.data.params)
    }
}

const props = defineProps({
    data: Array
}) 
</script>

<style lang="scss" scoped>
</style>