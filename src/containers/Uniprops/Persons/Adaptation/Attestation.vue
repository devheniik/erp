<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1>Аттестация</h1>

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
                <label class="label-primary">Кто проводил:</label>
                <div>
                    <modal-select :data="{
                                    label:'Кто проводил',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">участвовал1:</label>
                <div>
                    <modal-select :data="{
                                    label:'участвовал1',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">участвовал2:</label>
                <div>
                    <modal-select :data="{
                                    label:'участвовал2',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">участвовал3:</label>
                <div>
                    <modal-select :data="{
                                    label:'участвовал3',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">участвовал4:</label>
                <div>
                    <modal-select :data="{
                                    label:'участвовал4',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">участвовал5:</label>
                <div>
                    <modal-select :data="{
                                    label:'участвовал5',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Дата план.:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дата факт:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>


            <div class="tl">
                <label class="label-primary"> Примечания:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Проведена</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Прошел</label>
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