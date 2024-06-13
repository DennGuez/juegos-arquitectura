<template>
    <q-page style="background-color: #040d40;">
        <q-img
            src="src/img/background.png"
            style="background-size: contain; overflow: visible;"
        >
        <div class="row justify-center text-white" style="position: unset; background: none; margin-top: 130px;">
            <h4 class="no-margin telemarines text-weight-bolder">{{ currentTitle }}</h4>
        </div>
        <RouterView />
        </q-img>
        <div class="footer row full-width justify-between" style="background: none;">
            <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="person" />
            <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="home" @click="goHome" />
            <q-btn rounded class="q-pa-md footer-button" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
        </div>
    </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
    router.push('/');
}
</script>
<style scoped>
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    background-color: #13082A;
    /* Ajusta este color según sea necesario */
}

.footer-button {
    background-color: #13082A;
    /* Ajusta este color según sea necesario */
}
</style>