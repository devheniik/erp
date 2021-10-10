<template>
    <div class="h-full">
        <uviewer :api="get">
            <template v-slot:create>
                <create></create>
            </template>
            <template v-slot:update>
                <update></update>
            </template>
        </uviewer>
    </div>
</template>

<script setup>
    import Create from '../components/create.vue'
    import Update from '../components/update.vue'
    import get from '../api/get'

</script>
