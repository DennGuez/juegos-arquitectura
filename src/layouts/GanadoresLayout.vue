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
        <!-- <div class="row justify-end q-px-sm">
            <q-btn rounded class="q-pa-md" color="pink-4" icon="arrow_back_ios" @click="$router.go(-1)" />
        </div> -->
        </q-img>
    </q-page>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
defineOptions({
    name: 'GanadoresLayout'
});

const route = useRoute();
const currentTitle = ref('')

const changeTittle = () => {
    currentTitle.value = route.name
}

watch(
    () => route.name,
    () => changeTittle(),
    { immediate: true }
)

</script>
<style></style>