<template>
  <section>
    <h1 class="text-3xl font-bold text-primary">Mes créations</h1>

    <div class="mt-6 grid md:grid-cols-12 md:gap-x-8">
      <!-- FILTRE -->
      <div class="space-y-4 md:col-span-3">
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input v-model="persoCheck" id="persoCheck" value="persoCheck" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="persoCheck" class="block w-full text-gray-700 ml-3">Projets personnels</label>
        </div>
        <div class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input v-model="proCheck" id="proCheck" value="proCheck" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label for="proCheck" class="block w-full text-gray-700 ml-3">Projets Professionnels</label>
        </div>

        <div v-for="(category, index) in categories" class="relative border border-blue-100 rounded-md flex items-start p-2">
          <div class="flex items-center h-5">
            <input v-model="categoryFilter" :id="category.label" :value="category.label" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
          </div>
          <label :for="category.label" class="block w-full text-gray-700 ml-3">{{ category.label }}</label>
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

      <!-- PROJETS -->
      <template v-if="allProjets.length == 0">
        <div class="h-full sm:grid-cols-2 md:col-span-9">
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
        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3 xl:gap-x-10">
          <article v-for="projet in allProjets">
            <div class="group relative">
              <div class="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img :src="'https://admin.louisbensi.fr/uploads/images/' + projet.visuel" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
              </div>
              <div class="mt-4 flex justify-between items-center">
                <h3 class="text-gray-800 font-semibold">
                  {{ projet.name }}
                </h3>
                <a :href="projet.link" target="_blank" class="block bg-primary text-white p-1 rounded-md text-sm">Voir le site</a>
              </div>
              <div>
                <span v-if="projet.perso" class="block bg-secondary h-[2px] w-[35px]"></span>
                <span v-else class="block bg-primary h-[2px] w-[35px]"></span>
              </div>
              <div class="flex flex-wrap justify-start mt-4">
                <span v-for="tag in projet.tags" class="block bg-secondaryTransparent text-primary px-4 rounded-full text-sm mb-2 mr-3">
                  {{ tag.label }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">

import axios from "axios"
import {Projets} from "../models/Projets";
import {Tag} from "../models/Tags";
import {Categories} from "../models/Categories";

export default {
  name: 'Projects',

  data() {
    return {
      tags: [] as Tag[],
      categories: [] as Categories[],
      projets: [] as Projets[],
      allProjets: [] as Projets[],

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
      this.projets = [...this.projets]
      this.allProjets = this.projets
    }

  },

  created() {
    this.getProjets();
    this.getTags();
    this.getCategories();
  },

  methods: {
    getProjets() {
      axios.get("https://admin.louisbensi.fr/api/projets")
          .then((response) => {
            this.projets = response.data['hydra:member'];
          })
    },

    getCategories() {
      axios.get("https://admin.louisbensi.fr/api/categories")
          .then((response) => {
            this.categories = response.data['hydra:member'];
          })
    },

    getTags() {
      axios.get("https://admin.louisbensi.fr/api/tags")
          .then((response) => {
            this.tags = response.data['hydra:member'];
          })
    },

    doFilter() {
      if (this.persoCheck && this.proCheck)
        return this.allProjets = [...this.projets]
      else if (this.persoCheck && !this.proCheck)
        this.filterByPerso()
      else if (!this.persoCheck && this.proCheck)
        this.filterByPro()
      else
        return this.allProjets = [...this.projets]
    },

    filterByCategory() {
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