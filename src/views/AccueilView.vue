<template>
  <div class="container z-0 bg-gradient-to-b from-pastelbleu to-pastelrose">
    <Header class="relative z-10" />
    <div class="flex flex-row gap-36 items-center">
      <div class="w-[750px] flex flex-col gap-4 ">
        <h1 class="font-space-grotesk font-medium text-6xl text-Extended/red/50 ml-20">Justine Duval</h1>
        <p class="font-space-grotesk font-light text-2xl text-Extended/red/50 ml-20">Étudiante en BUT MMI à Montbéliard
          et spécialisée dans le design pour devenir Infographiste ou Web-Designeuse.</p>
      </div>
      <MongolfiereNuages id="mongolfiere" class="float-right mr-10 z-20 w-full h-full object-contain relative " />
    </div>
    <div class="flex flex-col items-center gap-4">
      <RouterLink class="font-space-grotesk font-bold text-sm text-Extended/red/50 lg:text-lg lg:" to="/">
        SCROLL
      </RouterLink>
      <div class="border-t-4 w-8 rotate-90 border-Extended/red/50"></div>
    </div>
  </div>
  <div>
    <Bloc1 class="pt-48" />
  </div>
  <div id="hot-air-balloon"></div>
</template>

<script>
import Header from "../components/Header.vue";
import Bloc1 from "../components/Bloc1.vue";
import MongolfiereNuages from "../components/MongolfiereNuages.vue";
export default {
  components: { Header, MongolfiereNuages, Bloc1 }
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
</style>