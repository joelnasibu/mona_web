<template>
  <CoreMidScreenLayout :lg="10" :xl="9">
    <v-container :style="{ height: '90vh', width: '100vw' }" class="d-flex align-center" fluid>
      <v-row :style="{ height: `${isMobileOrTablet ? 100 : 90}%` }" v-if="mdAndUp && !isMobileOrTablet"
        class="rounded-lg card-outlined bg-off-white-1" justify-center="center">
        <v-col xs="12" sm="12" md="5" lg="5" class="px-0 h-100 pb-0"
          :style="{ borderRight: '1px solid rgba(var(--v-theme-border)' }">
          <ChatRooms @toggleChat="toggleRoom" />

        </v-col>
        <v-col xs="12" sm="12" md="7" lg="7" class="px-0 h-100 pb-0 ">

          <ChatDiscussion @closeChat="showDiscussion = false" v-if="showDiscussion" />

          <div
            class="h-100 w-100 d-none d-md-flex flex-column align-center justify-center  text-subtitle-2 text-center mx-auto "
            :style="{ maxWidth: '20ch' }" v-else>
            <Icon name="line-md:chat" size="4rem" class="mb-3" />
            <span>Select a chat to start a discussion </span>
          </div>
        </v-col>
      </v-row>

      <v-window v-model="showDiscussion" v-else class=" w-100 bg-white border">

        <v-window-item :value="false">
          <div class="px-0 h-100 w-100 pb-0 " :style="{ border: '1px solid rgba(var(--v-theme-border)' }">
            <ChatRooms @toggleChat="toggleRoom" />

          </div>
        </v-window-item>


        <v-window-item :value="true">
          <div class="px-0 pb-0 border ">
            <ChatDiscussion @closeChat="showDiscussion = false" />
          </div>
        </v-window-item>
      </v-window>
    </v-container>


  </CoreMidScreenLayout>
</template>

<script setup>

import { useDisplay } from 'vuetify';

const { isMobileOrTablet } = useDevice();
const { mdAndUp } = useDisplay()

const showDiscussion = ref(false),
  toggleRoom = (val) => {
    showDiscussion.value = val ? val : !showDiscussion.value
  };

useSeoMeta({
  title: "Chat",
});
</script>

<style lang="css" scoped></style>
