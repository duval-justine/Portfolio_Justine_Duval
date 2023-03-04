<template>
    <div class="containervi group flex-col items-center">
        <RouterLink :to="lien">
            <!-- <div>
                <div class="absolute duration-300 containervi hover:opacity-100">
                    <h2 class="font-space-grotesk font-bold text-xl text-Extended/red/900 opacity-100">Test</h2>
                    <p>nizcbejvnmkkkkkkkkkkkkkkkkkkkkkk</p>
                </div>
                <div class="relative">
                    <img class="w-full object-cover hover:opacity-80" :src="image" alt="" />
                </div>
            </div> -->
            <div class="relative">
                <img class="w-full h-auto containervi" :src="image" alt="Image">
                <div
                    class="absolute containervi inset-0 flex justify-center items-center px-4 py-8 bg-black opacity-0 hover:opacity-80 transition-opacity">
                    <div class="text-left -mt-16 opacity-100">
                        <h3 class="text-lg font-space-grotesk font-bold text-Extended/red/900 mb-2">{{ titre }}
                        </h3>
                        <p class="text-sm font-space-grotesk font-normal text-Extended/red/50">{{ description }}
                        </p>
                    </div>
                    <div class="flex opacity-100 items-center justify-center ">
                        <button
                            class="bg-Extended/red/50 hover:bg-Extended/red/900 h-10 w-24 text-Extended/red/900 hover:text-Extended/red/50 font-bold py-2 px-4 rounded mt-40">Lire
                            plus</button>

                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>
  
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
    props: {
        image: String,
        lien: {
            type: String,
            default: "/",
        },
        titre: String,
        description: String,
    },
};
</script>

<style>
.containervi {
    width: 386px;
    height: 280px;
}

.hover\:opacity-100:hover {
    opacity: 1;
}
</style>