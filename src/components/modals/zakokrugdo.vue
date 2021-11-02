<template>
    <div class="mr-4 border-b  ">
        <div class="">
            <div>
                <h1>Степени округления цен в спецификации заказа</h1>
            </div>
        </div>
    </div>
    <div class="mt-8">
        <h1 class="label-big">
            Общие данные<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">
            <div class="tl">
                <label class="label-primary"> Валюты товара:</label>
                <input type="text" class="input-primary" placeholder="0.0001" />
            </div>
              <div class="tl">
                <label class="label-primary"> Валюты заказа:</label>
                <input type="text" class="input-primary" placeholder="0.01" />
            </div>
              <div class="tl">
                <label class="label-primary"> Валюты баланса:</label>
                <input type="text" class="input-primary" placeholder="0.01" />
            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <button class="btn-circle-primary-md">Изменить</button>
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