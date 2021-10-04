<template>
    <div>
        <uviewer :container="'person'" :api="'/persons'">
            <template v-slot:create>
                <create></create>
            </template>
        </uviewer>
    </div>
</template>

<script setup>
    import { ref, provide, watchEffect } from 'vue'
    import Filters from '../components/filters.vue'
    import Create from '@dashboard/components/create.vue'
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
 

 
    import Create from '../components/create.vue'
</script>
