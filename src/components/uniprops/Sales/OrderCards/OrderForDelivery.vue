<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1> Общие данные</h1>

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

            <div class="tl">
                <label class="label-primary">Заказ:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>

            <div class="tl">
                <label class="label-primary">Сумма:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Организация:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
          
            <div class="tl ">
                <label class="label-primary">Доставить из:</label>
                <div>
                    <modal-select :data="{
                                    label:'Доставить из',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Доставить в:</label>
                <div>
                    <modal-select :data="{
                                    label:'Доставить в',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Контактёр:</label>
                <div>
                    <modal-select :data="{
                                    label:'Контактёр',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
          
            <div class="tl">
                <label class="label-primary">Дата доставки план:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Дата доставки факт:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Приоритет:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Мест:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Вес:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Объем:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Площадь:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl ">
                <label class="label-primary">Автомобиль:</label>
                <div>
                    <modal-select :data="{
                                    label:'Автомобиль',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Лог. центр:</label>
                <div>
                    <modal-select :data="{
                                    label:' Лог. центр',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Тип доставки:</label>
                <div>
                    <modal-select :data="{
                                    label:' Тип доставки',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Доставлено</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Машина загружена?</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
              <div class="tl">
                <label class="label-primary"> Разносить транс. затр.?</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Создал:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
            <div class="mx-4 mt-4">
                <label class="block text-sm font-medium text-gray-400">Примечания</label>
                <div class="mt-1">
                    <textarea rows="3" class="textarea-primary" ></textarea>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Справочное расст.:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Стоимость заезда:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Блокировать пересчет </label>
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