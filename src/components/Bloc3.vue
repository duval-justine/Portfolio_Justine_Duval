<template>
    <!-- Component Bloc 1 Page d'acceuil -->
    <div class="flex flex-row py-16 justify-center">
        <!-- Descktop -->
        <div>
            <!-- Image Rectangulaire -->
            <div
                class="3xs:hidden xs:relative xs:z-30 xs:container4 xs:overflow-hidden xs:mx-auto xs:flex xs:shadow-2xl xs:w-[291px] xs:h-[202px]   sm:w-[462px] sm:h-[320px]    md:w-[650px] md:h-[418px]">
                <img :src="img_1" class="w-full h-full object-cover" alt="">
            </div>
            <!-- Textes -->
            <div class="xs:flex xs:flex-col xs:gap-1 xs:mt-9 xs:items-end xs:mr-14 3xs:hidden">
                <h3
                    class="font-space-grotesk  text-Extended/true-gray/900 font-medium mr-3 uppercase  md:text-2xl    sm:text-xl    xs:text-lg">
                    {{
                        title
                    }}</h3>
                <div
                    class="border-Extended/true-gray/900 md:border-t-4 md:w-64    sm:border-t-2 sm:w-56    xs:border-2 xs:w-52">
                </div>
                <p
                    class="font-space-grotesk text-sm text-Extended/true-gray/900 font-light mr-3 md:text-sm    sm:text-xs   xs:text-xs">
                    {{ subtitle }}</p>
            </div>
        </div>
        <!-- Image Carrée -->
        <div>
            <div
                class="xs:container2 xs:overflow-hidden xs:mx-auto xs:shadow-2xl xs:-ml-14 sm:-ml-14 xs:mt-28 sm:mt-40 3xs:hidden  xs:flex xs:w-[200px] xs:h-[200px]    md:w-[382px] md:h-[382px]     sm:w-[256px] sm:h-[256px]">
                <img :src="img_2" class="w-full h-full object-cover" alt="">
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
.container4 {
    width: 650px;
    height: 418px;
}

.container2 {
    width: 382px;
    height: 382px;
}
</style>