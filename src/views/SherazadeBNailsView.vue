<template>
    <!-- Top Page -->
    <section>
        <TopPage img_test="/images/Sherazade/Sherazade_Couverture.webp" class="h-[100vh]" />
    </section>

    <img src="../../public/images/Sherazade/Sherazade_DecorationTop.png" class="absolute right-0" alt="">
    <!-- Présentation -->
    <section>
        <div class="flex flex-col justify-center items-center mt-28">
            <h1 class="font-space-grotesk font-semibold text-3xl text-Extended/true-gray/900 text-center">Affiche Tarifs
            </h1>
            <div class=" border-t-[3px] mt-14 w-[404px] border-Extended/true-gray/900"></div>
            <div class="flex flex-row gap-52 items-start font-karla text-Extended/true-gray/900 text-center mt-14 mb-28">
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Client</p>
                    <p class="font-normal text-2xl">HomeSalon ShérazadeBNails</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Date</p>
                    <p class="font-normal text-2xl">Mars 2023</p>
                </div>
                <div class="w-48">
                    <p class="font-extrabold text-base uppercase">Logiciel</p>
                    <p class="font-normal text-2xl">Photoshop</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Présentation -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">01</p>
            </div>
            <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 ">HomeSalon ShérazadeBNails :
            </h2>
        </div>

        <!-- Texte -->
        <div class="flex flex-row gap-24 items-center">
            <div
                class="flex flex-col gap-3 ml-36 font-karla text-lg font-light text-Extended/true-gray/900 mt-4 w-[900px] text-justify">
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque convallis quam ornare non nisi eu auctor massa.
                    Lacus massa nam aliquet aenean varius eu morbi urna. Urna donec amet morbi cursus vitae interdum
                    vitae.
                    Sit rutrum euismod condimentum tristique. Sodales vel est ligula odio vitae vel quis a varius. Duis
                    duis
                    sapien blandit erat non euismod et. Sagittis tempor in ut in arcu ut. Amet curabitur odio neque ac
                    proin
                    euismod lorem nunc vestibulum. Tempus lorem enim dolor eget.</p>
            </div>
            <div>
                <img src="../../public/images/Sherazade/logosherazadebnails.svg" class="w-auto h-44 object-cover mr-9"
                    alt="">
            </div>
        </div>
    </section>

    <!-- Demande de la Cliente -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">02</p>
            </div>
            <h2 class="font-karla font-bold text-2xl text-Extended/true-gray/900 ">Demande de la cliente :
            </h2>
        </div>
        <!-- Texte -->
        <div class="flex flex-col gap-3 ml-36 font-karla text-lg font-light text-Extended/true-gray/900 mt-4 mr-72">
            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque convallis quam ornare non nisi eu auctor massa.
                Lacus massa nam aliquet aenean varius eu morbi urna. Urna donec amet morbi cursus vitae interdum
                vitae.
                Sit rutrum euismod condimentum tristique. Sodales vel est ligula odio vitae vel quis a varius. Duis
                duis
                sapien blandit erat non euismod et. Sagittis tempor in ut in arcu ut. Amet curabitur odio neque ac
                proin
                euismod lorem nunc vestibulum. Tempus lorem enim dolor eget.</p>
        </div>
    </section>

    <!-- Le MoodBoard -->
    <section>
        <!-- Titre -->
        <div class="mt-16 flex flex-row gap-10 items-center">
            <div class="flex flex-row gap-4 items-center">
                <div
                    class=" 3xs:border-t-2 2xs:border-t-[3px] 3xs:w-2 2xs:w-[13px] xs:w-[57px] border-Extended/true-gray/900">
                </div>
                <p class="font-space-grotesk font-bold text-3xl text-Extended/red/900">05</p>
            </div>
            <h2 class="font-space-grotesk font-bold text-2xl text-Extended/true-gray/900 ">Notre MoodBoard :
            </h2>
        </div>
        <div>
            <div class="bg-[#17181F]">
                <div class="cases-carousel my-4">
                    <div class="case-item">
                        <img src="../../public/images/CRBX/CRBX_Scroll1.jpg" class="imgscroll1" alt="">
                    </div>
                    <div class="case-item">
                        <img src="../../public/images/CRBX/CRBX_Scroll2.jpg" class="imgscroll1" alt="">
                    </div>
                    <div class="case-item">
                        <img src="../../public/images/CRBX/CRBX_Scroll3.jpg" class="imgscroll1" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import TopPage from "../components/TopPage.vue";

gsap.registerPlugin(ScrollTrigger);
export default {
    components: { TopPage },
    mounted() {
        // function directionalSnap(increment) {
        //     return function (end) {
        //         var pow = Math.pow(10, (end + "").length - 2);
        //         return Math.round(end / increment) * increment * pow / pow;
        //     }
        // }
        let sections = gsap.utils.toArray(".case-item");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".cases-carousel",
                pin: true,
                scrub: 0.1,
                // snap: directionalSnap(1 / (sections.length - 1)),
                end: "+=3000"
            }
        });
    }


}
</script>


<style>
html {
    width: 100%;
    height: 100%;
}

body,
.parent-element {
    margin: 0;
    padding: 0;
}


.cases-carousel {
    overflow-x: hidden;
    width: 350%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
}



.slide {
    display: flex;
    justify-content: center;
    align-items: center;
}



.blocHorizontal {
    height: 100vh;
    display: flex;
    flex-direction: row;
    width: 300vw;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
    overflow: hidden;
}

.containerscrollpro {
    width: 100vw;
    height: 200vh;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-x: hidden;
    /* pour ie et mozilla */
    -ms-overlow-style: none;
    scrollbar-width: none;
}

::-webkit-scrollbar {
    display: none;
}
</style>