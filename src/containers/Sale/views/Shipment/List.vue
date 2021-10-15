<template>
    <div>
        <div class="h-full">  
                <viewer :api="get"> 

                </viewer>   
        </div>
    </div>
</template>

<script setup>
import get from '../../api/shipments/get'
 
</script>

<style lang="scss" scoped>

</style>