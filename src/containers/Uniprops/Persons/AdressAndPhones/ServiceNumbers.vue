<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1>Служебные номера</h1>

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
                <label class="label-primary">Филиал для задолжености МОЛа:</label>
                <div>
                    <modal-select :data="{
                                    label:'Филиал для задолжености МОЛа',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
             <div class="tl ">
                <label class="label-primary">Филиал для начисления затрат:</label>
                <div>
                    <modal-select :data="{
                                    label:'Филиал для начисления затрат',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
             <div class="tl ">
                <label class="label-primary">Номера:</label>
                <div>
                    <modal-select :data="{
                                    label:'Номера',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дата выдачи:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary" >
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дата возврата:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary" >
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Лимит:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Номер:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Примечание:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Для звонков</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дополнительный пакет</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дополнительные услуги</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Статус: активен?</label>
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