<template>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <RouterLink :to="{ name: 'lugar-turistico' }" class="column items-center" style="text-decoration: none; color: inherit;">
            <h5 class="q-px-md q-my-xs text-weight-bolder text-center">MONUMENTOS A LA VIRGEN DEL SOCAVON</h5>
        </RouterLink>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">PLAZA 10 DE FEBRERO</h5>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">MUSEO SIMÓN PATIÑO</h5>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">MUSEO DEL SOCAVÓN</h5>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({
    name: 'LugaresTuristicosPage'
});
</script>
<style></style>