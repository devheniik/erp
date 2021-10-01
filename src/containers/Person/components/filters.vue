<template>
    <div class=" flex justify-between items-end my-4">
        <div>
            <div>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" class="input-primary" placeholder="Поиск" />
                </div>
            </div>
        </div>

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Филиал</label>
            <select class="select-primary">
                <option v-for="option in 10" :key="option">{{option}}</option> 
            </select>
        </div> 

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Филиал</label>
            <select class="select-primary">
                <option v-for="option in 10" :key="option">{{option}}</option> 
            </select>
        </div> 

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Филиал</label>
            <select class="select-primary">
                <option v-for="option in 10" :key="option">{{option}}</option> 
            </select>
        </div>  
    </div>
</template>


<script setup>

</script>

<style lang="scss" scoped>

</style>