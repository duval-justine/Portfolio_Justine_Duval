<template>
    <div class="flex flex-row py-32 px-64">
        <div>
            <div class="relative z-30 container4 overflow-hidden mx-auto shadow-2xl">
                <img :src="img_1" class="max-width: 100% h-auto object-cover" alt="">
            </div>
            <div class="flex flex-col gap-1 mt-9 items-end mr-14">
                <h3 class="font-space-grotesk text-2xl text-Extended/true-gray/900 font-medium mr-3 uppercase">{{
                    title
                }}</h3>
                <div class="border-t-4 w-[330px]  border-Extended/true-gray/900"></div>
                <p class="font-space-grotesk text-sm text-Extended/true-gray/900 font-light mr-3 ">{{ subtitle }}</p>
            </div>
        </div>
        <div>
            <div class="container2 overflow-hidden mx-auto shadow-2xl -ml-14 mt-40">
                <img :src="img_2" class="w-full object-cover" alt="">
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