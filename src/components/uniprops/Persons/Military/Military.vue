<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="label-big">
            <div>
                <h1>Воинский учет</h1>

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
                <label class="label-primary">Состав:</label>
                <div>
                    <modal-select :data="{
                                    label:'Состав',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Воинское звание:</label>
                <div>
                    <modal-select :data="{
                                    label:'Воинское звание',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Военкомат:</label>
                <div>
                    <modal-select :data="{
                                    label:'Военкомат',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Пригодность к воинской службе:</label>
                <div>
                    <modal-select :data="{
                                    label:'Пригодность к воинской службе',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Группа воинского учёта:</label>
                <div>
                    <modal-select :data="{
                                    label:' Группа воинского учёта',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Категории воинского учета:</label>
                <div>
                    <modal-select :data="{
                                    label:'Категории воинского учета',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дата постановки на учет:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            


            <div class="tl">
                <label class="label-primary"> Военно-учетная специальность:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
              <div class="tl">
                <label class="label-primary"> Находится на спец. учете:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Призывник</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Военнообязанный</label>
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
   
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'
</script>

<style lang="scss" scoped>

</style>