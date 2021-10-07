<template>
    <div v-if="!isLoading">
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие сведения
                </h1>
                <div class="grid-2-2-1 section">
                    
                <div>
                            <!--Первый блок-->
                            <div class="mt-4 ml-2">
                                <label for="email" class="label-primary">Операция:</label>
                                <div>
                                    <div>
                                        <select class="dropdown-primary" v-model="data.candidate">
                                            <option >Отгрузка товаров по заказу</option>
                                            <option >Да</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Дата:</label>
                              <div class="flex justify-between items-center ">
                                   
                                <flat-pickr class="input-primary" v-model="data.dataGet"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary">Заказ:</label>
                                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                                   <h1 class="text-blue-400"> 123</h1>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                             <label for="email" class="label-primary">Доставка:</label>
                             <div class="flex justify-between">
                               
                                <div class="border border-primary-400 rounded h-9 flex items-center justify-center w-full">
                                   <h1 class="text-blue-400">Нет доставки</h1>
                                  
                                </div> 
                                
                                <button class="button-hover-primary ml-2">Создать </button>
                            </div>
                            
                            </div>
                                <div class="mt-4 ml-2">
                                <label for="email" class="label-primary">Состояние:</label>
                                <div>
                                    <div>
                                        <select class="dropdown-primary" v-model="data.candidate">
                                            <option >-</option>
                                            <option >-</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                             <div class="mt-4 ml-2">
                                <label for="email" class="label-primary">Категория расходов:</label>
                                <div>
                                    <div>
                                        <select class="dropdown-primary" v-model="data.candidate">
                                            <option >*Постпуление от</option>
                                            <option >-</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div class="mt-4 ml-2">
                                <label for="email" class="label-primary">Ресурс:</label>
                                <div>
                                    <div>
                                        <select class="dropdown-primary" v-model="data.candidate">
                                            <option >ИТ-отдел</option>
                                            <option >-</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                </div>
            </div>
            
            <!--TRIRD block-->

            <div>
                <h1 class="label-big">
                    Реквизиты
                </h1>
                <div class="grid-2-2-1 section">
                    <div>
                        <!--Первый блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Серия Паспорта:</label>
                            <input type="text" name="email" id="email" class="input-primary"
                                v-model="data.passportSeria" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Номер:</label>
                            <input type="text" name="email" id="email" class="input-primary"
                                v-model="data.passportNumber" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Кем выдан:</label>
                            <input type="text" name="email" id="email" class="input-primary" v-model="data.whoGive" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Дата:</label>
                            <div class="flex justify-between items-center">
                                <flat-pickr class="input-primary" v-model="data.dataGet"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">ИНН:</label>
                            <input type="text" name="email" id="email" class="input-primary" v-model="data.inn" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Адрес Регистр:</label>
                            <input type="text" name="email" id="email" class="input-primary" v-model="data.adressReg" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Адрес дом:</label>
                            <input type="text" name="email" id="email" class="input-primary"
                                v-model="data.adressHome" />
                        </div>

                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Место рождения:</label>
                            <input type="text" name="email" id="email" class="input-primary"
                                v-model="data.birthPlace" />
                        </div>
                    </div>
                    <!--Конец второго блока-->
                </div>
            </div>
            <div>
                <h1 class="label-big">
                    Основное место работы
                </h1>

                <div>
                    <div class="section">
                        <div class>
                            <!--Первый блок-->
                            <div class="mt-4 ml-2 w-full">
                                <label for="email" class="label-primary">Отдел:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Отдел',
                                    api: '/dep'     ,
                                    meanKey: 'name',

                                }" v-model="data.departament"></modal-select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2 w-full">
                                <label for="email" class="label-primary">Должность:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Должность',
                                    api: '/pos'     ,
                                    meanKey: 'name',

                                }" v-model="data.position"></modal-select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2 w-full">
                                <label for="email" class="label-primary">Организация:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Организация',
                                    api: '/org'     ,
                                    meanKey: 'name',

                                }" v-model="data.organisatiom"></modal-select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2 w-full">
                                <label for="email" class="label-primary">Инспектор:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Инспектор',
                                    api: '/insp'     ,
                                    meanKey: 'name',

                                }" v-model="data.inspector"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 lg:col-span-2 md:col-span-2">
                <h1 class="label-big">
                    Дополнительная информация
                </h1>
                <div>
                    <div class="mx-4 mt-4">
                        <label for="email" class="block text-sm font-medium text-gray-400">Примечания</label>
                        <div class="mt-1">
                            <textarea rows="3" class="textarea-primary" v-model="data.add"></textarea>
                        </div>
                    </div>
                </div>
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
   

const {data, isLoading, id} = load(find)

</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg
    }
</style>