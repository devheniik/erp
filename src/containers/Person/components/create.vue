<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
            <div class=" rounded-lg">
                <h1 class="label-big">
                    Общие сведения <span class="cursor-pointer" @click="full = !full">{{ full ? '(скрыть)' : '(подробнее)' }}</span>
                </h1>
                <div class="grid-2-2-1 section">
                    <div>
                        <!--Первый блок-->
                        <div class="tl">
                            <label class="label-primary">Фамилия:</label>
                            <input type="text" class="input-primary" placeholder="Фамилия"
                                v-model="data.general.base.familia" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Имя:</label>
                            <input type="text" class="input-primary" placeholder="Имя"
                                v-model="data.general.base.imia" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Отчество:</label>
                            <input type="text" class="input-primary" placeholder="Отчество"
                                v-model="data.general.base.otchest" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата рождения:</label>
                            <div class="flex justify-between items-center">
                                <flat-pickr :locale="'ru'" class="input-primary" v-model="data.general.base.rodils">
                                </flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary">Фамилия кратко</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.familiaukr" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Имя кратко</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.imiaukr" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Отчество кратко</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.otchestukr" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Firstname</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.firstname" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Lastname</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.lastname" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Кому (Дат.падеж)</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.komu" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Кого (Винит.падеж)</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.kogo" />
                            </div> 
                            <div class="tl">
                                <label class="label-primary">У кого (Родит.падеж)</label>
                                <input type="text" class="input-primary" placeholder="Фамилия"
                                    v-model="data.general.full.rkogo" />
                            </div>
                            <div class="tl">
                                <label class="label-primary">Пенсионый возраст</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.general.full.pensvoz">
                                        <option value="+" selected="true">М</option>
                                        <option value="-">Ж</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Регион:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Инвалидность',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.base.region"></modal-select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="tl">
                            <label class="label-primary">Телефон:</label>
                            <input type="text" class="input-primary" placeholder="+38 *** *** ** **"
                                v-model="data.general.base.tel" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">E-mail:</label>
                            <input type="text" class="input-primary" placeholder="email@example.com"
                                v-model="data.general.base.email" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Пол:</label>
                            <div>
                                <select class="dropdown-primary" v-model="data.general.base.pol">
                                    <option value="+" selected="true">М</option>
                                    <option value="-">Ж</option>
                                </select>
                            </div>
                        </div>
                        <div class="tl">
                            <label class="label-primary">Регион:</label>
                            <div>
                                <modal-select :data="{
                                    label:'Регион',
                                    api: '/reg',
                                    meanKey: 'name'
                                    }" v-model="data.general.base.region"></modal-select>
                            </div>
                        </div>
                        <div v-show="full">
                            <div class="tl">
                                <label class="label-primary">Обазование:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Обазование',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.obraz"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Категория:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Категория',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.category"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Профессия:</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Профессия',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.special"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Семейное положение</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Семейное положение',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.sempol"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Национальность</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Национальность',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.nation"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Ресурс</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Ресурс',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.resurs"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Раскраска</label>
                                <div>
                                    <modal-select :data="{
                                        label:'Раскраска',
                                        api: '/reg',
                                        meanKey: 'name'
                                            }" v-model="data.general.full.cvet"></modal-select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Табельный номер</label>
                                <input type="text" class="input-primary" placeholder="№"
                                    v-model="data.general.base.tabnum" />
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
                            <div class="tl">
                                <label class="label-primary">Кандидат:</label>
                                <div>
                                    <div>
                                        <select class="dropdown-primary" v-model="data.profile.kandidat">
                                            <option value="-">Нет</option>
                                            <option value="+">Да</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Сотрудник:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.profile.issotrud">
                                        <option value="-">Нет</option>
                                        <option value="+">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">МОЛ:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.profile.mol">
                                        <option value="-">Нет</option>
                                        <option value="+">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Секретность:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Секретность',
                                    api: '/sec'     ,
                                    meanKey: 'name',

                                }" v-model="data.profile.sekret"></modal-select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <!--Второй блок-->

                            <div class="tl">
                                <label class="label-primary">Котактер:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.profile.iscont">
                                        <option value="-">Нет</option>
                                        <option value="+">Да</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tl">
                                <label class="label-primary">Уволен:</label>
                                <div>
                                    <select class="dropdown-primary" v-model="data.profile.uvolen">
                                        <option value="-">Нет</option>
                                        <option value="+">Да</option>
                                    </select>
                                </div>
                            </div>
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
                        <div class="tl">
                            <label class="label-primary">Серия Паспорта:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.pasport_ser" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Номер:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.pasport_num" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Кем выдан:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.pasport_kemvyd" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Дата:</label>
                            <div class="flex justify-between items-center">
                                <flat-pickr class="input-primary" v-model="data.requisite.pasport_data"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <!--Второй блок-->
                        <div class="tl">
                            <label class="label-primary">ИНН:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.idnum" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Адрес Регистр:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.adresreg" />
                        </div>
                        <div class="tl">
                            <label class="label-primary">Адрес дом:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.adresdom" />
                        </div>

                        <div class="tl">
                            <label class="label-primary">Место рождения:</label>
                            <input type="text" class="input-primary" v-model="data.requisite.adresrod" />
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
                    <div>
                        <div class="section">
                            <!--Первый блок-->
                            <div class="tl w-full">
                                <label class="label-primary">Отдел:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Отдел',
                                    api: '/dep'     ,
                                    meanKey: 'name'
                                    }" v-model="data.job.otdel"></modal-select>
                                </div>
                            </div>
                            <div class="tl w-full">
                                <label class="label-primary">Должность:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Должность',
                                    api: '/pos'     ,
                                    meanKey: 'name'
                                    }" v-model="data.job.dolvnost"></modal-select>
                                </div>
                            </div>
                            <div class="tl w-full">
                                <label class="label-primary">Организация:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Организация',
                                    api: '/org'     ,
                                    meanKey: 'name'
                                    }" v-model="data.job.organisatiom"></modal-select>
                                </div>
                            </div>
                            <div class="tl w-full">
                                <label class="label-primary">Инспектор:</label>
                                <div>
                                    <modal-select :data="{
                                    label:'Инспектор',
                                    api: '/insp'     ,
                                    meanKey: 'name'
                                    }" v-model="data.job.manager"></modal-select>
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
                        <label class="block text-sm font-medium text-gray-400">Примечания</label>
                        <div class="mt-1">
                            <textarea rows="3" class="textarea-primary"
                                v-model="data.additional.base.sotrprim"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center mt-6">
            <button @click="create(data)" type="button" class="button-hover-primary">Добавить</button>
        </div>
    </div>
</template>

<script setup>
    import create from '../api/create'
    import {
        ref
    } from 'vue'

    const full = ref(false)

    const data = ref({
        object: "Persona",
        uid: "83",
        general: {
            base: {
                familia: "фамилия 83",
                imia: "Имя 83",
                otchest: "Михайлович",
                rodils: "1984-12-26 00:00:00",
                tel: "380900000083",
                pol: "+",
                email: "83@mail.com",
                region: "-"
            },
            full: {
                imiaukr: "Імя 83",
                familiaukr: "Призвіще 83",
                otchestukr: "Михайлович",
                firstname: "firstname 83",
                lastname: "lastname 83",
                komu: "Кому Имя 83",
                kogo: "Кого Имя 83",
                rkogo: "RKOGO",
                pensvoz: "-",
                obraz: "вища",
                category: "0",
                special: "0",
                sempol: "нежонатий",
                nation: "украинец",
                resurs: "Не чіпати!!! До разбора",
                cvet: "0",
                tabnum: "13"
            }
        },
        profile: {
            kandidat: "-",
            issotrud: "-",
            iscont: "-",
            uvolen: "+",
            mol: "+",
            sekret: "Контактные лица Евроизол"
        },
        requisite: {
            pasport_ser: "Серия",
            pasport_num: "Номер",
            pasport_kemvyd: "Кем выдан паспорт",
            pasport_data: "2002-01-21 00:00:00",
            idnum: "0000000000083",
            adresreg: "Адрес регистрации",
            adresdom: "-CORP-adresdom 83",
            adresrod: "ADRESROD"
        },
        job: {
            otdel: "відділ збуту по роботі з проектними організаціями",
            dolvnost: "менеджер зі збуту по роботі з проектними організаціями",
            manager: "Admin"
        },
        additional: {
            base: {
                sotrprim: null
            },
            full: {
                "a_s1": null,
                "a_s2": null,
                "a_s3": null,
                "a_d3": "2009-03-06 00:00:00",
                "a_d4": "2009-03-06 00:00:00",
                "a_b1": "-",
                "a_b2": "-",
                "a_b8": "-",
                "a_b9": "-",
                "a_b10": "-",
                "a_r1": "0",
                "a_r2": "-",
                "a_r3": "0"
            }
        }
    })
</script>

<style lang="scss" scoped>
    .section {
        @apply shadow-sm pb-3 px-2 rounded-b-lg mt-2
    }

    .tl{
        @apply mt-2 ml-2
    }
</style>