<template>
    <div class="flex flex-col flex-grow  border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto w-1/4">
        <div class="flex items-center flex-shrink-0 px-4">
            <img class="h-8 w-auto" src="@/assets/images/logo.jpg" alt="Workflow" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
            <nav class="flex-1 px-2 space-y-1 bg-white" >
                <template   v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">
                        
                    </div>
                    <Disclosure  as="div" v-else class="space-y-1" v-slot="{ open }">
                       
                        <DisclosureButton
                        :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500']">
                           <StopIcon class="h-3 w-3 text-primary-400 mr-2"/>
                          {{ item.name }}
                          <ChevronDownIcon :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']"/>
                            
                        </DisclosureButton>
                            
                        <DisclosurePanel  class="space-y-1">
                            <a v-for="subItem in item.children" :key="subItem.name" :href="subItem.href"
                                class="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                {{ subItem.name }}
                            </a>
                        </DisclosurePanel>
                    </Disclosure>
                </template>
            </nav>
        </div>
    </div>
</template>


<script setup>
    import {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    } from '@headlessui/vue'


    const navigation = [{
            name: 'Dashboard',
            
            href: '#',
            current: true
        },
        {
            name: 'Адаптация',
            current: false,
            children: [{
                    name: 'Overview',
                    href: '#',
                    icon: ''
                },
                {
                    name: 'Members',
                    href: '#'
                },
                {
                    name: 'Calendar',
                    href: '#'
                },
                {
                    name: 'Settings',
                    href: '#'
                },
            ],
        },
        {
            name: 'Адреса и телефоны',
            current: false,
            children: [{
                    name: 'Overview',
                    href: '#'
                },
                {
                    name: 'Members',
                    href: '#'
                },
                {
                    name: 'Calendar',
                    href: '#'
                },
                {
                    name: 'Settings',
                    href: '#'
                },
            ],
        },
        {
            name: 'Воинский учет',
            current: false,
            children: [{
                    name: 'Overview',
                    href: '#'
                },
                {
                    name: 'Members',
                    href: '#'
                },
                {
                    name: 'Calendar',
                    href: '#'
                },
                {
                    name: 'Settings',
                    href: '#'
                },
            ],
        },
        {
            name: 'График',
            current: false,
            children: [{
                    name: 'Overview',
                    href: '#'
                },
                {
                    name: 'Members',
                    href: '#'
                },
                {
                    name: 'Calendar',
                    href: '#'
                },
                {
                    name: 'Settings',
                    href: '#'
                },
            ],
        },
        {
            name: 'Документы',
            current: false,
            children: [{
                    name: 'Overview',
                    href: '#'
                },
                {
                    name: 'Members',
                    href: '#'
                },
                {
                    name: 'Calendar',
                    href: '#'
                },
                {
                    name: 'Settings',
                    href: '#'
                },
            ],
        },
    ]
</script>

<style lang="scss" scoped>

</style>