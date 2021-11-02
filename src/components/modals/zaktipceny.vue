<template>
    <div class="mr-4 border-b  ">
        <div class="">
            <div>
                <h1>Тип цены заказа </h1>
            </div>
        </div>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">
                <div class="tl">
                                <label class="label-primary">  Тип цены:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Тип цены',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" ></modal-select>
                                </div>
                            </div>
                                <div class="tl">
                                <label class="label-primary">  Прайслист:</label>
                                <div>
                                    <modal-select :data="{
                                        label:' Прайслист',
                                        api: '/specstavkanaz',
                                        meanKey: 'name'
                                            }" ></modal-select>
                                </div>
                            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <button class="btn-circle-primary-md">Изменить</button>
                 <button class="btn-circle-primary-md">Продпть по себестоимости</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    
    import create from '@api_base/create'
    import {
        ref
    } from 'vue'
</script>

<style lang="scss" scoped>

</style>