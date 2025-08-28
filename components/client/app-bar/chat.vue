<template>
  <ClientOnly>
    <v-navigation-drawer
      color="card"
      location="end"
      class="hide-scrollbar"
      temporary
      width="400"
      v-model="opened"
    >
      <div class="w-100 h-100 pt-3">
        <ChatDiscussion @closeChat="closeChat" />
      </div>
    </v-navigation-drawer>
  </ClientOnly>
</template>
<script setup>
import { useChatStore } from "~/store/chat";

const chatStore = useChatStore(),
  { opened } = storeToRefs(chatStore);

const closeChat = () => {
  chatStore.toggleChatStatus();
  chatStore.clearChat();
};
</script>
