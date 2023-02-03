<template>
    <div class="flex flex-row py-32 px-64">
        <div>
            <div class="relative container2 overflow-hidden mx-auto shadow-2xl mt-20 z-30">
                <img :src="img_1" class="w-full h-full object-cover" alt="">
            </div>
            <div class="flex flex-col gap-1 mt-8 items-end mr-32">
                <h3 class="font-space-grotesk text-2xl text-Extended/true-gray/900 font-medium mr-3 uppercase">{{
                    title
                }}</h3>
                <div class="border-t-4 w-48  border-Extended/true-gray/900"></div>
                <p class="font-space-grotesk text-sm text-Extended/true-gray/900 font-light mr-3 ">{{ subtitle }}</p>
            </div>
        </div>
        <div>
            <div class="container3 overflow-hidden mx-auto shadow-2xl z-10 -ml-32">
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
.container2 {
    width: 382px;
    height: 382px;
}

.container3 {
    width: 650px;
    height: 595px;
}
</style>