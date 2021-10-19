<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4">
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие данные
                </h1>
                <div class="grid-2-2-1 section">

                    <div>
                        <!--Первый блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Операция:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.base.opertipnaz">
                                        <option>Отгрузка товаров по заказу</option>
                                        <option>Да</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Дата:</label>
                            <div class="flex items-center ">

                                <flat-pickr class="input-primary" v-model="data.general.base.operdata"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Заказ:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400" > {{ data.general.base.zakaz }}</h1>
                            </div>
                        </div>
                        <!-- <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Доставка:</label>
                            <div class="flex justify-between">

                                <div
                                    class="border border-primary-400 rounded h-9 flex items-center justify-center w-full">
                                    <h1 class="text-blue-400">{{ data.general.base.firmnaz }}</h1>

                                </div>

                                <button class="button-hover-primary ml-2">Создать </button>
                            </div>

                        </div> -->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Состояние:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.base.personanaz">
                                        <option>-</option>
                                        <option>-</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Категория расходов:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.base.managernaz">
                                        <option>*Постпуление от</option>
                                        <option>-</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Ресурс:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.base.managernaz">
                                        <option>ИТ-отдел</option>
                                        <option>-</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Second блок-->
                    <div>

                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Организация:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model=" data.general.base.firmnaz">
                                        <option>Мизол</option>
                                        <option>Евроизол</option>
                                        <option>Другое</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Персона:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.person">
                                        <option>Иванов Иван Иванович</option>
                                        <option>Дмитриев Дмитрий Дмитреивич</option>
                                        <option>Другое</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Менеджер:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.manager }}</h1>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Филиал:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.filial }}</h1>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Слой:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.layer }} </h1>
                            </div>
                        </div>

                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Проект:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.project">
                                        <option>-</option>
                                        <option>-</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Добавил:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.whoAdd }} </h1>
                            </div>
                        </div>

                    </div>
                    <!--End Second block-->
                </div>
            </div>


            <!--TRIRD block-->

            <h1 class="label-big">
               Документ 
            </h1>
            <div class="grid-2-2-1 section">

                <div>
                    <!--start-->

                    <div class="mt-4 ml-2">
                        <label for="email" class="label-primary">Тип документов:</label>
                        <div>
                            <div>
                                <select class="dropdown-primary" v-model="data.typeofDoc">
                                    <option>Накладная расходная</option>
                                    <option>Накладная доходня</option>
                                    <option>Выписка</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">№ Докумета:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.whoAdd }} </h1>
                        </div>
                    </div>
                </div>
                <!--end-->
                <div>
                    <div class="mt-4 ml-2">
                        <label for="email" class="label-primary">Основание:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.base }} </h1>
                        </div>
                    </div>
                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Штрихкод:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.barcode }} </h1>
                        </div>
                    </div>
                </div>
            </div>


            <h1 class="label-big">
                Суммы подробнее
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">

                <div>
                    <!--start-->

                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Сумма:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.sum }} </h1>
                        </div>
                    </div>

                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Сумма баланса:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.sumBal }} </h1>
                        </div>
                    </div>
                </div>
                <!--end-->

                <!--start-->
                <div>
                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Сумма в грн:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.suminGrn }} </h1>
                        </div>
                    </div>

                     <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Тип валюты:</label>
                        <div>
                            <div>
                                <select class="dropdown-primary" v-model="data.currency">
                                    <option>Грн</option>
                                    <option>Доллар</option>
                                    <option>Евро</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end-->

                <div>
                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Курс банка:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.currencyValue }} </h1>
                        </div>
                    </div>
                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">Курс к грн:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.currencyValueGrn }} </h1>
                        </div>
                    </div>
                </div>
            </div>
             <h1 class="label-big ">
               Налоги подробнее
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">

               
                    <!--start-->

                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">НДС,%:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.ndcprocent }} </h1>
                        </div>
                    </div>

                    <div class="mt-2 ml-2">
                        <label for="email" class="label-primary">НДС:</label>
                        <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                            <h1 class="text-blue-400"> {{ data.ndc }} </h1>
                        </div>
                    </div>
               
                <!--end-->

               
              

               
            </div>
        </div>
        <div class="w-full flex justify-center mt-6">
            <button type="button" class="btn-circle-primary">Добавить</button>
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
    import find from '../api/find.js'
   const isLoading = true
   const data = {
        "general": {
            "base": {
                "opertipnaz": "Остаток от компенсации наш",
                "operdata": "2021-10-11T21:00:00.000000Z",
                "zakaz": 2125381,
                "firmnaz": "9678-Сокращ",
                "personanaz": "-",
                "managernaz": "Admin"
            },
            "full": {
                "sostnaz": "-",
                "cash_flow_itemnaz": "Аренда серверов",
                "resursnaz": "Retail",
                "filialnaz": "Мізол",
                "colornaz": "Основной",
                "projectnaz": null
            }
        },
        "document": {
            "doktipnaz": "-",
            "dokkode": "4577979",
            "osnovanie": null,
            "barcode": null
        },
        "state": {
            "journal": false,
            "ostatok": 39
        },
        "sum": {
            "base": {
                "summa": 39.98,
                "summafirma": 1,
                "summanat": 39,
                "valutanaz": "ГРН",
                "kursfirma": 0,
                "kurs": 1
            },
            "full": {
                "summasklad": 1,
                "subtotal": 0,
                "discountp": "0",
                "discsum": 0,
                "kurssklad": ".031904",
                "sebest": "0",
                "sebestvalfact": 0,
                "kursdiff": 0
            }
        },
        "tax": {
            "base": {
                "tax1pr": "20",
                "tax1": "6.66"
            },
            "full": {
                "tax2pr": ".05",
                "tax3pr": "7.2",
                "tax4pr": "0",
                "tax2": ".02",
                "tax3": "2.69",
                "tax4": "0"
            }
        },
        "sub_data": {
            "base": {
                "prim": "Заказ 2125381"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg
    }
</style>