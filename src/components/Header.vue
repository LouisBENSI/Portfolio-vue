<template>
  <header class="relative text-primary h-full lg:pt-10 dark:text-white">
    <nav class="max-w-[1280px] w-full mx-auto p-4 md:flex md:items-center md:justify-between xl:px-0">
      <div class="relative flex items-center justify-between">
        <div class="text-sm font-bold">
          <router-link to="/" class="hover:opacity-80">Louis</router-link>
        </div>
        <div class="relative z-50 md:hidden">
          <!--BURGER-->
          <svg xmlns="http://www.w3.org/2000/svg" @click="apparitionHeader()" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
          </svg>
        </div>
      </div>
      <ul class="navigationHeader absolute bg-white shadow flex flex-col items-end text-xl top-0 z-50 left-[-500px] w-8/12 h-screen text-right text-gray-800 pt-4 pr-4 font-semibold space-y-8 z-[999] md:relative md:bg-transparent md:text-base md:w-auto md:h-full md:flex-row md:items-start md:shadow-transparent md:space-y-0 md:space-x-12 md:left-0 md:p-0 dark:text-white">
        <!--CROSS-->
        <svg xmlns="http://www.w3.org/2000/svg" @click="disparitionHeader()" class="absolute top-4 left-4 h-8 w-8 md:hidden" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
        <li @click="disparitionHeader()">
          <router-link to="/" class="hover:opacity-80 pb-3">Accueil</router-link>
        </li>
        <li @click="disparitionHeader()">
          <router-link to="/parcours" class="hover:opacity-80 pb-3">Parcours</router-link>
        </li>
        <li @click="disparitionHeader()">
          <router-link to="/creations" class="hover:opacity-80 pb-3">Créations</router-link>
        </li>
        <li @click="disparitionHeader()">
          <router-link to="/competences" class="hover:opacity-80 pb-3">Compétences</router-link>
        </li>
        <li @click="disparitionHeader()">
          <router-link to="/contact" class="hover:md:borderhover:opacity-80 pb-3">Contact</router-link>
        </li>
        <li>
          <template v-if="!night">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" @click="night = !night; nightMode()" class="moon w-6 h-6 ease-in-out duration-300 cursor-pointer hover:scale-[0.85]">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>
            </svg>
          </template>

          <template v-else>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" @click="night = !night; lightMode()" class="sun w-6 h-6 ease-in-out duration-300 cursor-pointer text-white hover:scale-[0.85]">
              <path
                  d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
            </svg>
          </template>
        </li>
      </ul>
      <div id="overlay" @click="disparitionHeader()" class="bg-gray-500 absolute z-40 top-0 left-0 h-screen w-screen opacity-70 invisible"></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      night: false
    }
  },

  methods: {
    apparitionHeader() {
      document.querySelector(".navigationHeader").classList.toggle("header-mobile");
      document.querySelector("#overlay").classList.remove("invisible");
    },
    disparitionHeader() {
      document.querySelector(".navigationHeader").classList.remove("header-mobile");
      document.querySelector("#overlay").classList.add("invisible");
    },

    nightMode() {
      document.querySelector("html").classList.add("dark")
    },

    lightMode() {
      document.querySelector("html").classList.remove("dark")
    }
  }
}
</script>

<style>
.navigationHeader {
  transition: all 0.6s;
}
</style>