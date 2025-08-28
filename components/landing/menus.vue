<template lang="">
  <div class="">
    <!-- <CoreDrawer :drawer="drawer" /> -->
    <v-btn  size="small" icon variant="flat"
      id="mobileMenus"
    >
    <div class="d-flex flex-column justify-center align-center ">      
      <div class="icon-1 bg-card" ref="a"></div>
      <div class="icon-2 bg-card" ref="b"></div>
      <div class="icon-3 bg-card" ref="c"></div>
    </div>
    </v-btn>

    <v-menu activator="#mobileMenus" v-model="menu">
      <v-list
        class="pa-0 menu-list card-outlined rounded-lg mt-2"
        density="compact"
        min-width="200"
      >

      <NuxtLink class="text-caption text-black" v-for="{ title, full, icon, route, id } in menus"
              :to="route ? { name: route } : `/#${id}`" :key="id" :title="full ?? title">
              <v-list-item>
            <b>{{ title }}</b>
            <v-icon end v-if="icon" :icon="icon" size="small"></v-icon>
          </v-list-item>
                </NuxtLink>
        <!-- <div class="text-caption" v-for="{ title, icon, id, route } in menus"  :to="route ? { name: route } : `/#${id}`" :key="id" >
          <v-list-item>
            <b>{{ title }}</b>
            <v-icon end v-if="icon" :icon="icon" size="small"></v-icon>
          </v-list-item>
          <v-divider></v-divider>
        </div> -->
        <v-list-item class="px-2 text-caption pt-3">
        <v-btn class="text-caption" block color="primary" flat size="small" @click="handleRedirect">
          <span>Login | Register</span>
        </v-btn>
      </v-list-item>

      <div class="">
        <v-list-item class="pa-0" :to="{ name: 'create-business-account' }">
          <v-divider></v-divider>
          <div class="py-1 text-caption text-center">
            <span class="text-decoration-underline text-center">Create business account</span>
          </div>
        </v-list-item>
        <v-list-item class="pa-0" @click="handleLogout()" v-if="isLoggeIn">
          <v-divider></v-divider>
          <div class="py-1 text-caption text-center">
            <span class="text-decoration-underline text-center">Log out</span>
          </div>
        </v-list-item>
        </div>
        <!-- <v-list-item class="py-4">
          <v-btn
            rounded="lg"
            class="text-none text-caption bg-primary-accent"
            flat
            :to="{ name: 'create-business-account' }"
          >
            <span>Créer un compte vendeur</span>
          </v-btn>
        </v-list-item> -->
        <v-divider></v-divider>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup>
const emits = defineEmits(["toggleMenu", "logout", "redirect"]);
const props = defineProps({
  menus: Object,
});

import { useAppStore } from "~/store/app";
const app = useAppStore();
const { isLoggeIn } = storeToRefs(app);
const menu = ref(false)
const a = ref(null);
const b = ref(null);
const c = ref(null);
// const drawer = ref(false);

const menuBtnClicked = () => {

  a.value.classList.toggle("a");
  b.value.classList.toggle("b");
  c.value.classList.toggle("c");
  emits("toggleMenu");
};
const { mobile } = useDevice();
const handleLogout = () => {
  emits('logout')
}
const handleRedirect = () => {
  emits('redirect')
}
watch(
  menu,
  (val) => {
    // if (!val) {
    menuBtnClicked()
    // }
  }
);
</script>
<style scoped lang="css">
.icon-1,
.icon-2,
.icon-3 {
  width: 20px;
  height: 2px;
  background: #570c4d !important;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  border-radius: 5px;
}

.icon-1 {
  transform: translateY(-5px);
  animation-delay: 200ms;
}

.icon-2 {
  animation-delay: 250ms;
  width: 25px;
}

.icon-3 {
  animation-delay: 250ms;
  transform: translateY(5px);
}

.hamburger-icon {
  height: 60px;
  width: 35px;
  cursor: pointer;
  /* border-radius: 50%; */
  transition: all 0.2s ease-in-out;
  background: transparent;
  position: relative !important;
}

.icon-1.a {
  transform: rotate(40deg);
}

.icon-2.b {
  transform: rotate(-40deg);
}

.icon-3.c {
  /* visibility: hidden; */
  transition: all 0.4s ease-in-out;
  opacity: 0;
}
</style>
