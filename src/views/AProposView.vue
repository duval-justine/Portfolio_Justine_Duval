<template>
    <main>
        <div>

            <!-- Accueil -->
            <section>
                <div class="container0 relative h-screen z-0 bg-Extended/red/900">

                    <!-- Header -->
                    <Header class="relative z-10" />

                </div>
            </section>
            <!-- Fin de l'accueil -->

            <VagueTop class="w-full h-auto" />

            <!-- Qui suis je ? -->
            <div class="container0 relative h-screen z-0 bg-Extended/red/50">
            </div>
            <!-- Fin qui suis je ? -->

            <VagueBott class="w-full h-auto" />

            <!-- Passion -->
            <div class="-mt-1 container0 relative h-screen z-0 bg-Extended/red/900">
            </div>
            <!-- Fin Passion -->

            <VagueTop class="w-full h-auto" />

            <!-- App -->
            <div class="container0 relative h-screen z-0 bg-Extended/red/50">
            </div>
            <!-- Fin App -->

            <VagueBott class="w-full h-auto" />

            <!-- Parcours -->
            <div class="-mt-1 container0 relative h-screen z-0 bg-Extended/red/900">
            </div>
            <!-- Fin Parcours -->

            <VagueTop class="w-full h-auto" />

            <!-- App -->
            <div class="container0 relative h-screen z-0 bg-Extended/red/50">
            </div>
            <!-- Fin App -->

            <!-- Footer -->
            <Footerc />
        </div>

    </main>
</template>
  
<script>
import Header from "../components/Header.vue";
import VagueTop from "../components/VagueTop.vue";
import VagueBott from "../components/VagueBott.vue";
import Footerc from "../components/Footer.vue";
export default {
    components: { Header, VagueTop, VagueBott, Footerc }
}
</script>
  
<style>
:root {
    --color: #111;
    --primary: #F87171;
}

/* Container Top Page */
.container0 {
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
}

@media (min-width: 640px) {
    .container0 {
        max-width: 40000px;
    }
}
</style>