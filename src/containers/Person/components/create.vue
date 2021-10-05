<template>
    <div class=" ">
        <div class="flex justify-between">
            <div class="w-1/2">
                <h1 class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl text-gray-500
                        ml-2
                    ">
                    Общие сведения
                </h1>
                <div class="flex">
                    <div class>
                        <!--Первый блок-->
                        <div class="mt-4 ml-2 ">
                            <label for="email" class="label-primary">Фамилия:</label>
                            <input type="text" class="input-primary" placeholder="Фамилия" v-model="data.lastName" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Имя:</label>
                            <input type="text" class="input-primary" placeholder="Имя" v-model="data.firstName" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Отчество:</label>
                            <input type="text" name="email" id="email" class="input-primary" placeholder="Отчество"
                                v-model="data.patronymic" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Дата рождения:</label>
                            <div class="flex justify-between items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.birthday">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                    </div>
                    <div class="ml-4">
                        <!--Второй блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary">Телефон:</label>
                            <input type="text" name="email" id="email" class="input-primary"
                                placeholder="+38 *** *** ** **" v-model="data.phoneNumber" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">E-mail:</label>
                            <input type="text" name="email" id="email" class="input-primary"
                                placeholder="email@example.com" v-model="data.email" />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Пол:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.sex">
                                    <option>М</option>
                                    <option selected="">Ж</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary">Регион:</label>
                            <div>
                                <modal-select :data="{
                                    label:'Регион',
                                    api: '/reg'     ,
                                    meanKey: 'name',

                                }" v-model="data.region"></modal-select>
                            </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                </div>
            </div>
            <div class="w-1/2 ml-3">
                <h1 class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl text-gray-500
                    ">
                    Профиль
                </h1>

                <div>
                    <div class="flex">
                        <div class>
                            <!--Первый блок-->
                            <div class="mt-4 ml-2">
                                <label for="email" class="label-primary">Кандидат:</label>
                                <div>
                                <div>
                                    <select class="dropdown-primary" v-model="data.candidate">
                                        <option>Нет</option>
                                        <option selected="">Да</option>
                                        
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary" >Сотрудник:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.personal">
                                        <option>Да</option>
                                        <option selected="">Нет</option>
                                       
                                    </select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary">МОЛ:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.mol">
                                        <option>Да</option>
                                        <option selected="">Нет</option>
                                     
                                    </select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary">Секретность:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Секретность',
                                    api: '/sec'     ,
                                    meanKey: 'name',

                                }" v-model="data.isSecret"></modal-select>
                                </div>
                            </div>
                        </div>
                        <div class="ml-4">
                            <!--Второй блок-->

                            <div class="mt-4 ml-2">
                                <label for="email" class="label-primary">Нотактер:</label>
                                <div>
                                  <select class="dropdown-primary" v-model="data.notakter">
                                        <option>Да</option>
                                        <option selected="">Нет</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary">Уволен:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.isFired">
                                        <option>Да</option>
                                        <option selected="">Нет</option>
                                      
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--Конец второго блока-->
                    </div>
                </div>
            </div>
        </div>
        <!--end first part-->

        <div class="flex justify-between mt-8">
            <div class="w-auto">
                <h1 class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl
                        ml-2
                        text-gray-500
                    ">
                    Реквизиты
                </h1>
                <div class="flex">
                    <div class>
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
                    <div class="ml-4">
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
            <div class="w-1/2 ml-2">
                <h1 class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl text-gray-500
                    ">
                    Основное место работы
                </h1>

                <div>
                    <div class="flex">
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
        </div>
        <div class="w-2/3 mt-6">
            <h1 class="
                    border-b-2 border-gray-600
                    font-sans
                    text-2xl text-gray-500
                    ml-2
                ">
                Дополнительная Информация
            </h1>
            <div>
                <div class="ml-4 mt-4">
                    <label for="email" class="block text-sm font-medium text-gray-400">Примечания</label>
                    <div class="mt-1 w-1/2">
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea rows="3" class="
                                  textarea-primary
                                " v-model="data.add"></textarea>
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
        ref
    } from 'vue'

    const data = ref({
        firstName: null,
        lastName: null,
        patronymic: null,
        birthday: null,
        phoneNumber: null,
        email: null,
        sex: null,
        region: null,
        passportSeria: null,
        passportNumber: null,
        whoGive: null,
        dataGet: null,
        inn: null,
        adressReg: null,
        adressHome: null,
        birthPlace: null,
        add: null,
        mol: null,
        isSecret: null,
        organisatiom: null,
        inspector: null,
        position: null,
        departament: null,
        notakter: null,
        candidate: null,
        isFired: null,
        personal: null,
    })
</script>

<style lang="scss" scoped></style>