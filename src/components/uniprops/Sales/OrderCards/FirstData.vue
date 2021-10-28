<template>
   

    <div class="mt-8">
        <h1 class="label-big">
            Первичные данные<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">

            <div class="tl">
                <label  class="label-primary">Заказ:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
             <div class="tl">
                <label  class="label-primary">Филиал:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
             <div class="tl">
                <label  class="label-primary">Организация:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
             <div class="tl">
                <label  class="label-primary">Ресурс:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
               <div class="tl">
                <label  class="label-primary">Проект:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
             <div class="tl">
                <label  class="label-primary"> Вал. баланса:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
             <div class="tl">
                <label  class="label-primary">Сумма:</label>
                <div class="border border-primary-400 rounded h-9 flex items-center justify-center">
                    <h1 class="text-blue-400"> {{ '1111' }} </h1>
                </div>
            </div>
             <div class="tl">
                            <label for="email" class="label-primary"> Дата создания затраты:</label>
                            <div class="flex items-center ">

                                <flat-pickr class="input-primary"></flat-pickr>
                                <CalendarIcon class="h-6 w-6 text-primary-400 ml-2" />
                            </div>
                        </div>


          
            <div class="tl">
                <label class="label-primary">Примечание:</label>
                <input type="text" class="input-primary" placeholder="" />
            </div>
           
        </div>
        <div>
            <div class="flex justify-center">
                <button class="btn-circle-primary-md">Редактировать затрату</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import route_create from '../api/create'
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'
</script>

<style lang="scss" scoped>

</style>