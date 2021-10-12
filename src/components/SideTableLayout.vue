<template>
    <div>
        <uviewer :api="api" route_card="">
            <!-- <template v-slot:create>
                <create></create>
            </template> -->
        </uviewer>
    </div>
</template>


<script setup>
import find from '.././hooks/load'
import get from '.././hooks/table'

const props = defineProps({
    api: String
})

console.log(props.api)




 
 
 
</script>

<style lang="scss" scoped>

</style>