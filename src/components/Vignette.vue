<template>
    <div class="containervi group flex-col items-center">
        <RouterLink :to="lien">
            <div class="relative">
                <img class="w-full object-cover hover:opacity-40" :src="image" alt="" />
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
    },
};
</script>

<style>
.containervi {
    width: 386px;
    height: 280px;
}
</style>