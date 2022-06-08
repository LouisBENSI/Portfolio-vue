<template>
  <section>
    <h1 class="text-3xl font-bold text-primary">Mes créations</h1>

    <div class="mt-6 grid md:grid-cols-12 md:gap-x-8">
      <!-- FILTRE -->
      <div class="space-y-4 md:col-span-3">

        <div v-for="category in categories" class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input v-model="categoryFilter" :id="category.label" :value="category.label" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"/>
          </div>
          <label :for="category.label" class="block w-full text-gray-700 ml-3">{{ category.label }}</label>
        </div>


        <div class="flex items-center justify-evenly mt-4 bg-white rounded-md p-4 sm:block sm:space-y-4">
          <div class="flex items-center">
            <span class="block bg-secondary h-[5px] w-[35px] rounded-full"></span>
            <p class="ml-3 text-sm">Projets Perso</p>
          </div>

          <div class="flex items-center">
            <span class="block bg-primary h-[5px] w-[35px] rounded-full"></span>
            <p class="ml-3 text-sm">Projets Pro</p>
          </div>

        </div>
      </div>

      <!--  PROJETS AFFICHAGE  -->

      <div class="grid grid-cols-1 gap-y-10 gap-x-6 mt-4 sm:grid-cols-2 md:mt-0 md:col-span-9 lg:grid-cols-3 xl:gap-x-8">
        <template v-if="loading">
          <div class="w-full h-full col-span-12 flex items-center justify-center">
            <img src="/src/assets/loader.gif" alt="">
          </div>
        </template>
        <template v-else>
          <!-- PROJETS -->
          <template v-if="!allProjets">
            <div class="h-full mt-4 sm:grid-cols-2 md:col-span-9">
              <div class="h-full flex items-center justify-center">
                <div class="flex items-center bg-secondary text-primary p-6 rounded-lg font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                  <p>Aucun projet ! Raffraichissez la page ou changer de paramètre.</p>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <article v-for="projet in allProjets">
              <a :href="projet.link" target="_blank" class="group relative shadow-lg p-4 rounded-lg md:p-0 md:shadow-transparent md:rounded-none hover:opacity-80 transition ease-in duration-200">
                <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
                  <img :src="'https://admin.louisbensi.fr/uploads/images/' + projet.visuel" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                </div>
                <div class="mt-4">
                  <h3 class="text-gray-800 font-semibold">
                    {{ projet.name }}
                  </h3>
                </div>
                <div>
                  <span v-if="projet.perso" class="block bg-secondary h-[4px] w-[35px] rounded-lg"></span>
                  <span v-else class="block bg-primary h-[4px] w-[35px] rounded-lg"></span>
                </div>
                <div class="flex flex-wrap justify-start mt-4">
                <span v-for="tag in projet.tags" class="block bg-secondaryTransparent text-primary px-2 rounded-full text-sm mb-2 mr-3">
                  {{ tag.label }}
                </span>
                </div>
              </a>
            </article>
          </template>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

import axios from "axios"
import {Projets} from "../models/Projets.ts";
import {Tag} from "../models/Tag.ts";
import {Categories} from "../models/Categories.ts";

export default {
  name: 'Projects',

  data() {
    return {
      tags: [] as Tag[],
      categories: [] as Categories[],
      projets: [] as Projets[],
      allProjets: [],

      loading: true,

      persoCheck: false,
      proCheck: false,
      categoryFilter: []
    }
  },

  watch: {
    persoCheck() {
      this.doFilter()
    },
    proCheck() {
      this.doFilter()
    },

    categoryFilter() {
      this.allProjets = this.projets
      if (!this.categoryFilter.length) {
        this.allProjets = this.projets
      } else {
        this.filterByCategory()
      }
    },

    projets() {
      this.allProjets = this.projets
    }

  },

  created() {
    this.getTags();
    this.getCategories();
    this.getProjets();
  },

  methods: {
    async getProjets() {
      axios.get("https://admin.louisbensi.fr/api/projets")
          .then((response) => {
            this.projets = response.data['hydra:member'];
            setTimeout(() => this.loading = false, 800)
          })
    },

    getCategories() {
      axios.get("https://admin.louisbensi.fr/api/categories")
          .then((response) => {
            this.categories = response.data['hydra:member'];
          })
    },

    async getTags() {
      axios.get("https://admin.louisbensi.fr/api/tags")
          .then((response) => {
            this.tags = response.data['hydra:member'];
          })
    },

    doFilter() {
      this.loading = true

      if (this.persoCheck && this.proCheck) {
        return this.allProjets = [...this.projets]
      } else if (this.persoCheck && !this.proCheck) {
        this.filterByPerso()
      } else if (!this.persoCheck && this.proCheck) {
        this.filterByPro()
      } else {
        return this.allProjets = [...this.projets]
      }

      setTimeout(() => this.loading = false, 800)
    },

    filterByCategory() {
      this.loading = true
      setTimeout(() => this.loading = false, 800)
      return this.allProjets = this.allProjets.filter(projet => this.categoryFilter.includes(projet.categories.label))
    },

    filterByPerso() {
      return this.allProjets = [...this.projets].filter(projet => projet.perso == true)
    },

    filterByPro() {
      return this.allProjets = [...this.projets].filter(projet => projet.perso == false)
    },
  }
}
</script>