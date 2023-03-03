<template>
  <main>
    <div class="snap">


      <!-- Accueil -->
      <section>
        <div class="container0 relative h-screen z-0 bg-gradient-to-b from-pastelbleu to-pastelrose scroll-snap">

          <!-- Header -->
          <Header class="relative z-10" />

          <!-- Textes et Illustration -->
          <div
            class="flex xs:flex-row  xs:gap-36 3xs:gap-1 3xs:mt-14 2xs:gap-[-5px] xs:items-center justify-center 3xs:flex-col">

            <!-- Textes -->
            <div class="sm:w-[750px] flex flex-col gap-4 3xs:w-[305px] ">
              <h1
                class="font-space-grotesk font-medium lg:text-6xl md:text-4xl 3xs:text-4xl 2xs:text-3xl text-Extended/red/50 3xs:ml-6 xs:ml-20 sm:text-2xl">
                Justine Duval
              </h1>
              <p
                class="font-space-grotesk font-light md:text-xl lg:text-2xl 3xs:text-base  text-Extended/red/50 3xs:ml-6 xs:ml-20 sm:text-base">
                Étudiante en
                BUT
                MMI à
                Montbéliard
                et spécialisée dans le design pour devenir Infographiste ou Web-Designeuse.</p>
            </div>

            <!-- Illustration -->
            <MongolfiereNuages id="mongolfiere"
              class="xs:float-right mr-10 z-20 w-full h-full 3xs:ml-24 2xs:ml-36 xs:ml-0 2xs:-mt-3 xs:mt-0 object-contain relative" />
          </div>

          <!-- Bouton scroll -->
          <div class="flex flex-col items-center  gap-4">
            <a class="font-space-grotesk font-bold text-sm absolute bottom-6 text-Extended/red/50 lg:text-lg"
              href="#scroll">
              SCROLL
            </a>
            <div class=" border-t-4 w-8 rotate-90 absolute bottom-0 border-Extended/red/50"></div>
          </div>
        </div>
      </section>
      <!-- Fin de l'accueil -->


      <!-- Les derniers projets -->
      <section>
        <div class="scroll-snap">
          <RouterLink to="/janvier2023">
            <Bloc1 id="scroll" class="pt-16" img_1="/images/Janvier2023/Janvier2023_CouverturePage.webp"
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
          <RouterLink to="/chartebavans">
            <Bloc1 img_1="/images/Bavans/Bavans_CouverturePage.webp" img_2="/images/Bavans/Bavans_CharteBook.jpg"
              title="Bavans" subtitle="Refonte de la charte graphique | 2023" />
          </RouterLink>
        </div>
      </section>
      <!-- Fin des dernier projets -->


      <!-- Bouton Plus de Projet -->
      <section class="justify-center flex pb-11 scroll-snap2">
        <nav class="navv 3xs:hidden sm:flex">
          <ul class="ull">
            <RouterLink class="" to="/projetsco">
              <li class="lii font-space-grotesk">
                Plus de projets
                <span></span><span></span><span></span><span></span>
              </li>
            </RouterLink>
          </ul>
        </nav>
        <div class="sm:hidden bg-Extended/red/900 uppercase rounded-2xl p-3">
          <RouterLink class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50"
            to="/projetsco">
            Plus de projets
          </RouterLink>
        </div>
      </section>
      <!-- Fin du Bouton Plus de Projet  -->

      <!-- Footer -->
      <Footerc />
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Footerc from "../components/Footer.vue";
import Bloc1 from "../components/Bloc1.vue";
import Bloc2 from "../components/Bloc2.vue";
import Bloc3 from "../components/Bloc3.vue";
import MongolfiereNuages from "../components/MongolfiereNuages.vue";
export default {
  components: { Header, MongolfiereNuages, Bloc1, Bloc2, Bloc3, Footerc }
}
</script>

<style>
:root {
  --color: #111;
  --primary: #F87171;
}

/* Mongolfière Animation */
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

/* Snap Scroll */
@media (min-width: 900px) {
  .snap {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  .scroll-snap {
    scroll-snap-align: start;
    height: 100vh;
  }

  .scroll-snap2 {
    scroll-snap-align: start;
  }

}

/* Bouton Plus de Projet */

/* Mobile */


/* Descktop */
@media (min-width: 900px) {
  .navv .ull {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .navv .ull .lii {
    --c: #F87171;
    color: var(--c);
    font-size: 18px;
    border: 0.3em solid var(--c);
    border-radius: 1.2em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 2.7em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    margin: 1em;
  }

  .navv .ull .lii span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: var(--c);
    transform: translateY(150%);
    border-radius: 50%;
    left: calc((var(--n) - 1) * 25%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.1s);
    z-index: -1;
  }

  .navv .ull .lii:hover {
    color: #FAFAFA;
  }

  .navv .ull .lii:hover span {
    transform: translateY(0) scale(2);
  }

  .navv .ull .lii span:nth-child(1) {
    --n: 1;
  }

  .navv .ull .lii span:nth-child(2) {
    --n: 2;
  }

  .navv .ull .lii span:nth-child(3) {
    --n: 3;
  }

  .navv .ull .lii span:nth-child(4) {
    --n: 4;
  }
}
</style>