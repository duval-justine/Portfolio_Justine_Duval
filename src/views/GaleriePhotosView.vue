<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/" class="h-[100vh]" />
    </section>

    <!-- Footer -->
    <Footerc />
</template>

<script>
import TopPage from "../components/TopPage.vue";
import Footerc from "../components/Footer.vue";

export default {
    components: { TopPage, Footerc },

}
</script>

