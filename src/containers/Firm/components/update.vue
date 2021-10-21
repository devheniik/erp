<template>
    <div v-if="!isLoad">
        <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4">
            <div>
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
                                    placeholder="Название контрагента, удобное в поиске"
                                    v-model="data.general.base.sokrash" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Полное название</label>
                                <input type="text" class="input-primary"
                                    placeholder="Название согласно св-ва(выятга) гос. реестр"
                                    v-model="data.general.base.polnoe" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Телефон</label>
                                <input type="text" class="input-primary" placeholder="Телефон"
                                    v-model="data.general.base.tel" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Тип организ.:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Тип организ.',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.base.tipnaz"></modal-select>
                                </div>
                            </div>
                        </div>
                        <!--Основное конец-->
                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Факс</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.general.full.nazeng" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Name</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.general.full.nazeng" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Назва</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.general.full.nazukr" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Вышестоящая организация:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Вышестоящая организация',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.fathernaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Собственник:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Собственник',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.ownernaz"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
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
                                            }" v-model="data.profile.base.manager"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Регион:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Регион',
                                        api: '/gorod',
                                        meanKey: 'name'
                                            }" v-model="data.profile.base.gorod"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Район:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Район',
                                        api: '/district',
                                        meanKey: 'name'
                                            }" v-model="data.profile.base.district"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сфера деят.:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Сфера деят.',
                                        api: '/sferad',
                                        meanKey: 'name'
                                            }" v-model="data.profile.base.sferad"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Источник клиента:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Источник клиента',
                                        api: '/clientsrc',
                                        meanKey: 'name'
                                            }" v-model="data.profile.base.clientsrc"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Секретность:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Секретность',
                                        api: '/sekret',
                                        meanKey: 'name'
                                            }" v-model="data.profile.base.sekret"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Направление продажи</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.profile.base.tipnaz">
                                    <option value="+">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--Основное1 конец-->
                    <!--Основное2 начало-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Член корп.</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.profile.base.nasha">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Заказчик</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.profile.base.zakazch">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Поставщик</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.profile.base.postavsh">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Производитель</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.profile.base.proizvod">
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
                                            }" v-model="data.profile.base.a_r1naz"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Значимость клиента:</label>
                            <div>
                                <modal-select :data="{
                                        label:'  Значимость клиента',
                                        api: '/a_r5naz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.base.a_r5naz"></modal-select>
                            </div>
                        </div>
                    </div>
                    <!--Основное2 конец-->
                    <div v-show="ifull" class="mt-4 mb-4">
                        <div>
                            <div class="tl">
                                <label class="label-primary">Артикул</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.profile.full.artikul" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Архивный</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.profile.full.zakrit">
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
                                            }" v-model="data.profile.full.taxprofitnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Налоговая зона:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Налоговая зона',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.taxzonenaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Категория (ABC):</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Категория (ABC)',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.abcnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Статус Клиента (XYZ):</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Статус Клиента (XYZ)',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.xyznaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Раскраска:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Раскраска',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.cvetnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ресурс:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Ресурс',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.resursnaz"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="ifull" class="mt-8">
                        <div class="tl">
                            <label class="label-primary">Макс. кред. нам</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.profile.full.maxcreditour" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Срок кред. нам</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.profile.full.srokcreditour" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Страна:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Страна',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.strana"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Счёт поставщика:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Счёт поставщика',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.postavshacc"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Счёт заказчика:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Счёт заказчика',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.profile.full.zakazchacc"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата рег.:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.profile.full.datareg">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Добавил
                                Изменил</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.profile.full.zakrit" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
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
                                            }" v-model="data.pricingProfile.full.valutanaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Макс. кредит</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.pricingProfile.full.maxcredit"/>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Срок кредита</label>
                                <input type="text" class="input-primary" placeholder="" v-model="data.pricingProfile.full.srokcredit"/>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Запрет отгр.</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.pricingProfile.full.zapretotgr">
                                        <option value="+">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Оплаты от собств.</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.pricingProfile.full.ownerpay">
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
                                <select class="dropdown-primary" v-model="data.pricingProfile.full.tax1">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">НДС для физ. лиц</label>
                            <div>
                                <select class="dropdown-primary " v-model="data.pricingProfile.full.ndsfizlic">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="label-big">
                    Общие данные <span class="cursor-pointer"
                        @click="ffull = !ffull">{{ ffull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section mb-4">

                    <div class="">
                        <!--Основное начало-->
                        <div class="tl">
                            <label class="label-primary"> ЄДРПОУ</label>
                            <input type="text" class="input-primary"
                                placeholder="ЕДРПОУ согласно св-ва(вытяга) гос реестр" v-model="data.requisite.base.okpo"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Юр. адрес</label>
                            <input type="text" class="input-primary"
                                placeholder="Адрес согласно св-ва(вытяга) гос реестр" v-model="data.requisite.base.adrur"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Физ. адрес</label>
                            <input type="text" class="input-primary" placeholder="Физ. адрес (для клиентов)" v-model="data.requisite.base.adrfiz"/>
                        </div>

                    </div>

                    <!--Основное конец-->
                    <div></div>
                    <div v-show="ffull">
                        <div class="tl">
                            <label class="label-primary">Плательщик</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.requisite.full.is_payer">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> www</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.www"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Почтовый адрес</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.adrcorr"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> e-mail</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.email" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ФИО рук</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.rukfio"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ФИО бухг.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.buhfio"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сан рук.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.rukdolvnnaz"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Должность рук:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Должность рук',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.requisite.full.rukdolvnnaz"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">В лице</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.a_s10"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">В лице ФИО</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.a_s9"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">В лице должность</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.www"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">На основании</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.naosnov"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Email для получения счетов</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.fiskcode"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> GLN код</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.glncode" />
                        </div>
                    </div>
                    <div v-show="ffull">
                        <div class="tl">
                            <label class="label-primary"> ІПН платника ПДВ</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.nalnomer"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Налог. свид</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.nalsvid"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Р/счёт</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.schet"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">В банке*</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.vbanke"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">МФО*</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.requisite.full.mfo"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Банк:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Банк',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.requisite.full.banknaz"></modal-select>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <h1 class="label-big">
                    Дополнительные данные <span class="cursor-pointer"
                        @click="xfull = !xfull">{{ xfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section mb-4">

                    <div class="">
                        <!--Основное начало-->
                        <div class="tl">
                            <label class="label-primary"> Примечание</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.base.a_s1" />
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
                                            }" v-model="data.additional.full.a_s2"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Ссылка на группу комп ВЭД:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Ссылка на группу комп ВЭД',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.additional.full.a_s3"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Кладовщик по умолчанию (для наших орг.):</label>
                            <div>
                                <modal-select :data="{
                                        label:' Кладовщик по умолчанию (для наших орг.)',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.additional.full.a_s4"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">статус ВЭД:</label>
                            <div>
                                <modal-select :data="{
                                        label:'статус ВЭД',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.additional.full.a_s6"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Модерация:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Модерация',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.additional.full.a_f10"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Статус проверки контактов:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Статус проверки контактов',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.additional.full.a_s1"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Маршрут поставки:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Маршрут поставки',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.additional.full.a_s1"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Контракт до:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.additional.full.a_d1">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата доступа в ЛК:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.additional.full.a_d2">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отсрочка дебиторки до:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.additional.full.a_d4">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата создания компании:</label>
                            <div class="flex  items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.additional.full.a_d5">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Номер_Постачальника</label>
                            <input type="text" class="input-primary" placeholder=""  v-model="data.additional.full.a_r1naz"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Счетчик дней запр.прайсов</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_r2naz"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Лимит для комплектаций, ЕВРО</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_r3naz"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Доб.Номер для сайта</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_r4naz" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> нн (ОГРН для РФ).</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_r6naz" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> E-mail для напоминаний дебиторской задолжености</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_r8naz"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Координата</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_r9naz"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Автоопределенный адрес</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_b5" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Тел. для смс</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_b6"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Код Філії</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.additional.full.a_b7"/>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Наш конкурент ?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b1">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отпралять на E-mail курсы?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b2">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отправлять только при изменении</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b3">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Участвует в КК</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b4">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Статус клиента</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b5">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Лимит СПД</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b6">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Просроченная дебиторка</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b7">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Эксклюзив для ВЭД</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b8">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Наявність скан документів</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b9">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Доступен в ЛК</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.additional.full.a_b10">
                                    <option value="+">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="mx-4 mt-4">
                            <label class="block text-sm font-medium text-gray-400">Примечания</label>
                            <div class="mt-1">
                                <textarea rows="3" class="textarea-primary" v-model="data.additional.full.prim2"></textarea>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
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
    import update from '../api/update'
    import get from '../api/get'
    import load from '@/hooks/load'

    
 
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

    const {
        data,
        isLoad,
        id
    } = load(get)
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg
    }
</style>