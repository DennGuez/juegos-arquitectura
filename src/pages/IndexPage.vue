<template>
  <q-page style="background-color: #13082a;">
    <q-img
        src="src/img/portada-completa.jpg"
        style="background-size: contain; overflow: visible;"
    >
      <div class="text-white row justify-center q-pa-none" style="margin-top: 270px; background: none ;">
        <p class="q-ma-none">DIAS / HORAS / MINUTOS / SEGUNDOS</p>
        <h4 class="q-ma-none">{{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}</h4>
      </div>
      <div class="q-px-sm" style="margin-top: 370px; background: none ;">
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="event"
        label="Fixture y Resultados"
      >
        <router-link
          exact
          to="/fixture"
          class="absolute full-width full-height"
        ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="sports_handball"
        label="Juegos en curso"
      >
        <router-link
          exact
          :to="{ name: 'juegos-curso' }"
          class="absolute full-width full-height"
        ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="hotel"
        label="Hospedaje"
      >
        <router-link
          exact
          to="/hospedajes"
          class="absolute full-width full-height"
        ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="restaurant_menu"
        label="Comida"
      >
        <router-link
            exact
            to="/comidas"
            class="absolute full-width full-height"
        ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="location_on"
        label="Lugares Turisticos"
      >
      <router-link
          exact
          :to="{ name: 'lugares-turisticos' }"
          class="absolute full-width full-height"
      ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="nightlife"
        label="Eventos Especiales"
      >
      <router-link
          exact
          :to="{ name: 'eventos-especiales' }"
          class="absolute full-width full-height"
        ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="emoji_events"
        label="Ganadores"
      >
      <router-link
          exact
          to="/ganadores"
          class="absolute full-width full-height"
      ></router-link>
      </q-btn>
      <q-btn
        unelevated
        class="full-width q-mb-sm"
        align="left"
        text-color="black"
        color="yellow-8"
        icon="emoji_events"
        label="Convocatoria"
      >
      <q-item
        clickable
        dense
        target="_blank"
        href="https://drive.google.com/drive/folders/1-0AFWlvJcw688ZWto3YMh-Ngp6ByPekI"
      />
    </q-btn>
    <q-btn 
        rounded class="q-pa-md footer-button" 
        color="pink-4" 
        icon="person"
    >
        <router-link
            exact
            to="/contactos"
            class="absolute full-width full-height"
        ></router-link>
    </q-btn>
    </div>
    </q-img>
  </q-page>
</template>

<script setup>
import { ref } from "vue"
defineOptions({
  name: "IndexPage",
});

const countDownDate = new Date("Nov 10, 2024 00:00:00").getTime();
const days = ref("days");
const hours = ref("hours");
const minutes = ref("minutes");
const seconds = ref("seconds");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = countDownDate - now;

  if (duration < 0) {
    clearInterval(interval);
    updateDuration(0);
    return;
  }

  updateDuration(duration);
}, 1000);

function updateDuration(duration) {
  days.value = Math.floor(duration / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((duration % (1000 * 60)) / 1000);
}

</script>
