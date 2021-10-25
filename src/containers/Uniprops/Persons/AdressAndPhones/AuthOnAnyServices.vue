<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1>Авторизация на доп.сервисах</h1>

            </div>
        </div>
    </div>


    <div class="mt-8">
        <h1 class="label-big">
            Общие данные<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">

            <div class="tl ">
                <label class="label-primary">Внешние сервисы:</label>
                <div>
                    <modal-select :data="{
                                    label:'Внешние сервисы',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дата Добавления/Изменения:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary" >
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Срок действия:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary" >
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Логин:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Пароль:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Альфа-нумерическое имя:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Ключ к АПИ:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Заблокирован</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">ФичаВыбора</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>


        </div>
        <div>
        <div class="flex justify-center">
            <button class="btn-circle-primary-md">Добавить</button>
        </div>
        </div>
    </div>
</template>

<script setup>
    import route_create from '../api/create'
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'
</script>

<style lang="scss" scoped>

</style>