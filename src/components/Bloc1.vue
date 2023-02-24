<template>
    <!-- Component Bloc 1 Page d'acceuil -->
    <div class="flex flex-row justify-center py-16  ">
        <div>
            <!-- Image Rectangulaire -->
            <div
                class="3xs:hidden   xs:container1 xs:overflow-hidden xs:mx-auto xs:shadow-2xl xs:w-full xs:h-64 xs:flex   sm:w-full sm:h-96    md:w-full md:h-[450px]">
                <img :src="img_1" class="w-full h-full object-cover" alt="">
            </div>
        </div>

        <!-- Descktop -->
        <div>
            <div class="xs:flex xs:flex-col xs:gap-1 xs:mt-20 3xs:hidden">
                <!-- Textes -->
                <h3
                    class="font-space-grotesk text-Extended/true-gray/900 font-medium ml-3 uppercase    md:text-2xl    sm:text-xl    xs:text-lg">
                    {{ title }}</h3>
                <div
                    class="  border-Extended/true-gray/900    md:border-t-4 md:w-64    sm:border-t-2 sm:w-56    xs:border-2 xs:w-52">
                </div>
                <p
                    class="font-space-grotesk  text-Extended/true-gray/900 font-light ml-3    md:text-sm    sm:text-xs   xs:text-xs ">
                    {{ subtitle }}
                </p>
            </div>
            <!-- Image Carrée -->
            <div
                class=" 3xs:hidden    xs:container2 xs:overflow-hidden xs:mx-auto xs:shadow-2xl xs:mt-6 xs:-ml-28 sm:mt-20  xs:flex xs:w-[200px] xs:h-[200px]    md:w-[382px] md:h-[382px]     sm:w-[256px] sm:h-[256px]">
                <img :src="img_2" class="w-full h-full object-cover" alt="">
            </div>
        </div>

        <!-- Responsive -->
        <div class="3xs:flex xs:hidden">
            <div class="flex flex-col gap-1 mt-20  justify-center">
                <!-- Image Carrée -->
                <div
                    class="container2 overflow-hidden mx-auto shadow-2xl   2xs:w-[400px] 2xs:h-[400px]   3xs:w-[280px] 3xs:h-[280px]">
                    <img :src="img_2" class="w-full h-full object-cover " alt="">
                </div>
                <!-- Textes -->
                <h3 class="font-space-grotesk text-Extended/true-gray/900 font-medium uppercase 2xs:text-xl 3xs:text-base">
                    {{ title }}</h3>
                <div class="  border-Extended/true-gray/900 2xs:border-t-[3px] 2xs:w-72 3xs:border-t-[3px] 3xs:w-52"></div>
                <p class="font-space-grotesk  text-Extended/true-gray/900 font-light 2xs:text-base 3xs:text-xs">{{ subtitle
                }}</p>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    props: {
        img_1: String,
        img_2: String,
        title: String,
        subtitle: String,
    },
}
</script>

<style>
.container1 {
    width: 650px;
    height: 450px;
}

.container2 {
    width: 382px;
    height: 382px;
}
</style>