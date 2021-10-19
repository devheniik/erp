<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4">

            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие сведения <span class="cursor-pointer"
                        @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div>
                        <!--Первый блок-->
                        <div class="tl">
                            <label class="label-primary">Название:</label>
                            <input type="text" class="input-primary" placeholder="Название"
                                v-model="data.data.general.base.nazvantov" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Артикул:</label>
                            <input type="text" class="input-primary" placeholder="Артикул"
                                v-model="data.data.general.base.artikul" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Инфо:</label>
                            <input type="text" class="input-primary" placeholder="Инфо"
                                v-model="data.data.general.base.info" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Тип:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Тип',
                                        api: '/type',
                                        meanKey: 'name'
                                       
                                            }" v-model="data.data.general.base.uslugnaz"></modal-select>
                            </div>
                        </div>

                        <div class="tl">
                            <label class="label-primary">Раздел:</label>
                            <input type="text" class="input-primary" placeholder="-"
                                v-model="data.data.general.base.razdel" />
                        </div>

                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Сокр. название</label>
                                <input type="text" class="input-primary" placeholder=" Сокр. название"
                                    v-model="data.data.general.full.shortnaz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Назв. тамож.</label>
                                <input type="text" class="input-primary" placeholder=" Назв. тамож."
                                    v-model="data.data.general.full.customnaz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Код ТНВЭД</label>
                                <input type="text" class="input-primary" placeholder=" Код ТНВЭД"
                                    v-model="data.data.general.full.tnved" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Штрих код</label>
                                <input type="text" class="input-primary" placeholder=" Штрих код"
                                    v-model="data.data.general.full.barcode" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Кассовый код</label>
                                <input type="text" class="input-primary" placeholder=" Кассовый код"
                                    v-model="data.data.general.full.kassacode" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Гарантия, мес.</label>
                                <input type="text" class="input-primary" placeholder=" Гарантия, мес."
                                    v-model="data.data.general.full.garmes" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Пор. сортировки</label>
                                <input type="text" class="input-primary" placeholder=" Пор. сортировки"
                                    v-model="data.data.general.full.tovorder" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Признак:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Признак',
                                        api: '/priznaknaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.priznaknaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Дерево:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Дерево',
                                        api: '/treeidnaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.treeidnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Базов. аналитика:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Базов. аналитика',
                                        api: '/budgetpriznaknaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.budgetpriznaknaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">ABC:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ABC',
                                        api: '/abcnaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.abcnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">XYZ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'XYZ',
                                        api: '/xyznaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.xyznaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">QRS:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'QRS',
                                        api: '/qrsnaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.qrsnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Спец. ставка НДС:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Спец. ставка НДС',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.specstavkanaz"></modal-select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="tl">
                            <label class="label-primary">Категория:</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.data.general.base.kateorynaz" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Вкл. в прайс:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.data.general.base.vklpricetov">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Заблокирован:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.data.general.base.bloked">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>

                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Снят с произв.:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.tovzakr">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Буфер:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.inbuffer">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> e-shop:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.eshop">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Покупной:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.pokupnoy">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Акциз:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.akciz">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Акциз. накл.:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.akciznakl">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>

                            <div class="tl">
                                <label class="label-primary">www</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.general.full.email" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Оприход. как:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Оприход. как',
                                        api: '/oprihas',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.oprihas"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт доходов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Счёт доходов',
                                        api: '/dohodacc',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.dohodacc"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт расходов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Счёт расходов',
                                        api: '/rashodacc',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.rashodacc"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт оприход.:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Счёт оприход.',
                                        api: '/defaultacc',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.defaultacc"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Бренд:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Бренд',
                                        api: '/brand',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.brand"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Страна:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Страна',
                                        api: '/strana',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.strana"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Раскраска:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.data.general.full.cvet">
                                        <option value="-" selected="true">-</option>
                                        <option value="+">Красный</option>
                                        <option value="+">Коричневый</option>
                                        <option value="+">Желтый </option>
                                        <option value="+">Зеленый</option>
                                        <option value="+">Синий</option>
                                        <option value="+">Розовый</option>
                                        <option value="+">Бирюзовый</option>
                                        <option value="+">Черный</option>
                                        <option value="+">Фиолетовый</option>
                                    </select>
                                </div>
                                <div class="tl">
                                    <label class="label-primary"> Товар для бухг.:</label>
                                    <div>
                                        <modal-select :data="{
                                        label:' Товар для бухг.',
                                        api: '/buchtov',
                                        meanKey: 'name'
                                            }" v-model="data.data.general.full.buchtov"></modal-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                    <div>
                    </div>
                </div>
            </div>
            <!--Начало блока производители и поставщики -->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Производители и поставщики <span class="cursor-pointer"
                        @click="dfull = !dfull">{{ dfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <div>
                        <!--Первый блок-->


                        <div class="tl">
                            <label class="label-primary"> Произв:</label>
                            <div>
                                <modal-select :data="{
                                        label:' Произв.',
                                        api: '/type',
                                        meanKey: 'name'
                                       
                                            }" v-model="data.data.manufacturers.base.manufacter"></modal-select>
                            </div>
                        </div>
                        <div v-show="dfull">
                            <div class="tl">
                                <label class="label-primary"> Арт. произв.</label>
                                <input type="text" class="input-primary" placeholder=" Арт. произв."
                                    v-model="data.data.manufacturers.full.artmanuf" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Наз. произв.</label>
                                <input type="text" class="input-primary" placeholder=" Наз. произв."
                                    v-model="data.data.manufacturers.full.nazmanuf" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок годности</label>
                                <input type="text" class="input-primary" placeholder=" Срок годности"
                                    v-model="data.data.manufacturers.full.srokgodn" />
                            </div>
                        </div>
                    </div>
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Поставщик:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Поставщик',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.manufacturers.base.provider"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Остатки поставщика (НС)</label>
                            <input type="text" class="input-primary" placeholder="Остатки поставщика (НС)"
                                v-model="data.data.manufacturers.base.a_f7" />
                        </div>

                        <div v-show="dfull">

                            <div class="tl">
                                <label class="label-primary"> Арт. поставщ.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.manufacturers.full.artpostav" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Наз. поставщ.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.manufacturers.full.nazpostav" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Срок поставки</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.manufacturers.full.srokpostav" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Cтатус наличия для сайта</label>
                                <input type="text" class="input-primary" placeholder="№" />
                            </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                    <div>
                    </div>
                </div>
            </div>
            <!--Начало Количество и вес-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Количество и вес <span class="cursor-pointer"
                        @click="tfull = !tfull">{{ tfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>
                       <div class="tl">
                                <label class="label-primary">Вес</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.base.ves" />
                            </div>
                             <div class="tl">
                                <label class="label-primary">Объём(Было Мин. запас)</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.base.minzapas" />
                            </div>
                              


                        <div v-show="tfull">
                            <div class="tl">
                                <label class="label-primary">Объём Перевозки(Было Объём)</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.obiem" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Площадь</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.floorspace" />
                            </div>
                              <div class="tl">
                                <label class="label-primary">Фасовка</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.fasovka" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин. деление</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.minfas" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Ур. перезаказа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.perezakaz" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Норма закупки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.zakupkol" />
                            </div>
                                <div class="tl">
                                <label class="label-primary"> Вес, нетто</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.data.quantity.full.netto" />
                            </div>
                        </div>
                    </div>
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Поставщик:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Поставщик',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.quantity.base.edizmernaz"></modal-select>
                            </div>
                        </div>
                      
                        <div v-show="tfull">

                            <div class="tl">
                                <label class="label-primary"> Норма брака</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.quantity.full.normabrak" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин парт.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.quantity.full.mincena1" />
                            </div>
                             <div class="tl">
                                <label class="label-primary">Рекомендуемая цена</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.quantity.full.mincena1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Мин парт, Цена 2</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.data.quantity.full.mincena2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин парт, Цена 3</label>
                                <input type="text" class="input-primary" placeholder="№"
                                 v-model="data.data.quantity.full.mincena3" />
                            </div>
                              <div class="tl">
                                <label class="label-primary">Мин парт, Цена 4</label>
                                <input type="text" class="input-primary" placeholder="№" 
                                 v-model="data.data.quantity.full.mincena4"/>
                            </div>
                              <div class="tl">
                                <label class="label-primary">Ширина</label>
                                <input type="text" class="input-primary" placeholder="№"
                                 v-model="data.data.quantity.full.shirina" />
                            </div>
                             <div class="tl">
                            <label class="label-primary"> Тип места:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Тип места',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.data.quantity.full.placetip"></modal-select>
                            </div>
                        </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                    <div>
                    </div>
                </div>
            </div>
            <!--Конец Кол-во и вес-->
            <!--TRIRD block-->


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
    const dfull = ref(false)
    const tfull = ref(false)
    const data = ref({

        "data": {
            "general": {
                "base": {
                    "nazvantov": "Трійник EKATEC 130/108/130 90° зовн.",
                    "artikul": " ",
                    "info": true,
                    "uslugnaz": "Товар",
                    "razdel": "",
                    "kateorynaz": "ПВХ покрытие для изоляции",
                    "vklpricetov": "+",
                    "bloked": 0
                },
                "full": {
                    "shortnaz": "Трійник EKATEC 130/108/130 90° зовн.",
                    "customnaz": "Трійник EKATEC 130/108/130 90° зовн.",
                    "tnved": 3917400090,
                    "barcode": null,
                    "kassacode": null,
                    "garmes": 0,
                    "tovorder": 0,
                    "priznaknaz": "Прочее",
                    "treeidnaz": "Трійники EKAТЕС (зовн.)",
                    "budgetpriznaknaz": "-",
                    "abcnaz": "C",
                    "xyznaz": "-",
                    "qrsnaz": "-",
                    "specstavkanaz": "-",
                    "tovzakr": 0,
                    "inbuffer": 0,
                    "eshop": 0,
                    "pokupnoy": 0,
                    "akciz": "-",
                    "akciznakl": "-",
                    "email": null,
                    "oprihas": "ТМЦ",
                    "dohodacc": "-",
                    "rashodacc": "реклама на ТВ",
                    "defaultacc": "Накладная приходная",
                    "brand": "Фиттинги из ПВХ покрития (скидка)",
                    "strana": "Germany",
                    "cvet": "-",
                    "buchtov": "Трійник EKATEC 130/108/130 90° зовн."
                }
            },
            "manufacturers": {
                "base": {
                    "manufacter": "0-Сокращ",
                    "provider": "21526-Сокращ",
                    "a_f7": 0
                },
                "full": {
                    "artmanuf": 0,
                    "nazmanuf": "EKATEC T-piece 130 T 108 mm",
                    "srokgodn": 0,
                    "artpostav": 0,
                    "nazpostav": "EKATEC T-piece 130 T 108 mm",
                    "srokpostav": 0
                }
            },
            "quantity": {
                "base": {
                    "ves": ".07",
                    "minzapas": 0,
                    "edizmernaz": "штуки "
                },
                "full": {
                    "obiem": ".001",
                    "floorspace": 0,
                    "fasovka": true,
                    "minfas": "0",
                    "perezakaz": "1969-12-31T21:00:00.000000Z",
                    "zakupkol": 0,
                    "netto": "0",
                    "normabrak": 0,
                    "mincena1": 0,
                    "mincena2": 0,
                    "mincena3": 0,
                    "mincena4": 0,
                    "shirina": "0",
                    "placetip": "-"
                }
            },
            "assembly": {
                "base": {
                    "sborka": 0,
                    "assemblmethod": 0
                },
                "full": {
                    "assembltime": 0,
                    "assembllead": "0",
                    "autopereshet": 0,
                    "autobuild": "-",
                    "pereskompl": "-",
                    "assemblmethod": 0,
                    "materialcost": false,
                    "labourcost": 0,
                    "overhead": 0,
                    "dificulty": "0",
                    "proizvtip": "0"
                }
            },
            "cost": {
                "base": {
                    "cenaoncall": "-",
                    "indprice": 0,
                    "tax1": 0,
                    "tax2": 0,
                    "tax3": 0,
                    "tax4": 0
                },
                "full": {
                    "tovkurs": 32,
                    "tovsebestplan": 0,
                    "tovcenaplan1": false,
                    "tovcenaplan2": false,
                    "tovcenaplan3": 0,
                    "tovcenaplan4": 0,
                    "tovsebestgrnplan": "0",
                    "tovcenagrnplan1": "0",
                    "tovcenagrnplan2": false,
                    "tovcenagrnplan3": "0",
                    "tovcenagrnplan4": "0",
                    "priceunit": "1",
                    "maxskidproc": "100",
                    "tovsebest": "1969-12-31T21:00:00.000000Z",
                    "tovcena1": "0",
                    "tovcena2": 0,
                    "tovcena3": 0,
                    "tovcena4": 0,
                    "tovsebestgrn": false,
                    "tovcenagrn1": 0,
                    "tovcenagrn2": 0,
                    "tovcenagrn3": 0,
                    "tovcenagrn4": 0,
                    "zakupcena": "0",
                    "averageseb": false
                }
            },
            "stocks": {
                "base": {
                    "tovtotal": 0,
                    "tovtotalfact": 0
                },
                "full": {
                    "tovreserv": 0,
                    "tovwip": 0,
                    "tovkons": "0",
                    "prognoz": "0",
                    "box": 1,
                    "stoyka": 1,
                    "tovwipfact": 0,
                    "tovkonsfact": 0,
                    "stellav": 1,
                    "yacheyka": 1,
                    "kodyach": null
                }
            },
            "props": [],
            "descriptions": {
                "opisan": 0
            },
            "sub_data": {
                "base": {
                    "tovprim": null
                },
                "full": {
                    "a_s1": 0,
                    "a_s2": null,
                    "a_r1naz": "-",
                    "a_f2": 0,
                    "a_b2": 0,
                    "a_r2naz": "-",
                    "a_f3": 1,
                    "a_r3naz": "-",
                    "a_4naz": "-",
                    "a_r5naz": "Накладная приходная",
                    "a_r6naz": "-",
                    "a_b7": 0,
                    "a_r7naz": "-",
                    "a_f8": 0,
                    "a_r8naz": "Проче",
                    "a_s9": null,
                    "a_f9": 2,
                    "a_b9": null,
                    "a_r9naz": "ТИ ПВХ покрытие",
                    "a_s10": 0,
                    "a_f10": 0,
                    "a_b10": 0,
                    "a_r10naz": "ТИ ПВХ покрытие"
                }
            }
        },
        "meta": {
            "include": [],
            "custom": []
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
</style>