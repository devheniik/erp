<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие данные <span class="cursor-pointer"
                        @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div>
                        <!--Первый блок-->
                        <div class="tl">
                            <label class="label-primary">Код заказа:</label>
                            <input type="text" class="input-primary" v-model="data.general.base.zakkode" />
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                    label:'Заказчик',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.firma">
                                </modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                    label:'Контактёр',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.contacter">
                                </modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Договор',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.contract">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Проект',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.project">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <field label="Источник Заказ (9) ">123123</field>
                        </div>
                        <div class="tl">
                            <field label=" Через ЛК?">{{ data.general.base.project ? 'Да' : 'Нет' }}</field>
                        </div>


                        <!-- FULL -->
                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary">Заявка клиента:</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.ordernum" />
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Контактёр 2',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.contacter2">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Через ЛК?</label>
                                <div class="field">
                                    <h1 class="text-blue-400"> {{ data.general.full.creater }}</h1>
                                </div>
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Ресурс',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.resurs">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Переговоры',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.peregovorid">
                                </modal-select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="tl">
                            <label class="label-primary">Менеджер</label>
                            <input type="text" disabled class="input-primary" placeholder="Менеджер"
                                v-model="data.general.base.manager" />
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Тип заказа',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.zakaztip">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Вид работ',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.type_of_work">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Производство для',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.manufacture_for ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Тип доставки',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.frachttip">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Расч. счёт',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.account">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Направление продажи',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.a_r2">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Тип заказа',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.zakaztip">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дропшиппинг:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.a_b1">
                                    <option :value="false">Нет</option>
                                    <option :value="true">Да</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Клиент клиента:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.a_b2">
                                    <option :value="false">Нет</option>
                                    <option :value="true">Да</option>
                                </select>
                            </div>
                        </div>

                        <!-- FULL -->

                        <div v-show="full">
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Точка доставки',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.dostpoint">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Экспорт:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.a_b1">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">В плане производства:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.a_b2">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <div>
                                    <modal-select :data="{
                                        label:'Раскраска',
                                        api: 'uniprops/color',
                                        meanKey: 'a_s1' }" v-model="data.general.full.cvet"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                    <div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="label-big ">
                    Состояние
                </h1>

                <div>
                    <div class="grid-2-2-1 section">
                        <div>
                            <!--Первый блок-->
                            <div class="tl">
                                <div>
                                    <modal-select :data="{
                                        label:'Состояние',
                                        api: 'uniprops/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.general.status.zakstatus"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Поставщик:</label>
                                <input type="text" class="input-primary" v-model="data.general.status.a_s1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ориентировочная дата отгрузки:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.general.status.a_d3"></flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Отгрузка со склада поставщика?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.status.a_b4">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Отгрузка с филиала:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.status.a_b7">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ждем с РЦ</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.status.a_b8">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <field label=" Оплачено -">0</field>
                            </div>
                            <div class="tl">
                                <field label="Отгружено -">0</field>
                            </div>
                        </div>
                        <div>
                            <!--Второй блок-->
                            <div class="tl">
                                <label class="label-primary">Закрыт</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.status.a_b8">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Оформлен</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.status.a_b8">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                                <div class="tl">
                                    <field label="Разреш. отгрузка ">Да</field>
                                </div>
                            </div>
                        </div>
                        <!--Конец второго блока-->
                    </div>
                </div>
            </div>
            <!--TRIRD block-->

            <div>
                <h1 class="label-big ">
                    Сроки
                </h1>

                <div>
                    <div class="grid-2-2-1 section">
                        <div>
                            <!--Первый блок-->
                            <div class="tl">
                                <label class="label-primary">Дата заказа:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.general.timing.zakdate">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок оплаты:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.general.timing.srokopl">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок поставки:</label>
                                <input type="text" class="input-primary" v-model="data.general.timing.srokpostavz" />
                            </div>
                        </div>
                        <div>
                            <!--Второй блок-->
                            <div class="tl">
                                <label class="label-primary">Окончание:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.general.timing.okonch"
                                        :config="{enableTime: true}"></flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Оконч. факт:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.general.timing.closedate">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Резерв до:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.general.timing.reservdo">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                        </div>
                        <!--Конец второго блока-->
                    </div>
                </div>
            </div>
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Налоги и суммы <span class="cursor-pointer"
                        @click="ffull = !ffull">{{ ffull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    
                        <div class="">
                            <div class="tl">
                                <field label="Итого">0</field>
                            </div>
                        </div>
                        <div>
                           <div class="tl">
                                <div>
                                    <modal-select :data="{
                                        label:'Валюта грн',
                                        api: 'uniprops/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.general.status.zakstatus"></modal-select>
                                </div>
                            </div>
                        </div>

                        <div v-show="ffull">

                        </div>


                    
                    <!--Второй блок-->
                 
                </div>
            </div>
            <div class="col-span-1 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Дополнительная информация
                </h1>
                <div>
                    <div class="mx-4 mt-4">
                        <label class="block text-sm font-medium text-gray-400">Примечания</label>
                        <div class="mt-1">
                            <textarea rows="3" class="textarea-primary"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center mt-6">
            <button @click="create(route_create, data)" type="button" class="button-hover-primary">Добавить</button>
        </div>
    </div>
</template>

<script setup>
    import route_create from '../api/create'
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'

    const full = ref(false)
    const ffull = ref(false)
    const data = ref({
        "object": "Orders",
        "id": null,
        "general": {
            "base": {
                "zakkode": "2125780",
                "firma": "Мізол",
                "contacter": 0,
                "contract": 898502,
                "project": 0,
                "ei_from_lk": true,
                "manager": "Чернявська  Надія Іванівна",
                "zakaztip": "Предоплата",
                "type_of_work": 0,
                "frachttip": 0,
                "account": 0,
                manufacture_for: 0,
                "a_r2": "КМЧС",
                "a_b1": true,
                "a_b2": true
            },
            "full": {
                "ordernum": null,
                "contacter2": 0,
                "creater": "Admin",
                "resurs": "ИТ-отдел",
                "peregovorid": 0,
                "dostpoint": 0,
                "tipexport": true,
                "tomrp": true,
                "filial": 20,
                "colornaz": null,
                "cvet": "-"
            },
            "timing": {
                "zakdate": "2021-10-01T00:00:00.000000Z",
                "srokopl": "2021-10-01T00:00:00.000000Z",
                "srokpostavz": 3,
                "okonch": "2021-10-04T00:00:00.000000Z",
                "closedate": "1900-01-01T00:00:00.000000Z",
                "reservdo": "2021-10-06T00:00:00.000000Z"
            },
            "status": {
                "zakstatus": "В работе",
                "a_s1": null,
                "a_d3": "2021-10-01T00:00:00.000000Z",
                "a_b4": true,
                "a_b7": true,
                "a_b8": true,
                "oplachen": true,
                "otgruven": true,
                "closed": true,
                "oformlen": true,
                "enotgr": true
            },
            "deliveryMethod": {
                "a_b3": true,
                "a_b5": true,
                "a_d1": "2021-10-01T00:00:00.000000Z"
            },
            "taxes": {
                "base": {
                    "totalsum": 6234.76,
                    "valuta": "Украинские гривни"
                },
                "full": {
                    "totalsumbal": 191.26,
                    "kursbal": 31.3438,
                    "discountp": 0,
                    "discountfor": null,
                    "frachtsum": 0,
                    "doprash": 0,
                    "doprashue": 0,
                    "discsum": 0,
                    "tax1sum": 1039.13,
                    "tax2sum": 0,
                    "tax3sum": 0,
                    "tax4sum": 0,
                    "summanat": 6234.76,
                    "kurs": 1,
                    "tax1pr": 20,
                    "tax2pr": 0,
                    "tax3pr": 0,
                    "tax4pr": 0,
                    "tax1base": 5195.63,
                    "tax2base": 0,
                    "tax3base": 0,
                    "tax4base": 0,
                    "taxzakazdohod": 6234.76,
                    "kurssklad": 31.3438
                }
            },
            "description": " ",
            "subData": {
                "base": {
                    "zakprim": " Из заказа № 2125779"
                },
                "full": {
                    "a_r1": 0,
                    "a_r3": 0,
                    "a_r4": 0,
                    "a_r5": 0,
                    "a_r6": 0,
                    "a_r10": 0,
                    "a_d2": "2021-09-29T00:00:00.000000Z",
                    "a_f1": 0,
                    "a_f3": 0,
                    "a_f10": 0,
                    "a_s3": "-",
                    "a_s4": "0",
                    "a_s5": "-",
                    "a_s6": null,
                    "a_s7": null,
                    "a_s8": null,
                    "a_s9": null,
                    "a_s10": null,
                    "a_b6": true,
                    "a_b10": true
                }
            }
        }
    })
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg mt-2
    }

    .tl {
        @apply mt-2 ml-2
    }

    .field {
        @apply border border-primary-400 rounded-md h-9 flex items-center justify-center
    }
</style>