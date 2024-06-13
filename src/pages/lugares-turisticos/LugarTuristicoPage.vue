<template>
    <div class="full-width column items-center"> 
        <div class="full-width column items-center" style="position: relative;">
            <h6 class="no-margin text-weight-medium telemarines">Primer convite</h6>
        </div>
        <div class="full-width q-px-md">
            <q-img
                    src="src/img/virgen-socavon.png"
                    style="background-size: contain; overflow: visible;"
            />
        </div>
        <div class="q-pa-md">
            Monumento a La Virgen del Socavón…
            Acceso en teleférico lo días….
        </div>
        <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <RouterLink :to="{ name: 'lugar-turistico-ubicacion' }" class="column items-center" style="text-decoration: none; color: inherit;">
                <h5 class="q-px-md q-my-xs text-weight-bolder">UBICACIÓN</h5>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'LugarTuristicoPage'
});
</script>
<style></style>