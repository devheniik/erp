<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1> Типы доставки  , Код формы : spravka </h1>

            </div>
        </div>
    </div>


    <div class="mt-8">
        <h1 class="label-big">
            Поля элемента справочника<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">


           <div class="tl">
                <label class="label-primary">Название:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>

            <div class="tl">
                <label class="label-primary"> GLN Код:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
          <div class="tl">
                <label class="label-primary"> Адрес.:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Телефон:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary">Координата:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary">Этаж:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Лифт</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary">ExternalID:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary"> Режим работы:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl ">
                <label class="label-primary">Фирма</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Контактер:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Район доставки:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Тип точки:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
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
            <div class="tl ">
                <label class="label-primary">Филиал:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
              <div class="tl ">
                <label class="label-primary">Склад:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
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