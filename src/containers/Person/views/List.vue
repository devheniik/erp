<template>
    <div>
        <uviewer :container="'person'" :api="'/persons'">
            <template v-slot:create>
                <create></create>
            </template>
        </uviewer>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue'
</script>
