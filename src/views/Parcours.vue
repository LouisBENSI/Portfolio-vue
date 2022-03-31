<template>
  <section>
    <h1 class="text-3xl font-bold text-primary">Mon parcours</h1>
    <div class="mt-8 grid grid-cols-1 space-y-8 lg:grid-cols-2 lg:space-y-0 lg:gap-8">
      <div v-for="p in parcours">
        <p class="text-xl font-bold text-primary mb-2">{{ p.title }}</p>
        <article v-for="l in p.items" class="bg-primary border-l-8 border-secondary py-4 px-2 text-gray-300 space-y-4 border-b lg:pl-4 last:border-b-0">
          <div class="space-y-2">
            <h3 class="text-primary text-white font-semibold">{{ l.title }}</h3>
            <span class="text-sm">{{ l.company }} - {{ l.date_start }} / {{ l.date_fin }}</span>
          </div>
          <p class="text-gray-100 text-sm lg:text-base">{{ l.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Parcours',

  data() {
    return {
      parcours: [
        {
          title: "Expériences professionnelles",
          items: [
            {
              title: "CDI dévelopement front-end",
              company: "Bemove",
              date_start: "Septembre 2021",
              date_fin: "?",
              description: "Poursuite des projets, + d'indépendance et de confiance en mon travail, nouvelles technos comme NuxtJS, vue"
            },
            {
              title: "Alternance dévelopement front-end",
              company: "Bemove",
              date_start: "Septembre 2020",
              date_fin: "Septembre 2021",
              description: "Alternance où j'ai pu poursuivre les projets de l'entreprise avec de plus grande responsabilité"
            },
            {
              title: "Stage Intégration HTML/CSS",
              company: "Bemove",
              date_start: "Juin 2020",
              date_fin: "Septembre 2020",
              description: "Mon deuxième stage où j'ai pu expérimenté de nouvelles techno comme TailwindCSS, JQUERY, GIT et symfony"
            },
            {
              title: "Stage développement FullStack",
              company: "green_e",
              date_start: "Avril 2019",
              date_fin: "Juillet 2019",
              description: "Mon premier stage où j'ai pu crée pour la fois un site Internet utilisant du HTML, SCSS, JS et du PHP"
            },
          ]
        },
        {
          title: "Expériences personnelles",
          items: [
            {
              title: "Réalisation du site Naches Automobile",
              company: "Naches Automobile",
              date_start: "Mars 2021",
              date_fin: "Octobre 2021",
              description: "Réalisation d'un site vitrine de concession de voitures de collection sous Symfony 5, Easy Admin 3 et Tailwind css"
            },
            {
              title: "Refonte graphique du site green_e",
              company: "green_e",
              date_start: "Septembre 2019",
              date_fin: "Décembre 2019",
              description: "Suite à mon stage chez green_e, j'ai proposé une refonte graphique qui soit graphiquement différente de ce qui existait déjà"
            },
            {
              title: "Réalisation de mon site Portfolio",
              company: "Moi-même",
              date_start: "Septembre 2019",
              date_fin: "Aujourd'hui",
              description: "Durant ma carrière dans le développement web j'ai fait évoluer ce portfolio, d'abord en PHP classique puis symfony puis en VUEJS"
            },
          ]
        },
        {
          title: "Formations",
          items: [
            {
              title: "Apprentissage autodidacte",
              company: "Digital Campus",
              date_start: "Septembre 2018",
              date_fin: "Juillet 2021",
              description: "Depuis 2020, je consacre mon temps à l'apprentissage de nouvelles technologies liées au front-end"
            },
            {
              title: "Formation Chef de projet Digital",
              company: "Udemy",
              date_start: "2021",
              date_fin: "?",
              description: "Durant ces trois années de Bachelor j'ai appris tous les rouages quant à la conception et le création d'un site web."
            },

          ]
        }
      ],
    }
  }
}
</script>