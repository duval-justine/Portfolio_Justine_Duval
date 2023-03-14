<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/GaleriePhotos/Couverture.webp" class="h-[100vh]" />
    </section>


    <section class="mt-20 mb-48">
        <ul class="galery">
            <li><img src="../../public/images/GaleriePhotos/1.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/2.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/3.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/4.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/5.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/6.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/7.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/8.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/9.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/10.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/11.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/12.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/13.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/14.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/15.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/16.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/17.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/18.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/19.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/20.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/21.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/22.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/23.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/24.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/25.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/26.webp" alt=""></li>
            <li><img src="../../public/images/GaleriePhotos/27.webp" alt=""></li>

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





