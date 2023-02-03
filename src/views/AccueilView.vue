<template>
  <main>
    <div class="snap">
      <!-- Accueil -->
      <section>
        <div class="container0 h-screen z-0 bg-gradient-to-b from-pastelbleu to-pastelrose scroll-snap ">
          <!-- Header -->
          <Header class="relative z-10" />
          <!-- Textes et Illustration -->
          <div class="flex lg:flex-row gap-36 items-center sm:flex-col md:flex-col">
            <!-- Textes -->
            <div class="w-[750px] flex flex-col gap-4 ">
              <h1 class="font-space-grotesk font-medium lg:text-6xl md:text-4xl text-Extended/red/50 ml-20 sm:text-2xl">
                Justine Duval
              </h1>
              <p class="font-space-grotesk font-light md:text-xl lg:text-2xl text-Extended/red/50 ml-20 sm:text-base">
                Étudiante en
                BUT
                MMI à
                Montbéliard
                et spécialisée dans le design pour devenir Infographiste ou Web-Designeuse.</p>
            </div>
            <!-- Illustration -->
            <MongolfiereNuages id="mongolfiere" class="float-right mr-10 z-20 w-full h-full object-contain relative " />
          </div>
          <!-- Bouton scroll -->
          <div class="flex flex-col items-center  gap-4">
            <RouterLink class="font-space-grotesk font-bold text-sm  bottom-6 text-Extended/red/50 lg:text-lg lg:"
              to="/">
              SCROLL
            </RouterLink>
            <div class=" border-t-4 w-8 rotate-90 bottom-0 border-Extended/red/50"></div>
          </div>
        </div>
      </section>
      <!-- Fin de l'accueil -->

      <!-- Les derniers projets -->
      <section>
        <div class="scroll-snap ">
          <RouterLink to="/janvier2023">
            <Bloc1 class="pt-16" img_1="/images/Janvier2023/Janvier2023_Fond.svg"
              img_2="/images/Janvier2023/Janvier2023_Ski.svg" title="Janvier"
              subtitle="Illustrations & Motion Design | 2023" />
          </RouterLink>
        </div>
        <div class="scroll-snap ">
          <RouterLink to="/citadelle">
            <Bloc3 img_1="/images/ExpoUni/ExpoUni_Tsunami.svg" img_2="/images/ExpoUni/ExpoUni_Logo.svg"
              title="Exposition universelle" subtitle="Carte postale | 2023" />
          </RouterLink>
        </div>
        <div class="scroll-snap ">
          <RouterLink to="/janvier2023">
            <Bloc1 img_1="/images/Bavans/Bavans_Couverture.svg" img_2="/images/Bavans/Bavans_Logo.svg" title="Bavans"
              subtitle="Refonte de la charte graphique | 2023" />
          </RouterLink>
        </div>
      </section>
    </div>
    <section class="justify-center flex pb-11">
      <RouterLink
        class="font-space-grotesk font-bold text-2xl text-Extended/true-gray/900 border-[6px] border-brun p-2 rounded-2xl hover:bg-brun hover:text-Extended/red/50"
        to="/">
        Plus de projets
      </RouterLink>
    </section>

  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Bloc1 from "../components/Bloc1.vue";
import Bloc2 from "../components/Bloc2.vue";
import Bloc3 from "../components/Bloc3.vue";
import MongolfiereNuages from "../components/MongolfiereNuages.vue";
export default {
  components: { Header, MongolfiereNuages, Bloc1, Bloc2, Bloc3 }
}
</script>

<style>
#mongolfiere {
  animation: fly-balloon 10s linear infinite;
}

@keyframes fly-balloon {
  0% {
    top: 0px;
    left: 0px;
  }

  25% {
    top: -25px;
    left: 0px;
  }

  50% {
    top: 0px;
    left: -25px;
  }

  75% {
    top: 25px;
    left: -25px;
  }

  100% {
    top: 0px;
    left: 0px;
  }
}

.container0 {
  width: 100%;

}

@media (min-width: 640px) {
  .container0 {
    max-width: 40000px;
  }
}

.snap {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroll-snap {
  scroll-snap-align: start;
  height: 100vh;
}
</style>