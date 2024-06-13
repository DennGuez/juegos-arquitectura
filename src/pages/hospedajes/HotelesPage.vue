<template>

    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <RouterLink :to="{ name: 'eden' }" class="column items-center" style="text-decoration: none; color: inherit;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">HOTEL EDEN</h5>
        </RouterLink>
        <div class="stars">
        <q-icon class="text-h5" name="star" v-for="star in 4" :key="star" />
        <q-icon class="text-h5" name="star_border" v-for="star in 1" :key="'border' + star" />
        </div>
    </div>

    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder text-center">HOTEL VIRGEN DEL SOCAVON</h5>
        <div class="stars">
        <q-icon class="text-h5" name="star" v-for="star in 3" :key="star" />
        <q-icon class="text-h5" name="star_border" v-for="star in 2" :key="'border' + star" />
        </div>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">HOTEL GALAXYA</h5>
        <div class="stars">
        <q-icon class="text-h5" name="star" v-for="star in 3" :key="star" />
        <q-icon class="text-h5" name="star_border" v-for="star in 2" :key="'border' + star" />
        </div>
    </div>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
        <h5 class="q-px-md q-my-xs text-weight-bolder">HOTEL GLORIOSO</h5>
        <div class="stars">
        <q-icon class="text-h5" name="star" v-for="star in 2" :key="star" />
        <q-icon class="text-h5" name="star_border" v-for="star in 3" :key="'border' + star" />
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({
    name: 'HospedajesPage'
});
</script>
<style></style>