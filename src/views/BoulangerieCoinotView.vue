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

