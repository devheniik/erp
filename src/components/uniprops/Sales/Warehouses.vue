<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1> Склады , Код формы : spravka </h1>

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


          
           
           
            <div class="tl ">
                <label class="label-primary">Ответственный</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Типы складов:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Организации (для пров. комплектаций):</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Точка доставки:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Основной филиал:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Ресурс:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
              <div class="tl ">
                <label class="label-primary"> Бухгалтер для документов:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Бухгалтерский склад:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Складв1С:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Группа складов:</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
          
              <div class="tl">
                <label class="label-primary"> Порядок списания:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary"> Логист в ф. структуре:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary">Название:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>

            <div class="tl">
                <label class="label-primary">Телефон:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
          <div class="tl">
                <label class="label-primary">Примечание:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Название для клиента:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary"> *Логист:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary"> e-mail:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Адрес склада(сайт):</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary">Місце складання(Місто для відгрузок):</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
             <div class="tl">
                <label class="label-primary"> e-shop</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary">Чужой</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary"> Склад клиента (для компл.)</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary"> Заказы из РЦ</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary"> Автоматически снимать резервы</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary">Архивный</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary"> Склад для сайта "Наша стройка"</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary"> НС остатки только в Больш.Валюте</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary">Код:</label>
                <input type="text" class="input-primary" placeholder="" />
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