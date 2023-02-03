<template>
    <div class="relative z-30 mx-10 hidden justify-between pt-7 md:flex">
        <RouterLink to="/">
            <Logo class="relative z-30 ml-8" />
        </RouterLink>
        <div>
            <nav>
                <ul class=" mx-7
        relative
        flex flex-shrink-0 flex-grow-0
        items-center
        justify-start
        gap-20
        font-space-grotesk
        text-[24px]
        font-bold
        text-white pr-5
      ">
                    <li>
                        <RouterLink class=" lg:text-lg " to="/">Projets</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="lg:text-lg lg:" to="/">À Propos</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import Logo from "./icons/IconLogo.vue";
export default {
    components: { Logo }
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