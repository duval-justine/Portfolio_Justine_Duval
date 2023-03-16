<template>
    <section>
        <div class="container0 ">
            <img :src="img_test" class="container0 h-screen z-0 w-full object-cover absolute" alt="">
            <!-- Header -->
            <Header class="relative z-10 " id="haute" />
            <!-- Bouton scroll -->
            <div class="3xs:hidden sm:flex flex-col items-center  gap-4">
                <RouterLink
                    class="font-space-grotesk font-bold text-sm absolute bottom-6 text-Extended/true-gray/900 lg:text-lg lg:"
                    to="/">
                    SCROLL
                </RouterLink>
                <div class=" border-t-4 w-6 rotate-90 absolute bottom-0 border-Extended/true-gray/900"></div>
            </div>
        </div>

    </section>

    <!-- Bouton Flêche -->
    <!-- <div>
            <a href="#haute">
                <button @click="scrollTop" v-if="showButton"
                    class="fixed bottom-4 right-4 bg-Extended/red/900 text-Extended/red/50 p-3 rounded-full shadow-2xl buttoned">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </a>
        </div> -->
</template>

<script>
import Header from "../components/HeaderNoir.vue";
export default {
    components: { Header },
    props: {
        img_test: String,
    },
    // data() {
    //     return {
    //         showButton: false,
    //     }
    // },

    // methods: {
    //     handleScroll() {
    //         this.showButton = window.pageYOffset > 200
    //     },
    // },

    // beforeDestroy() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },

    // mounted() {

    //     window.addEventListener('scroll', this.handleScroll);
    //     // Récupérer l'ancre dans l'URL
    //     const anchor = window.location.hash.slice(1);
    //     // Vérifier si l'ancre existe sur la page
    //     const element = document.getElementById(anchor);
    //     if (element) {
    //         // Scroll vers l'ancre
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // },
}
</script>

<style>
/* Bouton Flêche */
/* .buttoned {
    z-index: 500;
    animation-name: slideInFromRight;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    transition: all;
}

@keyframes slideInFromRight {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(100%);
    }
} */
</style>