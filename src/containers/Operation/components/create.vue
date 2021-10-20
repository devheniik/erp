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
                        <div class="tl">
                            <label class="label-primary">Операция:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Операция',
                                        api: '/opertipnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.base.opertipnaz"></modal-select>
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
                                <h1 class="text-blue-400"> {{ data.general.base.zakaz }}</h1>
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
                        <div class="tl">
                            <label class="label-primary"> Состояние:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Состояние',
                                        api: '/sostnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.sostnaz"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Категория расходов:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Категория расходов',
                                        api: '/cash_flow_itemnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.cash_flow_itemnaz"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Ресурс:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Ресурс',
                                        api: '/resursnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.resursnaz"></modal-select>
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
                        <div class="tl">
                            <label class="label-primary"> Персона:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Персона',
                                        api: '/personanaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.base.personanaz"></modal-select>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Менеджер:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.general.base.managernaz }}</h1>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Филиал:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.general.full.filialnaz}}</h1>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Слой:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.general.full.colornaz }} </h1>
                            </div>
                        </div>

                        <div class="tl">
                            <label class="label-primary"> Проект:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Проект',
                                        api: '/projectnaz',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.projectnaz"></modal-select>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Добавил:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.general.base.managernaz }} </h1>
                            </div>
                        </div>

                    </div>
                    <!--End Second block-->
                </div>
            </div>


            <!--TRIRD block-->
            <div class="rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Документ
                </h1>

                <div class="grid-2-2-1 section">

                    <div>
                        <!--start-->

                        <div class="tl">
                            <label class="label-primary"> Тип Документа:</label>
                            <div>
                                <modal-select :data="{
                                        label:'Тип документа',
                                        api: '/doktipnaz',
                                        meanKey: 'name'
                                            }" v-model="data.document.doktipnaz"></modal-select>
                            </div>
                        </div>

                        <div class="">
                            <label for="email" class="label-primary">№ Докумета:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.document.dokkode}} </h1>
                            </div>
                        </div>
                    </div>
                    <!--end-->
                    <div>
                        <div class=" ml-2">
                            <label for="email" class="label-primary">Основание:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.document.osnovanie }} </h1>
                            </div>
                        </div>
                        <div class="ml-2">
                            <label for="email" class="label-primary">Штрихкод:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400"> {{ data.document.barcode }} </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--начало-->
            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Суммы <span class="cursor-pointer"
                        @click="ifull = !ifull">{{ ifull ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>

                        <div class="tl">
                            <label class="label-primary">Сумма</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.base.summa" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сумма баланса</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.sum.base.summafirma" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сумма в грн</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.base.summanat" />
                        </div>
                    </div>

                    <div>
                        <div class="tl">
                            <label class="label-primary"> Валюта:</label>
                            <div>
                                <modal-select :data="{
                                            label:'Валюта',
                                            api: '/doktipnaz',
                                            meanKey: 'name'
                                                }" v-model="data.sum.base.valutanaz"></modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Курс баланса</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.base.kursfirma" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Курс к грн</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.base.kurs" />
                        </div>
                    </div>



                    <div v-show="ifull">
                        <div class="tl">
                            <label class="label-primary">Курс у.е.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.full.kurssklad" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Себ-мость</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.full.sebest" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Себ-мость у.е.</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.sum.full.sebestvalfact" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Курсовая разница у.е.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.full.kursdiff" />
                        </div>

                    </div> 



                    <div v-show="ifull">

                        <div class="tl">
                            <label class="label-primary">Сумма в у.е.</label>
                            <input type="text" class="input-primary" placeholder=""
                                v-model="data.sum.full.summasklad" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Сумма специф.</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.full.subtotal" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Скидка, %</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.full.discountp" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Скидка</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.sum.full.discsum" />
                        </div>

                    </div>
                </div>
                <!--Первый блок конец-->
               

                <div>
                </div>
            </div>

            <div class=" rounded-lg col-span-2 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Налоги <span class="cursor-pointer" @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section ">
                    <!--Первый блок-->
                    <div>

                        <div class="tl">
                            <label class="label-primary">НДС,%</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.base.tax1pr" />
                        </div>

                        

                    </div>

                    <div>
                        <div class="tl">
                            <label class="label-primary">НДС</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.base.tax1" />
                        </div>
                    </div>



                    <div v-show="full">

                        <div class="tl">
                            <label class="label-primary"> Налог 2, %</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.full.tax2pr" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ПФ, %</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.full.tax3pr" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> Налог 4, %</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.full.tax4pr" />
                        </div>

                    </div>

                    <div v-show="full">
                        <div class="tl">
                            <label class="label-primary">Налог 2</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.full.tax2" />
                        </div>
                        <div class="tl">
                            <label class="label-primary"> ПФ</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.full.tax3" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Налог 4</label>
                            <input type="text" class="input-primary" placeholder="" v-model="data.tax.full.tax4" />
                        </div>
  
                    </div>
                </div>
                <!--Первый блок конец--> 
            <!--Второй блок конец-->


        </div>
            <!--конец-->
        </div>
        <!--начало-->
        
        <!--конец-->

        <!--end--> 
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
    const ifull = ref(false)
    const full = ref(false)
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