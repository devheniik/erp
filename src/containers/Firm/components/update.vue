<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4">
            <div class="m-5">
                <div class="mb-2 space-x-2">
                    <div class="tl mb-4">
                        <label class="label-primary">Отображать на карте?</label>
                        <div>
                            <select class="dropdown-primary" v-model="data.POSTAVSH">
                                <option value="+">Да</option>
                                <option value="-">Нет</option>
                            </select>
                        </div>
                    </div>
                    <div class="button-hover-primary">Изменить</div>
                    <div class="button-hover-primary">Формирование договора</div>
                </div>
                <h1 class="label-big">
                    Общие данные <span class="cursor-pointer"
                        @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="w-1/2">
                    <div class="grid grid-cols-1">
                        <div class="">
                            <!--Основное начало-->
                            <div class="tl">
                                <label class="label-primary"> Сокр. название</label>
                                <input type="text" class="input-primary"
                                    placeholder="Название контрагента, удобное в поиске" v-model="data.SOKRASH" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Полное название</label>
                                <input type="text" class="input-primary"
                                    placeholder="Название согласно св-ва(выятга) гос. реестр" v-model="data.POLNOE" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Телефон</label>
                                <input type="text" class="input-primary" placeholder="Телефон" v-model="data.TEL" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Тип организ.:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Тип организ.',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.TIPNAZ"></modal-select>
                                </div>
                            </div>
                        </div>
                        <!--Основное конец-->
                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary">Name</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.NAZENG" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Назва</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.NAZUKR" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Вышестоящая организация:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Вышестоящая организация',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.FATHERNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Собственник:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Собственник',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.OWNERNAZ"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-5">
                <h1 class="label-big">
                    Характеристики/Специализация <span class="cursor-pointer"
                        @click="hfull = !hfull">{{ hfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">

                    <div v-show="hfull" class="mt-4 mb-4">
                        <div>
                            <div class="tl">
                                <label class="label-primary">Специализация:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Специализация',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.DESIGNSPECIALIZATIONNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Характеристики:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Характеристики',
                                        api: '/manager',
                                        meanKey: 'name'
                                            }" v-model="data.DESIGNCHARACTERISTICSNAZ"></modal-select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div v-show="hfull" class="mt-4">
                        <div class="tl">
                            <label class="label-primary"> Специализация:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Специализация',
                                        api: '/manager',
                                        meanKey: 'name'
                                            }" v-model="data.SYSTEMSPECIALIZATIONNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристики:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Характеристики',
                                        api: '/manager',
                                        meanKey: 'name'
                                            }" v-model="data.SYSTEMCHARACTERISTICSNAZ"></modal-select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-5">
                <h1 class="label-big">
                    Профиль <span class="cursor-pointer"
                        @click="ifull = !ifull">{{ ifull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Основное1 начало-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Наш менеджер:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Наш менеджер',
                                        api: '/manager',
                                        meanKey: 'name'
                                            }" v-model="data.MANAGERNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Регион:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Регион',
                                        api: '/gorod',
                                        meanKey: 'name'
                                            }" v-model="data.GORODNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Район:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Район',
                                        api: '/district',
                                        meanKey: 'name'
                                            }" v-model="data.DISTRICTNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сфера деят.:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Сфера деят.',
                                        api: '/sferad',
                                        meanKey: 'name'
                                            }" v-model="data.SFERADNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Источник клиента:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Источник клиента',
                                        api: '/clientsrc',
                                        meanKey: 'name'
                                            }" v-model="data.CLIENTSRCNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Секретность:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Секретность',
                                        api: '/sekret',
                                        meanKey: 'name'
                                            }" v-model="data.SEKRETNAZ"></modal-select>
                            </div>
                        </div>

                    </div>
                    <!--Основное1 конец-->
                    <!--Основное2 начало-->
                    <div class="">
                        <div class="tl">
                            <label class="label-primary"> Член корп.</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.NASHA">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Заказчик</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.ZAKAZCH">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Поставщик</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.POSTAVSH">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Производитель</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.PROIZVOD">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Валюта закупок:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Валюта закупок',
                                        api: '/a_r1naz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R10NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Значимость клиента:</label>
                            <div>
                                <modal-select :data="{
                                        label:'  Значимость клиента',
                                        api: '/a_r5naz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R5NAZ"></modal-select>
                            </div>
                        </div>
                    </div>
                    <!--Основное2 конец-->
                    <div v-show="ifull" class="mt-4 mb-4">
                        <div>
                            <div class="tl">
                                <label class="label-primary">Артикул</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.ARTIKUL" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Архивный</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.ZAKRIT">
                                        <option value="+">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Налог на приб.:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Налог на приб.',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.TAXPROFITNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Налоговая зона:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Налоговая зона',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.TAXZONENAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Категория (ABC):</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Категория (ABC)',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.ABCNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Статус Клиента (XYZ):</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Статус Клиента (XYZ)',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.XYZNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Раскраска:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Раскраска',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.CVETNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ресурс:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Ресурс',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.RESURSNAZ"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="ifull" class="mt-8">
                        <div class="tl">
                            <label class="label-primary">Макс. кред. нам</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.MAXCREDITOUR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Срок кред. нам</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.SROKCREDITOUR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Страна:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Страна',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.STRANANAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Счёт поставщика:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Счёт поставщика',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.POSTAVSHACCNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Счёт заказчика:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Счёт заказчика',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.ZAKAZCHACCNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата рег.:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.DATAREG">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Добавил
                                Изменил</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-5">
                <h1 class="label-big">
                    Ценообразующий профиль заказчика <span class="cursor-pointer"
                        @click="efull = !efull">{{ efull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Основное1 начало-->

                    <!--Основное1 конец-->
                    <!--Основное2 начало-->
                    <!--Основное2 конец-->
                    <div v-show="efull" class="mt-4 mb-4">
                        <div>
                            <div class="tl">
                                <label class="label-primary"> Вал. баланса:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'  Вал. баланса',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.VALUTANAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Макс. кредит</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.MAXCREDIT" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Срок кредита</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.SROKCREDIT" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Запрет отгр.</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.ZAPRETOTGR">
                                        <option value="+">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Оплаты от собств.</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.OWNERPAY">
                                        <option value="+">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="efull" class="mt-4">
                        <div class="tl">
                            <label class="label-primary">Плат. НДС</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.TAX1">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">НДС для физ. лиц</label>
                            <div>
                                <select class="dropdown-primary " v-model="data.TAX2">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-5">
                <h1 class="label-big">
                    Реквизиты <span class="cursor-pointer"
                        @click="ffull = !ffull">{{ ffull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section mb-4">

                    <div class="">
                        <!--Основное начало-->
                        <div class="tl">
                            <label class="label-primary"> ЄДРПОУ</label>
                            <input type="text" class="input-primary"
                                placeholder="ЕДРПОУ согласно св-ва(вытяга) гос реестр" v-model="data.OKPO" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Юр. адрес</label>
                            <div class="flex">
                                <input type="text" class="input-primary"
                                    placeholder="Адрес согласно св-ва(вытяга) гос реестр" v-model="data.ADRUR" />
                                <div class="button-hover-primary ml-2">Копировать в физ адрес и почтовоый адрес </div>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Физ. адрес</label>
                            <div class="flex">
                                <input type="text" class="input-primary" placeholder="Физ. адрес (для клиентов)"
                                    v-model="data.ADRFIZ" />
                                <div class="button-hover-primary ml-2">Определить координату</div>
                            </div>
                        </div>
                    </div>

                    <!--Основное конец-->
                    <div></div>
                    <div v-show="ffull">
                        <div class="tl">
                            <label class="label-primary">Плательщик</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.IS_PAYER">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> www</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.WWW" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Почтовый адрес</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.ADRCORR" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> e-mail</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.EMAIL" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ФИО рук</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.RUKFIO" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ФИО бухг.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.BUHFIO" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сан рук.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.RUKSAN" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Должность рук:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Должность рук',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.RUKDOLVNNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">В лице</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.VLICE" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">В лице ФИО</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.A_S10" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">В лице должность</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.A_S9" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">На основании</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.NAOSNOV" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Email для получения счетов</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.FISKCODE" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> GLN код</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.GLNCODE" />
                        </div>
                    </div>
                    <div v-show="ffull">
                        <div class="tl">
                            <label class="label-primary"> ІПН платника ПДВ</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.NALNOMER" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Налог. свид</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.NALSVID" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Р/счёт</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.SCHET" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">В банке*</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.VBANKE" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">МФО*</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.MFO" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Банк:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Банк',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.BANKNAZ"></modal-select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-5">
                <h1 class="label-big">
                    ZPrice <span class="cursor-pointer"
                        @click="zpriceshow = !zpriceshow">{{ zpriceshow ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <h1 class="label-big">
                        Настройка по отправке сообщения
                    </h1>
                    <div v-show="zpriceshow" class="mt-4 mb-4">
                        <div>
                             <div class="tl">
                            <label class="label-primary"> Отправлять?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.send_message">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> Отправлять на организацию?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.send_message_to_client">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> Отправлять менеджеру?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.send_message_to_manager">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> Убрать автоматическую блокировку?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.send_auto_company_blocking">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-5">
                <h1 class="label-big">
                    Дополнительные данные <span class="cursor-pointer"
                        @click="xfull = !xfull">{{ xfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section mb-4">

                    <div class="">
                        <!--Основное начало-->
                        <div class="tl">
                            <label class="label-primary"> Примечание</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.PRIM" />
                        </div>
                    </div>

                    <!--Основное конец-->
                    <div></div>
                    <div v-show="xfull">
                        <div class="tl">
                            <label class="label-primary"> Область:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Область',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R1NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Ссылка на группу комп ВЭД:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Ссылка на группу комп ВЭД',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R2NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Кладовщик по умолчанию (для наших орг.):</label>
                            <div>
                                <modal-select :data="{
                                        label:' Кладовщик по умолчанию (для наших орг.)',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R3NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">статус ВЭД:</label>
                            <div>
                                <modal-select :data="{
                                        label:'статус ВЭД',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R4NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Модерация:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Модерация',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R6NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Статус проверки контактов:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Статус проверки контактов',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R8NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Маршрут поставки:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Маршрут поставки',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R9NAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Контракт до:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.A_D1">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата доступа в ЛК:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.A_D2">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отсрочка дебиторки до:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.A_D4">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата создания компании:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.A_D5">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Номер_Постачальника</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Счетчик дней запр.прайсов</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Лимит для комплектаций, ЕВРО</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Доб.Номер для сайта</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> нн (ОГРН для РФ).</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> E-mail для напоминаний дебиторской задолжености</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Координата</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Автоопределенный адрес</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Тел. для смс</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Код Філії</label>
                            <input type="text" class="input-primary" placeholder="" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Наш конкурент ?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B1">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отпралять на E-mail курсы?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B2">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отправлять только при изменении</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B3">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Участвует в КК</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B4">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Статус клиента</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B5">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Лимит СПД</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B6">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Просроченная дебиторка</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B7">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Эксклюзив для ВЭД</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B8">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Наявність скан документів</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B9">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Доступен в ЛК</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.A_B10">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="mx-4 mt-4">
                            <label class="block text-sm font-medium text-gray-400">Примечания</label>
                            <div class="mt-1">
                                <textarea rows="3" class="textarea-primary" v-model="data.PRIM2"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center space-x-2">
                    <button class="button-hover-primary-color">Отправить на модерацию</button>
                    <button class="button-hover-primary-color">Отправить на доработку</button>
                </div>
            </div>
            <div class="flex justify-center">
                <button class="button-hover-primary">Изменить</button>

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
    const data = ref({
        "SOKRASH": "133921-%D1%EE%EA%F0%E0%F9",
        "POLNOE": "133921-%CF%EE%EB%ED%EE%E5+%ED%E0%E7%E2%E0%ED%E8%E5",
        "TEL": "380900133921",
        "TIPNAZ": "%D2%EE%E2%E0%F0%E8%F1%F2%E2%EE+%E7+%EE%E1%EC%E5%E6%E5%ED%EE%FE+%E2%B3%E4%EF%EE%E2%B3%E4%E0%EB%FC%ED%B3%F1%F2%FE",
        "TIP": "40",
        "ORGFAX": "",
        "NAZENG": "133921-nazeng",
        "NAZUKR": "133921-%D3%EA%F0.+%CD%E0%E7%E2%E0",
        "FATHERNAZ": "0-%D1%EE%EA%F0%E0%F9",
        "FATHER": "0",
        "OWNERNAZ": "133921-%D1%EE%EA%F0%E0%F9",
        "OWNER": "133921",
        "ORGMETKA": "-",
        "FINDERCOOSERNAZ": "",
        "FINDERCOOSER": "",
        "DESIGNSPECIALIZATIONNAZ": "",
        "DESIGNSPECIALIZATION": "0",
        "DESIGNCHARACTERISTICSNAZ": "",
        "DESIGNCHARACTERISTICS": "0",
        "SYSTEMSPECIALIZATIONNAZ": "",
        "SYSTEMSPECIALIZATION": "0",
        "SYSTEMCHARACTERISTICSNAZ": "",
        "SYSTEMCHARACTERISTICS": "0",
        "MANAGERNAZ": "user_538463",
        "MANAGER": "538463",
        "GORODNAZ": "Dnepr",
        "GOROD": "971850",
        "DISTRICTNAZ": "%D8%E5%E2%F7%E5%ED%EA%EE%E2%F1%EA%E8%E9+%F0%E0%E9%EE%ED",
        "DISTRICT": "941986",
        "SFERADNAZ": "%D2%EE%F0%E3%EE%E2%E0%FF+%EE%F0%E3%E0%ED%E8%E7%E0%F6%E8%FF",
        "SFERAD": "1142538",
        "CLIENTSRCNAZ": "-",
        "CLIENTSRC": "0",
        "SEKRETNAZ": "Euroizol",
        "SEKRET": "102014",
        "NASHA": "-",
        "ZAKAZCH": "+",
        "POSTAVSH": "-",
        "PROIZVOD": "-",
        "A_R10NAZ": "",
        "A_R10": "0",
        "A_R5NAZ": "%D2%E5%EA%F3%F9%E8%E9",
        "A_R5": "743230",
        "ARTIKUL": "133921",
        "ZAKRIT": "-",
        "SKLADNAZ": "",
        "SKLAD": "0",
        "TAXPROFITNAZ": "-",
        "TAXPROFIT": "0",
        "TAXZONENAZ": "-",
        "TAXZONE": "0",
        "ABCNAZ": "-",
        "ABC": "0",
        "XYZNAZ": "-",
        "XYZ": "0",
        "CVETNAZ": "-",
        "CVET": "0",
        "RESURSNAZ": "-",
        "RESURS": "0",
        "MAXCREDITOUR": "0",
        "SROKCREDITOUR": "30",
        "STRANANAZ": "-",
        "STRANA": "0",
        "POSTAVSHACCNAZ": "",
        "POSTAVSHACC": "0",
        "ZAKAZCHACCNAZ": "",
        "ZAKAZCHACC": "0",
        "DATAREG": "26.08.2021",
        "DILERNAZ": "",
        "DILER": "0",
        "VALUTANAZ": "EURO",
        "VALUTA": "100382",
        "MAXCREDIT": "5",
        "SROKCREDIT": "0",
        "ZAPRETOTGR": "-",
        "OWNERPAY": "+",
        "TAX1": "+",
        "TAX2": "+",
        "TAX3": "+",
        "TAX4": "+",
        "NDSFIZLIC": "+",
        "OKPO": "000133921",
        "ADRUR": "%C0%E4%F0%E5%F1%F1+%D0%F3%F1.+-+133921",
        "ADRFIZ": "%C0%E4%F0%E5%F1%F1+%F4%E8%E7+-+133921",
        "IS_PAYER": "-",
        "WWW": "",
        "ADRCORR": "%C0%E4%F0%E5%F1%F1+%EA%EE%F0%E5%F1%EF%EE%ED%E4%E5%ED%F6%E8%E8-+133921",
        "EMAIL": "133921@mail.com",
        "RUKFIO": "",
        "BUHFIO": "",
        "RUKSAN": "",
        "RUKDOLVNNAZ": "-",
        "RUKDOLVN": "0",
        "VLICE": "",
        "A_S10": "",
        "A_S9": "",
        "NAOSNOV": "",
        "FISKCODE": "133921-fiskcode@mail.com",
        "GLNCODE": "",
        "NALNOMER": "0000000133921",
        "NALSVID": "",
        "SCHET": "",
        "VBANKE": "",
        "MFO": "",
        "BANKNAZ": "-",
        "BANK": "0",
        "SCHETNDS": "",
        "VBANKENDS": "",
        "MFONDS": "",
        "BANKNDSNAZ": "",
        "BANKNDS": "0",
        "send_message": "-",
        "send_message_to_client": "-",
        "send_message_to_manager": "-",
        "send_auto_company_blocking": "-",
        "PRIM": "",
        "A_S1": "",
        "A_S2": "",
        "A_S3": "",
        "A_S4": "",
        "A_S5": "",
        "A_S6": "",
        "A_S7": "",
        "A_F1": "0",
        "A_F7": "0",
        "A_F8": "0",
        "A_F9": "0",
        "A_F10": "0",
        "A_D1": "",
        "A_D2": "",
        "A_D4": "",
        "A_D5": "",
        "A_B1": "-",
        "A_B2": "-",
        "A_B3": "-",
        "A_B4": "+",
        "A_B5": "+",
        "A_B6": "-",
        "A_B7": "-",
        "A_B8": "-",
        "A_B9": "-",
        "A_B10": "-",
        "A_R1NAZ": "-",
        "A_R1": "0",
        "A_R2NAZ": "0-%D1%EE%EA%F0%E0%F9",
        "A_R2": "0",
        "A_R3NAZ": "%D4%C8%CE+0",
        "A_R3": "0",
        "A_R4NAZ": "-",
        "A_R4": "0",
        "A_R6NAZ": "%CF%F0%EE%E2%E5%F0%E5%ED%EE",
        "A_R6": "815007",
        "A_R8NAZ": "-",
        "A_R8": "0",
        "A_R9NAZ": "-",
        "A_R9": "0",
        "PRIM2": "+",
        "show_on_map": "+",
        "EDITID": "133921",
        "POSTER": "Edit",
        "RETURNTO": "",
        "opername": "%C8%E7%EC%E5%ED%E8%F2%FC",
        "TTIP": "",
        "EL": "",
        "TFUNCTION": ""

    })
    const full = ref(false)
    const dfull = ref(false)
    const tfull = ref(false)
    const ffull = ref(false)
    const ifull = ref(false)
    const efull = ref(false)
    const yfull = ref(false)
    const xfull = ref(false)
    const bfull = ref(false)
    const сfull = ref(false)
    const hfull = ref(false)
    const zpriceshow = ref(false)
</script>

<style lang="scss" scoped>

</style>