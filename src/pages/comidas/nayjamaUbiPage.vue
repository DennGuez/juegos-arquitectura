<template>
    <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">RESTAURANTE NAYJAMA</h5>
    </div>
    <div class="hotel-map">
    <iframe
       width="100%"
       height="300"
       :src="mapUrl"
       frameborder="0"
       style="border:0; max-width: 6000px;"
       allowfullscreen=""
       aria-hidden="false"
       tabindex="0">
     </iframe>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// defineOptions({
//   name: 'ubicacionEdenPage'
// });
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.0377482527144!2d-67.11164139308241!3d-17.974239847110482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0b92bc89ad1%3A0x64e838cf1c506174!2sRestaurant%20Nayjama!5e0!3m2!1ses-419!2sbo!4v1718226700225!5m2!1ses-419!2sbo'

</script>

<style>
</style>
