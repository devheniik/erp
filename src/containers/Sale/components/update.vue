<template>
    <div v-if="!isLoad" > 
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие данные <span class="cursor-pointer"
                        @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div>
                        <!--Первый блок-->
                        <!-- <div class="tl">
                            <label class="label-primary">Код заказа:</label>
                            <input type="text" class="input-primary" v-model="data.ZAKKODE" />
                        </div> -->
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                    label:'Заказчик',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.FIRMANAZ">
                                </modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                    label:'Контактёр',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.CONTACTERNAZ">
                                </modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Договор',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.CONTRACTNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Проект',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.PROJECTNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <field label="Источник Заказ (9) ">{{ data.ZAKAZTIP }}</field>
                        </div>
                        <div class="tl">
                            <field label=" Через ЛК?">{{ data.EI_FROM_LK ? 'Да' : 'Нет' }}</field>
                        </div>


                        <!-- FULL -->
                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary">Заявка клиента:</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.ORDERNUM" />
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Контактёр 2',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.CONTACTER2">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Добавил </label>
                                <div class="field">
                                    <h1 class="text-blue-400"> {{  }}</h1>
                                </div>
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Ресурс',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.RESURSNAZ">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Переговоры',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.PEREGOVORIDNAZ">
                                </modal-select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="tl">
                            <label class="label-primary">Менеджер</label>
                            <input type="text" disabled class="input-primary" placeholder="Менеджер" />
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Тип заказа',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.ZAKAZTIPNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Вид работ',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.TYPE_OF_WORKNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Производство для',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.MANUFACTURE_FORNAZ ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Тип заказа',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.ZAKAZTIPNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Расч. счёт',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.ACCOUNTNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Направление продажи',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.A_R2NAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <modal-select :data="{
                                    label:'Тип доставки',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.FRACHTTIPNAZ">
                            </modal-select>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дропшиппинг:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B1">
                                    <option :value="false">Нет</option>
                                    <option :value="true">Да</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Клиент клиента:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B2">
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
                                    }" v-model="data.DOSTPOINTNAZ">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Экспорт:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.TIPEXPORT">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">В плане производства:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.TOMRP">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <div>
                                    <modal-select :data="{
                                        label:'Раскраска',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1' }" v-model="data.CVETNAZ"></modal-select>
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
                    Сроки
                </h1>

                <div>
                    <div class="grid-2-2-1 section">
                        <div>
                            <!--Первый блок-->
                            <div class="tl">
                                <label class="label-primary">Дата заказа:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.ZAKDATE">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок оплаты:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.SROKOPL">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок поставки:</label>
                                <input type="text" class="input-primary" v-model="data.SROKPOSTAVZ" />
                            </div>
                        </div>
                        <div>
                            <!--Второй блок-->
                            <div class="tl">
                                <label class="label-primary">Окончание:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.OKONCH"
                                        :config="{enableTime: true}"></flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Оконч. факт:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.CLOSEDATE">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Резерв до:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.RESERVDO">
                                    </flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                        </div>
                        <!--Конец второго блока-->
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
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.ZAKSTATUSNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Поставщик:</label>
                                <input type="text" class="input-primary" v-model="data.A_S1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ориентировочная дата отгрузки:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.A_D3"></flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Отгрузка со склада поставщика?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B4">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Отгрузка с филиала:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B7">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ждем с РЦ</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B8">
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
                                    <select class="dropdown-primary" v-model="data.CLOSED">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Оформлен</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.OFORMLEN">
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
                    Способ доставки для "Мiзол"
                </h1>

                <div>
                    <div class="grid-2-2-1 section">
                        <div>

                            <div class="tl">
                                <label class="label-primary"> есть предоплата</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B3">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Ожидается предоплата:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B5">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Дата получения клиентом:</label>
                                <div class="flex justify-between items-center">
                                    <flat-pickr class="input-primary" v-model="data.A_D1"></flat-pickr>
                                    <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                                </div>
                            </div>
                        </div>
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
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.VALUTANAZ"></modal-select>
                            </div>
                        </div>
                    </div>

                    <div v-show="ffull">
                        <div class="tl">
                            <field label="Итого бал., EURO">0</field>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Курс бал. EURO:</label>
                            <input type="text" class="input-primary" v-model="data.KURSBAL" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Надбавка/Скидка, %:</label>
                            <input type="text" class="input-primary" v-model="data.DISCOUNTP" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Скидка за:</label>
                            <input type="text" class="input-primary" v-model="data.DISCOUNTFOR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> За доставку:</label>
                            <input type="text" class="input-primary" v-model="data.FRACHTSUM" />
                        </div>
                        <div class="tl">
                            <field label=" Доп. расходы">0</field>
                        </div>
                        <div class="tl">
                            <field label=" Доп. расх. у.е.">0</field>
                        </div>
                        <div class="tl">
                            <field label=" Сумма специф.">0</field>
                        </div>
                        <div class="tl">
                            <field label=" Сумма скидки">0</field>
                        </div>
                        <div class="tl">
                            <field label="НДС">0</field>
                        </div>
                        <div class="tl">
                            <field label=" Налог 2">0</field>
                        </div>
                        <div class="tl">
                            <field label="ПФ">0</field>
                        </div>
                        <div class="tl">
                            <field label=" Налог 4">0</field>
                        </div>
                    </div>
                    <div v-show="ffull">
                        <div class="tl">
                            <field label=" Итого, нац.">0</field>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Курс нац.:</label>
                            <input type="text" class="input-primary" v-model="data.KURS" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> НДС, %:</label>
                            <input type="text" class="input-primary" v-model="data.TAX1PR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Налог 2, %:</label>
                            <input type="text" class="input-primary" v-model="data.TAX2PR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ПФ, %:</label>
                            <input type="text" class="input-primary" v-model="data.TAX3PR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Налог 4, %:</label>
                            <input type="text" class="input-primary" v-model="data.TAX4PR" />
                        </div>
                        <div class="tl">
                            <field label=" База НДС">0</field>
                        </div>
                        <div class="tl">
                            <field label=" База Налог 2">0</field>
                        </div>
                        <div class="tl">
                            <field label="База ПФ">0</field>
                        </div>
                        <div class="tl">
                            <field label="База Налог 4">0</field>
                        </div>
                        <div class="tl">
                            <field label="Доход с налог">0</field>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Курс склад:</label>
                            <input type="text" class="input-primary" v-model="data.KURSSKLAD" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Описание <span class="cursor-pointer"
                        @click="afull = !afull">{{ afull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div v-show="afull">
                    <div class="mx-4 mt-4">
                        <label class="block text-sm font-medium text-gray-400"></label>
                        <div class="mt-1">
                            <textarea rows="3" class="textarea-primary"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" rounded-lg col-span-1 lg:col-span-1 md:col-span-1">
                <h1 class="label-big">
                    Дополнительные данные <span class="cursor-pointer"
                        @click="bfull = !bfull">{{ bfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="">
                    <!--Первый блок-->

                    <div class="">
                        <div class="tl">
                            <label class="label-primary"> Примечание:</label>
                            <input type="text" class="input-primary" v-model="data.ZAKPRIM" />
                        </div>
                    </div>
                    <div>

                    </div>

                    <div v-show="bfull">
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:' Участник RotoProfiLiga2014 ',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.A_R1NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'СПД',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.A_R3NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:' Склад прогноза',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.A_R4NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'Тип просрочки',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.A_R5NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'Гр.Склад. Cabinet2',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.A_R6NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                        label:'Перевозчик',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.A_R10NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Дата пересчета:</label>
                            <div class="flex justify-between items-center">
                                <flat-pickr class="input-primary" v-model="data.A_D2"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>

                        <div class="tl">
                            <label class="label-primary"> Списать бонусов:</label>
                            <input type="text" class="input-primary" v-model="data.A_F1" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Кво.строкВКабинете:</label>
                            <input type="text" class="input-primary" v-model="data.A_F3" />
                        </div>
                         <div class="tl">
                            <label class="label-primary"> Разрешить без предоплаты:</label>
                            <input type="text" class="input-primary" v-model="data.A_F10" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отложено склад (прогноз):</label>
                            <input type="text" class="input-primary" v-model="data.A_S3" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Склады отлож. и спис:</label>
                            <input type="text" class="input-primary" v-model="data.A_S4" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Выдано:</label>
                            <input type="text" class="input-primary" v-model="data.A_S5" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Проблемный заказ:</label>
                            <input type="text" class="input-primary" v-model="data.A_S6" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Примечание НС:</label>
                            <input type="text" class="input-primary" v-model="data.A_S7" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">сумма из ТТН:</label>
                            <input type="text" class="input-primary" v-model="data.A_S8" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">ТТН:</label>
                            <input type="text" class="input-primary" v-model="data.A_S9" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">код документа Заказау:</label>
                            <input type="text" class="input-primary" v-model="data.A_S10" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">  Отправлено смс?:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B6">
                                    <option :value="false">Нет</option>
                                    <option :value="true">Да</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <field label=" Игнорировать просрочку">Нет</field>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Подкрасить?:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B10">
                                    <option :value="false">Нет</option>
                                    <option :value="true">Да</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
         <h1 class="label-big mt-4">
                    Способы доставки <span class="cursor-pointer"
                        @click="cfull = !cfull">{{ cfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
           <div class="w-full flex justify-center mt-6 space-x-2" v-show="cfull">

            <button type="button" class="button-hover-primary-color">Адрес - Адрес </button>
            <button type="button" class="button-hover-primary-color">Адрес -  Отделение </button>
            <button type="button" class="button-hover-primary-color">Отделение - Адрес </button>
            <button type="button" class="button-hover-primary-color">Отделение - Отделение</button>
            <button type="button" class="button-hover-primary-active ">Добавить ТТН</button>
        </div>
        <div class="w-full flex justify-center mt-6">
            <button @click="update(update_route(data))" type="button" class="button-hover-primary">Изменить</button>
        </div>
    </div>
</template>

<script setup>
   import {
        ref,
        onMounted
    } from 'vue'
    import {

        useRoute
    } from 'vue-router'
    import update_route from '../api/update'
    import update from '@api'
    import get from '../api/get'
    import load from '@/hooks/load'
    const full = ref(false)
    const ffull = ref(false)
    const afull = ref(false)
    const bfull = ref(false)
    const cfull = ref(false)

    
     const {
        data,
        isLoad,
        id
    } = load(get)
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