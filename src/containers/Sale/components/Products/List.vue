<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4">
            <!-- Начало Общие сведения -->
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие сведения <span class="cursor-pointer"
                        @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">Название:</label>
                            <input type="text" class="input-primary" placeholder="Название"
                                v-model="data.NAZVTOV" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Артикул:</label>
                            <input type="text" class="input-primary" placeholder="Артикул"
                                v-model="data.ARTIKUL" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Инфо:</label>
                            <input type="text" class="input-primary" placeholder="Инфо"
                                v-model="data.INFO" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Тип:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Тип',
                                        api: '/type',
                                        meanKey: 'name'
                                       
                                            }" v-model="data.USLUGANAZ"></modal-select>
                            </div>
                        </div>

                        <div class="tl">
                            <label class="label-primary">Раздел:</label>
                            <input type="text" class="input-primary" placeholder="-"
                                v-model="data.RAZDEL" />
                        </div>

                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Сокр. название</label>
                                <input type="text" class="input-primary" placeholder=" Сокр. название"
                                    v-model="data.SHORTNAZ" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Назв. тамож.</label>
                                <input type="text" class="input-primary" placeholder=" Назв. тамож."
                                    v-model="data.CUSTOMNAZ" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Код ТНВЭД</label>
                                <input type="text" class="input-primary" placeholder=" Код ТНВЭД"
                                    v-model="data.TNVED" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Штрих код</label>
                                <input type="text" class="input-primary" placeholder=" Штрих код"
                                    v-model="data.BARCODE" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Кассовый код</label>
                                <input type="text" class="input-primary" placeholder=" Кассовый код"
                                    v-model="data.KASSACODE" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Гарантия, мес.</label>
                                <input type="text" class="input-primary" placeholder=" Гарантия, мес."
                                    v-model="data.GARMES" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Пор. сортировки</label>
                                <input type="text" class="input-primary" placeholder=" Пор. сортировки"
                                    v-model="data.TOVORDER" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Признак:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Признак',
                                        api: '/priznaknaz',
                                        meanKey: 'name'
                                            }" v-model="data.PRIZNAKNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Дерево:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Дерево',
                                        api: '/treeidnaz',
                                        meanKey: 'name'
                                            }" v-model="data.TREEIDNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Базов. аналитика:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Базов. аналитика',
                                        api: '/budgetpriznaknaz',
                                        meanKey: 'name'
                                            }" v-model="data.BUDGETPRIZNAKNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">ABC:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ABC',
                                        api: '/abcnaz',
                                        meanKey: 'name'
                                            }" v-model="data.ABCNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">XYZ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'XYZ',
                                        api: '/xyznaz',
                                        meanKey: 'name'
                                            }" v-model="data.XYZNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">QRS:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'QRS',
                                        api: '/qrsnaz',
                                        meanKey: 'name'
                                            }" v-model="data.QRSNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Спец. ставка НДС:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Спец. ставка НДС',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.SPECSTAVKANAZ"></modal-select>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--Конец Второго блока-->
                    <div> 
                        <div class="tl">
                            <label class="label-primary">Категория:</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.KATEGORYNAZ" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Вкл. в прайс:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.VKLPRICETOV">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Заблокирован:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.BLOKED">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>

                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary"> Снят с произв.:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.TOVZAKR">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Буфер:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.INBUFFER">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> e-shop:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.ESHOP">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Покупной:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.POKUPNOY">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Акциз:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.AKCIZ">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Акциз. накл.:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.AKCIZNAKL">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>

                            <div class="tl">
                                <label class="label-primary">www</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.EMAIL" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Оприход. как:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Оприход. как',
                                        api: '/oprihas',
                                        meanKey: 'name'
                                            }" v-model="data.OPRIHASNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт доходов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Счёт доходов',
                                        api: '/dohodacc',
                                        meanKey: 'name'
                                            }" v-model="data.DOHODACCNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт расходов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Счёт расходов',
                                        api: '/rashodacc',
                                        meanKey: 'name'
                                            }" v-model="data.RASHODACCNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Счёт оприход.:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Счёт оприход.',
                                        api: '/defaultacc',
                                        meanKey: 'name'
                                            }" v-model="data.DEFAULTACCNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Бренд:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Бренд',
                                        api: '/brand',
                                        meanKey: 'name'
                                            }" v-model="data.BRANDNAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Страна:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Страна',
                                        api: '/strana',
                                        meanKey: 'name'
                                            }" v-model="data.STRANANAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Раскраска:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.CVET">
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
                                            }" v-model="data.BUCHTOVNAZ"></modal-select>
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
             <!-- Конец Общие сведения -->
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
                                       
                                            }" v-model="data.MANUFACTERNAZ"></modal-select>
                            </div>
                        </div>
                        <div v-show="dfull">
                            <div class="tl">
                                <label class="label-primary"> Арт. произв.</label>
                                <input type="text" class="input-primary" placeholder=" Арт. произв."
                                    v-model="data.ARTMANUF" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Наз. произв.</label>
                                <input type="text" class="input-primary" placeholder=" Наз. произв."
                                    v-model="data.NAZMANUF" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Срок годности</label>
                                <input type="text" class="input-primary" placeholder=" Срок годности"
                                    v-model="data.SROKGODN" />
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
                                            }" v-model="data.POSTAVSHNAZ"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Остатки поставщика (НС)</label>
                            <input type="text" class="input-primary" placeholder="Остатки поставщика (НС)"
                                v-model="data.A_F7" />
                        </div>

                        <div v-show="dfull">

                            <div class="tl">
                                <label class="label-primary"> Арт. поставщ.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.ARTPOSTAV" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Наз. поставщ.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.NAZPOSTAV" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Срок поставки</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.SROKPOSTAV" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Cтатус наличия для сайта</label>
                                <input type="text" class="input-primary" placeholder="№" v-model="data.STATUSNAZ" />
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
                            <input type="text" class="input-primary" placeholder="" v-model="data.VES" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Объём(Было Мин. запас)</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.MINZAPAS" />
                        </div>
                        <div v-show="tfull">
                            <div class="tl">
                                <label class="label-primary">Объём Перевозки(Было Объём)</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.OBIEM" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Площадь</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.FLOORSPACE" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Фасовка</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.FASOVKA" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин. деление</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.MINFAS" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Ур. перезаказа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.PEREZAKAZ" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Норма закупки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.ZAKUPKOL" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Вес, нетто</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.NETTO" />
                            </div>
                        </div>
                    </div>
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> Еденица измерения:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Еденица измерения',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.edizmernaz"></modal-select>
                            </div>
                        </div>
                        <div v-show="tfull">
                            <div class="tl">
                                <label class="label-primary"> Норма брака</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.NORMABRAK" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин парт.</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.mincena1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Рекомендуемая цена</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.MINCENA1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Мин парт, Цена 2</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.MINCENA2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Мин парт, Цена 3</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.MINCENA3" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Мин парт, Цена 4</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.MINCENA4" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ширина</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.SHIRINA" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Тип места:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Тип места',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.PLACETIPNAZ"></modal-select>
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
                                <select class="dropdown-primary" v-model="data.SBORKA">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div v-show="ffull">
                            <div class="tl">
                                <label class="label-primary"> Время сборки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.ASSEMBLTIME" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Опер. сборки</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.ASSEMBLLEAD" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Опер. заказа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.ZAKAZLEAD" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Автопересчёт:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.AUTOPERESHET">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Автосборка:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.AUTOBUILD">
                                        <option value="+" selected="true">Да</option>
                                        <option value="-">Нет</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Пересчитывать комплектующие:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.PERESKOMPL">
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
                                <select class="dropdown-primary" v-model="data.ASSEMBLMETHOD">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>

                        <div v-show="ffull">
                            <div class="tl">
                                <label class="label-primary">Материалы</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.MATERIALCOST" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Работа</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.LABOURCOST" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Накладные</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.OVERHEAD" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Сложность</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.DIFICULTY" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Тип операции</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.PROIZVTIP">
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
                            <label class="label-primary"> Цена по запросу:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.CENAONCALL">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Инд. ценообраз.:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.INDPRICE">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div v-show="ifull">
                            <div class="tl">
                                <label class="label-primary">Курс</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVKURS" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Себест., ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVSEBESTPLAN" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAPLAN1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 2, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAPLAN2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 3, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAPLAN3" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 4, ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAPLAN4" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Себест., нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVSEBESTGRNPLAN" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRNPLAN1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 2, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRNPLAN2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Цена 3, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRNPLAN3" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 4, нац. ред.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRNPLAN4" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Единица цены</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.PRICEUNIT" />
                            </div>
                        </div>
                    </div>
                    <!--Первый блок конец-->
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> НДС</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.TAX1">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Налог 2</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.TAX2">
                                    <option value="+" selected="true">Да</option>
                                    <option value="-">Нет</option>
                                </select>
                            </div>
                        </div>
                        <div v-show="ifull">
                            <div class="tl">
                                <label class="label-primary">Макс. скидка, %</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.MAXSKIDPROC" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Себест.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVSEBEST" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENA1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 2.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENA2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 3</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENA3" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 4</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENA4" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Себест., нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVSEBESTGRN" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Рекомендуемая цена, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRN1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 2, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRN2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Цена 3, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRN3" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Цена 4, нац.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.TOVCENAGRN4" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Закуп. цена</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.ZAKUPCENA" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Средняя себест.</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.AVERAGESEB" />
                            </div>
                        </div>
                    </div>
                    <!--Второй блок конец-->
                    <!--Третий блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">ПФ</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.TAX3">
                                    <option value="+" selected="true">-</option>
                                    <option value="-">-</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Налог 4</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.TAX4">
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
                    Запасы <span class="cursor-pointer"
                        @click="efull = !efull">{{ efull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">Всего</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.tovtotal" />
                        </div>
                        <div v-show="efull">
                            <div class="tl">
                                <label class="label-primary">Резервов</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.tovreserv" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> В незавершёнке</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.tovwip" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> На консигнации</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.tovkons" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Прогноз</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.prognoz" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Бокс</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.BOX" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Стойка</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.STOYKA" />
                            </div>
                        </div>
                    </div>
                    <!--Второй блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary"> В наличии:</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.ves" />
                        </div>
                        <div v-show="efull">
                            <div class="tl">
                                <label class="label-primary"> Отложено</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.tovwipfact" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> В незавершёнке ф. </label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.tovkonsfact" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> На консигнации ф.</label>
                                <input type="text" class="input-primary" placeholder="№" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Прогноз ф.</label>
                                <input type="text" class="input-primary" placeholder="№" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Стеллаж</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.STELLAV" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ячейка</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.YACHEYKA" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Код ячейки</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.KODYACH" />
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
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Характеристика 1</label>
                            <input type="text" class="input-primary" placeholder="№" />
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
                                    <textarea rows="3" class="textarea-primary" v-model="data.OPISAN"></textarea>
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
                    Дополнительные данные <span class="cursor-pointer"
                        @click="сfull = !сfull">{{ сfull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>
                        <div class="tl">
                            <label class="label-primary">Примечание</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.TOVPRIM" />
                        </div>
                        
                        <div v-show="сfull">
                            <div class="tl">
                                <label class="label-primary"> Классы товаров:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Классы товаров',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R1NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Статусы товаров:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Статусы товаров',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R2NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Наша стройка ТГ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Наша стройка ТГ',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R4NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ТГ_для_ПК1_2:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' ТГ_для_ПК1_2',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R5NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Признак:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Признак',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R6NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Подгруппа:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Подгруппа',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R7NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Кат_2012:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Кат_2012',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R8NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ПланМизол:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ПланМизол',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R9NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ТГ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ТГ',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_R10NAZ"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ROTO2014кво. бонусов:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'ROTO2014кво. бонусов',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_F2"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Фасовка с РЦ:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Фасовка с РЦ',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_F3"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> % Нарушения для z-price:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'% Нарушения для z-price',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" v-model="data.A_F8"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Категория мотивации</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.A_F9" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Макс.Скидка для Кон.Покупателя</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.A_F10" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Название RU</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.A_S1" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Основной товар</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.A_S2" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Название для nasha-stroyka.com.ua</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.A_S9" />
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ABC_из_Мин.ЗапасовРЦ</label>
                                <input type="text" class="input-primary" placeholder=""
                                    v-model="data.A_S10" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Дубль товара ?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B1">
                                        <option value="+" selected="true">-</option>
                                        <option value="-">-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> ROTO2014?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B2">
                                        <option value="+" selected="true">-</option>
                                        <option value="-">-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> POS?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B7">
                                        <option value="+" selected="true">-</option>
                                        <option value="-">-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Участвует в рассылке прайсов?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B9">
                                        <option value="+" selected="true">-</option>
                                        <option value="-">-</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> НС?</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.A_B10">
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
                            <textarea rows="3" class="textarea-primary" v-model="data.KEYWORDS"></textarea>
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
    import route_create from '../../api/create'
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'
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
    const obj = ref({
        "NAZVANTOV": "125135+%CD%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"ARTIKUL": "+",
	"INFO": "125135+%C8%ED%F4%EE.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"USLUGANAZ": "%D2%EE%E2%E0%F0",
	"USLUGA": "1138",
	"KATEGORYNAZ": "%CF%C2%D5+%EF%EE%EA%F0%FB%F2%E8%E5+%E4%EB%FF+%E8%E7%EE%EB%FF%F6%E8%E8",
	"KATEGORY": "1418",
	"VKLPRICETOV": "+",
	"BLOKED": "-",
	"SHORTNAZ": "125135+%D1%EE%EA%F0.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"CUSTOMNAZ": "125135+%D2%E0%EC%EE%E6%E5%ED%ED%EE%E5.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"TNVED": "3917400090",
	"BARCODE": "",
	"KASSACODE": "",
	"GARMES": "0",
	"TOVORDER": "0",
	"PRIZNAKNAZ": "%CF%F0%EE%F7%E5%E5",
	"PRIZNAK": "123185",
	"TREEIDNAZ": "%D2%F0%B3%E9%ED%E8%EA%E8+EKA%D2%C5%D1+%28%E7%EE%E2%ED.%29",
	"TREEID": "2774",
	"BUDGETPRIZNAKNAZ": "-",
	"BUDGETPRIZNAK": "0",
	"ABCNAZ": "C",
	"ABC": "2225",
	"XYZNAZ": "-",
	"XYZ": "0",
	"QRSNAZ": "-",
	"QRS": "0",
	"SPECSTAVKANAZ": "-",
	"SPECSTAVKA": "0",
	"TOVZAKR": "-",
	"INBUFFER": "-",
	"ESHOP": "+",
	"POKUPNOY": "+",
	"AKCIZ": "-",
	"AKCIZNAKL": "-",
	"EMAIL": "",
	"OPRIHASNAZ": "%D2%CC%D6",
	"OPRIHAS": "1149",
	"DOHODACCNAZ": "",
	"DOHODACC": "0",
	"RASHODACCNAZ": "902",
	"RASHODACC": "902",
	"DEFAULTACCNAZ": "281",
	"DEFAULTACC": "281",
	"BRANDNAZ": "%D4%E8%F2%F2%E8%ED%E3%E8+%E8%E7+%CF%C2%D5+%EF%EE%EA%F0%E8%F2%E8%FF+%28%F1%EA%E8%E4%EA%E0%29",
	"BRAND": "1102740",
	"STRANANAZ": "Germany",
	"STRANA": "103001",
	"CVET": "0",
	"BUCHTOVNAZ": "125135+%CD%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"BUCHTOV": "125135",
	"MANUFACTERNAZ": "0-%D1%EE%EA%F0%E0%F9",
	"MANUFACTER": "0",
	"POSTAVSHNAZ": "21526-%D1%EE%EA%F0%E0%F9",
	"POSTAVSH": "21526",
	"A_F7": "0",
	"ARTMANUF": "+",
	"NAZMANUF": "EKATEC+T-piece+130+T+108+mm",
	"SROKGODN": "0",
	"ARTPOSTAV": "+",
	"NAZPOSTAV": "EKATEC+T-piece+130+T+108+mm",
	"SROKPOSTAV": "0",
	"STATUSNAZ": "-",
	"STATUS": "0",
	"VES": ".07",
	"MINZAPAS": "0",
	"EDIZMERNAZ": "%F8%F2%F3%EA%E8+",
	"EDIZMER": "184",
	"OBIEM": ".001",
	"FLOORSPACE": "0",
	"FASOVKA": "1",
	"MINFAS": "0",
	"PEREZAKAZ": "0",
	"ZAKUPKOL": "0",
	"NETTO": "0",
	"NORMABRAK": "0",
	"MINCENA1": "0",
	"MINCENA2": "0",
	"MINCENA3": "0",
	"MINCENA4": "0",
	"SHIRINA": "0",
	"PLACETIPNAZ": "-",
	"PLACETIP": "0",
	"SBORKA": "-",
	"ASSEMBLMETHOD": "0",
	"ASSEMBLTIME": "0",
	"ASSEMBLLEAD": "0",
	"ZAKAZLEAD": "0",
	"AUTOPERESHET": "+",
	"AUTOBUILD": "-",
	"PERESKOMPL": "-",
	"MATERIALCOST": "0",
	"LABOURCOST": "0",
	"OVERHEAD": "0",
	"DIFICULTY": "0",
	"PROIZVTIP": "0",
	"CENAONCALL": "-",
	"INDPRICE": "-",
	"TAX1": "+",
	"TAX2": "-",
	"TAX3": "-",
	"TAX4": "-",
	"TOVKURS": "32.6",
	"TOVSEBESTPLAN": "0",
	"TOVCENAPLAN1": "0",
	"TOVCENAPLAN2": "0",
	"TOVCENAPLAN3": "0",
	"TOVCENAPLAN4": "0",
	"TOVSEBESTGRNPLAN": "0",
	"TOVCENAGRNPLAN1": "0",
	"TOVCENAGRNPLAN2": "0",
	"TOVCENAGRNPLAN3": "0",
	"TOVCENAGRNPLAN4": "0",
	"PRICEUNIT": "1",
	"MAXSKIDPROC": "100",
	"TOVSEBEST": "0",
	"TOVCENA1": "24.8044",
	"TOVCENA2": "0",
	"TOVCENA3": "370.2052",
	"TOVCENA4": "0",
	"TOVSEBESTGRN": "0",
	"TOVCENAGRN1": "0",
	"TOVCENAGRN2": "0",
	"TOVCENAGRN3": "0",
	"TOVCENAGRN4": "0",
	"ZAKUPCENA": "0",
	"AVERAGESEB": "0",
	"BOX": "1",
	"STOYKA": "1",
	"STELLAV": "1",
	"YACHEYKA": "1",
	"KODYACH": "",
	"OPISAN": "+",
	"TOVPRIM": "",
	"A_S1": "125135%D0%F3%F1.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"A_B1": "-",
	"A_R1NAZ": "-",
	"A_R1": "0",
	"A_S2": "",
	"A_F2": "0",
	"A_B2": "-",
	"A_R2NAZ": "-",
	"A_R2": "0",
	"A_F3": "1",
	"A_R3NAZ": "-",
	"A_R3": "0",
	"A_R4NAZ": "-",
	"A_R4": "0",
	"A_R5NAZ": "%ED%E5%F2",
	"A_R5": "123184",
	"A_R6NAZ": "-",
	"A_R6": "0",
	"A_B7": "-",
	"A_R7NAZ": "-",
	"A_R7": "0",
	"A_F8": "0",
	"A_R8NAZ": "%CF%F0%EE%F7%E5",
	"A_R8": "123186",
	"A_S9": "",
	"A_F9": "2",
	"A_B9": "+",
	"A_R9NAZ": "%D2%C8+%CF%C2%D5+%EF%EE%EA%F0%FB%F2%E8%E5",
	"A_R9": "119247",
	"A_S10": "C",
	"A_F10": "0",
	"A_B10": "-",
	"A_R10NAZ": "%D2%C8+%CF%C2%D5+%EF%EE%EA%F0%FB%F2%E8%E5",
	"A_R10": "119178",
	"KEYWORDS": "",
	"EDITID": "125135",
	"POSTER": "Edit",
	"RETURNTO": "",
	"EL": "",
	"TFUNCTION": "",
	"RAZDEL": "0",
	"CATALOG": "",
	"PRICE": "0",
	"ISCOPY": "",
	"MAXZAPAS": "0"
    })
    const data = ref({
	"NAZVANTOV": "125135+%CD%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"ARTIKUL": "+",
	"INFO": "125135+%C8%ED%F4%EE.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"USLUGANAZ": "%D2%EE%E2%E0%F0",
	"USLUGA": "1138",
	"KATEGORYNAZ": "%CF%C2%D5+%EF%EE%EA%F0%FB%F2%E8%E5+%E4%EB%FF+%E8%E7%EE%EB%FF%F6%E8%E8",
	"KATEGORY": "1418",
	"VKLPRICETOV": "+",
	"BLOKED": "-",
	"SHORTNAZ": "125135+%D1%EE%EA%F0.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"CUSTOMNAZ": "125135+%D2%E0%EC%EE%E6%E5%ED%ED%EE%E5.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"TNVED": "3917400090",
	"BARCODE": "",
	"KASSACODE": "",
	"GARMES": "0",
	"TOVORDER": "0",
	"PRIZNAKNAZ": "%CF%F0%EE%F7%E5%E5",
	"PRIZNAK": "123185",
	"TREEIDNAZ": "%D2%F0%B3%E9%ED%E8%EA%E8+EKA%D2%C5%D1+%28%E7%EE%E2%ED.%29",
	"TREEID": "2774",
	"BUDGETPRIZNAKNAZ": "-",
	"BUDGETPRIZNAK": "0",
	"ABCNAZ": "C",
	"ABC": "2225",
	"XYZNAZ": "-",
	"XYZ": "0",
	"QRSNAZ": "-",
	"QRS": "0",
	"SPECSTAVKANAZ": "-",
	"SPECSTAVKA": "0",
	"TOVZAKR": "-",
	"INBUFFER": "-",
	"ESHOP": "+",
	"POKUPNOY": "+",
	"AKCIZ": "-",
	"AKCIZNAKL": "-",
	"EMAIL": "",
	"OPRIHASNAZ": "%D2%CC%D6",
	"OPRIHAS": "1149",
	"DOHODACCNAZ": "",
	"DOHODACC": "0",
	"RASHODACCNAZ": "902",
	"RASHODACC": "902",
	"DEFAULTACCNAZ": "281",
	"DEFAULTACC": "281",
	"BRANDNAZ": "%D4%E8%F2%F2%E8%ED%E3%E8+%E8%E7+%CF%C2%D5+%EF%EE%EA%F0%E8%F2%E8%FF+%28%F1%EA%E8%E4%EA%E0%29",
	"BRAND": "1102740",
	"STRANANAZ": "Germany",
	"STRANA": "103001",
	"CVET": "0",
	"BUCHTOVNAZ": "125135+%CD%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"BUCHTOV": "125135",
	"MANUFACTERNAZ": "0-%D1%EE%EA%F0%E0%F9",
	"MANUFACTER": "0",
	"POSTAVSHNAZ": "21526-%D1%EE%EA%F0%E0%F9",
	"POSTAVSH": "21526",
	"A_F7": "0",
	"ARTMANUF": "+",
	"NAZMANUF": "EKATEC+T-piece+130+T+108+mm",
	"SROKGODN": "0",
	"ARTPOSTAV": "+",
	"NAZPOSTAV": "EKATEC+T-piece+130+T+108+mm",
	"SROKPOSTAV": "0",
	"STATUSNAZ": "-",
	"STATUS": "0",
	"VES": ".07",
	"MINZAPAS": "0",
	"EDIZMERNAZ": "%F8%F2%F3%EA%E8+",
	"EDIZMER": "184",
	"OBIEM": ".001",
	"FLOORSPACE": "0",
	"FASOVKA": "1",
	"MINFAS": "0",
	"PEREZAKAZ": "0",
	"ZAKUPKOL": "0",
	"NETTO": "0",
	"NORMABRAK": "0",
	"MINCENA1": "0",
	"MINCENA2": "0",
	"MINCENA3": "0",
	"MINCENA4": "0",
	"SHIRINA": "0",
	"PLACETIPNAZ": "-",
	"PLACETIP": "0",
	"SBORKA": "-",
	"ASSEMBLMETHOD": "0",
	"ASSEMBLTIME": "0",
	"ASSEMBLLEAD": "0",
	"ZAKAZLEAD": "0",
	"AUTOPERESHET": "+",
	"AUTOBUILD": "-",
	"PERESKOMPL": "-",
	"MATERIALCOST": "0",
	"LABOURCOST": "0",
	"OVERHEAD": "0",
	"DIFICULTY": "0",
	"PROIZVTIP": "0",
	"CENAONCALL": "-",
	"INDPRICE": "-",
	"TAX1": "+",
	"TAX2": "-",
	"TAX3": "-",
	"TAX4": "-",
	"TOVKURS": "32.6",
	"TOVSEBESTPLAN": "0",
	"TOVCENAPLAN1": "0",
	"TOVCENAPLAN2": "0",
	"TOVCENAPLAN3": "0",
	"TOVCENAPLAN4": "0",
	"TOVSEBESTGRNPLAN": "0",
	"TOVCENAGRNPLAN1": "0",
	"TOVCENAGRNPLAN2": "0",
	"TOVCENAGRNPLAN3": "0",
	"TOVCENAGRNPLAN4": "0",
	"PRICEUNIT": "1",
	"MAXSKIDPROC": "100",
	"TOVSEBEST": "0",
	"TOVCENA1": "24.8044",
	"TOVCENA2": "0",
	"TOVCENA3": "370.2052",
	"TOVCENA4": "0",
	"TOVSEBESTGRN": "0",
	"TOVCENAGRN1": "0",
	"TOVCENAGRN2": "0",
	"TOVCENAGRN3": "0",
	"TOVCENAGRN4": "0",
	"ZAKUPCENA": "0",
	"AVERAGESEB": "0",
	"BOX": "1",
	"STOYKA": "1",
	"STELLAV": "1",
	"YACHEYKA": "1",
	"KODYACH": "",
	"OPISAN": "+",
	"TOVPRIM": "",
	"A_S1": "125135%D0%F3%F1.+%ED%E0%E7%E2%E0%ED%E8%E5+%F2%EE%E2%E0%F0%E0",
	"A_B1": "-",
	"A_R1NAZ": "-",
	"A_R1": "0",
	"A_S2": "",
	"A_F2": "0",
	"A_B2": "-",
	"A_R2NAZ": "-",
	"A_R2": "0",
	"A_F3": "1",
	"A_R3NAZ": "-",
	"A_R3": "0",
	"A_R4NAZ": "-",
	"A_R4": "0",
	"A_R5NAZ": "%ED%E5%F2",
	"A_R5": "123184",
	"A_R6NAZ": "-",
	"A_R6": "0",
	"A_B7": "-",
	"A_R7NAZ": "-",
	"A_R7": "0",
	"A_F8": "0",
	"A_R8NAZ": "%CF%F0%EE%F7%E5",
	"A_R8": "123186",
	"A_S9": "",
	"A_F9": "2",
	"A_B9": "+",
	"A_R9NAZ": "%D2%C8+%CF%C2%D5+%EF%EE%EA%F0%FB%F2%E8%E5",
	"A_R9": "119247",
	"A_S10": "C",
	"A_F10": "0",
	"A_B10": "-",
	"A_R10NAZ": "%D2%C8+%CF%C2%D5+%EF%EE%EA%F0%FB%F2%E8%E5",
	"A_R10": "119178",
	"KEYWORDS": "",
	"EDITID": "125135",
	"POSTER": "Edit",
	"RETURNTO": "",
	"EL": "",
	"TFUNCTION": "",
	"RAZDEL": "0",
	"CATALOG": "",
	"PRICE": "0",
	"ISCOPY": "",
	"MAXZAPAS": "0"
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