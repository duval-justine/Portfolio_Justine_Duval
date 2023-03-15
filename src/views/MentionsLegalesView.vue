<template>
    <main>
        <!-- Component Accueil -->
        <section>
            <TopPage img_test="/images/MentionsLegales.webp" class="h-[100vh] bg-zinc-500" />
        </section>



        <!-- Footer -->
        <Footerc />
    </main>
</template>

<script>
import TopPage from "../components/TopPage.vue";
import Footerc from "../components/Footer.vue";

export default {
    components: { TopPage, Footerc },

}
</script>

