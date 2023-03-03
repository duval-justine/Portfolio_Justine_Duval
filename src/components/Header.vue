<template>
    <!-- Menu Format 3XS -->
    <div class="xs:hidden flex flex-row justify-between items-center z-50">
        <div>
            <RouterLink to="/">
                <Logo class="relative z-[90] h-10 mt-5 ml-5 " />
            </RouterLink>
        </div>
        <div>
            <!-- <label class="menu-icon">&#9776;</label> -->
            <input type="checkbox" id="active">
            <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
            <div class="wrapper">
                <ul class="font-space-grotesk text-[60px] font-bold   text-white">
                    <li>
                        <RouterLink to="/projetsco">Projets</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="lg:text-lg lg:" to="/">À Propos</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Fin du Menu Format 3XS -->


    <!-- Menu Format MD -->
    <div class="relative z-30 mx-10 hidden justify-between pt-7 md:flex">
        <RouterLink to="/">
            <Logo class="relative z-30 ml-8" />
        </RouterLink>
        <div>
            <nav>
                <ul
                    class=" mx-7 relative flex flex-shrink-0 flex-grow-0 items-center  justify-start gap-20 font-space-grotesk text-[24px] font-bold text-center   text-white pr-5 ">
                    <li>
                        <RouterLink class=" lg:text-lg " to="/projetsco">Projets</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="lg:text-lg lg:" to="/">À Propos</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- Fin du Menu Format MD -->
</template>


<script>
import Logo from "./icons/IconLogo.vue";
export default {
    components: { Logo }
}
</script>



<style>
/* Menu md:flex */
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

/* Fin Menu md:flex */



/* Menu 3xs:flex */
.wrapper {
    position: fixed;
    top: 0;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 60;
    background: #F87171;
    clip-path: circle(25px at calc(100% - 45px) 45px);
    transition: all 0.3s ease-in-out;
}

#active:checked~.wrapper {
    clip-path: circle(75%);
}

.menu-btn {
    position: fixed;
    z-index: 70;
    right: 20px;
    top: 20px;
    height: 35px;
    width: 35px;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;
    color: #fafafa;
    font-size: 25px;
    transition: all 0.3s ease-in-out;
}

#active:checked~.menu-btn {
    color: #fafafa;
}

#active:checked~.menu-btn i:before {
    content: "\00d7";
    /* Utilisation de l'entité HTML pour la croix */
    font-size: 2em;
}

.wrapper ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
}

.wrapper ul li {
    margin: 15px 0;
}

.wrapper ul li a {
    color: #fff;
    z-index: 80;
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    padding: 5px 30px;
    border-radius: 50px;
    background: #F87171;
    position: relative;
    line-height: 50px;
    transition: all 0.3s ease;
}

/* .wrapper ul li a:after {
    position: absolute;
    z-index: 90;
    content: "";
    background: #fff;
    width: 104%;
    height: 110%;
    right: 50px;
    top: 20px;
    border-radius: 50px;
    transform: scaleY(0);
    animation: rotate 1.5s linear infinite;
    transition: transform 0.3s ease;
} */

/* .wrapper ul li a:hover:after {
    transform: scaleY(1);
}

.wrapper ul li a:hover {
    color: #fff;
} */

input[type="checkbox"] {
    display: none;

    @keyframes rotate {
        0% {
            filter: hue-rotate(0deg);
        }

        100% {
            filter: hue-rotate(360deg);
        }
    }
}

/* Fin menu 3xs:flex */
</style>