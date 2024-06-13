<template>
    <div class="q-ma-md text-white column items-center" style="position: unset; background: none;">
        <h5 class="q-px-md q-my-xs text-weight-bolder telemarines">RESTAURANT NAYJAMA</h5>
    </div>
    <div class="full-width column items-center" style="position: unset; background: none;"> 
        <div class="full-width q-px-md">
            <q-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iVfSFCuSpcb7D1sPGlAH2RHmyCqEHmijEQ&s"
                    style="background-size: contain; overflow: visible;"
            />
        </div>
        <div class="q-pa-md">
                Nayjama es un restaurante con mucha tradición en la ciudad, nació como un pequeño lugar de comida típica y con los años se ha convertido en un bonito y acogedor
        </div>
        <div class="custom-bordered q-ma-md text-white column items-center" style="position: unset;">
            <div class="full-width q-px-md">
                <RouterLink :to="{ name: 'nayjamaubi' }" class="column items-center" style="text-decoration: none; color: inherit;">
                    <h5 class="q-px-md q-my-xs text-weight-bolder">Ubicacion</h5>
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

</script>

<style>
</style>