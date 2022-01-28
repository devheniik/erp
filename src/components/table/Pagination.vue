<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <modal v-model="settings" width="w-8/12">
        <ul role="list" class="divide-y divide-gray-200 border rounded-md" id="modal-list">
            <li>
                <span>
                        Вариант для печати
                    </span>
            </li>
            <li>
                <span>
                        Показать все записи
                    </span>
            </li>
            <li>
                <div class="mt-1 flex rounded-md shadow-sm w-full">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10 w-full">
                        <label for="name" class="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700 ">Изменить  длину страницы</label>
                        <input type="text" name="email" id="email" :value="limit" @input="update_limit($event.target.value)" class="focus:ring-primary-500 focus:border-primary-500 block  rounded-md   sm:text-sm border-gray-300 w-full" placeholder="10"
                        />
                    </div>
                </div>
            </li>
            <li>
                <div class="mt-1 flex rounded-md shadow-sm w-full">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10 w-full">
                        <label for="name" class="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700 ">Перейти на страницу (доступно от 0 до {{ pagination.total_pages }})</label>
                        <input type="text" name="email" id="email" :value="page" @input="update_page($event.target.value)" class="focus:ring-primary-500 focus:border-primary-500 block rounded-none rounded-l-md   sm:text-sm border-gray-300 w-full" placeholder="10" />
                    </div>
                    <button type="button" @click="change" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
                            <span>Перейти</span>
                        </button>
                </div>
            </li>
            <li class="flex flex-col" v-if="local_headers.length">
                <span class="w-full">
                        Колонки
                    </span>
                <div class="grid grid-cols-3 gap-4 w-full">
                    <div class="py-2 flex flex-row justify-between pr-12" v-for="(h, i) in local_headers" :key="i">
                        <p class="text-gray-800 whitespace-nowrap truncate">
                            {{ h.label }}
                        </p>
                        <Switch @click="h.show = !h.show" :class="[h.show ? 'bg-primary-600' : 'bg-gray-200', 'relative z-0 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500']">
                            <span aria-hidden="true" :class="[h.show ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
                        </Switch>
                    </div>
                </div>
                <div class="w-full flex p-4 items-center justify-end">
                    <div class="btn-lg" @click="save_headers()">
                        Сохранить
                    </div>
                </div>
            </li>
            <li>
                <span>
                        Не форматировать числа
                    </span>
            </li>
            <li>
                <span>
                         Экспорт в Excel
                    </span>
            </li>
            <li>
                <span>
                        Экспорт в Excel 2007
                    </span>
            </li>
            <li>
                <span>
                        Экспорт в CSV
                    </span>
            </li>
        </ul>
    </modal>

    <div class="flex-1 flex justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Предыдущий
            </a>
        <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Следующий
            </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="flex flex-row items-center ">
            <div @click="settings = !settings" class="rounded-sm cursor-pointer  relative bg-primary-500  text-gray-50 hover:bg-primary-600 inline-flex items-center px-2 py-2  text-sm font-medium mr-5 ">
                <CogIcon class="h-4 w-4" />
            </div>
            <p class="text-sm text-gray-700">
                Показано с
                <span class="font-medium">{{ page * limit - limit + 1  }}</span> по
                <span class="font-medium">{{ pagination.to }}</span> из
                <span class="font-medium">{{ pagination.total_pages != page ? page * limit : pagination.total}}</span> всего {{ pagination.total }}
            </p>
        </div>
        <div>
            <nav class="relative z-0 inline-flex rounded-md  shadow-sm space-x-1" aria-label="Pagination">
                <button :disabled="!(page - 1 > 0)" @click="handle(true, -1)" class="relative inline-flex  cursor-pointer items-center min-w-[34px] px-2 py-2 rounded-sm   bg-white text-sm font-medium text-gray-500 hover:bg-gray-300"> 
                        <ChevronLeftIcon class="h-4 w-4" />
                    </button>
                <div v-if="page - 2 > 1" @click="handle(false, 1)" aria-current="page" :class="['z-10 relative bg-white  text-gray-500 hover:bg-gray-300 inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium']">
                    1
                </div>
                <div v-if="page - 2 > 2" @click="handle(false, 2)" aria-current="page" :class="['z-10 relative bg-white  text-gray-500 hover:bg-gray-300 inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium']">
                    2
                </div>
                <span v-if="page - 3 > 3" class="relative inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm    bg-white text-sm font-medium text-gray-700">
                        ...
                    </span>
                <div v-if="page - 2 > 0" @click="handle(true, -2)" aria-current="page" :class="['z-10 relative bg-white  text-gray-500 hover:bg-gray-300 inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium']">
                    {{ page - 2 }}
                </div>
                <div v-if="page - 1 > 0" @click="handle(true, -1)" aria-current="page" :class="['z-10 relative bg-white  text-gray-500 hover:bg-gray-300 inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium']">
                    {{ page - 1 }}
                </div>
                <div class=" z-10 bg-primary-500  text-white hidden md:inline-flex  cursor-pointer relative items-center  py-2 px-2 min-w-[34px] justify-center rounded-sm text-sm font-medium">
                    {{ page }}
                </div>
                <div v-if="page + 1 < pagination.total_pages" @click="handle(true, 1)" class="bg-white  text-gray-500 hover:bg-gray-300 relative inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium">
                    {{ page + 1 }}
                </div>
                <span v-if="pagination.total_pages > page + 2" class="relative inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm    bg-white text-sm font-medium text-gray-700">
                        ...
                </span>
                <div v-if="pagination.total_pages - 1 > page" @click="handle(false, pagination.total_pages - 1)" class="bg-white  text-gray-500 hover:bg-gray-300 relative inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium">
                    {{ pagination.total_pages - 1 }}
                </div>
                <div v-if="pagination.total_pages > page" @click="handle(false, pagination.total_pages)" class="bg-white  text-gray-500 hover:bg-gray-300 relative inline-flex  cursor-pointer items-center py-2 px-2 min-w-[34px] justify-center rounded-sm   text-sm font-medium">
                    {{ pagination.total_pages }}
                </div>
                <button :disabled="page + 1 > pagination.total_pages" @click="handle(true, +1)" class="relative inline-flex  cursor-pointer items-center min-w-[34px] px-2 py-2 rounded-sm   bg-white text-sm font-medium text-gray-500 hover:bg-gray-300">
                    <ChevronRightIcon class="h-4 w-4" />
                </button>
            </nav>
        </div>
    </div>
</div>
</template>

<script setup>
import {
    ref,
    watchEffect
} from 'vue'
import _ from "lodash"

const settings = ref(false)

const emit = defineEmit(['change', 'update:page', 'update:limit', 'update:headers'])

const props = defineProps({
    pagination: {
        type: Object,
        default: function() {
            return {
                include: [],
                custom: [],
                pagination: {
                    total: 10,
                    count: 10,
                    per_page: 10,
                    current_page: 1,
                    total_pages: 1
                }
            }
        }
    },
    headers: {
        type: Array,
        default: () => []
    },
    page: {
        type: [Number, String],
        default: 1
    }, 
    limit: {
        type: [Number, String],
        default: 10
    },
})

const local_headers = ref(_.cloneDeep(props.headers))

const save_headers = () => {
    emit('update:headers', local_headers)
    emit('change')
}

const update_limit = e => {
    emit('update:limit', e)
    emit('change')
    console.log(e)
}

const update_page = e => {
    emit('update:page', e)
    // emit('change')
    console.log(e);
}

const change = () => { 
    emit('change') 
}




const handle = (isIncrement, value) => {
    if (!isIncrement) {
        emit('update:page', value)
    } else {
        emit('update:page', props.page + value)
    }
    emit('change')
}
</script>

<style lang="scss" scoped>
#modal-list {
    li {
        @apply p-4 flex;
        span {
            @apply text-primary-400 cursor-pointer
        }
    }
}
</style>