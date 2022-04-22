<template>
  <section>
    <h1 class="text-3xl font-bold text-primary">Mes créations</h1>

    <div class="mt-6 grid md:grid-cols-12 md:gap-x-8">
      <div class="space-y-4 md:col-span-3">
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input id="symfony" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="symfony" class="block w-full text-gray-700 ml-3">Symfony</label>
        </div>
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input id="vuejs" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="vuejs" class="block w-full text-gray-700 ml-3">Vue JS</label>
        </div>
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input id="classique" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="classique" class="block w-full text-gray-700 ml-3">Classique</label>
        </div>
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input id="perso" aria-describedby="comments-description" name="perso" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="perso" class="block w-full text-gray-700 ml-3">Projets perso</label>
        </div>
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input id="pro" aria-describedby="comments-description" name="pro" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="pro" class="block w-full text-gray-700 ml-3">Projets pro</label>
        </div>
        <div class="mt-4 bg-white rounded-md space-y-4 p-4">
          <div class="flex items-center">
            <span class="block bg-secondary h-[5px] w-[35px] rounded-full"></span>
            <p class="ml-3">Projets Personnels</p>
          </div>

          <div class="flex items-center">
            <span class="block bg-primary h-[5px] w-[35px] rounded-full"></span>
            <p class="ml-3">Projets Professionnels</p>
          </div>

        </div>
      </div>
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3 xl:gap-x-10">
        <article v-for="projet in projets">
          <div class="group relative">
            <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
            </div>
            <div class="mt-4 flex justify-between items-center">
              <h3 class="text-gray-800 font-semibold">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ projet.name }}
              </h3>
              <a href="#" class="block bg-primary text-white p-1 rounded-md text-sm">Voir le site</a>
            </div>
            <div>
              <span v-if="projet.perso" class="block bg-secondary h-[2px] w-[35px]"></span>
              <span v-else class="block bg-primary h-[2px] w-[15px]"></span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios"

export default {
  name: 'Creations',

  data() {
    return {
      projets: null,
    }
  },

  mounted() {
    axios
        .get("http://127.0.0.1:8000/api/projets")
        .then((response) => {
          this.projets = response.data['hydra:member'];
          console.log(this.projets);
        })
  }


}
</script>