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
                            <input type="text" class="input-primary" v-model="data.ZAKKODE" />
                        </div>
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
            <button @click="create(post_str(obj))" type="button" class="button-hover-primary">Добавить</button>
        </div>
    </div>
</template>

<script setup>
    import post_str from '../api/create'
    import create from '@api'
    import {
        ref
    } from 'vue'

    const obj = ref({
         ZAKKODE: "2125848",
        FIRMANAZ: "26971-%D1%EE%EA%F0%E0%F9",
        FIRMA: "26971",
        CONTACTERNAZ: "-",
        CONTACTER: "0",
        CONTRACTNAZ: "",
        CONTRACT: "0",
        PROJECTNAZ: "",
        PROJECT: "0",
        EI_FROM_LK: "%CD%E5%F2",
        ZAKAZTIPNAZ: "%D2%E5%F5%ED%E8%F7%E5%F1%EA%E8%E9+%EA%F0%E5%E4%E8%F2",
        ZAKAZTIP: "128356",
        TYPE_OF_WORKNAZ: "",
        TYPE_OF_WORK: "0",
        MANUFACTURE_FORNAZ: "",
        MANUFACTURE_FOR: "0",
        FRACHTTIPNAZ: "-",
        FRACHTTIP: "0",
        ACCOUNTNAZ: "",
        ACCOUNT: "0",
        A_R2NAZ: "%CB%EE%E3%E8%F1%F2%E8%EA%E0",
        A_R2: "394160",
        A_B1: "-",
        A_B2: "",
        ORDERNUM: "",
        CONTACTER2NAZ: "-",
        CONTACTER2: "0",
        RESURSNAZ: "%CA%E8%E5%E2",
        RESURS: "145164",
        PEREGOVORIDNAZ: "-",
        PEREGOVORID: "0",
        DOSTPOINTNAZ: "-",
        DOSTPOINT: "0",
        TIPEXPORT: "-",
        TOMRP: "-",
        CVETNAZ: "%D1%E8%ED%E8%E9",
        CVET: "1807",
        ZAKDATE: "25.10.2021",
        SROKOPL: "27.10.2021",
        SROKPOSTAVZ: "3",
        OKONCH: "28.10.2021",
        OKONCHHOUR: "00",
        OKONCHMIN: "00",
        CLOSEDATE: "",
        RESERVDO: "28.10.2021",
        ZAKSTATUSNAZ: "%D7%E0%F1%F2%E8%F7%ED%EE+%EE%F2%E3%F0%F3%E6%E5%ED",
        ZAKSTATUS: "1139185",
        A_S1: "",
        A_D3: "25.10.2021",
        A_B4: "-",
        A_B7: "-",
        A_B8: "-",
        CLOSED: "-",
        OFORMLEN: "-",
        A_B3: "-",
        A_B5: "-",
        A_D1: "25.10.2021",
        VALUTANAZ: "%E3%F0%ED.",
        VALUTA: "11",
        KURSBAL: "31.3438",
        DISCOUNTP: "0",
        DISCOUNTFOR: "",
        FRACHTSUM: "0",
        KURS: "1",
        TAX1PR: "20",
        TAX2PR: "0",
        TAX3PR: "0",
        TAX4PR: "0",
        KURSSKLAD: "31.3438",
        SODERV: "+",
        ZAKPRIM: "+%B9++21258451",
        A_R1NAZ: "-",
        A_R1: "0",
        A_R3NAZ: "0-%D1%EE%EA%F0%E0%F9",
        A_R3: "0",
        A_R4NAZ: "-",
        A_R4: "0",
        A_R5NAZ: "-",
        A_R5: "0",
        A_R6NAZ: "-",
        A_R6: "0",
        A_R10NAZ: "0-%D1%EE%EA%F0%E0%F9",
        A_R10: "0",
        A_D2: "25.10.2021",
        A_F1: "0",
        A_F3: "0",
        A_F10: "0",
        A_S3: "-",
        A_S4: "%B2%ED%F2%E5%F0%ED%E5%F2+%CA%E8%BF%E2+%C4%E0%F0%ED%E8%F6%FF+%2F%CC%B3%E7%EE%EB",
        A_S5: "+",
        A_S6: "",
        A_S7: "",
        A_S8: "",
        A_S9: "",
        A_S10: "",
        A_B6: "-",
        A_B10: "-",
        ZAKAZ: "2125848",
        POSTER: "Edit",
        ZAKTIP: "1",
        RETURNTO: "",
        DATS: "01.10.2021",
        DATPO: "31.10.2021",
        KVITANC: "",
        ZAKSRC: "0",
        ZAKKEYSRC: "0",
    })
 

    const full = ref(false)
    const ffull = ref(false)
    const afull = ref(false)
    const bfull = ref(false)
    const cfull = ref(false)
    const data = ref({
        "object": "Orders",
        "id": null,
        ZAKKODE: "2125848",
        FIRMANAZ: "26971-%D1%EE%EA%F0%E0%F9",
        FIRMA: "26971",
        CONTACTERNAZ: "-",
        CONTACTER: "0",
        CONTRACTNAZ: "",
        CONTRACT: "0",
        PROJECTNAZ: "",
        PROJECT: "0",
        EI_FROM_LK: "%CD%E5%F2",
        ZAKAZTIPNAZ: "%D2%E5%F5%ED%E8%F7%E5%F1%EA%E8%E9+%EA%F0%E5%E4%E8%F2",
        ZAKAZTIP: "128356",
        TYPE_OF_WORKNAZ: "",
        TYPE_OF_WORK: "0",
        MANUFACTURE_FORNAZ: "",
        MANUFACTURE_FOR: "0",
        FRACHTTIPNAZ: "-",
        FRACHTTIP: "0",
        ACCOUNTNAZ: "",
        ACCOUNT: "0",
        A_R2NAZ: "%CB%EE%E3%E8%F1%F2%E8%EA%E0",
        A_R2: "394160",
        A_B1: "-",
        A_B2: "",
        ORDERNUM: "",
        CONTACTER2NAZ: "-",
        CONTACTER2: "0",
        RESURSNAZ: "%CA%E8%E5%E2",
        RESURS: "145164",
        PEREGOVORIDNAZ: "-",
        PEREGOVORID: "0",
        DOSTPOINTNAZ: "-",
        DOSTPOINT: "0",
        TIPEXPORT: "-",
        TOMRP: "-",
        CVETNAZ: "%D1%E8%ED%E8%E9",
        CVET: "1807",
        ZAKDATE: "25.10.2021",
        SROKOPL: "27.10.2021",
        SROKPOSTAVZ: "3",
        OKONCH: "28.10.2021",
        OKONCHHOUR: "00",
        OKONCHMIN: "00",
        CLOSEDATE: "",
        RESERVDO: "28.10.2021",
        ZAKSTATUSNAZ: "%D7%E0%F1%F2%E8%F7%ED%EE+%EE%F2%E3%F0%F3%E6%E5%ED",
        ZAKSTATUS: "1139185",
        A_S1: "",
        A_D3: "25.10.2021",
        A_B4: "-",
        A_B7: "-",
        A_B8: "-",
        CLOSED: "-",
        OFORMLEN: "-",
        A_B3: "-",
        A_B5: "-",
        A_D1: "25.10.2021",
        VALUTANAZ: "%E3%F0%ED.",
        VALUTA: "11",
        KURSBAL: "31.3438",
        DISCOUNTP: "0",
        DISCOUNTFOR: "",
        FRACHTSUM: "0",
        KURS: "1",
        TAX1PR: "20",
        TAX2PR: "0",
        TAX3PR: "0",
        TAX4PR: "0",
        KURSSKLAD: "31.3438",
        SODERV: "+",
        ZAKPRIM: "+%B9++21258451",
        A_R1NAZ: "-",
        A_R1: "0",
        A_R3NAZ: "0-%D1%EE%EA%F0%E0%F9",
        A_R3: "0",
        A_R4NAZ: "-",
        A_R4: "0",
        A_R5NAZ: "-",
        A_R5: "0",
        A_R6NAZ: "-",
        A_R6: "0",
        A_R10NAZ: "0-%D1%EE%EA%F0%E0%F9",
        A_R10: "0",
        A_D2: "25.10.2021",
        A_F1: "0",
        A_F3: "0",
        A_F10: "0",
        A_S3: "-",
        A_S4: "%B2%ED%F2%E5%F0%ED%E5%F2+%CA%E8%BF%E2+%C4%E0%F0%ED%E8%F6%FF+%2F%CC%B3%E7%EE%EB",
        A_S5: "+",
        A_S6: "",
        A_S7: "",
        A_S8: "",
        A_S9: "",
        A_S10: "",
        A_B6: "-",
        A_B10: "-",
        ZAKAZ: "2125848",
        POSTER: "Edit",
        ZAKTIP: "1",
        RETURNTO: "",
        DATS: "01.10.2021",
        DATPO: "31.10.2021",
        KVITANC: "",
        ZAKSRC: "0",
        ZAKKEYSRC: "0",
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