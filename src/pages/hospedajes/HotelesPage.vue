<template>
  <q-page>
    <div class="bg-container">
      <div class="buttons-container">
        <q-btn unelevated class="full-width q-mb-sm  q-py-lg button" text-color="white" color="dark-blue" label="HOTEL EDEN">
          <template v-slot:label>
            <div class="button-content">
              <span class="text-weight-bolder"> OTEL EDEN</span>
              <div class="stars">
                <q-icon name="star" v-for="star in 4" :key="star" />
                <q-icon name="star_border" />
              </div>
            </div>
          </template>
        </q-btn>
        <q-btn unelevated class="full-width q-mb-sm  q-py-lg button" text-color="white" color="dark-blue" label="HOTEL VIRGEN DEL SOCAVON">
          <template v-slot:label>
            <div class="button-content">
              <span>HOTEL VIRGEN DEL SOCAVON</span>
              <div class="stars">
                <q-icon name="star" v-for="star in 2" :key="star" />
                <q-icon name="star_border" v-for="star in 3" :key="'border' + star" />
              </div>
            </div>
          </template>
        </q-btn>
        <q-btn unelevated class="full-width q-mb-sm  q-py-lg button" text-color="white" color="dark-blue" label="HOSTEL GALAXIA">
          <template v-slot:label>
            <div class="button-content">
              <span>HOSTEL GALAXIA</span>
              <div class="stars">
                <q-icon name="star" v-for="star in 3" :key="star" />
                <q-icon name="star_border" v-for="star in 2" :key="'border' + star" />
              </div>
            </div>
          </template>
        </q-btn>
        <q-btn unelevated class="full-width q-mb-sm  q-py-lg button" text-color="white" color="dark-blue" label="HOTEL GLORIOSO">
          <template v-slot:label>
            <div class="button-content">
              <span>HOTEL GLORIOSO</span>
              <div class="stars">
                <q-icon name="star" v-for="star in 2" :key="star" />
                <q-icon name="star_border" v-for="star in 3" :key="'border' + star" />
              </div>
            </div>
          </template>
        </q-btn>
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
  name: 'HotelesPage'
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

.buttons-container {
  padding: 1rem;
  text-align: center;
}

.button {
  border: 1px solid white;
  background-color: #000066; /* Adjust this color to match the background */
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stars {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
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
