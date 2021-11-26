<template>
<div class="h-screen flex overflow-hidden bg-white">
    <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="sidebarOpen = false">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </TransitionChild>
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="absolute top-0 right-0 -mr-12 pt-2">
                            <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
                        </div>
                    </TransitionChild>
                    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div class="flex-shrink-0 flex items-center px-4">
                            <img class="h-8 w-auto" :src="logo" alt="Workflow" />
                        </div>
                        <nav class="mt-5 flex-1" aria-label="Sidebar">
                            <div class="px-2 space-y-1 ">
                                <div v-for="(item, i) in navigation" :key="item.name" :href="i" class="cursor-pointer">
                                    <div @click="!item.current ? handleClick(item) : item.current = false" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900', 'group flex items-center justify-between px-2 py-1.5 text-base rounded-md truncate whitespace-nowrap']">
                                        <div class="flex flex-wrap items-center">
                                            <component :is="item.icon" :class="[item.current ? 'text-primary-600' : 'text-primary-400 group-hover:text-primary-600', 'mr-4 flex-shrink-0 h-4 w-4']" aria-hidden="true" /> {{ item.name }}
                                        </div>
                                        <ChevronDownIcon class="h-3 w-3 scale-90" v-if="item.current && item.child.length > 0" />
                                        <ChevronLeftIcon class="h-3 w-3 scale-90" v-else-if="item.child.length > 0" />
                                    </div>
                                    <transition enter-active-class="translate-x-full" leave-active-class="translate-x-full">
                                        <div v-show="item.current && item.child.length" class="transition-transform	easy-in duration-300 space-y-1 mt-1 overflow-hidden ">
                                            <div v-for="(subItem, j) in item.child" :key="j" class="cursor-pointer">
                                                <div @click="!subItem.current ? handleClick(subItem) : subItem.current = false" :class="[subItem.current ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900', 'group flex items-center justify-between px-2 py-1.5 text-base rounded-md truncate whitespace-nowrap']">
                                                    <div class="flex flex-wrap items-center pl-8">
                                                        <!-- <component :is="subItem.icon" :class="[subItem.current ? 'text-primary-600' : 'text-primary-400 group-hover:text-primary-600', 'mr-4 flex-shrink-0 h-4 w-4']" aria-hidden="true" />  -->
                                                        {{ subItem.name }}
                                                    </div>
                                                    <ChevronDownIcon class="h-3 w-3 scale-90" v-if="subItem.current && subItem.child.length > 0" />
                                                    <ChevronLeftIcon class="h-3 w-3 scale-90" v-else-if="subItem.child.length > 0" />
                                                </div>
                                                <transition enter-active-class="translate-x-full" leave-active-class="translate-x-full">
                                                    <div v-if="subItem.current && subItem.child.length" class="transition-transform	easy-in duration-300 space-y-1 mt-1 overflow-hidden">
                                                        <div @click="handleClick(thItem)" v-for="(thItem, k) in subItem.child" :key="k" :class="[thItem.current ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900', 'group flex items-center  px-2 py-1.5 text-base rounded-md truncate whitespace-nowrap']">
                                                            <!-- <component :is="thItem.icon" :class="[thItem.current ? 'text-primary-600' : 'text-primary-400 group-hover:text-primary-600', 'mr-4 flex-shrink-0 h-4 w-4']" aria-hidden="true" />  -->
                                                            <span class="pl-14">
                                                              {{ thItem.name }} 
                                                            </span>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
                        <a href="#" class="flex-shrink-0 group block">
                            <div class="flex items-center">
                                <div>
                                    <img class="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                        Whitney Francis
                                    </p>
                                    <p class="text-base font-medium text-gray-500 group-hover:text-gray-700">
                                        View profile
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </TransitionChild>
            <div class="flex-shrink-0 w-14" aria-hidden="true">
                <!-- Force sidebar to shrink to fit close icon -->
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <splitpanes class="">
        <pane size="18" class="hidden lg:flex lg:flex-shrink-0 hide-scroll overflow-y-auto w-full">
            <div class="flex flex-col w-full">
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100  ">
                    <div class="hide-scroll flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div class="flex items-center justify-start ml-2 flex-shrink-0 text-gray-800">
                            <!-- https://ua.dst.roto-frank.com/fileadmin/assets/UA/00_Global/Mizol_%D0%BB%D0%BE%D0%B3%D0%BE.jpg -->
                            <!-- <CogIcon class="h-12 w-12 mr-3" /> -->
                            <div class="flex flex-col pl-10 ">
                                <span class="font-extrabold text-2xl">EUROZOL</span>
                                <span class="font-light text-base -mt-2">BUILD IT</span>
                            </div>
                        </div>
                        <nav class="mt-1 flex-1" aria-label="Sidebar">
                            <div class="px-2 space-y-1 ">
                                <div v-for="(item, i) in navigation" :key="item.name" :href="i" class="cursor-pointer">
                                    <div @click="!item.current ? handleClick(item) : item.current = false" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900', 'group flex items-center justify-between px-2 py-1.5 text-base rounded-md truncate whitespace-nowrap']">
                                        <div class="flex flex-wrap items-center">
                                            <component :is="item.icon" :class="[item.current ? 'text-primary-600' : 'text-primary-400 group-hover:text-primary-600', 'mr-4 flex-shrink-0 h-4 w-4']" aria-hidden="true" /> {{ item.name }}
                                        </div>
                                        <ChevronDownIcon class="h-3 w-3 scale-90" v-if="item.current && item.child.length > 0" />
                                        <ChevronLeftIcon class="h-3 w-3 scale-90" v-else-if="item.child.length > 0" />
                                    </div>
                                    <transition enter-active-class="translate-x-full" leave-active-class="translate-x-full">
                                        <div v-show="item.current && item.child.length" class="transition-transform	easy-in duration-300 space-y-1 mt-1 overflow-hidden ">
                                            <div v-for="(subItem, j) in item.child" :key="j" class="cursor-pointer">
                                                <div @click="!subItem.current ? handleClick(subItem) : subItem.current = false" :class="[subItem.current ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900', 'group flex items-center justify-between px-2 py-1.5 text-base rounded-md truncate whitespace-nowrap']">
                                                    <div class="flex flex-wrap items-center pl-8">
                                                        <!-- <component :is="subItem.icon" :class="[subItem.current ? 'text-primary-600' : 'text-primary-400 group-hover:text-primary-600', 'mr-4 flex-shrink-0 h-4 w-4']" aria-hidden="true" />  -->
                                                        {{ subItem.name }}
                                                    </div>
                                                    <ChevronDownIcon class="h-3 w-3 scale-90" v-if="subItem.current && subItem.child.length > 0" />
                                                    <ChevronLeftIcon class="h-3 w-3 scale-90" v-else-if="subItem.child.length > 0" />
                                                </div>
                                                <transition enter-active-class="translate-x-full" leave-active-class="translate-x-full">
                                                    <div v-if="subItem.current && subItem.child.length" class="transition-transform	easy-in duration-300 space-y-1 mt-1 overflow-hidden">
                                                        <div @click="handleClick(thItem)" v-for="(thItem, k) in subItem.child" :key="k" :class="[thItem.current ? 'bg-gray-200 text-gray-900' : 'text-gray-800 hover:bg-gray-200 hover:text-gray-900', 'group flex items-center  px-2 py-1.5 text-base rounded-md truncate whitespace-nowrap']">
                                                            <!-- <component :is="thItem.icon" :class="[thItem.current ? 'text-primary-600' : 'text-primary-400 group-hover:text-primary-600', 'mr-4 flex-shrink-0 h-4 w-4']" aria-hidden="true" />  -->
                                                            <span class="pl-14">
                                                              {{ thItem.name }} 
                                                            </span>
                                                        </div>
                                                    </div>
                                                </transition>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
                        <a class="flex-shrink-0 w-full group block">
                            <div class="flex items-center">
                                <div>
                                    <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-base font-medium text-gray-900 group-hover:text-gray-100" @click="$toast({component: 'toast', data: {type: 'warning', message: `text`}})">
                                        Пользователь
                                    </p> 
                                    <router-link as="p" :to="'/login'" class="text-xs font-medium text-gray-900 group-hover:text-gray-200">
                                        Выйти
                                    </router-link>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </pane>
        <pane size="100" class="hide-scroll overflow-y-auto">
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden h-full">
                <div class="lg:hidden">
                    <div class="flex items-center justify-between  border-b   px-4 py-1.5 ">
                        <div class="flex items-center justify-start ml-2 flex-shrink-0 text-gray-800">
                            <CogIcon class="h-12 w-12 mr-3" />
                            <div class="flex flex-col">
                                <span class="font-extrabold text-2xl">EUROZOL</span>
                                <span class="font-medium text-base -mt-2">BUILD IT</span>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900" @click="sidebarOpen = true">
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>
                        </div>
                    </div>
                </div>
                <div class="flex-1 relative z-0 flex overflow-hidden h-full">
                    <main class="flex-1 hide-scroll relative z-0 overflow-y-auto focus:outline-none xl:order-last h-full" style="margin-left: -1px;">
                        <!-- Start main area-->
                        <slot></slot>
                        <!-- End main area -->
                    </main>
                </div>
            </div>
        </pane>
    </splitpanes>
</div>
</template>


<script setup>
import {
    ref,
    watch,
    computed
} from 'vue'
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import store from '@/store'
import {
    useRoute,
    useRouter
} from 'vue-router'
import useNavigation from '../hooks/navigation'

import logo from '../assets/images/logo.png'

const {
    navigation,
    findActive,
    linkTo
} = useNavigation()

// route operation
const route = useRoute()
const router = useRouter()
let isShow = false

findActive(route.meta.uname)

// navigation guard

const handleClick = item => {
    linkTo(item, router)
    findActive(item.uname)
}






const sidebarOpen = ref(false)

const userNavigation = [{
        name: 'Your Profile',
        href: '#'
    },
    {
        name: 'Sign out',
        href: '#'
    },
]
</script>

<style lang="css" scoped>
#scroll {
    scrollbar-width: none;
}

.splitpanes {
    background: #fff;
}
</style>