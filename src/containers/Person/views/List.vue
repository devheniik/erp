<template>
    <div v-if="!isLoad" class="w-full"> 
            <filters v-model="data.filters" > </filters>  
            <modal v-model="newPersonRef" width="w-8/12">
                <create></create>
            </modal>
        <div class="mt-5">
            {{data}}
            <utable @select="[]" :data="data.result"></utable>
        </div>
        <div>
            <pagination v-model:pagination="data.pagination"></pagination>
        </div> 
    </div>
</template>

<script setup>
    import { ref, provide, watchEffect } from 'vue'
    import Filters from '../components/filters.vue'
    import Create from '../components/create.vue'
    import hooks from '../hooks/list'

    const {
        data,
        isLoad
    } = hooks()

    const newPersonRef = ref(false)

    provide('ref', newPersonRef)
    provide('refChange', () => newPersonRef.value = true) 

    watchEffect(() => {
      console.log(data.value)
    });
 

 
</script>
