<template>
  <ClientOnly>
    <v-navigation-drawer
      color="drawer"
      :rail="drawerValue"
      width="240"
      rail-width="50"
      id="mainDrawer"
    >
      <template v-slot:prepend>
        <div class="w-100 d-flex justify-center pt-2">
          <v-img
            :src="`/${drawerValue ? 'short' : 'full'}.png`"
            height="52"
          ></v-img>
        </div>
      </template>
      <v-divider class="mt-2"></v-divider>
      <v-list density="compact" class="hide-scrollbar" nav>
        <div
          class="text-caption"
          v-for="({ title, link, icon }, index) in filteredMenus.filter(
            (m) => !m.append
          )"
          :title="title"
          :key="index"
        >
          <v-list-item
            :to="{ name: link }"
            :value="link"
            :active="$route.name === link"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="icon"></v-icon>
            </template>
            <span>{{ title }}</span>
          </v-list-item>
        </div>
      </v-list>
      <template v-slot:append>
        <v-divider class="mt-2"></v-divider>
        <v-list density="compact" nav>
          <div
            class="text-caption"
            v-for="({ title, link, icon }, index) in filteredMenus.filter(
              (m) => m.append
            )"
            :title="title"
            :key="index"
          >
            <v-list-item
              :to="{ name: link }"
              :value="link"
              :active="$route.name === link"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon :icon="icon"></v-icon>
              </template>
              <span>{{ title }}</span>
            </v-list-item>
          </div>
        </v-list>
      </template>
    </v-navigation-drawer>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  drawer: Boolean,
});
const emits = defineEmits(["close"]);
import { useDisplay } from "vuetify";
import { useAppStore } from "~/store/app";
const { currentUser } = storeToRefs(useAppStore());
const { isMobile } = useDevice();
const { smAndDown } = useDisplay();

const smallSize = computed(() => {
  return isMobile || smAndDown.value;
});

const drawerValue = computed({
  get() {
    return smallSize.value ? false : props.drawer;
  },
  set(val) {
    defineEmits("close");
  },
});

const menus = [
  {
    title: "Dashboard",
    link: "admin",
    icon: "mdi-view-dashboard-outline",
    access: [1, 2, 3],
  },

  {
    title: "Orders",
    link: "admin-orders",
    icon: "mdi-format-list-checks",
    access: [1, 2, 3],
  },
  // {
  //   title: "Job applications",
  //   link: "admin-job-applications",
  //   icon: "mdi-list-status",
  //   access: [1, 2, 3],
  // },
  // {
  //   title: "Business types",
  //   link: "admin-business-types",
  //   icon: "mdi-handshake-outline",
  //   access: [1, 2],
  // },
  // {
  //   title: "Job types",
  //   link: "admin-job-types",
  //   icon: "mdi-briefcase-outline ",
  //   access: [1, 2],
  // },
  {
    title: "Categories",
    link: "admin-categories",
    icon: "mdi-alpha-c-box-outline",
    access: [1, 2],
  },
  {
    title: "Subcategories",
    link: "admin-subcategories",
    icon: "mdi-alpha-s-box-outline",
    access: [1, 2],
  },
  // {
  //   title: "Industries",
  //   link: "admin-industries",
  //   icon: "mdi-alpha-i-box-outline",
  //   access: [1, 2],
  // },
  // { title: "Sizes", link: "admin-sizes", icon: "mdi-size-xs", access: [1, 2] },
  // {
  //   title: "Skills",
  //   link: "admin-skills",
  //   icon: "mdi-format-list-checks",
  //   access: [1, 2],
  // },
  {
    title: "Email Templates",
    link: "admin-email-templates",
    icon: "mdi-email",
    access: [1],
  },

  {
    title: "Inbox",
    link: "admin-chat",
    icon: "mdi-chat-processing",
    access: [1, 2, 3],
  },
  {
    title: "Featured products",
    link: "admin-featured-products",
    icon: "mdi-tag-plus",
    access: [1, 2, 3],
  },
  {
    title: "Users",
    link: "admin-users",
    icon: "mdi-account-outline",
    access: [1, 2],
  },
  {
    title: "Support",
    link: "admin-support",
    icon: "mdi-help-circle-outline",
    access: [1, 2],
    append: true,
  },
  {
    title: "Configurations",
    link: "admin-config-markets",
    icon: "mdi-cog-outline",
    access: [1],
    append: true,
  },
];

const filteredMenus = computed(() => {
  return menus.filter((m) => m.access.includes(currentUser.value.accessLevel));
});
</script>

<style lang="scss" scoped></style>
