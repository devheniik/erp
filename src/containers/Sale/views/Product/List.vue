<template> 
            <double-table tree @select="link = list($event)" :api="categories" :link="link">
                <viewer :api="link">  
                </viewer>  
            </double-table> 
</template>

<script setup>
import categories from '../../api/products/category'
import list from '../../api/products/list'

const link = (...params) => {
    //return `product`
}

</script>

<style lang="scss" scoped>

</style>