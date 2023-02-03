<template>
    <section>
        <div class="container0 ">
            <img :src="img_test" class="container0 h-screen z-0 w-full object-cover absolute" alt="">
            <!-- Header -->
            <Header class="relative z-10 " />

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