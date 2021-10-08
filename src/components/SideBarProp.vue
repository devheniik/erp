<template>
    <div class="flex flex-col flex-grow  border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto w-1/4">
        <div class="flex items-center flex-shrink-0 px-4">
            <img class="w-auto" src="@/assets/images/logo.jpg" alt="Workflow" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
            <nav class="flex-1 px-2 space-y-1 bg-white">
                <template v-for="item in navigation" :key="item.name">
                    <div v-if="!item.children">

                    </div>
                    <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">

                        <DisclosureButton
                            :class="[item.current ? 'bg-gray-100 text-gray-900' : 'bg-primary-50 text-gray-600 hover:bg-primary-100 hover:text-gray-900', 'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500']">
                            <StopIcon class="h-3 w-3 text-primary-400 mr-2" />
                            {{ item.name }}

                            <ChevronDownIcon
                                :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" />
                          
                        </DisclosureButton>

                        <DisclosurePanel class="space-y-1">
                            <a v-for="subItem in item.children" :key="subItem.name" :href="subItem.href"
                                class="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 bg-primary-200 hover:bg-gradient-to-r from-primary-100 to-primary-50">
                                <StopIcon class="h-2 w-2 text-primary-600 mr-2" />
                                {{ subItem.name }}
                                <span v-if="subItem.count"
                                    :class="[subItem.current ? ' bg-gray-800' : 'text-gray-100 bg-secondary-400 group-hover:bg-primary-300', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
                                    {{ subItem.count }}
                                </span>
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
            count: 1,
            href: '#',
            current: true,
        },
        {
            name: 'Адаптация',
            current: false,

            children: [{
                    name: 'Атестация',
                    href: '#',
                    count: 4,
                },
                {
                    name: 'Срезы',
                    href: '#'
                },

            ],
        },
        {
            name: 'Адреса и телефоны',
            current: false,
            children: [{
                    name: 'Авторизация на доп. сервисах',
                    href: '#'
                },
                {
                    name: 'Адреса',
                    href: '#'
                },
                {
                    name: 'Служебные номера',
                    href: '#'
                },
                {
                    name: 'Телефоны',
                    href: '#'
                },
            ],
        },
        {
            name: 'Воинский учет',
            current: false,
            children: [{
                    name: 'Воинский учёт',
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
                    name: 'Академические звания',
                    href: '#',
                    count: 3
                },
                {
                    name: 'Водительская лицензия',
                    href: '#'
                },
                {
                    name: 'Военный билет',
                    href: '#'
                },
                {
                    name: 'Диплом о присвоении ученного звания',
                    href: '#'
                },
                {
                    name: 'Диплом о присвоении ученного степени',
                    href: '#'
                }, {
                    name: 'Загран паспорт',
                    href: '#'
                }, {
                    name: 'Медицинская книжка',
                    href: '#'
                }, {
                    name: 'Паспорт',
                    href: '#'
                }, {
                    name: 'Пенсионное свидетельство',
                    href: '#'
                }, {
                    name: 'Приписное свидетельство',
                    href: '#'
                }, {
                    name: 'Приписное свидельство',
                    href: '#'
                }, {
                    name: 'Паспорт',
                    href: '#'
                },
            ],
        },
    ]
</script>

<style lang="scss" scoped>

</style>