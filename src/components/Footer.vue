<!-- Component Footer -->
<template>
    <!-- Footer Descktop -->
    <div
        class="bg-Extended/true-gray/900 3xs:hidden xs:flex flex-row justify-between items-center xs:py-6 sm:py-8 md:py-10 xs:px-6 sm:px-14 md:px-16">
        <!-- Logo + Prénom Nom -->
        <div
            class="flex flex-row items-center font-karla font-normal xs:text-sm sm:text-base md:text-lg  text-Extended/red/50 gap-4">
            <RouterLink to="/">
                <Logo class="z-30  xs:w-[65px] sm:w-[80px] md:w-[100px]" />
            </RouterLink>
            <h4>Justine Duval</h4>
        </div>
        <!-- Section / Menu Footer -->
        <div
            class="font-space-grotesk font-medium xs:text-sm sm:text-base md:text-lg justify-center text-Extended/red/50 flex flex-row xs:gap-6 sm:gap-12 md:gap-16">
            <RouterLink to="/projets">
                Projets
            </RouterLink>
            <RouterLink to="/">
                Mentions légales
            </RouterLink>
            <RouterLink to="/">
                À propos
            </RouterLink>
        </div>
        <!-- Social Media -->
        <div class="flex flex-row xs:gap-4 sm:gap-8 md:gap-10 items-center">
            <a href="https://www.instagram.com/jdxl.pro/" target="_blank" class="hover:scale-110 ease-in-out duration-300">
                <img class="xs:w-8 sm:w-10 md:w-12" src="../../public/logos/Instagram_Glyph_White-1.webp"
                    alt="Logo Instagram">
            </a>
            <a href="https://www.tiktok.com/@justine.pro" target="_blank" class="hover:scale-110 ease-in-out duration-300">
                <img class="xs:w-12 sm:w-14 md:w-16" src="../../public/logos/tiktok_logo.webp" alt="Logo TikTok">
            </a>
            <a href="https://www.behance.net/justineduvalpro" target="_blank"
                class="hover:scale-110 ease-in-out duration-300">
                <img class="xs:w-8 sm:w-10 md:w-12" src="../../public/logos/behance_logo.webp" alt="Logo Behance">
            </a>
        </div>
    </div>
    <!-- Fin du Footer Desktop -->

    <!-- Footer Mobile -->
    <div class="bg-Extended/true-gray/900 flex flex-col items-center 3xs:gap-10 2xs:gap-14 xs:hidden 3xs:py-10 2xs:py-12">
        <!-- Logo + Prénom Nom -->
        <RouterLink to="/">
            <Logo class="z-30  3xs:w-[70px] 2xs:w-[80px] " />
        </RouterLink>
        <!-- Social Media -->
        <div class="flex flex-row 3xs:gap-6 2xs:gap-8 items-center">
            <a href="https://www.instagram.com/jdxl.pro/">
                <img class="3xs:w-10 2xs:w-10" src="../../public/logos/Instagram_Glyph_White-1.webp" alt="Logo Instagram">
            </a>
            <a href="https://www.tiktok.com/@justine.pro">
                <img class="3xs:w-16 2xs:w-16" src="../../public/logos/tiktok_logo.webp" alt="Logo TikTok">
            </a>
            <a href="https://www.behance.net/justineduvalpro">
                <img class="3xs:w-10 2xs:w-10" src="../../public/logos/behance_logo.webp" alt="Logo Behance">
            </a>
        </div>
        <!-- Section / Menu Footer -->
        <div
            class="font-space-grotesk font-medium 3xs:text-base 2xs:text-lg justify-center text-Extended/red/50 flex flex-row 3xs:gap-6 2xs:gap-12">
            <RouterLink to="/projets">
                Projets
            </RouterLink>
            <RouterLink to="/mentionslegales">
                Mentions légales
            </RouterLink>
            <RouterLink to="/apropos">
                À propos
            </RouterLink>
        </div>

    </div>
</template>
<script>
import Logo from "./icons/IconLogo.vue";
export default {
    components: { Logo }
}
</script>

<style></style>