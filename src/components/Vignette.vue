<template>
    <!-- Vignette 3XS to XS -->
    <!-- <div class=" flex sm:hidden containervi group flex-col items-center">
        <RouterLink :to="lien">
            <div class="relative">
                <img class="w-full h-auto containervi" :src="image" alt="Image">
                <div
                    class="absolute bottom-0 h-2 flex flex-row gap-1 justify-center items-center px-4 py-10 bg-black opacity-60">
                    <div class="text-left opacity-100">
                        <h3 class="text-xs font-space-grotesk font-bold text-Extended/red/900 mb-2">{{ titre }}
                        </h3>
                        <p class="text-[10px] font-space-grotesk font-normal text-Extended/red/50 ">{{ date }}
                        </p>
                    </div>
                    <div class="flex items-center justify-center ">
                        <button
                            class="bg-Extended/red/900 h-8 w-20  text-Extended/red/50 font-bold text-xs py-2 px-4 rounded ">Lire
                            plus</button>

                    </div>
                </div>
            </div>
        </RouterLink>
    </div> -->

    <div class="sm:hidden m-5 w-[313px] h-[370px] relative">
        <img class="rounded-[30px] absolute w-full h-[313px] object-cover shadow-xl " :src="image" alt="">
        <div
            class="absolute h-[313px] rounded-[30px] inset-0 bg-gradient-to-b from-transparent to-Extended/true-gray/900 opacity-75">
        </div>

        <div>
            <a href="">
                <RouterLink :to="lien">
                    <button
                        class="w-[158px] h-11 absolute left-[139.5px] top-[290.5px] rounded-3xl bg-Extended/red/900 shadow-xl">
                        <p class="absolute text-lg ml-7 -mt-3 font-space-grotesk font-medium text-Extended/red/50">
                            Lire la
                            suite</p>
                    </button>
                </RouterLink>
            </a>
        </div>
        <h4 class="absolute text-xl font-bold text-left ml-3 text-Extended/red/50 mt-60 font-space-grotesk">{{ titrexs }}
        </h4>
        <p class="absolute text-xs text-left ml-3 mt-[270px] mr-9 text-Extended/red/50 font-light font-space-grotesk">{{
            texte }}</p>
    </div>

    <!-- Vignette SM to MD -->
    <div class=" hidden sm:flex containervi group flex-col items-center">

        <div class="relative">
            <img class="w-full h-auto containervi" :src="image" alt="Image">
            <div
                class="absolute containervi inset-0 flex justify-center items-center px-4 py-8 bg-black opacity-0 hover:opacity-80 transition-opacity">
                <div class="text-left -mt-16 opacity-100">
                    <h3 class="text-lg font-space-grotesk font-bold text-Extended/red/900 mb-2">{{ titre }}
                    </h3>
                    <p class="text-sm font-space-grotesk font-normal text-Extended/red/50">{{ description }}
                    </p>
                    <p class="text-xs font-space-grotesk font-normal text-Extended/red/50 mt-4">{{ date }}
                    </p>
                </div>
                <div class="flex opacity-100 items-center justify-center ">
                    <RouterLink
                        class="bg-Extended/red/50 hover:bg-Extended/red/900 h-10 w-24 text-Extended/red/900 hover:text-Extended/red/50 font-bold py-2 px-4 rounded mt-40"
                        :to="lien">
                        Lire plus
                    </RouterLink>
                </div>
            </div>
        </div>
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
        titrexs: String,
        description: String,
        date: String,
        texte: String,
    },
};
</script>

<style>
@media (min-width: 900px) {
    .containervi {
        width: 386px;
        height: 280px;
    }
}

@media (max-width: 900px) {
    .containervi {
        width: 291px;
        height: 211px;
    }
}

.hover\:opacity-100:hover {
    opacity: 1;
}
</style>