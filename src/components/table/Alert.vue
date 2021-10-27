<template>
    <div :class="['w-full', type == 'warning' ? 'bg-warning-600' : type == 'danger' ? 'bg-danger-600' : 'bg-primary-600' ]"> 
        <div class="max-w-full mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                    <span :class="['flex p-2 rounded-lg', type == 'warning' ? 'bg-warning-800' : type == 'danger' ? 'bg-danger-800' : 'bg-primary-800' ]">
                        <component :is="type == 'warning' ? 'ExclamationIcon' : type == 'danger' ? 'ShieldExclamationIcon' : 'InformationCircleIcon'" class="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <p class="ml-3 font-medium text-white whitespace-pre-line truncate">
                        <span class="md:hidden">
                            {{ data }}
                        </span>
                        <span class="hidden md:inline"> 
                            {{ data }} 
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    type: String,
    data: String
})

</script>

<style lang="scss" scoped>

</style>