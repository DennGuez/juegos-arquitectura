<template>
    <q-page style="background-color: #040D40">
        <q-img
            src="src/img/background.png"
            style="background-size: contain; overflow: visible;"
        >
        <div class="row justify-center text-white" style="position: unset; background: none; margin-top: 130px;">
            <h4 class="no-margin telemarines text-weight-bolder text-center">FIXTURE Y RESULTADOS</h4>
        </div>
        <div class="q-px-sm" style="background-color: #000646;">
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3" icon="event"
                label="FIXTURE GENERAL" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="sports_soccer" label="FUTBOL" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="sports_soccer" label="FUTSAL" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="sports_basketball" label="BASQUETBALL" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="sports_volleyball" label="VOLLEYBALL" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="sports_tennis" label="RAQUET" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="sports_tennis" label="TENNIS DE MESA" />
            <q-btn unelevated class="full-width q-mb-sm" align="left" text-color="black" color="blue-3"
                icon="directions_run" label="ATLETISMO" />
        </div>
        <br />
        </q-img>
        <div class="footer row full-width justify-between q-px-md" style="background: none;">
            <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="person" />
            <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="home" @click="goHome" />
            <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
        </div>
    </q-page>
</template>

<script setup>
defineOptions({
    name: 'FixtureMenuPage'
});
</script>