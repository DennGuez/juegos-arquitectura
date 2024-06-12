<template>
  <q-page>
    <div class="bg-container">
      <div class="hotel-header">
        <h1 class="hotel-name">HOTEL EDEN</h1>
        <div class="stars">
          <q-icon name="star" v-for="star in 4" :key="star" />
          <q-icon name="star_border" />
        </div>
      </div>
      <div class="hotel-map">
        <iframe
          width="100%"
          height="500"
          :src="mapUrl"
          frameborder="0"
          style="border:0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0">
        </iframe>
      </div>
      <div class="footer">
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="person" />
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="home" @click="goHome" />
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}

const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.2388625680566!2d-67.11528322908406!3d-17.969945366876335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0bdcbc1fe47%3A0x7044acfa1829d7d!2sEden%20by%20BlueBay!5e0!3m2!1ses-419!2sbo!4v1718196246056!5m2!1ses-419!2sbo'

defineOptions({
  name: 'HotelMapPage'
});
</script>

<style scoped>
.bg-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #000066;
  color: white;
}

.hotel-header {
  text-align: center;
  padding: 1rem;
}

.hotel-name {
  margin: 0;
}

.stars {
  display: flex;
  justify-content: center;
}

.hotel-map {
  padding: 1rem;
}

.footer {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: #000066;
}

.footer-button {
  background-color: #ff4081; /* Adjust this color as needed */
}
</style>
