<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1>Отделы</h1>

            </div>
        </div>
    </div>
    <div class="mt-2">
        <h1 class="ml-8"> Код формы: spravka</h1>
    </div>

    <div class="mt-8">
        <h1 class="label-big">
            Поля элемента справочника<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">

            <div class="tl ">
                <label class="label-primary">Руководитель:</label>
                <div>
                    <modal-select :data="{
                                    label:'Руководитель',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Счет:</label>
                <div>
                    <modal-select :data="{
                                    label:'Счет',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Ресурс:</label>
                <div>
                    <modal-select :data="{
                                    label:'Ресурс',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Название:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Создан:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Department:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Название в род. падеже:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Расформирован</label>
                <div>
                    <select class="dropdown-primary" >
                        <option value="+" selected="true">М</option>
                        <option value="-">Ж</option>
                    </select>
                </div>
            </div>

            <div class="tl">
                <label class="label-primary">Код:</label>
                <input type="text" class="input-primary" placeholder="Фамилия" />
            </div>
            <div class="tl ">
                <label class="label-primary"> Верхний уровень:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
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