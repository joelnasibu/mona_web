<template>
  <v-container class="pa-0" fluid>
    <v-row class="ma-auto">
      <v-col
        cols="6"
        :sm="12 / links.length"
        v-for="({ title, children, socials }, i) in links"
        :key="i"
      >
        <CoreContentTitle :title="title" />
        <v-list density="compact" class="pa-0 mt-4 bg-transparent">
          <div v-if="children">
            <v-list-item
              class="pa-0 text-caption light-link"
              density="compact"
              lines="false"
              v-for="({ title }, j) in children"
              :key="j"
            >
              <span>{{ title }}</span>
            </v-list-item>
          </div>
          <div class="d-flex" v-if="socials" style="gap: 10px">
            <div
              class="cursor-pointer light-link"
              v-for="({ title, icon }, b) in socials"
              :key="b"
              :title="title"
            >
              <Icon :name="`line-md:${icon}`" size="1.2rem" />
            </div>
          </div>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const links = [
  {
    title: "customer services",
    children: [
      { title: "Help center", route: "" },
      { title: "Report abuse", route: "" },
      { title: "Submit dispute", route: "" },
      { title: "Policies & rules", route: "" },
    ],
  },
  {
    title: "about us",
    children: [
      { title: "About Skill Up", route: "" },
      { title: "Carreers", route: "" },
      { title: "Blog", route: "" },
      { title: "Investor relations", route: "" },
    ],
  },
  {
    title: "Sell on Skill Up",
    children: [
      { title: "Supplier membership", route: "" },
      { title: "Sell on Skill Up", route: "" },
      { title: "Advertise your product", route: "" },
      { title: "Partner program", route: "" },
    ],
  },
  {
    title: "Follow us on",
    socials: [
      { title: "Facebook", route: "", icon: "facebook" },
      { title: "Instagram", route: "", icon: "instagram" },
      { title: "Twitter-X", route: "", icon: "twitter-x" },
    ],
  },
];
</script>

<style lang="css" scoped></style>
