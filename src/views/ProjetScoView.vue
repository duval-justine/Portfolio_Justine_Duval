<template>
    <main>
        <!-- Component Accueil -->
        <section>
            <TopPage img_test="" class="h-[100vh] bg-zinc-500" />
        </section>

        <!-- Bouton différentes section  -->
        <section>
            <div>
                <nav>
                    <ul
                        class=" mt-10 mb-96 relative flex flex-shrink-0 items-center justify-center flex-grow-0 gap-14 font-space-grotesk text-[px] font-bold uppercase text-Extended/true-gray/900 ">
                        <li>
                            <RouterLink to="/projetsco">Scolaire</RouterLink>
                        </li>
                        <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                        <li>
                            <RouterLink to="/">Alternance</RouterLink>
                        </li>
                        <div class=" border-t-[3px] w-[23px] border-Extended/true-gray/900"></div>
                        <li>
                            <RouterLink to="/">Personnel</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
</template>

<script>
import TopPage from "../components/TopPage.vue";
export default {
    components: { TopPage }
}
</script>

<style>
nav ul li {
    position: relative;
}

nav ul li a::after {
    content: "";
    width: 0;
    height: 3px;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #F87171;
    transition: width 0.3s;
}

nav ul li a:hover::after {
    width: 50%;
}
</style>