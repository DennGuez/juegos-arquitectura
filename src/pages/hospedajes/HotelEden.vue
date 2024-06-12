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
      <div class="hotel-image">
        <!-- <img src="https://pix8.agoda.net/hotelImages/430440/0/4041ff5dbd5437a8286058f8875bbb5b.jpeg" alt="Hotel Eden" /> -->
        <q-img
              src="https://pix8.agoda.net/hotelImages/430440/0/4041ff5dbd5437a8286058f8875bbb5b.jpeg"
              spinner-color="white"
              style="height: 100%; width: 100% "
            />
      </div>
      <div class="hotel-description">
        <p>Este hotel cuenta con gimnasio, sauna seco y vapor... Precios... Contactos...</p>
      </div>
      <div class="buttons-container">
        <q-btn unelevated class="full-width button" text-color="white" color="dark-blue" label="UBICACIÓN" />
      </div>
      <div class="footer">
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="person" />
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="home">
            <router-link exact to="/hoteles" class="absolute full-width full-height"></router-link>
        </q-btn>
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'HotelDetailPage'
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

.hotel-image img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.hotel-description {
  padding: 1rem;
  text-align: center;
}

.buttons-container {
  padding: 1rem;
  text-align: center;
}

.button {
  border: 1px solid white;
  background-color: #000066; /* Adjust this color to match the background */
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
