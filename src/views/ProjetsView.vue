<template>
    <main>
        <!-- Component Accueil -->
        <section>
            <TopPage img_test="" class="h-[100vh] bg-zinc-500" />
        </section>

        <!-- Bouton différentes section  -->
        <!-- <section>
            <div>
                <nav>
                    <ul
                        class=" mt-10 relative flex flex-shrink-0 items-center justify-center flex-grow-0 gap-14 font-space-grotesk text-[px] font-bold uppercase text-Extended/true-gray/900 ">
                        <li>
                            <RouterLink to="/projetsco">Scolaire</RouterLink>
                        </li>
                        <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                        <li>
                            <RouterLink to="/">Alternance</RouterLink>
                        </li>
                        <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                        <li>
                            <RouterLink to="/">Personnel</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section> -->

        <!-- Toutes les vignettes -->
        <!-- <div class="flex flex-col items-center ">
            <div
                class=" mx-12 my-8 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(380px,1fr))] items-center justify-between gap-7">
                <Vignette image="/public/images/Bavans/Bavans_Couverture.svg" />
                <Vignette image="/public/images/Bavans/Bavans_Couverture.svg" />
                <Vignette image="/public/images/Bavans/Bavans_Couverture.svg" />
                <Vignette image="/public/images/Bavans/Bavans_Couverture.svg" />
                <Vignette image="/public/images/Bavans/Bavans_Couverture.svg" />
                <Vignette image="/public/images/Bavans/Bavans_Couverture.svg" />
            </div>
        </div> -->
        <div class="flex justify-center mb-8">
            <nav>
                <ul
                    class=" mt-10 relative flex flex-shrink-0 items-center justify-center flex-grow-0 gap-14 font-space-grotesk text-[px] font-bold uppercase text-Extended/true-gray/900 ">
                    <li>
                        <button :id="bouton1" :class="{ '': selectedCategory === 'all' }" @click="filterCategory('all')">
                            Tous
                        </button>
                    </li>
                    <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                    <li>
                        <button :id="bouton2" :class="{ '': selectedCategory === 'category1' }"
                            @click="filterCategory('category1')">
                            Scolaire
                        </button>
                    </li>
                    <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                    <li>
                        <button :id="bouton3" :class="{ '': selectedCategory === 'category2' }"
                            @click="filterCategory('category2')">
                            Alternance
                        </button>
                    </li>
                    <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                    <li>
                        <button :id="bouton4" :class="{ '': selectedCategory === 'category3' }"
                            @click="filterCategory('category3')">
                            Personnel
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="flex flex-col items-center ">
            <div
                class=" mx-12 my-8 grid w-11/12 grid-cols-[repeat(auto-fit,minmax(380px,1fr))] items-center justify-between gap-7">
                <Vignette v-for="card in filteredCards" :key="card.id" :lien="card.lien" :image="card.image" />
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
                { id: 1, lien: '', image: '/public/images/Bavans/Bavans_Couverture.svg', category: 'category1' },
                { id: 2, lien: '', image: '/public/images/Bavans/Bavans_Couverture.svg', category: 'category2' },
                { id: 3, lien: '', image: '/public/images/Bavans/Bavans_Couverture.svg', category: 'category1' },
                { id: 4, lien: '', image: '/public/images/Bavans/Bavans_Couverture.svg', category: 'category2' },
                { id: 5, lien: '', image: '/public/images/Bavans/Bavans_Couverture.svg', category: 'category3' },
                { id: 6, lien: '', image: '/public/images/Bavans/Bavans_Couverture.svg', category: 'category1' },
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