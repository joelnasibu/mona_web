<template>
  <div>
    <LandingTitle title="Découvrez Smartsell" />
    <div class="py-5 text-body-2">
      <CoreMidScreenLayout :lg="8" :xl="7">
        <v-expansion-panels class="rounded-lg overflow-hidden" eager>
          <v-expansion-panel v-for="({ q, a }, i) in faq" elevation="0">
            <v-expansion-panel-title>
              <div class="text-body-2" v-html="q"></div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="text-subtitle-2" style="font-weight: 520">
                <span>{{ a }}</span>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </CoreMidScreenLayout>
    </div>
  </div>
</template>

<script setup>
const faq = [
  {
    q: "<span>Pourquoi <b>SMARTSELL</b>?</span>",
    a: "Smartsell est créé dans le but de lutter contre le chômage et ouvrir un réseau qui facilitera le commerce en ligne, rapprocher le Client aux Boutiquiers et vice-versa, faciliter le marqueting des produits etc.",
  },
  {
    q: "<span>Qu'est-ce que <b>CEMADEF</b>?</span>",
    a: "Le CEMADEF est un centre multidisciplinaire d'appui pour le développement dela femme et famille, créé sous l'initiative de Mme Fanny Ukety. Le CEMADEF vise à apporter sa contribution à l'amélioration des conditions de vie des familles démunies dans la province de l'Ituri, par l'autonomisation socio-économique des femmes.",
  },
  {
    q: "<span>Quel est l'objectif principal du projet <b>SMARTSELL</b> dans la ville de Bunia?</span>",
    a: "Notre objectif principal est de renforcer les capacités et l'appui à l'entrepreneuriat des jeunes dans la ville de Bunia.",
  },
  {
    q: "<span>Quels services propose <b>SMARTSELL</b>?</span>",
    a: "Notre plateforme propose deux modules principaux : un module de e-commerce pour acheter et vendre des produits en ligne, et un module de recherche d'emploi pour trouver des opportunités professionnelles et postuler à des offres d'emploi.",
  },
  {
    q: "Puis-je utiliser le même compte pour les deux modules?",
    a: "Oui, un seul compte utilisateur vous permet d'accéder aux deux modules de la plateforme.",
  },
  {
    q: "Y a-t-il des frais pour utiliser la plateforme?",
    a: "L'inscription et l'utilisation de base de la plateforme sont gratuites. Cependant, certaines fonctionnalités avancées ou services premium peuvent nécessiter des frais supplémentaires.",
  },
  {
    q: "<span>Quels sont les avantages d'utiliser <b>SMARTSELL</b>?</span>",
    a: "Smartsell offre une interface conviviale, une sécurité renforcée pour les transactions, une large gamme de produits, et des outils puissants pour la recherche d'emploi. De plus, elle propose des fonctionnalités avancées pour les utilisateurs professionnels et les entreprises.",
  },
];
</script>

<style lang="css" scoped></style>
