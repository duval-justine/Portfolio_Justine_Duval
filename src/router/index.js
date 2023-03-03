import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import CitadelleView from '../views/CitadelleView.vue'
import Janvier2023View from '../views/Janvier2023View.vue'
import CharteBavansView from '../views/CharteBavansView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/citadelle', name: 'Citadelle', component: CitadelleView },
    { path: '/janvier2023', name: 'Illustration de Janvier 2023', component: Janvier2023View },
    { path: '/chartebavans', name: 'Charte Graphique de Bavans', component: CharteBavansView },
    { path: '/projets', name: 'Mes Projets', component: ProjetsView },

  ]
})

export default router
