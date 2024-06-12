<template>

    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <RouterLink :to="{ name: 'hoteles' }" class="column items-center" style="text-decoration: none; color: inherit;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">HOTELES</h5>
        </RouterLink>
    </div>

    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">RESIDENCIALES</h5>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">ALOJAMIENTOS</h5>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">HOSTALES</h5>
    </div>

</template>

<script setup>
import { RouterLink } from 'vue-router';

// defineOptions({
//     name: 'HospedajesPage'
// });
</script>
<style></style>