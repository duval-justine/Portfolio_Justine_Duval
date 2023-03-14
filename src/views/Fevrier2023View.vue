<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/Fevrier2023/Fevrier2023_Couverture.webp" class="h-[100vh]" />
    </section>

    <!-- Présentation -->
    <section>
        <div class="flex flex-col justify-center items-center mt-28">
            <h1 class="font-space-grotesk font-semibold text-3xl text-Extended/true-gray/900 text-center">Illustrations &
                Motion Design
            </h1>
            <div class=" border-t-[3px] mt-14 w-[404px] border-Extended/true-gray/900"></div>
            <div class="flex flex-row gap-52 items-start font-karla text-Extended/true-gray/900 text-center mt-14 mb-28">
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Client</p>
                    <p class="font-normal text-2xl">Création Personnelle</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Date</p>
                    <p class="font-normal text-2xl">Février 2023</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Logiciel</p>
                    <p class="font-normal text-2xl">Illustrator <br> After Effect</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mes illustrations du mois -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">01</p>
            </div>
            <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 ">Mes illustration du mois :
            </h2>
        </div>
        <!-- Texte -->
        <div
            class="flex flex-col gap-3 ml-36 font-karla text-lg font-light text-Extended/true-gray/900 mt-4 mr-72 text-justify">
            <p>Pour cette année 2023, je me suis lancé le défi de réaliser une illustration chaque mois sur le thème de
                celui-ci au format carte postale. Pour accompagner cette illustration, j’en réalise deux autres au format
                carré pour pouvoir poster 3 posts sur les réseaux sociaux ce qui permet de réaliser une frise chaque mois.
                Et pour m’améliorer dans un autre domaine j’ai décidé de réaliser un motion design d'une des 3 illustrations
                que je poste par la suite en réel sur instagram voir sur TikTok. Ceci me permet de m’améliorer et de voir
                mon évolution à travers les mois.
            </p>
        </div>
    </section>
</template>

<script>
import TopPage from "../components/TopPage.vue";

export default {
    components: { TopPage },

}
</script>


