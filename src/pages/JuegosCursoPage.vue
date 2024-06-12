<template>
    <q-page class="bg-indigo-10">
        <div class="row justify-center bg-indigo-10 text-white">
            <h4 class="q-ma-none">Juegos en Curso</h4>
        </div>
        <div class="custom-bordered q-ma-md text-white row justify-center">
            <h5>        <router-link
          exact
          to="/hospedaje"
          class="absolute full-width full-height"
        >Oruro vs. Cochabamba</router-link></h5>
            <div>Futsal Varones</div>
            <div>Inicio: 20:00 Hrs.</div>
        </div>
        <div class="row justify-end q-px-sm">
            <q-btn rounded class="q-pa-md" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
        </div>
    </q-page>
</template>

<script setup>
defineOptions({
    name: 'JuegosCursoPage'
});
</script>