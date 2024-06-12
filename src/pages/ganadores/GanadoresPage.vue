<template>

    <div class="custom-bordered q-ma-md text-white" style="position: unset;">
        <RouterLink :to="{ name: 'ganador' }" class="column items-center" style="text-decoration: none; color: inherit;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">FUTBOL VARONES</h5>
            <span>Oruro</span>
        </RouterLink>
    </div>

    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">ATLETISMO 200 METROS - VARONES</h5>
        <span>Oruro</span>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">NATACION ESTILO LIBRE</h5>
        <span>Cochabamba</span>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({
    name: 'GanadoresPage'
});
</script>
<style></style>