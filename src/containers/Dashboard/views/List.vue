<template>
    <div v-if="!isLoading">
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
                                    <select class="dropdown-primary" v-model="data.operation">
                                        <option>Отгрузка товаров по заказу</option>
                                        <option>Да</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Дата:</label>
                            <div class="flex items-center ">

                                <flat-pickr class="input-primary" v-model="data.dataSelect"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Заказ:</label>
                            <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                <h1 class="text-blue-400" > {{ data.order }}</h1>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Доставка:</label>
                            <div class="flex justify-between">

                                <div
                                    class="border border-primary-400 rounded h-9 flex items-center justify-center w-full">
                                    <h1 class="text-blue-400">{{ data.delivery }}</h1>

                                </div>

                                <button class="button-hover-primary ml-2">Создать </button>
                            </div>

                        </div>
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Состояние:</label>
                            <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.status">
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
                                    <select class="dropdown-primary" v-model="data.ctgCost">
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
                                    <select class="dropdown-primary" v-model="data.candidate">
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
                                    <select class="dropdown-primary" v-model=" data.organisation">
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
    import find from '@person/api/find.js'
    import load from '@/hooks/load'

// const data = {
//     operation: null,
//     dataSelect: null,
//     order: null,
//     delivery: null,
//     status: null,
//     ctgCost: null,
//     resource: null,
//     organisation: null,
//     person: null,
//     resource: null,
//     filial: null,
//     manager: null,
//     layer: null,
//     project: null,
//     whoAdd: null,
//     typeofDoc: null,
//     numDoc: null,
//     base: null,
//     barcode: null,
//     sum: null,
//     sumBal: null,
//     suminGrn: null,
//     currency: null,
//     currencyValue: null,
//     currencyValueGrn: null,
//     ndcprocent: null,
//     ndc: null





// }
    const {
        data,
        isLoading,
        id
    } = load(find)
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg
    }
</style>