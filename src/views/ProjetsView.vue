<template>
    <main>
        <!-- Component Accueil -->
        <section>
            <TopPage img_test="" class="h-[100vh] bg-zinc-500" />
        </section>

        <!-- Bouton différentes section  -->
        <div class="flex justify-center mb-8">
            <nav>
                <ul
                    class=" mt-10 relative flex flex-shrink-0 items-center justify-center flex-grow-0 3xs:gap-2 2xs:gap-4 xs:gap-8 sm:gap-14 ">
                    <li>
                        <button
                            class="font-space-grotesk font-semibold 3xs:text-xs 2xs:text-sm sm:text-base text-Extended/true-gray/900 uppercase"
                            :id="bouton1" :class="{ '': selectedCategory === 'all' }" @click="filterCategory('all')">
                            Tous
                        </button>
                    </li>
                    <div
                        class=" 3xs:border-t-2 2x:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[23px] border-Extended/true-gray/900">
                    </div>
                    <li>
                        <button
                            class="font-space-grotesk font-semibold 3xs:text-xs 2xs:text-sm sm:text-base text-Extended/true-gray/900 uppercase"
                            :id="bouton2" :class="{ '': selectedCategory === 'sco' }" @click="filterCategory('sco')">
                            Scolaire
                        </button>
                    </li>
                    <div
                        class=" 3xs:border-t-2 2x:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[23px] border-Extended/true-gray/900">
                    </div>
                    <li>
                        <button
                            class="font-space-grotesk font-semibold 3xs:text-xs 2xs:text-sm sm:text-base text-Extended/true-gray/900 uppercase"
                            :id="bouton3" :class="{ '': selectedCategory === 'alt' }" @click="filterCategory('alt')">
                            Alternance
                        </button>
                    </li>
                    <div
                        class=" 3xs:border-t-2 2x:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[23px] border-Extended/true-gray/900">
                    </div>
                    <li>
                        <button
                            class="font-space-grotesk font-semibold 3xs:text-xs 2xs:text-sm sm:text-base text-Extended/true-gray/900 uppercase"
                            :id="bouton4" :class="{ '': selectedCategory === 'perso' }" @click="filterCategory('perso')">
                            Personnel
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Toutes les vignettes -->
        <div class="flex flex-col items-center ">
            <!-- <div
                class=" mx-12 my-8 grid 3xs:w-2/4 sm:w-11/12 grid-cols-[repeat(auto-fit,minmax(380px,1fr))] items-center justify-between gap-7">
                <Vignette v-for="card in filteredCards" :key="card.id" :lien="card.lien" :image="card.image"
                    :titre="card.titre" :description="card.description" />
            </div> -->
            <div class="mx-auto my-8 grid 3xs:grid-cols-1 xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3  gap-7">
                <Vignette v-for="card in filteredCards" :key="card.id" :lien="card.lien" :image="card.image"
                    :titre="card.titre" :description="card.description" :date="card.date" />
            </div>
        </div>

        <!-- Footer -->
        <Footerc />
    </main>
</template>

<script>
import TopPage from "../components/TopPage.vue";
import Vignette from "../components/Vignette.vue";
import Footerc from "../components/Footer.vue";
export default {
    components: { TopPage, Vignette, Footerc },

    data() {
        return {
            selectedCategory: 'all',
            cards: [
                { id: 12, lien: '/sherazadebnails', image: 'images/Sherazade/Sherazade_Vignette.webp', category: 'perso', titre: 'Affiche tarifaire', description: 'Création d\'une affiche tarifaire pour Shérazade HomeSalon', date: 'Mars 2023' },
                { id: 11, lien: '', image: 'images/Fevrier2023/Fevrier2023_Vignette.webp', category: 'perso', titre: 'Illustration sur le thème de Février', description: 'Séries d\'illustration sur le thème du mois de Février avec la création d\'une carte postale', date: 'Février 2023' },
                { id: 10, lien: '', image: 'images/CRBX/CRBX_Vignette.webp', category: 'sco', titre: 'Create Box', description: 'Création d\'un générateur de NFT\'', date: 'Janvier 2023' },
                { id: 9, lien: '', image: 'images/EncreService/EncreService_CDV_Vignette.webp', category: 'alt', titre: 'Cartes de visite Encre Service', description: 'Création de carte de visite pour l\'entreprise Encre Service à Montbéliard', date: 'Janvier 2023' },
                { id: 6, lien: '', image: 'images/Janvier2023/Janvier2023_Vignette.webp', category: 'perso', titre: 'Illustration sur le thème de Janvier', description: 'Séries d\'illustration sur le thème du mois de Janvier avec la création d\'une carte postale', date: 'Janvier 2023' },
                { id: 8, lien: '/', image: 'images/Bavans/Bavans_Vignette.webp', category: 'sco', titre: 'Charte Graphique de Bavans', description: 'Refonte de la charte graphique de la commune de Bavans', date: 'Décembre 2023' },
                { id: 7, lien: '/', image: 'images/ExpoUni/ExpoUni_Vignette.webp', category: 'sco', titre: 'Carte Postale', description: 'Création d\'une carte postale pour l\'exposition universelle 2024', date: 'Décembre 2023' },
                { id: 5, lien: '', image: 'images/BoulangerieCoinot/BoulangerieCoinot_Vignette.webp', category: 'alt', titre: 'Carte des fêtes', description: 'Réalisation de la carte des fêtes 2022 pour la Boulangerie du Coinot', date: 'Novembre 2022' },
                { id: 4, lien: '', image: 'images/Togethearth/Togethearth_Vignette.webp', category: 'sco', titre: 'Application Web Toget\'Heart', description: 'Création de l\'application Web du site Toget\'Hearth centrée sur l\'écologie et l\'environnement. ', date: 'Juin 2022' },
                { id: 3, lien: '', image: 'images/Acapulco/Acapulco_Vignette.webp', category: 'sco', titre: 'Site Internet Acapul\'co', description: 'Création du site internet pour un Festival de Musique du genre Électronique nommé “Acapul\'co” organisé sur une plage.', date: 'Mai 2022' },
                { id: 2, lien: '', image: 'images/CitadelleBesancon/CitadelleBesancon_Vignette.webp', category: 'sco', titre: 'Illustration de la Citadelle de Besancon', description: 'Réalisation d\'une illustration de la Citadelle de Besançon de nuit', date: 'Mars 2022' },
                { id: 1, lien: '', image: 'images/Raphael/Raphael_Flyers_Vignette.webp', category: 'perso', titre: 'Flyers pour Tous Ensemble Pour Raphaël', description: 'Création de flyers pour l\'association Tous Ensemble Pour Raphaël', date: 'Mai 2022' },
            ],
        };
    },
    computed: {
        filteredCards() {
            if (this.selectedCategory === 'all') {
                return this.cards;
            }
            return this.cards.filter((card) => card.category === this.selectedCategory);
        },

    },
    methods: {
        filterCategory(category) {
            this.selectedCategory = category;
        },

    },
    mounted() {
        const boutons = document.querySelectorAll('nav ul li button');

        boutons.forEach(bouton => {
            bouton.addEventListener('click', () => {
                // Supprimez toutes les classes "active" des autres boutons
                boutons.forEach(b => b.classList.remove('active'));
                // Ajoutez la classe "active" au bouton actuel
                bouton.classList.add('active');
            });
        });
    }


}
</script>

<style>
nav ul li {
    position: relative;
}

nav ul li button::after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #F87171;
    transition: width 0.3s;
}

nav ul li button:hover::after {
    width: 50%;
}

.click {
    content: "";
    height: 3px;
    position: absolute;
    left: 50%;
    width: 50%;
    background-color: #F87171;
}

nav ul li button.active::after {
    width: 50%;
}
</style>