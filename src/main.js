import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import '/src/assets/css/style.css'
import App from './App.vue'
import Home from "./views/Home.vue"
import Contact from "./views/Contact.vue"
import Creations from "./views/Creations.vue"
import Competences from "./views/Competences.vue"
import Parcours from "./views/Parcours.vue"

const routes = [
    { path : '/', name : 'Home', component : Home },
    { path : '/creations', name : 'Creations', component : Creations },
    { path : '/competences', name : 'Competences', component : Competences },
    { path : '/contact', name : 'Contact', component : Contact },
    { path : '/parcours', name : 'Parcours', component : Parcours },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App)
    .use(router)
    .mount('#app')
