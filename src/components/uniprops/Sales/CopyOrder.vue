<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1> Типы доставки , Код формы : spravka </h1>

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
                <label class="label-primary">Дата:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> Копировать в</label>
                <div>
                    <select class="dropdown-primary">
                        <option>Заказы</option>
                        <option>Закупки</option>
                        <option>Закупки (комплект вместо сборок)</option>
                        <option>Закупки - Близнецы</option>
                        <option>Заявки покупателей</option>
                        <option>Консигнации</option>
                        <option>Консигнации (комплект вместо сборок)</option>

                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary"> В заказ/закупку №:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
 <div class="tl ">
                <label class="label-primary">Организация</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
             <div class="tl ">
                <label class="label-primary">Филиал</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
             <div class="tl ">
                <label class="label-primary">Слой</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
             <div class="tl ">
                <label class="label-primary">Валюта</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
             <div class="tl ">
                <label class="label-primary"> Тип заказа/закупки</label>
                <div>
                    <modal-select :data="{
                                    label:'-',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
         
            <div class="tl">
                <label class="label-primary"> Установить факт.кол=0</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
                <div class="tl">
                <label class="label-primary"> ei_Копировать только НЕ отложенные товары?</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
                <div class="tl">
                <label class="label-primary"> Прогнозировать закупку</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
             <div class="tl">
                <label class="label-primary"> Дата прогноза:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Склад прогноза</label>
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
                <button class="btn-circle-primary-md">Копировать</button>
            </div>
        </div>
    </div>
</template>

<script setup> 
    import {
        ref
    } from 'vue'
    import send from "@api"

    const props = defineProps({
        params: Object
    })

    import get from '@/hooks/get'

    const {
    data, isLoad
    } = get('orders/corrections/eizakazcopy/show', { ZAKAZ: props.params.ZAKAZ, ZAKTIP: props.params.ZAKTIP }) 

</script>

<style lang="scss" scoped>

</style>