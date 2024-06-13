<template>
    <div class="full-width column items-center"> 
        <div class="full-width column items-center" style="position: relative;">
            <h6 class="no-margin text-weight-medium telemarines">Primer convite</h6>
            <h6 class="no-margin text-weight-bolder">Sábado 13/12/245</h6>
            <h6 class="no-margin text-weight-bolder">19:00 Hrs.</h6>
        </div>
        <div class="full-width q-px-md">
            <q-img
                    src="src/img/primer-convite.png"
                    style="background-size: contain; overflow: visible;"
            />
        </div>
        <div class="q-pa-md">
            El Colegio de Arquitectos de Oruro invita
            al todos los colegas a ser parte de
            nuestro día de Convite.
        </div>
        <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <RouterLink :to="{ name: 'evento-especial-ubicacion' }" class="column items-center" style="text-decoration: none; color: inherit;">
                <h5 class="q-px-md q-my-xs text-weight-bolder">Plaza 10 de frebrero</h5>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'EventoEspecialPage'
});
</script>
<style></style>