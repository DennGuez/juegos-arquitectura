<template>
    <q-page>
        <q-img
            src="src/img/background.png"
            style="background-size: contain; overflow: visible;"
        >
        <div class="row justify-center text-white" style="position: unset; background: none; margin-top: 130px;">
            <h4 class="no-margin telemarines text-weight-bolder">FIXTURE Y RESULTADOS</h4>
        </div>
        <div class="bg-indigo-10 q-px-sm">
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
        <div class="row justify-end q-px-sm">
            <q-btn rounded class="q-pa-md" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
        </div>
        <!-- <RouterView /> -->
        </q-img>
    </q-page>
</template>

<script setup>
defineOptions({
    name: 'FixturePage'
});
</script>