<template>
    <div>
        <div class="h-full">  
                <viewer :api="list"> 

                </viewer>   
        </div>
    </div>
</template>

<script setup>
import list from '../../api/shipments/list'
 
</script>

<style lang="scss" scoped>

</style>