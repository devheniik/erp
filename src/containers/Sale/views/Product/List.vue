<template>
    <div class="h-full"> 
        <div class="flex w-full justify-start mx-5 my-1"> 
            <component :is="'list'"  v-model="c_compoennt" :data="{ list: options}"></component>
        </div>
        <double-table :component="c_compoennt" @select="link = list($event)" :api="api" :link="link">
            <viewer :api="link">
            </viewer>
        </double-table>
    </div>
</template>

<script setup>
    import { ref,computed } from 'vue'
    import categories from '../../api/products/category'
    import tree from '../../api/products/tree'
    import list from '../../api/products/list'

    const api = computed(() => c_compoennt.value == 'side-bar' ? categories : tree); 

    const c_compoennt = ref('side-bar')

    const options = [
        {
            label: 'Категории',
            value: 'side-bar'
        },
        {
            label: 'Дерево',
            value: 'tree-level'
        }
    ]

    const link = ref(null)
</script>

<style lang="scss" scoped>

</style>