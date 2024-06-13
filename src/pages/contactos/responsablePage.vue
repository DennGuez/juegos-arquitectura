<template>
    <div class="q-ma-md text-white column items-center" style="position: unset; background: none;">
        <h4 class="q-px-md q-my-xs text-weight-bolder">Responsable</h4>
        <h6 class="q-px-md q-my-xs text-weight-bolder">Delegacion de Oruro</h6>
        <h6 class="q-px-md q-my-xs text-weight-bolder">Arq. Abner Gonzales Medina</h6>
    </div>
    <div class="full-width column items-center"> 
        <div class="full-width q-px-md">
            <q-img
                    src="src/img/abner.jpg"
                    style="background-size: contain; overflow: visible;"
            />
        </div>
        <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <div class="full-width q-px-md">
                <RouterLink :to="{ name: 'edenubi' }" class="column items-center" style="text-decoration: none; color: inherit;">
                    <q-btn rounded class="q-pa-md footer-button" color="green-4" icon="message" @click="openWhatsApp" />
                    <h5 class="q-px-md q-my-xs text-weight-bolder">WhatsApp</h5>
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

function openWhatsApp() {
  const phoneNumber = '+59163664061'; // Reemplaza con el número de teléfono al que deseas enviar el mensaje (incluye el código del país)
  const message = encodeURIComponent('Hola, me gustaría obtener más información.'); // Mensaje predeterminado
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}
</script>

<style>
</style>
