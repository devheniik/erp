<template>
    <div v-if="!isLoad">
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие данные <span class="cursor-pointer" @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div>
                        <!--Первый блок-->
                        <div class="tl">
                            <label class="label-primary">Код заказа:</label>
                            <input type="text" class="input-primary" placeholder="Фамилия"
                                v-model="data.general.base.zakkode" />
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                    label:'Заказчик',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.firma">
                                </modal-select>
                            </div>
                        </div>
                        <div class="tl">
                            <div>
                                <modal-select :data="{
                                    label:'Контактёр',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.contacter">
                                </modal-select>
                            </div> 
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Договор',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.contract">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Проект',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.project">
                                </modal-select>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Через ЛК?</label>
                            <input disabled type="text" class="input-primary"  
                                v-model="data.general.base.project" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Источник Заказ (9)</label>
                            <div class="field">
                                <h1 class="text-blue-400" > {{ 2125779 }}</h1>
                            </div>
                        </div> 


                        <!-- FULL -->
                        <div v-show="full"> 
                            <div class="tl">
                                <label class="label-primary">Заявка клиента:</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.ordernum" />
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Контактёр 2',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.contacter2">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <label class="label-primary"> Через ЛК?</label>
                                <div class="field">
                                    <h1 class="text-blue-400" > {{ data.general.full.creater }}</h1>
                                </div>
                            </div>    
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Ресурс',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.resurs">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <modal-select :data="{
                                    label:'Переговоры',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.full.peregovorid">
                                </modal-select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!--Второй блок--> 
                        <div class="tl">
                            <label class="label-primary">Менеджер</label>
                            <input disabled type="text" class="input-primary"  
                                v-model="data.general.base.manager" />
                        </div>
                        
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Тип заказа',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.zakaztip">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Вид работ',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.type_of_work">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Производство для',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.manufacture_for ">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Тип доставки',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.frachttip">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Расч. счёт',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.account">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Направление продажи',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.a_r2">
                                </modal-select>
                        </div>
                        <div class="tl">
                                <modal-select :data="{
                                    label:'Тип заказа',
                                    api: '/reg',
                                    meanKey: 'a_s1'
                                    }" v-model="data.general.base.zakaztip">
                                </modal-select>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дропшиппинг:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.a_b1">
                                    <option :value="false">Нет</option>
                                    <option :value="true">Да</option>
                                </select>
                            </div>
                        </div>    
                        <div class="tl">
                            <label class="label-primary">Клиент клиента:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.a_b2">
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
                                    }" v-model="data.general.full.dostpoint">
                                </modal-select>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Экспорт:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.a_b1">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>    
                            <div class="tl"> 
                                <label class="label-primary">В плане производства:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.a_b2">
                                        <option :value="false">Нет</option>
                                        <option :value="true">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Раскраска</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Раскраска',
                                        api: 'uniprops/props/color',
                                        meanKey: 'a_s1'
                                            }" v-model="data.general.full.cvet"></modal-select>
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
                    Профиль
                </h1>

                <div>
                    <div class="grid-2-2-1 section">
                        <div>
                            <!--Первый блок-->
                            певый
                        </div>
                        <div>
                            <!--Второй блок-->

                            Второй
                        </div>
                        <!--Конец второго блока-->
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
                        Первый
                    </div>
                    <div>
                        <!--Второй блок-->
                        Второй
                    </div>
                    <!--Конец второго блока-->
                </div>
            </div>
            <div>
                <h1 class="label-big">
                    Основное место работы
                </h1>
                <div>
                    <div>
                        <div class="section">
                            <!--Первый блок-->
                            Первы
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
                        <label class="block text-sm font-medium text-gray-400">Примечания</label>
                        <div class="mt-1">
                            <textarea rows="3" class="textarea-primary"
                                ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center mt-6">
            <!-- <button @click="create(route_create, data)" type="button" class="button-hover-primary">Добавить</button> -->
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

    const {
        data,
        isLoad,
        id
    } = load(get)
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg mt-2
    }

    .tl{
        @apply mt-2 ml-2
    }

    .field{
        @apply border border-primary-400 rounded-md h-9 flex items-center justify-center
    }
</style>