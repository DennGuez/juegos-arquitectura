<template>
    <div class="full-width column items-center no-padding"> 
        <div class="full-width column items-center" style="position: relative;">
            <h4 class="no-margin text-weight-medium telemarines">FUTSAL</h4>
            <h6 class="no-margin text-weight-medium">Jueves 11/12/24</h6>
            <h6 class="no-margin text-weight-medium">ORURO VS. COCHABAMBA VARONES</h6>
            <h6 class="no-margin text-weight-medium">20:00 Hrs.</h6>
        </div>
        <div class="full-width q-px-md">
            <q-img
                    src="src/img/futsal.png"
                    style="background-size: contain; overflow: visible;"
            />
        </div>
        <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <RouterLink :to="{ name: 'juego-curso.ubicacion' }" class="column items-center" style="text-decoration: none; color: inherit;">
                <h5 class="q-px-md q-my-xs text-weight-bolder">Palacio de los deportes.</h5>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: 'JuegoCursoPage'
});
</script>
<style></style>