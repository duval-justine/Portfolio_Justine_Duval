<template>
  <div class="container z-0 h-[1024px] w-screen bg-gradient-to-b from-pastelbleu to-pastelrose">
    <Header class="relative z-10" />
    <div class="">
      <MongolfiereNuages class="float-right mr-10 z-20" />
    </div>

  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MongolfiereNuages from "../components/MongolfiereNuages.vue";
export default {
  components: { Header, MongolfiereNuages }
}
</script>