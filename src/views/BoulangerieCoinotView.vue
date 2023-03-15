<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/BoulangerieCoinot/BoulangerieCoinot_Couverture.webp" class="h-[100vh]" />
    </section>

    <!-- Présentation -->
    <section>
        <div class="flex flex-col justify-center items-center 3xs:mt-20  md:mt-28">
            <h1
                class="font-space-grotesk font-semibold 3xs:text-2xl  xs:text-2xl md:text-3xl text-Extended/true-gray/900 text-center">
                Carte des fêtes de fin d'année 2022
            </h1>
            <div
                class="border-t-[3px] 3xs:mt-6 xs:mt-5 sm:mt-8 md:mt-14 3xs:w-[250px] xs:w-[300px] sm:w-[404px] border-Extended/true-gray/900">
            </div>
            <div
                class="flex 3xs:flex-col xs:flex-row 3xs:gap-12  xs:gap-10 sm:gap-40 md:gap-52 3xs:items-center xs:items-start font-karla text-Extended/true-gray/900 text-center 3xs:mt-10 xs:mt-10 md:mt-14 3xs:mb-16 2xs:mb-20 xs:mb-16 sm:mb-20 md:mb-28">
                <div class="xs:w-48">
                    <p class="font-extrabold  3xs:text-sm md:text-base uppercase">Client</p>
                    <p class="font-normal 3xs:text-xl xs:text-lg sm:text-xl md:text-2xl">Boulangerie Pâtisserie du Coinot
                    </p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold 3xs:text-sm md:text-base uppercase">Date</p>
                    <p class="font-normal 3xs:text-xl xs:text-lg sm:text-xl md:text-2xl">Novembre 2022</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold 3xs:text-sm md:text-base uppercase">Logiciel</p>
                    <p class="font-normal 3xs:text-xl xs:text-lg sm:text-xl md:text-2xl">Illustrator</p>
                </div>
            </div>
        </div>
    </section>

    <!-- La Boulangerie -->
    <section>
        <!-- Titre -->
        <div class="xs:mt-10 sm:mt-14 md:mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-10 items-center">
            <div class="flex flex-row 3xs:gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/900">01</p>
            </div>
            <h2 class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 ">La Boulangerie
                Pâtisserie du Coinot
                :
            </h2>
        </div>

        <!-- Texte -->
        <div class="flex 3xs:flex-col sm:flex-row 3xs:gap-5 xs:gap-8 sm:gap-12 md:gap-24 items-center sm:mr-6 md:mr-9">
            <div
                class="flex 3xs:mx-[50px] 2xs:mx-[70px] xs:mx-[70px] sm:mr-0  sm:ml-[123px] md:ml-36 font-karla 3xs:text-sm xs:text-base md:text-lg font-light text-Extended/true-gray/900 mt-4 sm:w-[700px] md:w-[900px] text-justify">
                <p>La Boulangerie du Coinot est une boulangerie familiale qui propose une sélection de pains et
                    viennoiseries faites maison, ainsi que des pâtisseries uniques. Les produits sont frais et préparés avec
                    soin. Les clients peuvent profiter d'un accueil chaleureux de la part de l'équipe de boulangers. Elle
                    est située dans le centre ville de Montbéliard.
                </p>
            </div>
            <div>
                <img src="../../public/images/BoulangerieCoinot/BoulangerieCoinot_Logo.svg"
                    class="3xs:w-64 sm:w-[150px] md:w-[200px] h-auto object-cover " alt="">
            </div>
        </div>
    </section>


    <!-- Footer -->
    <Footerc />
</template>

<script>

import TopPage from "../components/TopPage.vue";
import Footerc from "../components/Footer.vue";

export default {
    components: { TopPage, Footerc },

}
</script>

