<template>
  <ClientOnly>
    <v-btn
      location="bottom end"
      class="position-fixed ma-8"
      color="primary-dark"
      title="Messages"
      icon="mdi-chat-processing-outline"
      :style="{ zIndex: 1 }"
      elevation="12"
      :to="{ name: 'inbox' }"
    ></v-btn>
  </ClientOnly>
</template>

<script setup>
import { useChatStore } from "~/store/chat";

const { toggleChatStatus } = useChatStore();
</script>

<style lang="css" scoped></style>
