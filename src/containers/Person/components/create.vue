<template>
    <div>
        <div class="flex justify-between">
            <div class="w-1/2">
                <h1
                    class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl text-gray-500
                        ml-2
                    "
                >
                    Общие сведения
                </h1>
                <div class="flex">
                    <div class>
                        <!--Первый блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary"
                                >Фамилия:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                placeholder="Фамилия"
                                v-model="userData.lastName"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Имя:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                placeholder="Имя"
                                v-model="userData.firstName"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Отчество:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                placeholder="Отчество"
                                v-model="userData.patronymic"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Дата рождения:</label
                            >
                            <div class="flex justify-between items-center">
                                <flat-pickr
                                    :locale="'ru'"
                                    class="input-primary"
                                    v-model="userData.birthday"
                                ></flat-pickr>
                                <CalendarIcon
                                    class="h-6 w-6 text-primary-400 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="ml-4">
                        <!--Второй блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary"
                                >Телефон:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                placeholder="+38 *** *** ** **"
                                v-model="userData.phoneNumber"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >E-mail:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                placeholder="email@example.com"
                                v-model="userData.email"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Пол:</label
                            >
                            <div>
                               <select  class=" block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" v-model="userData.sex">
                                <option>М</option>
                                <option selected="">Ж</option>
                                
                                </select>
                            </div>
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Регион:</label
                            >
                            <div>
                           
    <select  class=" block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md" v-model="userData.region">
      <option>USA</option>
      <option selected="">Canada</option>
      <option>EU</option>
    </select>
                            </div>
                        </div>
                    </div>
                    <!--Конец второго блока-->
                </div>
            </div>
            <div class="w-1/2 ml-3">
                <h1
                    class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl text-gray-500
                    "
                >
                    Профиль
                </h1>

                <div>
                    <div class="flex">
                        <div class>
                            <!--Первый блок-->
                            <div class="mt-4 ml-2">
                                <label for="email" class="label-primary"
                                    >Кандидат:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary"
                                    >Сотрудник:</label
                                >
                                <div>
                                <select  class="dropdown-primary">
                                    <option>USA</option>
                                    <option selected="">Canada</option>
                                    <option>EU</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary"
                                    >МОЛ:</label
                                >
                                <div>
                                    <select  class="dropdown-primary" v-model="userData.mol">
                                    <option>USA</option>
                                    <option selected="">Canada</option>
                                    <option>EU</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary"
                                    >Секретность:</label
                                >
                                <div>
                                  <select  class="dropdown-primary" v-model="userData.isSecret">
                                    <option>USA</option>
                                    <option selected="">Canada</option>
                                    <option>EU</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ml-4">
                            <!--Второй блок-->

                            <div class="mt-4 ml-2">
                                <label for="email" class="label-primary"
                                    >Нотактер:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 ml-2">
                                <label for="email" class="label-primary"
                                    >Уволен:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
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
                <h1
                    class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl
                        ml-2
                        text-gray-500
                    "
                >
                    Реквизиты
                </h1>
                <div class="flex">
                    <div class>
                        <!--Первый блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary"
                                >Серия Паспорта:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.passportSeria"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Номер:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.passportNumber"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Кем выдан:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.whoGive"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Дата:</label
                            >
                            <div class="flex justify-between items-center">
                                <flat-pickr
                                    class="input-primary"
                                    v-model="userData.dataGet"
                                ></flat-pickr>
                                <CalendarIcon
                                    class="h-6 w-6 text-primary-400 ml-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="ml-4">
                        <!--Второй блок-->
                        <div class="mt-4 ml-2">
                            <label for="email" class="label-primary"
                                >ИНН:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.inn"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Адрес Регистр:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.adressReg"
                            />
                        </div>
                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Адрес дом:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.adressHome"
                            />
                        </div>

                        <div class="mt-2 ml-2">
                            <label for="email" class="label-primary"
                                >Место рождения:</label
                            >
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="input-primary"
                                v-model="userData.birthPlace"
                            />
                        </div>
                    </div>
                    <!--Конец второго блока-->
                </div>
            </div>
            <div class="w-1/2 ml-2">
                <h1
                    class="
                        border-b-2 border-gray-600
                        font-sans
                        text-2xl text-gray-500
                    "
                >
                    Основное место работы
                </h1>

                <div>
                    <div class="flex">
                        <div class>
                            <!--Первый блок-->
                            <div class="mt-4 ml-2 w-full">
                                <label for="email" class="label-primary"
                                    >Отдел:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 ml-2 w-full">
                                <label for="email" class="label-primary"
                                    >Должность:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 ml-2 w-full">
                                <label for="email" class="label-primary"
                                    >Организация:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 ml-2 w-full">
                                <label for="email" class="label-primary"
                                    >Инспектор:</label
                                >
                                <div>
                                    <div class="relative">
                                        <button
                                            type="button"
                                            class="
                                                relative
                                                w-full
                                                bg-white
                                                border border-gray-300
                                                rounded-md
                                                shadow-sm
                                                pl-3
                                                pr-10
                                                py-2
                                                text-left
                                                cursor-default
                                                focus:outline-none
                                                focus:ring-1
                                                focus:ring-green-500
                                                focus:border-green-500
                                                sm:text-sm
                                            "
                                            aria-haspopup="listbox"
                                            aria-expanded="true"
                                            aria-labelledby="listbox-label"
                                        >
                                            <span
                                                class="
                                                    block
                                                    truncate
                                                    text-gray-500
                                                "
                                                >Выбрать</span
                                            >
                                            <span
                                                class="
                                                    absolute
                                                    inset-y-0
                                                    right-0
                                                    flex
                                                    items-center
                                                    pr-2
                                                    pointer-events-none
                                                "
                                            >
                                                <ChevronDownIcon
                                                    class="
                                                        h-5
                                                        w-5
                                                        text-gray-400
                                                    "
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/3 mt-6">
            <h1
                class="
                    border-b-2 border-gray-600
                    font-sans
                    text-2xl text-gray-500
                    ml-2
                "
            >
                Дополнительная Информация
            </h1>
            <div>
                <div class="ml-4 mt-4">
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-400"
                        >Примечания</label
                    >
                    <div class="mt-1 w-1/2">
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                                id="about"
                                name="about"
                                rows="3"
                                class="
                                    max-w-lg
                                    shadow-sm
                                    block
                                    w-full
                                    focus:ring-green-500
                                    focus:border-green-500
                                    sm:text-sm
                                    border border-gray-300
                                    rounded-md
                                "
                            ></textarea>
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
const userData = {
    firstName: '',
    lastName: '',
    patronymic: '',
    birthday: 0,
    phoneNumber: 0,
    email: '',
    sex: '',
    region: '',
    passportSeria: 0,
    passportNumber: 0,
    whoGive: '',
    dataGet: 0,
    inn: 0,
    adressReg: '',
    adressHome: '',
    birthPlace: '',
    add: '',
    mol: '',
    isSecret: "",
}
</script>

<style lang="scss" scoped>
</style>