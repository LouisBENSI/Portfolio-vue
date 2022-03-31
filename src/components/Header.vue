<template>
  <header class="relative text-primary h-full lg:pt-10">
    <nav class="max-w-[1280px] w-full mx-auto p-4 md:flex md:items-center md:justify-between xl:px-0">
      <div class="relative flex items-center justify-between">
        <div class="text-sm font-bold"><router-link to="/">Louis</router-link></div>
        <div class="relative z-50 md:hidden">
          <!--BURGER-->
          <svg xmlns="http://www.w3.org/2000/svg" @click="apparitionHeader()" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
      <ul class="navigationHeader absolute bg-white shadow flex flex-col items-end top-0 z-50 left-[-500px] w-8/12 h-screen text-right text-gray-800 pt-4 pr-4 font-semibold space-y-8 z-[999] md:relative md:bg-transparent md:w-auto md:h-full md:flex-row md:items-start md:shadow-transparent md:space-y-0 md:space-x-12 md:left-0 md:p-0">
        <!--CROSS-->
        <svg xmlns="http://www.w3.org/2000/svg" @click="disparitionHeader()" class="absolute top-4 left-4 h-8 w-8 md:hidden" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
        <li @click="disparitionHeader()"><router-link to="/" class="hover:md:border-b-2 border-primary pb-3">Accueil</router-link></li>
        <li @click="disparitionHeader()"><router-link to="/parcours" class="hover:md:border-b-2 border-primary pb-3">Parcours</router-link></li>
        <li @click="disparitionHeader()"><router-link to="/creations" class="hover:md:border-b-2 border-primary pb-3">Créations</router-link></li>
        <li @click="disparitionHeader()"><router-link to="/competences" class="hover:md:border-b-2 border-primary pb-3">Compétences</router-link></li>
        <li @click="disparitionHeader()"><router-link to="/contact" class="hover:md:border-b-2 border-primary pb-3">Contact</router-link></li>
      </ul>
      <div id="overlay" @click="disparitionHeader()" class="bg-gray-500 absolute z-40 top-0 left-0 h-screen w-screen opacity-70 invisible"></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods : {
    apparitionHeader() {
      document.querySelector(".navigationHeader").classList.toggle("header-mobile");
      document.querySelector("#overlay").classList.remove("invisible");
      console.log("Test")
    },
    disparitionHeader() {
      document.querySelector(".navigationHeader").classList.remove("header-mobile");
      document.querySelector("#overlay").classList.add("invisible");
    }
  }
}
</script>

<style>
.navigationHeader {
  transition: all 0.6s;
}
</style>