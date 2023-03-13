<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/CRBX/CRBX_Couverture.webp" class="h-[100vh]" />
    </section>

    <!-- Présentation -->
    <section>
        <div class="flex flex-col justify-center items-center mt-28">
            <h1 class="font-space-grotesk font-semibold text-3xl text-Extended/true-gray/900 text-center">Site Web CRBX
            </h1>
            <div class=" border-t-[3px] mt-14 w-[404px] border-Extended/true-gray/900"></div>
            <div class="flex flex-row gap-52 items-start font-karla text-Extended/true-gray/900 text-center mt-14 mb-48">
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Client</p>
                    <p class="font-normal text-2xl">Mr. Ayuso & <br> Mr. Chatonnay</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Date</p>
                    <p class="font-normal text-2xl">Janvier 2023</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Logiciel</p>
                    <p class="font-normal text-2xl">Figma</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Le commanditaire -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">01</p>
            </div>
            <h2 class="font-space-grotesk font-bold text-2xl text-Extended/true-gray/900 ">Notre commanditaire :
            </h2>
        </div>
        <!-- Texte -->
        <div class="flex flex-col gap-3 ml-36 font-karla text-base font-light text-Extended/true-gray/900 mt-4 mr-72">
            <p>• M. Ayuso est le directeur et le fondateur du Festival OFFF de Barcelona qui est un festival annuel de
                design, d’art numérique et de créativité qui se déroule à Barcelone en Espagne.</p>
            <p>• M. Chatonnay est un professeur du département MMI de Montbéliard spécialisé dans le Web.</p>
        </div>
    </section>

    <!-- Le demande -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">02</p>
            </div>
            <h2 class="font-space-grotesk font-bold text-2xl text-Extended/true-gray/900 ">La demande de notre commanditaire
                :
            </h2>
        </div>
        <!-- Texte -->
        <div class="flex flex-col gap-3 ml-36 font-karla text-base font-light text-Extended/true-gray/900 mt-4 mr-72">
            <p>Pour ce projet, nous avions comme mission de créer un générateur de NFT pour le Festival du OFFF de Barcelone
                qui a lieu en mars 2023. Nous devions réaliser le projet le plus révolutionnaire de tous les temps en
                mettant en avant que les NFT ne sont pas une question d’argent mais plutôt une question d’héritage.</p>
        </div>
    </section>

    <!-- L'équipe -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">03</p>
            </div>
            <h2 class="font-space-grotesk font-bold text-2xl text-Extended/true-gray/900 ">Notre équipe
                :
            </h2>
        </div>
        <!-- Texte -->
        <div class="flex flex-col gap-3 ml-36 font-karla text-base font-light text-Extended/true-gray/900 mt-4 mr-72">
            <p>• Luca Thomesse : Chef de projet et chargé de communication</p>
            <p>• Eden Bourezg : Chargé de Design</p>
            <p>• Justine Duval : Chargé de Design</p>
            <p>• Quentin Heinis : Chargé de développement</p>
        </div>
    </section>
</template>

<script>
import TopPage from "../components/TopPage.vue";
export default {
    components: { TopPage }
}
</script>