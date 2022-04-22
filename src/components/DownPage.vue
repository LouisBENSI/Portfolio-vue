<template>
  <Footer>
    <nav class="max-w-[1280px] mx-auto mt-12 py-4">
      <ul class="flex flex-col items-center justify-center md:flex-row md:space-x-4">
        <li><p>Tout droits réservés - {{ getDate }}</p></li>
        <li>
          <router-link to="/mentions">Mentions légales</router-link>
        </li>
        <li><a href="https://www.linkedin.com/in/louis-bensi-4674a1173/" target="_blank" class="block w-8 h-8"><img src="../assets/logo/linkedin.png" class="w-full h-full hover:scale-110 ease-in duration-100"></a></li>
      </ul>
    </nav>
  </Footer>
</template>

<script>
export default {
  name: 'DownPage',

  data() {
    return {
      date: this.year,
    }
  },

  computed: {
    getDate() {
      let date = new Date(),
          year = date.getFullYear();
      return year;
    }
  }

}
</script>