<template>
  <div class="bg-white py-5 py-md-10">
    <CoreMidScreenLayout>
      <v-container>
        <v-row align="center">
          <v-col cols="12" sm="4">
            <div class="text-h5" style="max-width: 20ch">
              <b>
                <!-- <span class="text-primary-accent">{{ appName }} : </span> -->
                Votre portail polyvalent pour le commerce et les opportunités
                d'emploi
              </b>
            </div>
            <div
              class="text-subtitle-2 text-grey-darken-1 mt-8"
              style="max-width: 30ch; font-weight: 500"
            >
              <span>
                <!-- Une plateforme innovante qui combine le meilleur du commerce
                électronique et de la recherche d'emplois en un seul endroit. -->
                Notre mission est de simplifier votre vie quotidienne en vous
                offrant un accès facile à une large gamme de produits de qualité
                et à des opportunités de carrière enrichissantes.
              </span>
            </div>
          </v-col>
          <v-col cols="12" sm="4" v-for="section in sections">
            <div class="d-flex flex-column">
              <div
                class="bg-card card-outlined pa-2 rounded-lg"
                style="width: fit-content"
              >
                <v-icon :icon="section.icon"></v-icon>
              </div>
              <div class="text-subtitle-1 my-2">
                <b>{{ section.title }}</b>
              </div>
              <div class="text-caption">
                <span>{{ section.description }}</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </CoreMidScreenLayout>
  </div>
</template>

<script setup>
const appName = import.meta.env.VITE_APP_NAME;

const sections = [
  {
    icon: "mdi-creation-outline",
    title: "Commerce Électronique",
    description:
      "Une large gamme de produits, de la mode aux gadgets technologiques, en passant par les produits de beauté et bien d'autres encore.",
  },
  {
    icon: "mdi-briefcase-outline",
    title: "Recherche d'Emplois",
    description:
      "Trouver l'emploi qui correspond à vos compétences et à vos aspirations professionnelles.",
  },
];
</script>

<style lang="css" scoped></style>
