<template>
    <main>
        <div>

            <!-- Accueil -->
            <section>
                <div class="container0 relative h-screen z-0 bg-Extended/red/900">

                    <!-- Header -->
                    <Header class="relative z-10" />
                    <div class="flex 3xs:flex-col xs:flex-row justify-center items-center">
                        <div class="xs:w-1/2 3xs:mt-28 3xs:mb-10 xs:mb-0 xs:mt-0">

                            <p
                                class="font-karla text-center duration-100 hover:scale-110 ease-in-out font-normal hover:font-bold text-Extended/red/50 3xs:text-4xl xs:text-2xl sm:text-4xl md:text-5xl">
                                Justine Duval
                            </p>
                        </div>
                        <div>
                            <img src="../../public/images/Apropos_Justine.webp" class="3xs:w-96 sm:w-full" alt="">
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
                    <div class="mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-16 items-center">
                        <div class="flex flex-row gap-4 items-center">
                            <div
                                class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                            </div>
                            <p
                                class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/900">
                                01</p>
                        </div>
                        <h2
                            class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 uppercase">
                            Qui
                            suis-je ?
                        </h2>
                    </div>
                    <!-- Contenu -->
                    <div class="sm:px-[70px] mt-16 flex 3xs:flex-col sm:flex-row gap-24 items-center mb-16">
                        <!-- Textes -->
                        <div
                            class="flex flex-col gap-3 3xs:mx-[50px] 2xs:mx-[70px] xs:mx-[70px] sm:mr-0 font-karla font-light 3xs:text-base xs:text-lg md:text-xl text-Extended/true-gray/900  sm:w-[680px] text-justify">
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
                            <img class="3xs:w-80 2xs:w-96   xs:w-full h-auto object-cover shadow-lg "
                                src="../../public/images/Justine/Justine_Image2.webp" alt="Image de Justine">
                        </div>
                    </div>
                </div>
            </section>
            <!-- Fin qui suis je ? -->

            <VagueBott class="w-full h-auto" />

            <!-- Passion -->
            <div class="-mt-1 container0 relative  z-0 bg-Extended/red/900">
                <!-- Titre -->
                <div class="mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-16 items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/red/50">
                        </div>
                        <p class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/200">
                            02</p>
                    </div>
                    <h2 class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/red/50 uppercase ">Mes
                        passions
                    </h2>
                </div>
                <!-- Contenu -->
                <div
                    class="flex 3xs:flex-col sm:flex-row 3xs:gap-14 2xs:gap-20 xs:gap-36 sm:gap-20 md:gap-32 mt-16 3xs:px-10 2xs:px-20 xs:px-28 sm:px-20 md:px-28 mb-16 ">
                    <div class="flex flex-col font-karla text-Extended/red/50 gap-5 justify-center items-center">
                        <Graphisme />
                        <h4 class="font-bold sm:text-sm md:text-base text-center ">Graphisme / Web-Design</h4>
                        <p class=" font-light sm:text-xs md:text-sm text-justify">J’aime beaucoup le
                            design graphique et le
                            web design.
                            J’aime travailler avec différentes couleurs, formes et typographies pour créer des designs qui
                            attirent le regard et transmettent un message. J'apprecis également l’aspect technique du web,
                            en réalisant plusieurs maquettes et en utilisant des langages de programmation pour donner vie à
                            mes créations en créant des sites webs interactifs et intuitifs. </p>
                        <section class="justify-center flex  scroll-snap2">
                            <nav class="navp 3xs:hidden sm:flex">
                                <ul class="ulp">
                                    <RouterLink class="" to="/projets">
                                        <li class="lip font-karla font-medium">
                                            Voir mes projets
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </RouterLink>
                                </ul>
                            </nav>
                            <div class="sm:hidden border-4 border-Extended/red/50   rounded-2xl p-3">
                                <RouterLink
                                    class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50"
                                    to="/projets">
                                    Voir mes projets
                                </RouterLink>
                            </div>
                        </section>
                    </div>

                    <div class="flex flex-col font-karla text-Extended/red/50 gap-5 justify-center items-center">
                        <Photographie />
                        <h4 class="font-bold sm:text-sm md:text-base  text-center ">Photographie</h4>
                        <p class=" font-light sm:text-xs md:text-sm  text-justify">Lors de mon temps libre, j’aime me
                            plonger dans
                            l’univers de la photographie en capturant des moments de la vie quotidienne ainsi que de
                            magnifiques paysages qui m’entourent. Ceci me permet de me déconnecter du monde, de me
                            ressourcer et de pouvoir me concentrer sur le prise de vue de mes différentes photos. J’aime
                            particulièrement prendre en photos des animaux ainsi que des paysages. </p>
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
                            <div class="sm:hidden border-4 border-Extended/red/50  rounded-2xl p-3">
                                <RouterLink
                                    class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50"
                                    to="/galeriephotos">
                                    Voir mes photos
                                </RouterLink>
                            </div>
                        </section>
                    </div>
                    <div class="flex flex-col font-karla text-Extended/red/50 gap-5 justify-center items-center">
                        <Activites />
                        <h4 class="font-bold sm:text-sm md:text-base  text-center ">Activités Manuelles</h4>
                        <p class=" font-light sm:text-xs md:text-sm text-justify">Depuis toute petite, j’aime réaliser des
                            activités
                            manuelles notamment du Scrapbooking, du dessin ainsi que plein d’autres activités. J’aime
                            beaucoup la liberté créative que ses activités peuvent procurer. Aujourd’hui, je continue de
                            réaliser du scrapbooking notamment en réalisant des invitations où des albums photos pour mes
                            proches. J’aime pouvoir mélanger les couleurs et les différentes textures pour créer des design
                            originaux. </p>
                        <section class="justify-center flex py-0 scroll-snap2">
                            <nav class="navp 3xs:hidden sm:flex">
                                <ul class="ulp">
                                    <RouterLink class="" to="/">
                                        <li class="lip font-karla font-medium">
                                            Voir mes créations
                                            <span></span><span></span><span></span><span></span>
                                        </li>
                                    </RouterLink>
                                </ul>
                            </nav>
                            <div class="sm:hidden border-4 border-Extended/red/50   rounded-2xl p-3">
                                <RouterLink
                                    class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50 "
                                    to="/">
                                    Voir mes créations
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
                <div class="mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-16 items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                        </div>
                        <p class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/900">
                            03</p>
                    </div>
                    <h2
                        class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 uppercase ">
                        Mes Logiciels
                    </h2>
                </div>
                <!-- Contenu -->
                <div class="flex flex-col items-center ">
                    <div
                        class="mx-auto 3xs:my-14 2xs:my-16 xs:my-24 sm:my-28 md:my-36 grid 3xs:grid-cols-2 xs:grid-cols-3  sm:grid-cols-3 md:grid-cols-6 3xs:gap-9  xs:gap-14">
                        <a class="hover:scale-125 ease-in-out duration-500" href="https://www.figma.com/fr/"
                            target="_blank">
                            <img src="../../public/logos/figma.webp" alt="">
                        </a>
                        <a class="hover:scale-125 ease-in-out duration-500"
                            href="https://www.adobe.com/fr/products/illustrator.html?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh3Loq_eYhjOx1WyQYTTEww_2qjaMX5y02e4Adza6zTmteAZNaZGHxUaAkioEALw_wcB&mv=search&mv=search&sdid=KCJMVLF6&ef_id=Cj0KCQjwtsCgBhDEARIsAE7RYh3Loq_eYhjOx1WyQYTTEww_2qjaMX5y02e4Adza6zTmteAZNaZGHxUaAkioEALw_wcB:G:s&s_kwcid=AL!3085!3!600183673895!e!!g!!illustrator!1478148655!58836721124"
                            target="_blank">
                            <img src="../../public/logos/illustrator.webp" alt="">
                        </a>
                        <a class="hover:scale-125 ease-in-out duration-500"
                            href="https://www.adobe.com/fr/products/photoshop.html" target="_blank">
                            <img src="../../public/logos/photoshop.webp" alt="">
                        </a>
                        <a class="hover:scale-125 ease-in-out duration-500"
                            href="https://www.adobe.com/fr/products/indesign/landpb.html?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh3a-aQ1jaguEVHurDdqesrPIiWdOPoppQ0LKxJfeunOjaXFpu-NFAwaAgNQEALw_wcB&mv=search&mv=search&sdid=LCDWTLJX&ef_id=Cj0KCQjwtsCgBhDEARIsAE7RYh3a-aQ1jaguEVHurDdqesrPIiWdOPoppQ0LKxJfeunOjaXFpu-NFAwaAgNQEALw_wcB:G:s&s_kwcid=AL!3085!3!600117236569!e!!g!!indesign!1435912704!58952470471"
                            target="_blank">
                            <img src="../../public/logos/indesign.webp" alt="">
                        </a>
                        <a class="hover:scale-125 ease-in-out duration-500"
                            href="https://www.adobe.com/fr/products/premiere/landpb.html?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh3CKkh3-6hgdKz_uJStPiWOxP-F-TxV1QkirfFTEzOJcyh9_eceKicaAkmHEALw_wcB&mv=search&mv=search&sdid=LQLZT7BT&ef_id=Cj0KCQjwtsCgBhDEARIsAE7RYh3CKkh3-6hgdKz_uJStPiWOxP-F-TxV1QkirfFTEzOJcyh9_eceKicaAkmHEALw_wcB:G:s&s_kwcid=AL!3085!3!341217015802!e!!g!!premiere%20pro!1435912734!56537474099"
                            target="_blank">
                            <img src="../../public/logos/premierepro.webp" alt="">
                        </a>
                        <a class="hover:scale-125 ease-in-out duration-500"
                            href="https://www.adobe.com/fr/products/aftereffects/landpb.html?gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh3MTP77o78MDmwSe1SEG6bbxdCDBqABlWHEsk709iZuJKI2ZeUZwtsaAmxAEALw_wcB&mv=search&mv=search&sdid=MYYBRYZH&ef_id=Cj0KCQjwtsCgBhDEARIsAE7RYh3MTP77o78MDmwSe1SEG6bbxdCDBqABlWHEsk709iZuJKI2ZeUZwtsaAmxAEALw_wcB:G:s&s_kwcid=AL!3085!3!600183576446!e!!g!!after%20effect!1435912503!56537400619"
                            target="_blank">
                            <img src="../../public/logos/aftereffect.webp" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <!-- Fin Logiciels -->

            <VagueBott class="w-full h-auto" />

            <!-- Contact -->
            <div class="-mt-1 container0 relative h-screen z-0 bg-Extended/red/900">
                <!-- Titre -->
                <div class="mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-16 items-center">
                    <div class="flex flex-row gap-4 items-center">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/red/50">
                        </div>
                        <p class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/200">
                            04</p>
                    </div>
                    <h2 class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/red/50 uppercase ">Me
                        contacter
                    </h2>
                </div>

                <!-- Mes réseaux sociaux  -->
                <section>
                    <div class="flex flex-row gap-8 items-center justify-center mt-32">
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[23px] xs:w-[50px] border-Extended/red/50">
                        </div>
                        <div>
                            <h3
                                class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/red/50 text-center ">
                                Mes
                                réseaux sociaux</h3>
                        </div>
                        <div
                            class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[23px] xs:w-[50px] border-Extended/red/50">
                        </div>
                    </div>
                    <div
                        class="flex mt-16 flex-row 3xs:gap-6 2xs:gap-8 xs:gap-4 sm:gap-8 md:gap-10 items-center justify-center mb-16">
                        <a href="https://www.instagram.com/jdxl.pro/" target="_blank"
                            class="hover:scale-110 ease-in-out duration-300">
                            <img class="3xs:w-14 2xs:w-16 xs:w-12 sm:w-14 md:w-16"
                                src="../../public/logos/Instagram_Glyph_White-1.webp" alt="Logo Instagram">
                        </a>
                        <a href="https://www.tiktok.com/@justine.pro" target="_blank"
                            class="hover:scale-110 ease-in-out duration-300">
                            <img class="3xs:w-16 2xs:w-20 xs:w-14 sm:w-16 md:w-24" src="../../public/logos/tiktok_logo.webp"
                                alt="Logo TikTok">
                        </a>
                        <a href="https://www.behance.net/justineduvalpro" target="_blank"
                            class="hover:scale-110 ease-in-out duration-300">
                            <img class="3xs:w-14 2xs:w-16 xs:w-12 sm:w-14 md:w-16"
                                src="../../public/logos/behance_logo.webp" alt="Logo Behance">
                        </a>
                    </div>
                </section>
                <div class="flex 3xs:flex-col xs:flex-row 3xs:gap-10 xs:gap-9 items-center justify-center">
                    <!-- Bouton Mail -->
                    <section class="justify-center flex xs:py-11 scroll-snap2">
                        <nav class="navvv 3xs:hidden sm:flex">
                            <ul class="ulll">
                                <a href="mailto:justinepro.duval@gmail.com">
                                    <li class="liii font-space-grotesk">
                                        M'envoyer un mail
                                        <span></span><span></span><span></span><span></span>
                                    </li>
                                </a>
                            </ul>
                        </nav>
                        <div class="sm:hidden  border-4 border-Extended/red/50 uppercase rounded-2xl p-3">
                            <a href="mailto:justinepro.duval@gmail.com"
                                class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50">
                                M'envoyer un mail</a>
                        </div>
                    </section>
                    <!-- Fin du Bouton Mail -->
                    <!-- Bouton CV -->
                    <section class="justify-center flex xs:py-11 scroll-snap2">
                        <nav class="navvv 3xs:hidden sm:flex">
                            <ul class="ulll">
                                <a href="../../public/images/CV_Justine_Duval.pdf" download target="_blank">
                                    <li class="liii font-space-grotesk">
                                        Télécharger mon CV
                                        <span></span><span></span><span></span><span></span>
                                    </li>
                                </a>
                            </ul>
                        </nav>
                        <div class="sm:hidden border-4 border-Extended/red/50  uppercase rounded-2xl p-3">
                            <a href="../../public/images/CV_Justine_Duval.pdf" download
                                class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50">
                                Télécharger mon CV
                            </a>

                        </div>
                    </section>
                    <!-- Fin du Bouton CV -->
                </div>
            </div>
            <!-- Fin CV -->

            <VagueTop class=" w-full h-auto" />

            <!-- App -->
            <div class="container0 relative h-16 z-0 bg-Extended/red/50">

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
import Activites from "../components/icons/ActivitesIcon.vue";
import VagueTop from "../components/VagueTop.vue";
import VagueBott from "../components/VagueBott.vue";
import Footerc from "../components/Footer.vue";

export default {
    components: { Header, VagueTop, VagueBott, Footerc, Graphisme, Photographie, Activites }
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