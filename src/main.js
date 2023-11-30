// Composants vue
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

// CSS
import '/src/assets/css/style.css'

// Pages
import App from './App.vue'
import Home from "./views/home.vue"
import Contact from "./views/contact.vue"
import Creations from "./views/creations.vue"
import Competences from "./views/competences.vue"
import Parcours from "./views/parcours.vue"
import MentionsLegales from "./views/mentions.vue"

// Email
import {store} from "@emailjs/browser/es/store/store";

// Routes
const routes = [
    { path : '/', name : 'Home', component : Home },
    { path : '/creations', name : 'Creations', component : Creations },
    { path : '/competences', name : 'Competences', component : Competences },
    { path : '/contact', name : 'Contact', component : Contact },
    { path : '/parcours', name : 'Parcours', component : Parcours },
    { path : '/mentions', name : 'Mentions', component : MentionsLegales },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
