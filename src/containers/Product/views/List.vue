<template>
    <div>
        <div class="h-full"> 
            <double-table tree @select="link = `/products/catalog/category/${$event}`" :api="catalog" :link="link">
                <viewer :api="link"> 

                </viewer>  
            </double-table>
        </div>
    </div>
</template>

<script setup> 
import catalog from '../api/products/catalog'
 

const link = (...params) => {
    //return `product`
}

</script>

<style lang="scss" scoped>

</style>