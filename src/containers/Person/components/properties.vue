<template>
    <div>
        <!-- <barprop :data="navigation">
            
        </barprop> -->
    </div>
</template>

<script setup>
import {ref} from 'vue' 

const navigation = ref([
        {
            name: 'Адаптация',
            current: false,
            children: [{
                    name: 'Атестация',
                    href: '#',
                    count: 4,
                    current: false
                },
                {
                    name: 'Срезы',
                    href: '#',
                    current: false
                },

            ],
        },
        {
            name: 'Адреса и телефоны',
            current: false,
            children: [{
                    name: 'Авторизация на доп. сервисах',
                    href: '#',
                    current: false
                },
                {
                    name: 'Адреса',
                    href: '#',
                    current: false
                },
                {
                    name: 'Служебные номера',
                    href: '#',
                    current: false
                },
                {
                    name: 'Телефоны',
                    href: '#',
                    current: false
                },
            ],
        },
        {
            name: 'Воинский учет',
            current: false,
            children: [{
                    name: 'Воинский учёт',
                    href: '#',
                    current: false
                },


            ],
        },
        {
            name: 'График',
            current: false,
            children: [{
                    name: 'Overview',
                    href: '#',
                    current: false
                },
                {
                    name: 'Members',
                    href: '#',
                    current: false
                },
                {
                    name: 'Calendar',
                    href: '#',
                    current: false
                },
                {
                    name: 'Settings',
                    href: '#',
                    current: false
                },
            ],
        },
        {
            name: 'Документы',
            current: false,
            children: [{
                    name: 'Академические звания',
                    href: '#',
                    count: 3,
                    current: false
                },
                {
                    name: 'Водительская лицензия',
                    href: '#',
                    current: false
                },
                {
                    name: 'Военный билет',
                    href: '#',
                    current: false
                },
                {
                    name: 'Диплом о присвоении ученного звания',
                    href: '#',
                    current: false
                },
                {
                    name: 'Диплом о присвоении ученного степени',
                    href: '#',
                    current: false
                }, {
                    name: 'Загран паспорт',
                    href: '#',
                    current: false
                }, {
                    name: 'Медицинская книжка',
                    href: '#',
                    current: false
                }, {
                    name: 'Паспорт',
                    href: '#',
                    current: false
                }, {
                    name: 'Пенсионное свидетельство',
                    href: '#',
                    current: false
                }, {
                    name: 'Приписное свидетельство',
                    href: '#',
                    current: false
                }, {
                    name: 'Приписное свидельство',
                    href: '#',
                    current: false
                }, {
                    name: 'Паспорт',
                    href: '#',
                    current: false
                },
            ],
        },
    ])

</script>

<style lang="scss" scoped>

</style>