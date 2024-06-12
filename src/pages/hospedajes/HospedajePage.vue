<template>
  <q-page>
    <div class="bg-container">
      <div class="header">
        <!-- <img src="@/assets/background-image.png" alt="Header Image" class="header-image"/> -->
        <h1 class="title">HOSPEDAJE</h1>
      </div>
      <div class="buttons-container">
        <q-btn unelevated class="full-width q-mb-sm q-py-lg button" text-color="white" color="dark-blue" label="HOTELES" >
            <!-- <router-link exact :to="{name: hospedaje-hoteles}" class="absolute full-width full-height"></router-link> -->
        </q-btn>
        <q-btn unelevated class="full-width q-mb-sm q-py-lg button" text-color="white" color="dark-blue" label="RESIDENCIALES" />
        <q-btn unelevated class="full-width q-mb-sm q-py-lg button" text-color="white" color="dark-blue" label="ALOJAMIENTOS" />
        <q-btn unelevated class="full-width q-mb-sm q-py-lg button" text-color="white" color="dark-blue" label="HOSTALES" />
      </div>
      <div class="footer">
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="person" />
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="home" />
        <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'HospedajePage'
});
</script>

<style scoped>
.bg-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: #000066;
}

.header {
  position: relative;
  text-align: center;
}

.header-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.title {
  font-family: 'Arial', sans-serif;
  color: white;
  margin-top: -2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
