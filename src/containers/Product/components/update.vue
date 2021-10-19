<template>
    <div v-if="!isLoad">
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
                                v-model="data.general.base.nazvantov" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Артикул:</label>
                            <input type="text" class="input-primary" placeholder="Артикул"
                                v-model="data.general.base.artikul" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Инфо:</label>
                            <input type="text" class="input-primary" placeholder="Инфо"
                                v-model="data.general.base.info" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Тип:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Тип',
                                        api: '/type',
                                        meanKey: 'name'
                                       
                                            }" v-model="data.general.base.uslugnaz"></modal-select>
                            </div>
                        </div>

                        <div class="tl">
                            <label class="label-primary">Раздел:</label>
                            <input type="text" class="input-primary" placeholder="-"
                                v-model="data.general.base.razdel" />
                        </div>

                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Сокр. название</label>
                                <input type="text" class="input-primary" placeholder=" Сокр. название"
                                    v-model="data.general.full.shortnaz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Назв. тамож.</label>
                                <input type="text" class="input-primary" placeholder=" Назв. тамож."
                                    v-model="data.general.full.customnaz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Код ТНВЭД</label>
                                <input type="text" class="input-primary" placeholder=" Код ТНВЭД"
                                    v-model="data.general.full.tnved" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Штрих код</label>
                                <input type="text" class="input-primary" placeholder=" Штрих код"
                                    v-model="data.general.full.barcode" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Кассовый код</label>
                                <input type="text" class="input-primary" placeholder=" Кассовый код"
                                    v-model="data.general.full.kassacode" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Гарантия, мес.</label>
                                <input type="text" class="input-primary" placeholder=" Гарантия, мес."
                                    v-model="data.general.full.garmes" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Пор. сортировки</label>
                                <input type="text" class="input-primary" placeholder=" Пор. сортировки"
                                    v-model="data.general.full.tovorder" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Признак:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Признак',
                                        api: '/priznaknaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.priznaknaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Дерево:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Дерево',
                                        api: '/treeidnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.treeidnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Базов. аналитика:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Базов. аналитика',
                                        api: '/budgetpriznaknaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.budgetpriznaknaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">ABC:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ABC',
                                        api: '/abcnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.abcnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">XYZ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'XYZ',
                                        api: '/xyznaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.xyznaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">QRS:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'QRS',
                                        api: '/qrsnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.qrsnaz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Спец. ставка НДС:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Спец. ставка НДС',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.specstavkanaz"></modal-select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="tl">
                            <label class="label-primary">Категория:</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.general.base.kateorynaz" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Вкл. в прайс:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.vklpricetov">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Заблокирован:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.bloked">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>

                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Снят с произв.:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.tovzakr">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Буфер:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.inbuffer">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> e-shop:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.eshop">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Покупной:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.pokupnoy">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Акциз:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.akciz">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Акциз. накл.:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.akciznakl">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>

                            <div class="tl">
                                <label class="label-primary">www</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.general.full.email" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Оприход. как:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Оприход. как',
                                        api: '/oprihas',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.oprihas"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт доходов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Счёт доходов',
                                        api: '/dohodacc',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.dohodacc"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт расходов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Счёт расходов',
                                        api: '/rashodacc',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.rashodacc"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт оприход.:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Счёт оприход.',
                                        api: '/defaultacc',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.defaultacc"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Бренд:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Бренд',
                                        api: '/brand',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.brand"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Страна:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Страна',
                                        api: '/strana',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.strana"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Раскраска:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.cvet">
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
                                            }" v-model="data.general.full.buchtov"></modal-select>
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
                                       
                                            }" v-model="data.manufacturers.base.manufacter"></modal-select>
                            </div>
                        </div>
                        <div v-show="dfull">
                            <div class="tl">
                                <label class="label-primary"> Арт. произв.</label>
                                <input type="text" class="input-primary" placeholder=" Арт. произв."
                                    v-model="data.manufacturers.full.artmanuf" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Наз. произв.</label>
                                <input type="text" class="input-primary" placeholder=" Наз. произв."
                                    v-model="data.manufacturers.full.nazmanuf" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок годности</label>
                                <input type="text" class="input-primary" placeholder=" Срок годности"
                                    v-model="data.manufacturers.full.srokgodn" />
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
                                            }" v-model="data.manufacturers.base.provider"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Остатки поставщика (НС)</label>
                            <input type="text" class="input-primary" placeholder="Остатки поставщика (НС)"
                                v-model="data.manufacturers.base.a_f7" />
                        </div>

                        <div v-show="dfull">

                            <div class="tl">
                                <label class="label-primary"> Арт. поставщ.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.manufacturers.full.artpostav" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Наз. поставщ.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.manufacturers.full.nazpostav" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Срок поставки</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.manufacturers.full.srokpostav" />
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
                                v-model="data.quantity.base.ves" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Объём(Было Мин. запас)</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.quantity.base.minzapas" />
                        </div>



                        <div v-show="tfull">
                            <div class="tl">
                                <label class="label-primary">Объём Перевозки(Было Объём)</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.obiem" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Площадь</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.floorspace" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Фасовка</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.fasovka" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин. деление</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.minfas" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Ур. перезаказа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.perezakaz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Норма закупки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.zakupkol" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Вес, нетто</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.quantity.full.netto" />
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
                                            }" v-model="data.quantity.base.edizmernaz"></modal-select>
                            </div>
                        </div>

                        <div v-show="tfull">

                            <div class="tl">
                                <label class="label-primary"> Норма брака</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.normabrak" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин парт.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.mincena1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Рекомендуемая цена</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.mincena1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Мин парт, Цена 2</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.mincena2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин парт, Цена 3</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.mincena3" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Мин парт, Цена 4</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.mincena4" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ширина</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.quantity.full.shirina" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Тип места:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Тип места',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.quantity.full.placetip"></modal-select>
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
            <!--Начало Сборка-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Сборка <span class="cursor-pointer"
                        @click="ffull = !ffull">{{ ffull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Сборка:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.assembly.base.sborka">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>



                        <div v-show="ffull">
                            <div class="tl">
                                <label class="label-primary"> Время сборки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.assembltime" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Опер. сборки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.assembllead" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Опер. заказа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.autopereshet" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Автопересчёт:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.assembly.full.autopereshet">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Автосборка:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.assembly.full.autobuild">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Пересчитывать комплектующие:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.assembly.full.pereskompl">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Метод сборки:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.assembly.base.assemblmethod">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>

                        <div v-show="ffull">

                            <div class="tl">
                                <label class="label-primary">Материалы</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.materialcost" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Работа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.labourcost" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Накладные</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.overhead" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Сложность</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.assembly.full.dificulty" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Тип операции</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.assembly.full.proizvtip">
                                        <option value="+" selected="true">-</option>
                                        <option value="-">-</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                    <div>
                    </div>
                </div>
            </div>
            <!--Конец Сборка-->
            <!--Начало Цены 0-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Цена 0 <span class="cursor-pointer"
                        @click="ifull = !ifull">{{ ifull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-3-3-1 section ">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">  Цена по запросу:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.cost.base.cenaoncall">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">  Инд. ценообраз.:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.cost.base.indprice">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>



                        <div v-show="ifull">
                          
                            <div class="tl">
                                <label class="label-primary">Курс</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovkurs" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Себест., ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovsebestplan" />
                            </div>
                         <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenaplan1" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Цена 2, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenaplan2" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Цена 3, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenaplan3" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Цена 4, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenaplan4" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Себест., нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovsebestgrnplan" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrnplan1" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Цена 2, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrnplan2" />
                            </div>
                              <div class="tl">
                                <label class="label-primary">Цена 3, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrnplan3" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Цена 4, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrnplan4" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Единица цены</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.priceunit" />
                            </div>
                            </div>
                    </div><!--Первый блок конец-->
                    <!--Второй блок-->
                     <div>
                        <div class="tl">
                            <label class="label-primary"> НДС</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.cost.base.tax1">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Налог 2</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.cost.base.tax2">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>



                        <div v-show="ifull">
                            <div class="tl">
                                <label class="label-primary">Макс. скидка, %</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.maxskidproc" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Себест.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovsebest" />
                            </div>
                         <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcena1" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Цена 2.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcena2" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Цена 3</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcena3" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Цена 4</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcena4" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Себест., нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovsebestgrn" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrn1" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Цена 2, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrn2" />
                            </div>
                              <div class="tl">
                                <label class="label-primary">Цена 3, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrn3" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Цена 4, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.tovcenagrn4" />
                            </div>
                              <div class="tl">
                                <label class="label-primary">Закуп. цена</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.zakupcena" />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Средняя себест.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.cost.full.averageseb" />
                            </div>
                        </div>
                    </div>
                    <!--Второй блок конец-->
                    <!--Третий блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">ПФ</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.cost.base.tax3">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> Налог 4</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.cost.base.tax4">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>

                        <div v-show="ifull">

                           </div>
                    </div>
                    <!--Конец третьего блока-->
                    <div>
                    </div>
                </div>
            </div>
            <!--Конец Цены 0-->
            <!--Начало Запасы-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                   Запасы  <span class="cursor-pointer"
                        @click="efull = !efull">{{ efull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">Всего</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.stocks.base.tovtotal" />
                        </div>
                      


                        <div v-show="efull">
                            <div class="tl">
                                <label class="label-primary">Резервов</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.stocks.full.tovreserv" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> В незавершёнке</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.stocks.full.tovwip" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> На консигнации</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.stocks.full.tovkons" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Прогноз</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.stocks.full.prognoz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Бокс</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.stocks.full.box" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Стойка</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.stocks.full.stoyka" />
                            </div>
                          
                        </div>
                    </div>
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> В наличии:</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.stocks.base.ves" />
                        </div>

                        <div v-show="efull">

                           
                            <div class="tl">
                                <label class="label-primary"> Отложено</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.stocks.full.tovwipfact" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> В незавершёнке ф. </label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.stocks.full.tovkonsfact" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> На консигнации ф.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Прогноз ф.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                   />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Стеллаж</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.stocks.full.stellav" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ячейка</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.stocks.full.yacheyka" />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Код ячейки</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.stocks.full.kodyach" />
                            </div>
                           
                        </div>
                    </div>
                    <!--Конец второго блока-->
                    <div>
                    </div>
                </div>
            </div>
            <!--Конец Запасы-->
            <!--Начало Характеристики-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Характеристики <span class="cursor-pointer"
                        @click="yfull = !yfull">{{ yfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class=" section ">
                    
                   
                        <div v-show="yfull">

                            <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                             <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                              <div class="tl">
                                <label class="label-primary"> Характеристика 1</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    />
                            </div>
                           
                    </div>
                    
                    
                </div>
            </div>
            <!--Конец Характеристики-->
             <!--Начало Описание-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Описание <span class="cursor-pointer"
                        @click="xfull = !xfull">{{ xfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class=" section ">
                    
                   
                        <div v-show="xfull">

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
            </div>
            <!--Конец Описание-->
             <!--Начало Количество и вес-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Дополнительные данные  <span class="cursor-pointer"
                        @click="сfull = !сfull">{{ сfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">Примечание</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.sub_data.base.tovprim" />
                        </div>
                    



                        <div v-show="сfull">
                            <div class="tl">
                                <label class="label-primary"> Классы товаров:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Классы товаров',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_s1"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">  Статусы товаров:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Статусы товаров',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_s2"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">   Наша стройка ТГ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Наша стройка ТГ',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_r1naz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">  ТГ_для_ПК1_2:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' ТГ_для_ПК1_2',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_f2"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Признак:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Признак',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_b2"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Подгруппа:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Подгруппа',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_r2naz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Кат_2012:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Кат_2012',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_f3"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">  ПланМизол:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ПланМизол',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_r3naz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">  ТГ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ТГ',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_4naz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ROTO2014кво. бонусов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ROTO2014кво. бонусов',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_r5naz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Фасовка с РЦ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Фасовка с РЦ',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_r6naz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> % Нарушения для z-price:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'% Нарушения для z-price',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.sub_data.full.a_b7"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Категория мотивации</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.sub_data.full.a_r7naz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Макс.Скидка для Кон.Покупателя</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.sub_data.full.a_f8" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Название RU</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.sub_data.full.a_r8naz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Основной товар</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.sub_data.full.a_s9" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Название для nasha-stroyka.com.ua</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.sub_data.full.a_f9" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ABC_из_Мин.ЗапасовРЦ</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.sub_data.full.a_b9" />
                            </div>
                      <div class="tl">
                            <label class="label-primary">Дубль товара ?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.sub_data.full.a_r9naz">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> ROTO2014?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.sub_data.full.a_s10">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> POS?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.sub_data.full.a_f10">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary">Участвует в рассылке прайсов?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.sub_data.full.a_b10">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                         <div class="tl">
                            <label class="label-primary"> НС?</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.sub_data.full.a_r10naz">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                   
                    <div>
                    </div>
                </div>
            </div>
            <!--Конец Кол-во и вес-->
            <!--TRIRD block-->


            <div class="col-span-1 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Ключевые слова
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
    import {
        ref,
        onMounted
    } from 'vue'
    import {

        useRoute
    } from 'vue-router'
    import update from '../api/update'
    import find from '../api/find.js'
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
    } = load(find)
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg
    }
</style>