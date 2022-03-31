<template>
  <div class="max-w-7xl mx-auto sm:py-12">
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
          <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div class="sm:col-span-2">
              <label class="block text-sm font-medium text-gray-900">Sujet</label>
              <div class="mt-1">
                <select class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md">
                  <options>Recrutement</options>
                  <options>Projet</options>
                </select>
              </div>
            </div>
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-900">Nom</label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"/>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-900">Prénom</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border-gray-300 rounded-md"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                <span id="message-max" class="text-sm text-gray-500">Max. 500 caractères</span>
              </div>
              <div class="mt-1">
                <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-secondary focus:border-secondary border border-gray-300 rounded-md" aria-describedby="message-max"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="hero_buttons relative overflow-hidden mt-2 w-full mx-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary">
                <span class="z-50">Envoyer le message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>