<template>
    <div>
        <uviewer :api="'/persons'">
            <template v-slot:create>
                <create></create>
            </template>
            <template v-slot:edit>
                <create></create>
            </template>
        </uviewer>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue'
</script>
