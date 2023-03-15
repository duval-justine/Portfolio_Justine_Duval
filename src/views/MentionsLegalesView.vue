<template>
    <main>
        <!-- Component Accueil -->
        <section>
            <TopPage img_test="/images/MentionsLegales.webp" class="h-[100vh] bg-zinc-500" />
        </section>

        <!-- Contenu -->

        <!-- Titre -->
        <section>
            <h1
                class="font-space-grotesk font-extrabold 3xs:text-2xl 2xs:text-3xl md:text-4xl text-Extended/true-gray/900 mt-10 3xs:mx-3 md:mx-5 underline">
                Mentions Légales :</h1>
        </section>

        <!-- Contact -->
        <section>
            <h2
                class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 mt-5 3xs:mx-3 md:mx-5 ">
                Contact</h2>
            <div
                class="flex flex-col gap-1 mt-3 font-karla font-light 3xs:text-sm 2xs:text-base md:text-lg 3xs:mx-4 md:mx-6">
                <p>• Propriétaire du site: Justine Duval</p>
                <p>• Adresse : 4, place Tharradin 25 200 Montbéliard</p>
                <p>• Adresse e-mail: justinepro.duval@gmail.com</p>
                <p>• Hébergeur du site : Infomaniak</p>
                <p>• Adresse de l'hébergeur : Rue Eugène Marziano 25 1227 Les Acacias (GE)</p>
            </div>
        </section>

        <!-- Droits -->
        <section>
            <h2
                class="font-space-grotesk font-bold 3xs:text-lg 2xs:text-xl md:text-2xl text-Extended/true-gray/900 mt-5 3xs:mx-3 md:mx-5 ">
                Droit</h2>
            <h3
                class="font-space-grotesk font-medium 3xs:text-sm 2xs:text-base  md:text-lg text-Extended/true-gray/900 mt-3 3xs:mx-3 md:mx-5 ">
                Droits d'auteur et propriété intellectuelle :</h3>
            <div
                class="flex flex-col gap-1 mt-3 font-karla font-light 3xs:text-sm 2xs:text-base md:text-lg 3xs:mx-3 md:mx-5 3xs:w-11/12 sm:w-3/4 text-justify">
                <p>Toutes les images présentées sur ce site web sont la propriété exclusive de Justine Duval. Tous les
                    droits d'auteur et de propriété intellectuelle sont réservés. </p>
                <p>Aucune reproduction, distribution,
                    modification ou utilisation des images n'est autorisée sans l'autorisation préalable écrite de Justine
                    Duval.</p>
            </div>
            <h3
                class="font-space-grotesk font-medium 3xs:text-sm 2xs:text-base  md:text-lg text-Extended/true-gray/900 mt-4 3xs:mx-3 md:mx-5 ">
                Responsabilité :
            </h3>
            <div
                class="flex flex-col gap-1 mt-3 font-karla font-light 3xs:text-sm 2xs:text-base md:text-lg 3xs:mx-3 md:mx-5 3xs:w-11/12 sm:w-3/4 text-justify">
                <p>Les informations présentées sur ce site web sont fournies à titre informatif uniquement et peuvent être
                    modifiées à tout moment sans préavis.
                </p>
                <p>Justine Duval ne peut être tenue responsable de l'utilisation qui
                    pourrait être faite des informations fournies sur ce site web.</p>
            </div>
            <h3
                class="font-space-grotesk font-medium 3xs:text-sm 2xs:text-base  md:text-lg text-Extended/true-gray/900 mt-4 3xs:mx-3 md:mx-5 ">
                Liens hypertextes :
            </h3>
            <div
                class="flex flex-col gap-1 mt-3 font-karla font-light 3xs:text-sm 2xs:text-base md:text-lg 3xs:mx-3 md:mx-5 3xs:w-11/12  text-justify">
                <p>Les liens hypertextes présents sur ce site web peuvent renvoyer vers d'autres sites web qui ne sont pas
                    contrôlés par Justine Duval.

                </p>
                <p>
                    Justine Duval ne peut être tenue responsable du contenu de ces sites web.
                </p>
            </div>
            <h3
                class="font-space-grotesk font-medium 3xs:text-sm 2xs:text-base  md:text-lg text-Extended/true-gray/900 mt-4 3xs:mx-3 md:mx-5 ">
                Protection des données personnelles :
            </h3>
            <div
                class="flex flex-col gap-1 mt-3 font-karla font-light 3xs:text-sm 2xs:text-base md:text-lg 3xs:mx-3 md:mx-5 3xs:w-11/12 sm:w-3/4 text-justify">
                <p>Les données personnelles collectées sur ce site web ne seront utilisées que dans le cadre de votre
                    demande ou de votre inscription.

                </p>
                <p>

                    Elles ne seront pas transmises à des tiers sans votre autorisation préalable.
                </p>
            </div>
            <div class="flex flex-col gap-1 mt-5 mb-28 font-karla font-light 3xs:text-sm 2xs:text-base md:text-lg 3xs:mx-3
                        md:mx-5 3xs:w-11/12 sm:w-3/4 text-justify">
                <p>
                    Les présentes mentions légales sont régies par le droit français. </p>
                <p>Tout litige relatif à l'utilisation du
                    site sera soumis à la compétence exclusive des tribunaux français.</p>
            </div>
        </section>

        <!-- Footer -->
        <Footerc />
    </main>
</template>

<script>
import TopPage from "../components/TopPage.vue";
import Footerc from "../components/Footer.vue";

export default {
    components: { TopPage, Footerc },

}
</script>

