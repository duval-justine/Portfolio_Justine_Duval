<template>
    <section>
        <div class="container0 ">
            <img :src="img_test" class="container0 h-screen z-0 w-full object-cover absolute" alt="">
            <!-- Header -->
            <Header class="relative z-10 " />
            <!-- Bouton scroll -->
            <div class="flex flex-col items-center  gap-4">
                <RouterLink
                    class="font-space-grotesk font-bold text-sm absolute bottom-6 text-Extended/red/50 lg:text-lg lg:"
                    to="/">
                    SCROLL
                </RouterLink>
                <div class=" border-t-4 w-8 rotate-90 absolute bottom-0 border-Extended/red/50"></div>
            </div>
        </div>

    </section>
</template>

<script>
import Header from "../components/Header.vue";
export default {
    components: { Header },
    props: {
        img_test: String,
    },
}
</script>