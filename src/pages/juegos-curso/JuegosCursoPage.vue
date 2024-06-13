<template>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <RouterLink :to="{ name: 'juego-curso' }" class="column items-center" style="text-decoration: none; color: inherit;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">Oruro vs. Cochabamba</h5>
            <span>Futsal varones</span>
            <span>Inicio: 20:00 Hrs.</span>
        </RouterLink>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">Santa Cruz vs. El Alto</h5>
        <span>Tennis de mesa Damas</span>
        <span>Inicio: 19:00 Hrs.</span>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">Varios</h5>
        <span>Natación varones</span>
        <span>Inicio: 21:00 Hrs.</span>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({
    name: 'JuegosCursoPage'
});
</script>
<style></style>