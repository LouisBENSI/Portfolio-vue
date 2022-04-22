<template>
    <div class="blockForm max-w-7xl mx-auto sm:py-12">
      <div class="error bg-red-200 p-2 rounded-md mb-4 flex items-center hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-900" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd"/>
        </svg>
        <p class="text-red-900 ml-3">Remplissez tous les champs pour compléter le formulaire.</p>
      </div>
      <div class="relative bg-white shadow-xl rounded-lg overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-4 px-6 bg-secondary xl:p-12">
            <h1 class="text-xl font-semibold">Information de contact</h1>
            <div class="mt-4 text-sm lg:text-base">
              <p>Vous souhaitez me recruter ?</p>
              <p class="mb-2">Vous avez un projet professionnel ?</p>
              <p>Choisissez le sujet qui vous convient et remplissez ce formulaire et je vous répondrais dans les plus bref délais !</p>
            </div>
            <div class="hidden lg:block absolute bottom-0 left-0 w-[500px]">
              <img src="../assets/visuels/visu-contact.svg" alt="" class="w-full h-full object-contain">
            </div>
          </div>

          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-xl font-bold text-gray-900">Envoyez-moi un message !</h3>
            <form ref="form" @submit.prevent="validateForm" action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-gray-900">Sujet</label>
                <div class="mt-1">
                  <select name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md">
                    <option>Recrutement</option>
                    <option>Projet</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-900">Nom</label>
                <div class="mt-1">
                  <input type="text" name="name" id="name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"/>
                </div>
              </div>
              <div class="sm:col-span-1">
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"/>
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                </div>
                <div class="mt-1">
                  <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                  <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border border-gray-300 rounded-md"/>
                </div>
              </div>
              <button type="submit" id="submitForm" class="hero_buttons sm:col-span-2 relative overflow-hidden mt-2 w-full mx-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary">
                <span class="z-50">Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  <div class="validation min-h-full pt-16 pb-12 flex flex-col hidden">
    <div class="py-16">
      <div class="text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 w-8 mx-auto text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <h1 class="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Vos informations ont bien été prises en compte !</h1>
        <p class="mt-2 text-base text-gray-500">N'hésitez pas à visiter le reste du site si vous en avez envie ;)</p>
        <div class="mt-6">
          <router-link to="/" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Retourner à la page d'accueil<span aria-hidden="true"> &rarr;</span></router-link>
        </div>
      </div>
    </div>
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true"/>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
        <span class="inline-block border-l border-gray-300" aria-hidden="true"/>
        <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
      </nav>
    </footer>
  </div>

</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'Contact',
  methods: {
    sendEmail() {
      emailjs.sendForm('service_sltnvx5', 'template_gl1cang', this.$refs.form, 'Ye0XWOUugkJvyqfcs')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    },
    validateForm() {
      let blockForm = document.querySelector(".blockForm"),
          validation = document.querySelector(".validation"),
          subject = document.querySelector("#subject").value,
          name = document.querySelector("#name").value,
          email = document.querySelector("#email").value,
          message = document.querySelector("#message").value,
          error = document.querySelector(".error");

      if (subject != "" && name != "" && email != "" && message != "") {
        this.sendEmail();
        error.classList.add("hidden");
        blockForm.classList.add("hidden");
        validation.classList.remove("hidden")
      } else {
        error.classList.remove("hidden");
      }
    }
  }
}
</script>