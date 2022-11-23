<template>
  <section>
    <h1 class="text-2xl font-bold text-primary dark:text-white">Mes compétences</h1>

    <div class="space-y-8 grid grid-cols-1 mt-4 md:grid-cols-2 md:space-y-0 md:gap-8 md:mt-8 lg:gap-12 dark:text-white">
      <ul v-for="competence in competences">
        <li><h2 class="text-lg font-semibold md:mb-4">{{ competence.title }}</h2></li>
        <li v-for="c in competence.languages" class="mb-4">
          <div class="flex items-center justify-between font-semibold text-sm space-y-2">
            <h3>{{ c.techno }}</h3>
            <span>{{ c.value }}%</span>
          </div>
          <div class="w-full bg-primary h-[8px] dark:bg-white">
            <div class="bg-secondary h-full" :class="c.class"></div>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<style>
::-webkit-progress-bar {
  -webkit-appearance: none;
  @apply bg-primary block h-2 overflow-hidden rounded-lg;
}
</style>

<script>
export default {
  name: 'Competences',

  data() {
    return {
      competences: [
        {
          title: "FRONT-END",
          languages: [
            {
              techno: "HTML",
              value: 95,
              class: "w-[95%]"
            },
            {
              techno: "CSS",
              value: 95,
              class: "w-[95%]"
            },
            {
              techno: "JS",
              value: 80,
              class: "w-[80%]"
            },
            {
              techno: "Jquery",
              value: 80,
              class: "w-[80%]"
            },
            {
              techno: "Tailwind CSS",
              value: 98,
              class: "w-[98%]"
            },
            {
              techno: "Bootstrap",
              value: 90,
              class: "w-[98%]"
            },
            {
              techno: "Vue.js",
              value: 60,
              class: `w-[80%]`
            },

          ],
        },
        {
          title: "BACK-END",
          languages: [
            {
              techno: "PHP",
              value: 50,
              class: "w-[50%]"
            },
            {
              techno: "SQL",
              value: 60,
              class: "w-[60%]"
            },
            {
              techno: "Symfony",
              value: 70,
              class: "w-[70%]"
            },

          ]
        },
        {
          title: "DESIGN",
          languages: [
            {
              techno: "Photoshop",
              value: 75,
              class: "w-[75%]"
            },
            {
              techno: "Figma",
              value: 85,
              class: "w-[85%]"
            },
            {
              techno: "Adobe XD",
              value: 85,
              class: "w-[85%]"
            },
            {
              techno: "UX",
              value: 70,
              class: "w-[70%]"
            },
          ]
        },
      ]

    }
  }
}
</script>