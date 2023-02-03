<template>
    <div class="flex flex-row py-32 px-64">
        <div>
            <div class="container1 overflow-hidden mx-auto shadow-2xl">
                <img :src="img_1" class="w-full h-full object-cover" alt="">
            </div>
        </div>
        <div>
            <div class="flex flex-col gap-1 mt-20">
                <h3 class="font-space-grotesk text-2xl text-Extended/true-gray/900 font-medium ml-3">{{ title }}</h3>
                <div class="border-t-4 w-64  border-Extended/true-gray/900"></div>
                <p class="font-space-grotesk text-sm text-Extended/true-gray/900 font-light ml-3 ">{{ subtitle }}</p>
            </div>
            <div class="container2 overflow-hidden mx-auto shadow-2xl -ml-28 mt-20">
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
}</script>

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