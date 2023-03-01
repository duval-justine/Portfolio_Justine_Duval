<template>
    <div class="bg-Extended/true-gray/900 flex flex-row justify-between items-center py-10 px-16">
        <div class="flex flex-row items-center font-karla font-normal text-lg text-Extended/red/50 gap-4">
            <RouterLink to="/">
                <Logo class="z-30 ml-8" />
            </RouterLink>
            <h4>Justine Duval</h4>
        </div>
        <div class="font-space-grotesk font-medium text-lg justify-center text-Extended/red/50 flex flex-row gap-16">
            <RouterLink to="/">
                Projets
            </RouterLink>
            <RouterLink to="/">
                Mentions légales
            </RouterLink>
            <RouterLink to="/">
                À propos
            </RouterLink>
        </div>
        <div>

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