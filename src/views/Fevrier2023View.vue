<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/Fevrier2023/Fevrier2023_Couverture.webp" class="h-[100vh]" />
    </section>

    <!-- Présentation -->
    <section>
        <div class="flex flex-col justify-center items-center 3xs:mt-20  md:mt-28">
            <h1
                class="font-space-grotesk font-semibold 3xs:text-2xl  xs:text-2xl md:text-3xl text-Extended/true-gray/900 text-center">
                Illustrations &
                Motion Design
            </h1>
            <div
                class="border-t-[3px] 3xs:mt-6 xs:mt-5 sm:mt-8 md:mt-14 3xs:w-[250px] xs:w-[300px] sm:w-[404px] border-Extended/true-gray/900">
            </div>
            <div
                class="flex 3xs:flex-col xs:flex-row 3xs:gap-12  xs:gap-10 sm:gap-40 md:gap-52 3xs:items-center xs:items-start font-karla text-Extended/true-gray/900 text-center 3xs:mt-10 xs:mt-10 md:mt-14 3xs:mb-16 2xs:mb-20 xs:mb-16 sm:mb-20 md:mb-28">
                <div class="xs:w-48">
                    <p class="font-extrabold  3xs:text-sm md:text-base uppercase">Client</p>
                    <p class="font-normal 3xs:text-xl xs:text-lg sm:text-xl md:text-2xl">Création Personnelle</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold 3xs:text-sm md:text-base uppercase">Date</p>
                    <p class="font-normal 3xs:text-xl xs:text-lg sm:text-xl md:text-2xl">Février 2023</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold 3xs:text-sm md:text-base uppercase">Logiciel</p>
                    <p class="font-normal 3xs:text-xl xs:text-lg sm:text-xl md:text-2xl">Illustrator <br> After Effect</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mes illustrations du mois -->
    <section>
        <!-- Titre -->
        <div class="xs:mt-10 sm:mt-14 md:mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-10 items-center">
            <div class="flex flex-row 3xs:gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/900">01</p>
            </div>
            <h2 class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 ">Mes
                illustration du mois :
            </h2>
        </div>
        <!-- Texte -->
        <div
            class="flex flex-col gap-3 3xs:mx-[50px] 2xs:mx-[70px] xs:mx-[70px] sm:mr-32  sm:ml-[123px] md:ml-36 font-karla 3xs:text-sm xs:text-base md:text-lg font-light text-Extended/true-gray/900 mt-4  text-justify">
            <p>Pour cette année 2023, je me suis lancé le défi de réaliser une illustration chaque mois sur le thème de
                celui-ci au format carte postale. Pour accompagner cette illustration, j’en réalise deux autres au format
                carré pour pouvoir poster 3 posts sur les réseaux sociaux ce qui permet de réaliser une frise chaque mois.
                Et pour m’améliorer dans un autre domaine j’ai décidé de réaliser un motion design d'une des 3 illustrations
                que je poste par la suite en réel sur instagram voir sur TikTok. Ceci me permet de m’améliorer et de voir
                mon évolution à travers les mois.</p>
        </div>
    </section>

    <!-- Février -->
    <section>
        <!-- Titre -->
        <div class="xs:mt-10 sm:mt-14 md:mt-16 flex flex-row 3xs:gap-2 2xs:gap-4 xs:gap-6 md:gap-10 items-center">
            <div class="flex flex-row 3xs:gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-2xl md:text-3xl text-Extended/red/900">02</p>
            </div>
            <h2 class="font-karla font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 ">Février :
            </h2>
        </div>
        <!-- Texte -->
        <div
            class="flex flex-col gap-3 3xs:mx-[50px] 2xs:mx-[70px] xs:mx-[70px] sm:mr-32  sm:ml-[123px] md:ml-36 font-karla 3xs:text-sm xs:text-base md:text-lg font-light text-Extended/true-gray/900 mt-4  text-justify">
            <p>Pour le mois de Février, j’ai choisi de réaliser des illustrations sur le thème de la Saint-Valentin. Pour ce
                faire j’ai sélectionné une harmonie colorée dans les tons rose, blanc et rouge ainsi qu’une typographie sans
                empattement élégante et moderne qui est QTKooper.</p>
        </div>
    </section>
</template>

<script>
import TopPage from "../components/TopPage.vue";

export default {
    components: { TopPage },

}
</script>


