<template>
  <ClientOnly>
<<<<<<< HEAD
    <v-navigation-drawer color="card" location="start" class="hide-scrollbar" temporary width="200"
      v-model="catDrawerState">
      <v-list density="compact" class="pa-0 hide-scrollbar">
        <div class="position-sticky bg-white text-caption" style="top: 0; z-index: 1">
          <input type="search" placeholder="Search..." class="px-3 w-100 filter-input bg-card" autofocus
            v-model="search" />
=======
    <v-navigation-drawer
      color="card"
      location="start"
      class="hide-scrollbar"
      temporary
      :width="smallSize ? 200 : 300"
      v-model="catDrawerState"
    >
      <v-list density="compact" class="pa-0 hide-scrollbar">
        <div
          class="position-sticky bg-white text-caption"
          style="top: 0; z-index: 1"
        >
          <input
            type="search"
            placeholder="Search..."
            class="px-3 w-100 filter-input bg-card"
            autofocus
            v-model="search"
          />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
          <v-divider></v-divider>
        </div>
        <div class="" v-for="item in categories" :key="item.id">
          <v-list-item class="px-0" @click="handleRedirect(item.category)">
            <template v-slot:prepend>
<<<<<<< HEAD
              <v-card flat class="rounded-0 bg-transparent" width="70" height="20">
=======
              <v-card
                flat
                class="rounded-0 bg-transparent"
                width="70"
                height="20"
              >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                <v-img :src="item.image" :lazy-src="item.image"></v-img>
              </v-card>
            </template>
            <div class="text-caption pl-2">
              <p class="break-word">
                {{ item.category }}
              </p>
            </div>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
        </div>
      </v-list>
<<<<<<< HEAD

=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
    </v-navigation-drawer>
  </ClientOnly>
</template>

<script setup>
const emits = defineEmits(["close"]);

<<<<<<< HEAD
import { useCategoryStore } from "~/store/categories";
const { toggleStatus } = useCategoryStore()
const { categories: list, openCategoryDrawer } = storeToRefs(useCategoryStore());

const { sanitizeTitleForRoute, filterDataPerField } = useHelpers();
const search = ref("")
const categories = computed(() => {
  return filterDataPerField(list.value, search.value)
})
=======
const { smAndDown } = useDisplay();
const { isMobile } = useDevice();
const smallSize = computed(() => {
  return isMobile || smAndDown;
});

import { useDisplay } from "vuetify";
import { useCategoryStore } from "~/store/categories";
const { toggleStatus } = useCategoryStore();
const { categories: list, openCategoryDrawer } = storeToRefs(
  useCategoryStore()
);

const { sanitizeTitleForRoute, filterDataPerField } = useHelpers();
const search = ref("");
const categories = computed(() => {
  return filterDataPerField(list.value, search.value);
});
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const catDrawerState = computed({
  get() {
    return openCategoryDrawer.value;
  },
  set() {
    toggleStatus();
  },
});

const handleRedirect = (category) => {
  navigateTo({
<<<<<<< HEAD
    name: 'shop-name',
    params: { name: sanitizeTitleForRoute(category) },
  })
  search.value = ''
}
=======
    name: "shop-name",
    params: { name: sanitizeTitleForRoute(category) },
  });
  search.value = "";
};
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
</script>

<style lang="css" scoped>
.filter-input:focus {
  border: none;
  outline: none;
}

.filter-input {
  padding-block: 8.5px;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
