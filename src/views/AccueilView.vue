<template>
  <main>
    <div class="snap">
      <section>
        <div class="flex flex-col text-center w-screen h-screen   bg-bleu ">
          <div class="flex  items-end justify-end align-bottom">
            <svg class="3xs:hidden md:flex" xmlns="http://www.w3.org/2000/svg" width="299" height="363" viewBox="0 0 299 363" fill="none">
              <path d="M3 -15C29.6363 3.10289 78.3768 34.7226 60.2482 64.6527C37.5875 102.065 34.1839 136.169 60.2482 146.719C90.065 158.788 125.254 112.241 128.23 108.1C147.313 81.5488 192.635 79.135 203.369 111.72C218.376 157.279 150.494 211.487 122.267 232.406C88.4748 261.773 48.0233 315.189 78.1383 349.472C87.6797 360.333 141.35 373.609 227.222 299.99C307.131 231.484 350.862 253.325 372.728 261.371" stroke="white" stroke-width="9"/>
            </svg>
            <svg class="3xs:flex md:hidden" xmlns="http://www.w3.org/2000/svg" width="176" height="194" viewBox="0 0 176 194" fill="none">
              <path d="M2 -47C18.9525 -35.4786 49.973 -15.3544 38.4352 3.69438C24.0129 27.5054 21.8468 49.2106 38.4352 55.9249C57.4119 63.6059 79.8078 33.9813 81.702 31.3459C93.8471 14.4477 122.692 12.9115 129.523 33.6501C139.075 62.6454 95.8712 97.1461 77.9067 110.46C56.3998 129.15 30.6548 163.146 49.8212 184.965C55.8937 191.878 90.0517 200.327 144.705 153.473C195.562 109.873 223.394 123.773 237.311 128.894" stroke="white" stroke-width="5.72798"/>
            </svg>
          </div>
          <div class="flex flex-col text-center h-screen  items-center justify-center">
            <div class="flex 3xs:gap-2 md:gap-4">
              <h1 class="text-white 3xs:text-4xl md:text-7xl font-getaway">Site en maintenance</h1>
              <svg class="-mt-8 3xs:hidden md:flex" xmlns="http://www.w3.org/2000/svg" width="56" height="91" viewBox="0 0 56 91" fill="none">
                <path d="M41.6279 45.0142C27.8361 48.7658 24.6662 52.4389 21.487 68.5813C21.3768 69.1396 20.6233 69.1396 20.513 68.5813C17.3339 52.4389 14.1639 48.7658 0.372128 45.0142C-0.124043 44.8771 -0.124043 44.1229 0.372128 43.9858C14.1639 40.2342 17.3339 36.5611 20.513 20.4187C20.6233 19.8604 21.3768 19.8604 21.487 20.4187C24.6662 36.5611 27.8361 40.2342 41.6279 43.9858C42.124 44.1229 42.124 44.8771 41.6279 45.0142Z" fill="white"/>
                <path d="M55.7785 14.2939C47.5691 16.4376 45.6823 18.5365 43.7899 27.7607C43.7243 28.0798 43.2758 28.0798 43.2101 27.7607C41.3178 18.5365 39.4309 16.4376 31.2215 14.2939C30.9262 14.2155 30.9262 13.7845 31.2215 13.7061C39.4309 11.5624 41.3178 9.46347 43.2101 0.23928C43.2758 -0.0797601 43.7243 -0.0797601 43.7899 0.23928C45.6823 9.46347 47.5691 11.5624 55.7785 13.7061C56.0738 13.7845 56.0738 14.2155 55.7785 14.2939Z" fill="white"/>
                <path d="M47.8317 80.2309C41.5925 81.9152 40.1585 83.5644 38.7203 90.812C38.6704 91.0627 38.3296 91.0627 38.2797 90.812C36.8415 83.5644 35.4075 81.9152 29.1683 80.2309C28.9439 80.1693 28.9439 79.8307 29.1683 79.7691C35.4075 78.0848 36.8415 76.4356 38.2797 69.188C38.3296 68.9373 38.6704 68.9373 38.7203 69.188C40.1585 76.4356 41.5925 78.0848 47.8317 79.7691C48.0561 79.8307 48.0561 80.1693 47.8317 80.2309Z" fill="white"/>
              </svg>
                <svg class="-mt-3 3xs:flex md:hidden" xmlns="http://www.w3.org/2000/svg" width="26" height="42" viewBox="0 0 26 42" fill="none">
                  <path d="M19.4354 20.5606C13.136 22.2741 11.6881 23.9518 10.236 31.3249C10.1856 31.58 9.84146 31.58 9.7911 31.3249C8.33899 23.9518 6.89107 22.2741 0.591603 20.5606C0.364973 20.4979 0.364973 20.1534 0.591603 20.0908C6.89107 18.3773 8.33899 16.6995 9.7911 9.3264C9.84146 9.07138 10.1856 9.07138 10.236 9.3264C11.6881 16.6995 13.136 18.3773 19.4354 20.0908C19.6621 20.1534 19.6621 20.4979 19.4354 20.5606Z" fill="white"/>
                  <path d="M25.8988 6.52881C22.1491 7.50798 21.2873 8.46669 20.423 12.6799C20.393 12.8256 20.1881 12.8256 20.1582 12.6799C19.2938 8.46669 18.4319 7.50798 14.6823 6.52881C14.5474 6.49302 14.5474 6.29617 14.6823 6.26037C18.4319 5.28121 19.2938 4.3225 20.1582 0.109293C20.1881 -0.036431 20.393 -0.036431 20.423 0.109293C21.2873 4.3225 22.1491 5.28121 25.8988 6.26037C26.0337 6.29617 26.0337 6.49302 25.8988 6.52881Z" fill="white"/>
                  <path d="M22.2691 36.646C19.4193 37.4153 18.7643 38.1686 18.1074 41.479C18.0846 41.5935 17.9289 41.5935 17.9061 41.479C17.2492 38.1686 16.5942 37.4153 13.7445 36.646C13.6419 36.6179 13.6419 36.4632 13.7445 36.4351C16.5942 35.6657 17.2492 34.9125 17.9061 31.6021C17.9289 31.4876 18.0846 31.4876 18.1074 31.6021C18.7643 34.9125 19.4193 35.6657 22.2691 36.4351C22.3716 36.4632 22.3716 36.6179 22.2691 36.646Z" fill="white"/>
                </svg>
            </div>
            <h3 class="text-white 3xs:text-lg md:text-3xl font-poppins font-light 3xs:px-14 md:p-0 3xs:mt-1 md:mt-2">Je suis actuellement en train de refaire mon site...</h3>
            <div class="3xs:mt-7  md:hidden">
              <h3 class="text-white font-poppins 3xs:text-lg  font-light">Si vous souhaitez me contacter :</h3>
              <div class="text-white font-poppins 3xs:text-lg  font-light 3xs:mt-1 md:mt-4">
              <a href="mailto:justinepro.duval@gmail.com"
                >
                justinepro.duval@gmail.com</a> </div>
            </div>
          </div>
          <div class="3xs:mt-4 md:mt-64 3xs:hidden md:flex flex-col">
              <h3 class="text-white font-poppins 3xs:text-lg md:text-3xl font-light">Si vous souhaitez me contacter :</h3>
              <div class="text-white font-poppins 3xs:text-lg md:text-2xl font-light 3xs:mt-1 md:mt-4">
              <a href="mailto:justinepro.duval@gmail.com"
                >
                justinepro.duval@gmail.com</a> </div>
            </div>
          <div>
            <div class="flex items-start justify-start  md:-mt-64 " >
              <svg class="3xs:hidden md:flex"  xmlns="http://www.w3.org/2000/svg" width="494" height="333" viewBox="0 0 494 333" fill="none">
              <path d="M-27 116.589C11.2047 74.3137 98.4137 -31.6591 131.576 17.9471C156.696 55.5248 105.931 115.544 82.1188 151.034C58.568 193.309 13.3674 282.698 213.218 208.184C387.495 143.206 425.179 206.586 489.813 341.5" stroke="white" stroke-width="9"/>
            </svg>

            <svg class="md:hidden" xmlns="http://www.w3.org/2000/svg" width="306" height="173" viewBox="0 0 306 173" fill="none">
              <path d="M-26 74.0198C-1.68492 47.1142 53.8186 -20.3314 74.9242 11.2401C90.9122 35.1562 58.6032 73.3547 43.4479 95.9421C28.4591 122.848 -0.308489 179.739 126.885 132.315C237.802 90.96 261.786 131.298 302.922 217.163" stroke="white" stroke-width="5.72798"/>
            </svg>
          </div>
            
          </div>
        </div>
      </section>
      <!-- Accueil -->
      <!-- <section>
        <div class="container0 relative h-screen z-0 bg-gradient-to-b from-pastelbleu to-pastelrose scroll-snap"> -->

          <!-- Header -->
          <!-- <Header class="relative z-10" /> -->

          <!-- Textes et Illustration -->
          <!-- <div
            class="flex xs:flex-row xs:gap-10 sm:gap-20 md:gap-36 3xs:gap-1 3xs:mt-14 2xs:gap-[-5px] xs:items-center justify-center 3xs:flex-col"> -->

            <!-- Textes -->
            <!-- <div class="xs:w-[750px] flex flex-col gap-4 3xs:w-[305px] ">
              <h1
                class="font-space-grotesk font-medium lg:text-6xl md:text-4xl sm:text-3xl xs:text-2xl 3xs:text-4xl 2xs:text-3xl text-Extended/red/50 3xs:ml-6 sm:ml-20 xs:ml-6">
                Justine Duval
              </h1>
              <p
                class="font-space-grotesk font-light xs:text-base sm:text-lg md:text-xl lg:text-2xl 3xs:text-base  text-Extended/red/50 3xs:ml-6 xs:ml-6 sm:ml-20 ">
                Étudiante en
                BUT
                MMI à
                Montbéliard
                et spécialisée dans le design pour devenir Infographiste ou Web-Designeuse.</p>
            </div> -->

            <!-- Illustration -->
            <!-- <div class=" sm:w-[505px] md:w-[527.79px]">
              <MongolfiereNuages id="mongolfiere"
                class="relative xs:float-right sm:mr-5 md:mr-10 z-20 w-full h-full 3xs:ml-24 2xs:ml-36 xs:ml-0 2xs:-mt-3 xs:mt-0 object-contain " />
            </div>
          </div> -->

          <!-- Bouton scroll -->
          <!-- <div class="flex flex-col items-center  gap-4">
            <a class="font-space-grotesk font-bold text-sm absolute bottom-6 text-Extended/red/50 lg:text-lg"
              href="#scroll">
              SCROLL
            </a>
            <div class=" border-t-4 w-8 rotate-90 absolute bottom-0 border-Extended/red/50"></div>
          </div>
        </div>
      </section> -->
      <!-- Fin de l'accueil -->


      <!-- Les derniers projets -->
      <!-- <section>
        <div class="scroll-snap">
          <RouterLink to="/sherazadebnails">
            <Bloc1 id="scroll" class="pt-16" img_1="/images/Sherazade/Sherazade_Couverture.webp"
              img_2="/images/Sherazade/Sherazade_LogoFond.webp" title="ShérazadeBNails"
              subtitle="Affiche des tarifs | Mars 2023" />
          </RouterLink>
        </div>
        <div class="scroll-snap ">
          <RouterLink to="/fevrier2023">
            <Bloc3 img_1="/images/Fevrier2023/Fevrier2023_Couverture.webp"
              img_2="/images/Fevrier2023/Fevrier2023_Illustration1.webp" title="Février 2023"
              subtitle="Carte postale | Février 2023" />
          </RouterLink>
        </div>
        <div class="scroll-snap ">
          <RouterLink to="/crbx">
            <Bloc1 img_1="/images/CRBX/CRBX_Couverture.webp" img_2="/images/Bavans/Bavans_CharteBook.jpg" title="CRBX"
              subtitle="Générateur de NFT | Janvier 2023" />
          </RouterLink>
        </div>
      </section> -->
      <!-- Fin des dernier projets -->


      <!-- Bouton Plus de Projet -->
      <!-- <section class="justify-center flex py-11 scroll-snap2">
        <nav class="navv 3xs:hidden sm:flex">
          <ul class="ull">
            <RouterLink class="" to="/projets">
              <li class="lii font-space-grotesk">
                Plus de projets
                <span></span><span></span><span></span><span></span>
              </li>
            </RouterLink>
          </ul>
        </nav>
        <div class="sm:hidden bg-Extended/red/900 uppercase rounded-2xl p-3">
          <RouterLink class="font-space-grotesk font-medium text-sm 2xs:text-base xs:text-lg text-Extended/red/50"
            to="/projets">
            Plus de projets
          </RouterLink>
        </div>
      </section> -->
      <!-- Fin du Bouton Plus de Projet  -->

      <!-- Footer -->
      <!-- <Footerc /> -->
    </div>
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
.snap { 
    max-width: 100% !important; 
    overflow-x: hidden !important; 
}

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
/* @media (min-width: 900px) {
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

} */

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