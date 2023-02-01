<template>
  <div class="container z-0 h-[1024px] w-screen bg-gradient-to-b from-pastelbleu to-pastelrose">
    <Header class="relative z-10" />
    <Mongolfiere class="float-right mr-10" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Mongolfiere from "../components/Mongolfiere.vue";
export default {
  components: { Header, Mongolfiere }
}
</script>