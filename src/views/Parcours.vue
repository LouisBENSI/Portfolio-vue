<template>
  <section>
    <h1 class="text-3xl font-bold text-primary">Mon parcours</h1>
    <div class="mt-8 grid grid-cols-1 space-y-8 lg:grid-cols-2 lg:space-y-0 lg:gap-8">
      <div v-for="p in parcours">
        <p class="text-xl font-bold text-primary mb-2">{{ p.title }}</p>
        <article v-for="l in p.items" class="bg-primary border-l-8 border-secondary py-6 px-2 text-gray-300 space-y-4 border-b mb-2 lg:pl-4 last:border-b-0">
          <div class="space-y-2">
            <h3 class="text-primary text-white font-semibold">{{ l.title }}</h3>
            <span class="text-sm">{{ l.company }} - {{ l.date_start }} / {{ l.date_fin }}</span>
          </div>
          <p class="text-white text-sm lg:text-base">{{ l.description }}</p>
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
              description: "Cette signature en CDI est une poursuite des projets menés durant mon alternance, + de responsabilité et une montée en compétence dans le front-end."
            },
            {
              title: "Alternance dévelopement front-end",
              company: "Bemove",
              date_start: "Septembre 2020",
              date_fin: "Septembre 2021",
              description: "Le stage s'étant bien passé, Bemove a décidé de me prendre en alternance, j'ai pu monté en compétence et en responsabilité malgré le contexte sanitaire."
            },
            {
              title: "Stage Intégration HTML/CSS",
              company: "Bemove",
              date_start: "Juin 2020",
              date_fin: "Septembre 2020",
              description: "Ce deuxième stage dans une PME m'a permis d'intégrer une équipe et un environnement complètement nouveau, j'ai pu faire mes premières armes sur GIT, symfony et Tailwind CSS."
            },
            {
              title: "Stage développement FullStack",
              company: "green_e",
              date_start: "Avril 2019",
              date_fin: "Juillet 2019",
              description: "Mon tout premier et ma première expérience professionnelle ! J'ai pu mené (tout seul) un projet web de A à Z du maquettage au développement web sous PHP, HTML, CSS et SQL."
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
              description: "Durant ma carrière dans le développement web j'ai fait évoluer ce portfolio, d'abord en PHP classique puis Symfony puis en VUEJS"
            },
          ]
        },
        {
          title: "Formations",
          items: [
            {
              title: "Formation Chef de projet Digital",
              company: "Digital Campus",
              date_start: "Septembre 2018",
              date_fin: "Juillet 2021",
              description: "Durant ces trois années de Bachelor j'ai appris tous les rouages quant à la conception et le création d'un site web."
            },
            {
              title: "Apprentissage autodidacte",
              company: "Udemy",
              date_start: "2021",
              date_fin: "?",
              description: "Depuis 2021, je consacre mon temps à l'apprentissage de nouvelles technologies liées au front-end et un peu au Back-end pour toujours rester dans les tendances."
            },

          ]
        }
      ],
    }
  }
}
</script>