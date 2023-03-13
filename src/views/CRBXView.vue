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
</template>

<script>
import TopPage from "../components/TopPage.vue";
export default {
    components: { TopPage }
}
</script>