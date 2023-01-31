<template>
    <div class="relative z-30 mx-10 hidden justify-between pt-7 md:flex">
        <RouterLink to="/">
            <Logo class="relative z-30 ml-8" />
        </RouterLink>
        <div class=" mx-7
        relative
        flex flex-shrink-0 flex-grow-0
        items-center
        justify-start
        gap-20
        font-space-grotesk
        text-[24px]
        font-bold
        text-white pr-5
      ">
            <RouterLink class="lg:text-lg lg:hover:text-white" to="/progall">Projets</RouterLink>
            <RouterLink class="lg:text-lg lg:hover:text-white" to="/artistes">À Propos</RouterLink>

        </div>
    </div>
</template>
<script>
import Logo from "./icons/IconLogo.vue";
export default {
    components: { Logo }
}
</script>