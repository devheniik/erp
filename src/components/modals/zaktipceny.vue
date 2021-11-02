<template><div  v-if="!isLoad">
    <div class="mt-1">
        <h1 class="label-big">
            Тип цены заказа <span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">
            <div class="tl">
                <label class="label-primary"> Тип цены:</label>
                <!--<div>
                    <modal-select :data="{
                    label:' Тип цены',
                    api: '/specstavkanaz',
                    meanKey: 'name'
                    }"></modal-select>
                </div>-->
                <input type="text" class="input-primary" placeholder="0.01" v-model=data.TIPCENY />
            </div>
            <div class="tl">
                <label class="label-primary"> Прайслист:</label>
                <!--<div>
                    <modal-select :data="{
                    label:' Прайслист',
                    api: '/specstavkanaz',
                    meanKey: 'name'
                    }"></modal-select>
                </div>-->
                <input type="text" class="input-primary" placeholder="0.01" v-model=data.PRICELIST />
            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <button class="btn-circle-primary-md mr-3"  @click="send('orders/corrections/zaktipceny/run',data).then(r => $emit('ready', r))">Изменить</button>
                <button class="btn-circle-primary-md">Продaть по себестоимости</button>
            </div>
        </div>
    </div>
</div></template>

<script setup> 
    import {
        ref
    } from 'vue'
    import send from "@api"

    const props = defineProps({
        params: Object
    })

    import get from '@/hooks/get'

    const {
    data, isLoad
    } = get('orders/corrections/zaktipceny/show',{ ZAKAZ: props.params.ZAKAZ, ZAKTIP: props.params.ZAKTIP }) 

</script>

<style lang="scss" scoped>

</style>