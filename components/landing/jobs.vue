<template>
  <div class="jobs" id="jobs">
    <LandingTitle title="Recherche d'Emplois" />
    <CoreMidScreenLayout :lg="10" :xl="9">
      <div class="text-center mx-auto mt-5" style="max-width: 80ch">
        <!-- data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200" -->
        <span
          >Un marché dynamique où les talents rencontrent les opportunités.
          Découvrez des postes qui enflamment votre passion, connectez-vous avec
          des entreprises innovantes et tracez votre voie vers le succès.
          Libérez votre potentiel et redéfinissez ce que le travail signifie
          pour vous en quelques étapes simples.</span
        >
      </div>
      <v-divider class="my-10"></v-divider>
      <v-container class="pa-0 mb-10" fluid>
        <v-row>
          <v-col
            v-for="({ title, description, icon }, i) in jobs"
            :key="i"
            cols="12"
            sm="4"
            class="py-4 py-md-0 overflow-auto"
          >
            <div
              class="rounded-lg bg-transparent pa-2 pa-md-5 position-relative overflow-auto"
            >
              <!-- :data-aos="i % 2 ? 'fade-left' : 'fade-right'"
              data-aos-duration="1500"
              data-aos-delay="400" -->
              <div class="d-flex flex-column">
                <div
                  class="bg-card card-outlined pa-2 rounded-lg"
                  style="width: fit-content"
                >
                  <Icon :name="icon" size="1.5rem" />
                </div>
                <div class="text-subtitle-1 my-2">
                  <b>{{ title }}</b>
                </div>
                <div class="text-caption">
                  <span>{{ description }}</span>
                </div>
              </div>
              <div
                class="position-absolute text-h1 font-weight-black"
                style="top: 50px; right: 0; z-index: 2; opacity: 0.075"
              >
                <b>{{ i + 1 }}</b>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="text-center">
        <!-- data-aos-duration="1000"
            data-aos-delay="100"
            data-aos="fade-up" -->
        <v-btn color="link" rounded flat :to="{ name: 'jobs' }">
          <span>découvrir les emplois</span>
        </v-btn>
      </div>
    </CoreMidScreenLayout>
  </div>
</template>

<script setup>
const jobs = [
  {
    title: "Parcourir les offres d'emploi",
    description:
      "Parcourez facilement dans notre Job Explorer, où des opportunités attendent votre découverte.",
    banner:
      "https://www.getfoundquick.com/wp-content/uploads/2019/12/shutterstock_623585756.jpg",
    icon: "line-md:compass-loop",
  },
  {
    title: "Créer un compte",
    description:
      "Débloquez des possibilités illimitées en un seul clic en rejoignant notre communauté. ",
    banner:
      "https://www.clipartkey.com/mpngs/m/22-224474_group-people-icon-png-clipart-png-download-social.png",
    icon: "line-md:account",
  },
  {
    title: "Obtenez votre emploi de rêve",
    description:
      "Lancez-vous dans la carrière de vos rêves avec nous. Votre voyage vers le succès commence ici.",
    banner:
      "https://media.bizj.us/view/img/10332478/howtobusinesssuccess*1200xx3992-2253-0-0.jpg",
    icon: "line-md:briefcase",
  },
];
</script>

<style lang="css" scoped></style>
