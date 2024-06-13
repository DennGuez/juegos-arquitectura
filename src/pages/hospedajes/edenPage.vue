<template>
    <div class="q-ma-md text-white column items-center" style="position: unset; background: none;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">HOTEL EDEN</h5>
        <div class="stars">
        <q-icon class="text-h5" name="star" v-for="star in 4" :key="star" />
        <q-icon class="text-h5" name="star_border" v-for="star in 1" :key="'border' + star" />
        </div>
    </div>
    <div class="full-width column items-center" style="position: unset; background: none;"> 
        <div class="full-width q-px-md">
            <q-img
                    src="https://pix8.agoda.net/hotelImages/430440/0/4041ff5dbd5437a8286058f8875bbb5b.jpeg"
                    style="background-size: contain; overflow: visible;"
            />
        </div>
        <div class="q-pa-md">
                Este hotel cuenta con gimnasio, sauna
                seco y vapor... Precios… Contactos…
        </div>
        <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <div class="full-width q-px-md">
                <RouterLink :to="{ name: 'edenubi' }" class="column items-center" style="text-decoration: none; color: inherit;">
                    <h5 class="q-px-md q-my-xs text-weight-bolder">Ubicacion</h5>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({
  name: 'HospedajesPage'
});

</script>

<style>
</style>
