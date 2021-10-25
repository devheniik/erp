<template>
    <div class="mr-4 border-b  ">
        <div>
            <div class="flex justify-end items-center">
                <button class="btn-circle-primary-md">Добавить</button>
            </div>
        </div>
        <div class="">
            <div>
                <h1>Договоры продаж</h1>

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
                <label class="label-primary">Организация:</label>
                <div>
                    <modal-select :data="{
                                    label:'Организация',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Прайслист:</label>
                <div>
                    <modal-select :data="{
                                    label:'Прайслист',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Филиал:</label>
                <div>
                    <modal-select :data="{
                                    label:'Филиал',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Менеджер договора:</label>
                <div>
                    <modal-select :data="{
                                    label:' Менеджер договора',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Прайслист коррекции:</label>
                <div>
                    <modal-select :data="{
                                    label:'Прайслист коррекции',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Товар-услуга:</label>
                <div>
                    <modal-select :data="{
                                    label:'Товар-услуга',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Плательщик:</label>
                <div>
                    <modal-select :data="{
                                    label:'Плательщик',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Вид отсрочки по договору:</label>
                <div>
                    <modal-select :data="{
                                    label:'Вид отсрочки по договору',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary"> Вид договора:</label>
                <div>
                    <modal-select :data="{
                                    label:' Вид договора',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Проект:</label>
                <div>
                    <modal-select :data="{
                                    label:'Проект',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl ">
                <label class="label-primary">Родительский договор:</label>
                <div>
                    <modal-select :data="{
                                    label:'Родительский договор',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }"></modal-select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Дата:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Срок оплаты:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Срок окончания:</label>
                <div class="flex  items-center">
                    <flat-pickr :locale="'ru'" class="input-primary">
                    </flat-pickr>
                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Сумма:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Скидка:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Срок поставки:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Процент комиссии банка:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Процент разницы, который оставляем себе:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Приоритет (сначала меньше):</label>
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
                <label class="label-primary">GLN Код:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary"> Кто добавил:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Когда добавил:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">зеркальный договор:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
            <div class="tl">
                <label class="label-primary">Закрыт</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Разрешать скидку</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Разрешать скидку</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Для док. валют (безнал.)</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Для недок. валют (нал.)</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Разрешить кредит без документов</label>
                <div>
                    <select class="dropdown-primary">
                        <option value="+" selected="true">Да</option>
                        <option value="-">Нет</option>
                    </select>
                </div>
            </div>
            <div class="tl">
                <label class="label-primary">Есть бумажн. оригинал</label>
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