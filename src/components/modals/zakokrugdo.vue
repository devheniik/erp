<template>
<div v-if="!isLoad">  
    <div class="mt-1">
        <h1 class="label-big">
            Степени округления цен в спецификации заказа<span class="cursor-pointer"></span>
        </h1>
    </div>
    <div class="section grid grid-cols-1 gap-4 mt-4">
        <div class="flex justify-center grid  grid-cols-1 w-auto mx-8">
            <div class="tl">
                <label class="label-primary"> Валюты товара:</label>
                <input type="text" class="input-primary" placeholder="0.0001" v-model=data.STOKRUGVAL />
            </div>
              <div class="tl">
                <label class="label-primary"> Валюты заказа:</label>
                <input type="text" class="input-primary" placeholder="0.01" v-model=data.STOKRUG />
            </div>
              <div class="tl">
                <label class="label-primary"> Валюты баланса:</label>
                <input type="text" class="input-primary" placeholder="0.01" v-model=data.STOKRUGBAL />
            </div>
        </div>
        <div>
            <div class="flex justify-center">
                <button class="btn-circle-primary-md px-2" @click="send('orders/corrections/zakokrugdo/run',data).then(r => $emit('ready', r))">Изменить</button>
            </div>
        </div>
    </div>
</div>
</template>

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
    } = get('orders/corrections/zakokrugdo/show', props.params) 

</script>

<style lang="scss" scoped>

</style>