<template>
  <Header/>
  <main class="max-w-[1280px] w-full h-screen mx-auto px-4 pt-4 lg:pt-8 xl:px-0">
    <router-view/>
  </main>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* FONT */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

</style>
