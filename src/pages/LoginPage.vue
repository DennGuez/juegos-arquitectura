<template>
  <q-layout>
    <q-page-container style="background: #13082a">
      <q-page class="row justify-center items-center">
        <Transition
          name="custom-classes"
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounceOutRight"
        >
          <QOtp
            :num="4"
            outlined
            bg-color="white"
            placeholder="-"
            field-classes="q-ml-xs q-mr-xs"
            input-styles="opacity: 1 !important; width: 50px; height: 60px"
            @complete="(code) => verifyCode(code)" 
            standout
          />
        </Transition>

</q-page>

</q-page-container>

</q-layout>
</template>

<script setup>
import QOtp from "quasar-app-extension-q-otp";
import { useAuthStore } from "src/stores/auth"

const authStore = useAuthStore();

console.log(authStore);

function verifyCode(code) {
  console.log(code)
  if (code === "1234") {
    authStore.$state.auth = true
  }
  return console.log("No valido")
}

</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>
