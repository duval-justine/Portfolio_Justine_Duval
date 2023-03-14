import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import AProposView from '../views/AProposView.vue'
import CitadelleView from '../views/CitadelleView.vue'
import Janvier2023View from '../views/Janvier2023View.vue'
import CharteBavansView from '../views/CharteBavansView.vue'
import CRBXView from '../views/CRBXView.vue'
import SherazadeBNailsView from '../views/SherazadeBNailsView.vue'
import Fevrier2023View from '../views/Fevrier2023View.vue'
import GaleriePhotosView from '../views/GaleriePhotosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/projets', name: 'Mes Projets', component: ProjetsView },
    { path: '/apropos', name: 'À Propos', component: AProposView },
    { path: '/citadelle', name: 'Citadelle', component: CitadelleView },
    { path: '/janvier2023', name: 'Illustration de Janvier 2023', component: Janvier2023View },
    { path: '/chartebavans', name: 'Charte Graphique de Bavans', component: CharteBavansView },
    { path: '/crbx', name: 'Create Box', component: CRBXView },
    { path: '/sherazadebnails', name: 'Affiche pour le HomeSalon Shérazade', component: SherazadeBNailsView },
    { path: '/fevrier2023', name: 'Illustration de Février 2023', component: Fevrier2023View },
    { path: '/galeriephotos', name: 'Galerie Photos', component: GaleriePhotosView },

  ]
})

export default router
