<template>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">INAGURACIÓN</h5>
        <span>Jueves 12/11/24</span>
    </div>

    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">NOCHES DE TALENTOS</h5>
        <span>Jueves 12/11/24</span>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">NOCHE DE KARAOKE</h5>
        <span>Viernes 13/11/24</span>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <RouterLink :to="{ name: 'evento-especial' }" class="column items-center" style="text-decoration: none; color: inherit;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">PRIMER CONVITE CARNAVAL DE ORURO</h5>
            <span>Sabado 14/11/24</span>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({
    name: 'EventosEspecialesPage'
});
</script>
<style></style>