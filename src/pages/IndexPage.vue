<template>
  <q-page>
    <div class="bg-indigo-10 text-white row justify-center">
      <p class="q-ma-none">DIAS / HORAS / MINUTOS / SEGUNDOS</p>
      <h4 class="q-ma-none">155 : 22 : 44 : 40</h4>
    </div>
    <div class="bg-indigo-10 q-px-sm">
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8" icon="event"
        label="Fixture y Resultados">
        <router-link exact to="/fixture" class="absolute full-width full-height"></router-link>
      </q-btn>
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8"
        icon="sports_handball" label="Juegos en curso">
        <router-link exact to="/juegoscurso" class="absolute full-width full-height"></router-link>
      </q-btn>
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8" icon="hotel"
        label="Hospedaje">
        <router-link exact to="/hospedaje" class="absolute full-width full-height"></router-link>
      </q-btn>
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8"
        icon="restaurant_menu" label="Comida" />
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8" icon="location_on"
        label="Lugares Turisticos" />
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8" icon="nightlife"
        label="Eventos Especiales" />
      <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="yellow-8" icon="emoji_events"
        label="Ganadores" />
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
