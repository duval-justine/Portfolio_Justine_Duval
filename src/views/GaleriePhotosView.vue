<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/GaleriePhotos/Couverture.webp" class="h-[100vh]" />
    </section>


    <section>
        <ul class="galery">
            <li><img src="../../public/images/Apropos_Justine.webp" alt=""></li>
        </ul>
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

<style>
.galery {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2vmin;
    padding: 0 14px;
}

.galery::after {
    content: '';
    display: block;
    flex-grow: 10;
}

.galery li {
    list-style-type: none;
    height: 250px;
    flex-grow: 1;
}

.galery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>





