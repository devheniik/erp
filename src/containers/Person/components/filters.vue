<template>
    <div class=" flex justify-between items-end">
        <div>
            <div>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" class="input" placeholder="Поиск" />
                </div>
            </div>
        </div>

        <div>
            <label for="location" class="block text-sm font-medium text-gray-700">Филиал</label>
            <select id="location" name="location"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>USA</option>
                <option selected="">Canada</option>
                <option>EU</option>
            </select>
        </div>

        <div>
            <label for="location" class="block text-sm font-medium text-gray-700">Должность</label>
            <select id="location" name="location"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>USA</option>
                <option selected="">Canada</option>
                <option>EU</option>
            </select>
        </div>

        <div>
            <label for="location" class="block text-sm font-medium text-gray-700">Статус</label>
            <select id="location" name="location"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>USA</option>
                <option selected="">Canada</option>
                <option>EU</option>
            </select>
        </div>
    </div>
</template>


<script setup>

</script>

<style lang="scss" scoped>

</style>