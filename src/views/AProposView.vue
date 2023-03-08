<template>
    <main>
        <div>

            <!-- Accueil -->
            <section>
                <div class="container0 relative h-screen z-0 bg-Extended/red/900">

                    <!-- Header -->
                    <Header class="relative z-10" />
                    <div class="flex flex-row justify-center items-center">
                        <div class="w-2/3">

                            <p class="font-karla text-center font-bold text-Extended/red/50 text-4xl">Je suis Justine Duval
                            </p>
                        </div>
                        <div>
                            <img src="../../public/images/Apropos_Justine.webp" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <!-- Fin de l'accueil -->

            <VagueTop class="w-full h-auto" />

            <!-- Qui suis je ? -->
            <section>
                <div class="container0 relative z-0 bg-Extended/red/50">
                    <!-- Titre -->
                    <div class="mt-16 flex flex-row gap-16 items-center">
                        <div class="flex flex-row gap-4 items-center">
                            <div
                                class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                            </div>
                            <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">01</p>
                        </div>
                        <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 uppercase ">Qui
                            suis-je ?
                        </h2>
                    </div>
                    <!-- Contenu -->
                    <div class="px-[70px] mt-16 flex flex-row gap-24 items-center mb-16">
                        <!-- Textes -->
                        <div
                            class="flex flex-col gap-3 font-karla font-light text-xl text-Extended/true-gray/900 w-[680px] text-justify">
                            <p>Je m’appelle Justine et j’ai 19 ans. Je suis étudiante en bachelor métiers du multimédia et
                                de l’internet à Montbéliard, où j’ai choisi de me spécialiser dans le parcours création. 
                            </p>
                            <p>Je suis passionnée par le monde de la création depuis mon plus jeune âge en commençant à
                                réaliser des dessins et des activités manuelles. Avec le temps, j’ai su développer de
                                nombreuses compétences que ce soit dans la créativité ou encore personnelle. </p>
                            <p>Aujourd’hui je suis principalement passionnée par le design que ce soit du print ou du
                                web-design ainsi que la photographie.
                            </p>
                            <p> Grâce à mes études, j’ai approfondi et acquis des compétences techniques solides dans le
                                domaine de la création numérique notamment en design graphique ainsi que dans la créations
                                de sites web. J’ai également appris à travailler en autonomie en réalisant des projets sur
                                un temps donné mais aussi à travailler en équipe en se répartissant différentes tâches pour
                                mener à bien plusieurs projets.  </p>
                            <p>Pour ma deuxième année, j’ai la chance de pouvoir être en alternance dans l’entreprise Encre
                                Service située à Montbéliard en tant que graphiste où j’ai l’opportunité de réaliser de
                                nombreux projets avec les clients. 
                            </p>
                        </div>
                        <!-- Image -->
                        <div>
                            <img class="w-full h-auto" src="../../public/images/Justine/Justine_Image2.webp"
                                alt="Image de Justine">
                        </div>
                    </div>
                </div>
            </section>
            <!-- Fin qui suis je ? -->

            <VagueBott class="w-full h-auto" />

            <!-- Passion -->
            <div class="-mt-1 container0 relative  z-0 bg-Extended/red/900">
                <!-- Titre -->
                <div class="mt-16 flex flex-row gap-16 items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/red/50">
                        </div>
                        <p class="font-space-grotesk font-bold text-3xl text-Extended/red/200">02</p>
                    </div>
                    <h2 class="font-karla font-bold text-2xl text-Extended/red/50 uppercase ">Mes passions
                    </h2>
                </div>
                <!-- Contenu -->
                <div class="flex flex-row gap-44 mt-16 px-32 mb-16">
                    <div class="flex flex-col font-karla text-Extended/red/50 gap-5 justify-center items-center">
                        <Graphisme />
                        <h4 class="font-bold text-base text-center ">Graphisme / Web-Design</h4>
                        <p class=" font-light text-sm  text-justify">Lorem ipsum dolor sit
                            amet
                            consectetur. Ac porttitor fringilla quis tristique mauris proin. Arcu nibh varius quis ut
                            pellentesque Lorem ipsum dolor sit amet consectetur. Ac porttitor fringilla quis tristique
                            mauris proin. Arcu nibh varius quis ut pellentesque </p>
                        <section class="justify-center flex  scroll-snap2">
                            <nav class="navp 3xs:hidden sm:flex">
                                <ul class="ulp">
                                    <RouterLink class="" to="/projets">
                                        <li class="lip font-karla font-medium">
                                            Voir mes créations
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </RouterLink>
                                </ul>
                            </nav>
                            <div class="sm:hidden bg-Extended/red/50 uppercase rounded-2xl p-3">
                                <RouterLink
                                    class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/900"
                                    to="/projets">
                                    Voir mes créations
                                </RouterLink>
                            </div>
                        </section>
                    </div>

                    <div class="flex flex-col font-karla text-Extended/red/50 gap-5 justify-center items-center">
                        <Photographie />
                        <h4 class="font-bold text-base text-center ">Photographie</h4>
                        <p class=" font-light text-sm  text-justify">Lorem ipsum dolor sit
                            amet
                            consectetur. Ac porttitor fringilla quis tristique mauris proin. Arcu nibh varius quis ut
                            pellentesque Lorem ipsum dolor sit amet consectetur. Ac porttitor fringilla quis tristique
                            mauris proin. Arcu nibh varius quis ut pellentesque </p>
                        <section class="justify-center flex scroll-snap2">
                            <nav class="navp 3xs:hidden sm:flex">
                                <ul class="ulp">
                                    <RouterLink class="" to="/galeriephotos">
                                        <li class="lip font-karla font-medium">
                                            Voir mes photos
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </RouterLink>
                                </ul>
                            </nav>
                            <div class="sm:hidden bg-Extended/red/50 uppercase rounded-2xl p-3">
                                <RouterLink
                                    class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/900"
                                    to="/galeriephotos">
                                    Voir mes photos
                                </RouterLink>
                            </div>
                        </section>
                    </div>
                    <div class="flex flex-col font-karla text-Extended/red/50 gap-5">
                        <h4 class="font-bold text-base text-center ">Design d'intérieur</h4>
                        <p class=" font-light text-sm  text-justify">Lorem ipsum dolor sit
                            amet
                            consectetur. Ac porttitor fringilla quis tristique mauris proin. Arcu nibh varius quis ut
                            pellentesque Lorem ipsum dolor sit amet consectetur. Ac porttitor fringilla quis tristique
                            mauris proin. Arcu nibh varius quis ut pellentesque </p>
                        <section class="justify-center flex py-11 scroll-snap2">
                            <nav class="navp 3xs:hidden sm:flex">
                                <ul class="ulp">
                                    <RouterLink class="" to="/">
                                        <li class="lip font-karla font-medium">
                                            Page Facebook
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </RouterLink>
                                </ul>
                            </nav>
                            <div class="sm:hidden bg-Extended/red/50  rounded-2xl p-3">
                                <RouterLink
                                    class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/900"
                                    to="/">
                                    Page Facebook
                                </RouterLink>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <!-- Fin Passion -->

            <VagueTop class="w-full h-auto" />

            <!-- Logiciels -->
            <div class="container0 relative  z-0 bg-Extended/red/50">
                <!-- Titre -->
                <div class="mt-16 flex flex-row gap-16 items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                        </div>
                        <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">03</p>
                    </div>
                    <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 uppercase ">Mes Logiciels
                    </h2>
                </div>
                <!-- Contenu -->
                <div class="flex flex-row gap-14 justify-center items-center my-36 ">
                    <img src="../../public/logos/figma.webp" alt="">
                    <img src="../../public/logos/illustrator.webp" alt="">
                    <img src="../../public/logos/photoshop.webp" alt="">
                    <img src="../../public/logos/indesign.webp" alt="">
                    <img src="../../public/logos/premierepro.webp" alt="">
                    <img src="../../public/logos/aftereffect.webp" alt="">
                </div>
            </div>
            <!-- Fin Logiciels -->

            <VagueBott class="w-full h-auto" />

            <!-- CV -->
            <div class="-mt-1 container0 relative h-screen z-0 bg-Extended/red/900">
                <!-- Titre -->
                <div class="mt-16 flex flex-row gap-16 items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/red/50">
                        </div>
                        <p class="font-space-grotesk font-bold text-3xl text-Extended/red/200">04</p>
                    </div>
                    <h2 class="font-karla font-bold text-2xl text-Extended/red/50 uppercase ">Mon CV
                    </h2>
                </div>
                <!-- Bouton CV -->
                <section class="justify-center flex py-11 scroll-snap2">
                    <nav class="navvv 3xs:hidden sm:flex">
                        <ul class="ulll">
                            <RouterLink class="" to="/">
                                <li class="liii font-space-grotesk">
                                    Télécharger mon CV
                                    <span></span><span></span><span></span><span></span>
                                </li>
                            </RouterLink>
                        </ul>
                    </nav>
                    <div class="sm:hidden bg-Extended/red/50 uppercase rounded-2xl p-3">
                        <RouterLink
                            class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50"
                            to="/projets">
                            Télécharger mon CV
                        </RouterLink>
                    </div>
                </section>
                <!-- Fin du Bouton CV -->
            </div>
            <!-- Fin CV -->

            <VagueTop class=" w-full h-auto" />

            <!-- App -->
            <div class="container0 relative h-screen z-0 bg-Extended/red/50">
                <div>

                </div>
            </div>
            <!-- Fin App -->

            <!-- Footer -->
            <Footerc />
        </div>

    </main>
</template>
  
<script>
import Header from "../components/Header.vue";
import Graphisme from "../components/icons/GraphismeIcon.vue";
import Photographie from "../components/icons/PhotographieIcon.vue";
import VagueTop from "../components/VagueTop.vue";
import VagueBott from "../components/VagueBott.vue";
import Footerc from "../components/Footer.vue";
export default {
    components: { Header, VagueTop, VagueBott, Footerc, Graphisme, Photographie }
}
</script>
  
<style>
:root {
    --color: #111;
    --primary: #F87171;
}

/* Container Top Page */
.container0 {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
}

@media (min-width: 640px) {
    .container0 {
        max-width: 40000px;
    }
}

/* Bouton CV*/
/* Descktop */
@media (min-width: 900px) {
    .navvv .ulll {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .navvv .ulll .liii {
        --c: #FAFAFA;
        color: var(--c);
        font-size: 18px;
        border: 0.3em solid var(--c);
        border-radius: 1.2em;
        width: 15em;
        height: 3em;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.1em;
        text-align: center;
        line-height: 2.7em;
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: 0.5s;
        margin: 1em;
    }

    .navvv .ulll .liii span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
    }

    .navvv .ulll .liii:hover {
        color: #F87171;
    }

    .navvv .ulll .liii:hover span {
        transform: translateY(0) scale(2);
    }

    .navvv .ulll .liii span:nth-child(1) {
        --n: 1;
    }

    .navvv .ulll .liii span:nth-child(2) {
        --n: 2;
    }

    .navvv .ulll .liii span:nth-child(3) {
        --n: 3;
    }

    .navvv .ulll .liii span:nth-child(4) {
        --n: 4;
    }
}

/* Bouton Passion*/
/* Descktop */
@media (min-width: 900px) {
    .navp .ulp {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .navp .ulp .lip {
        --c: #FAFAFA;
        color: var(--c);
        font-size: 14px;
        border: 0.3em solid var(--c);
        border-radius: 1.2em;
        width: 14em;
        height: 3em;
        letter-spacing: 0.1em;
        text-align: center;
        line-height: 2.7em;
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: 0.5s;
        margin: 1em;
    }

    .navp .ulp .lip span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
    }

    .navp .ulp .lip:hover {
        color: #F87171;
    }

    .navp .ulp .lip:hover span {
        transform: translateY(0) scale(2);
    }

    .navp .ulp .lip span:nth-child(1) {
        --n: 1;
    }

    .navp .ulp .lip span:nth-child(2) {
        --n: 2;
    }

    .navp .ulp .lip span:nth-child(3) {
        --n: 3;
    }

    .navp .ulp .lip span:nth-child(4) {
        --n: 4;
    }
}
</style>