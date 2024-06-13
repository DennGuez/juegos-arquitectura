<template>
    <div class="q-ma-md text-white column items-center" style="position: unset; background: none;">
            <h5 class="q-px-md q-my-xs text-weight-bolder">HOTEL EDEN</h5>
        <div class="stars">
        <q-icon class="text-h5" name="star" v-for="star in 4" :key="star" />
        <q-icon class="text-h5" name="star_border" v-for="star in 1" :key="'border' + star" />
        </div>
    </div>
    <div class="hotel-map" style="position: unset; background: none;">
    <iframe
       width="100%"
       height="350"
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
const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.2388625680566!2d-67.11528322908406!3d-17.969945366876335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0bdcbc1fe47%3A0x7044acfa1829d7d!2sEden%20by%20BlueBay!5e0!3m2!1ses-419!2sbo!4v1718196246056!5m2!1ses-419!2sbo'

</script>

<style>
</style>
