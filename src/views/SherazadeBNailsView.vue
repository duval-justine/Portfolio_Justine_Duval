<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/Sherazade/Sherazade_Couverture.webp" class="h-[100vh]" />
    </section>

    <img src="../../public/images/Sherazade/Sherazade_DecorationTop.png" class="absolute right-0" alt="">
    <!-- Présentation -->
    <section>
        <div class="flex flex-col justify-center items-center mt-28">
            <h1 class="font-space-grotesk font-semibold text-3xl text-Extended/true-gray/900 text-center">Affiche Tarifs
            </h1>
            <div class=" border-t-[3px] mt-14 w-[404px] border-Extended/true-gray/900"></div>
            <div class="flex flex-row gap-52 items-start font-karla text-Extended/true-gray/900 text-center mt-14 mb-28">
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Client</p>
                    <p class="font-normal text-2xl">HomeSalon ShérazadeBNails</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Date</p>
                    <p class="font-normal text-2xl">Mars 2023</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Logiciel</p>
                    <p class="font-normal text-2xl">Photoshop</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Présentation -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-16 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">01</p>
            </div>
            <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 ">HomeSalon ShérazadeBNails :
            </h2>
            <!-- Texte -->
            <div class="flex flex-col gap-3 ml-36 font-karla text-lg font-light text-Extended/true-gray/900 mt-4 mr-72">
            </div>
        </div>
    </section>

    <!-- Demande de la Cliente -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-16 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">02</p>
            </div>
            <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 ">Demande de la cliente :
            </h2>
            <!-- Texte -->
            <div class="flex flex-col gap-3 ml-36 font-karla text-lg font-light text-Extended/true-gray/900 mt-4 mr-72">
            </div>
        </div>
    </section>
</template>

<script>
import TopPage from "../components/TopPage.vue";
export default {
    components: { TopPage }
}
</script>