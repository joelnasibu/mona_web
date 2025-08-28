<template>
  <div class="d-flex flex-column h-100">
    <div class="d-flex align-center py-2 px-2 px-md-4" :style="{
      height: '55px',
    }">
      <div class="">
        <v-img src="/logos/access-no-tag.png?url" width="100"></v-img>
      </div>
      <v-spacer></v-spacer>
      <div class="text-subtitle-1">
        <b>My Chats </b>
      </div>
    </div>
    <v-divider class="my-3"></v-divider>
    <div class="bg-off-white-1 px-3 pb-3">
      <v-text-field hide-details prepend-inner-icon="mdi-magnify" placeholder="Search room..." class="rounded-lg"
        bg-color="white" type="search" v-model="search"></v-text-field>
    </div>
    <v-list class="h-100 overflow-y-auto hide-scrollbar pa-0 bg-transparent" dense>
      <div class="" v-for="(room, i) in filteredRooms" :key="i">
        <v-list-item class="text-caption py-2" @click="toggleChat(room)" color="primary-dark">

          <div class="d-flex ga-3 w-100">

            <v-avatar size="45" color="grey-lighten-3">
              <v-img :src="room.product.thumbnail"></v-img>
            </v-avatar>
            <div class="d-flex w-100 flex-column text-capitalize align-space-between">
              <div class="text-capitalize d-flex justify-space-between align-start">
                <span>{{ room.product.productName.toLowerCase() }}</span>

                <code class="text-caption "
                  style="font-size:10px!important;"> {{ dateFormat_Time(room.createdAt) }}</code>
              </div>
              <span class="text-disabled">From: {{ getFullnames(receiver(room)).toLowerCase() }}</span>

            </div>
          </div>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script setup>
// import Image from 
const emit = defineEmits(["toggleChat"]);
const props = defineProps({
  provider: {
    type: String,
    default: ''
  }
})

import { useAppStore } from "~/store/app";
const { currentUser } = storeToRefs(useAppStore());

import { useChatStore } from "~/store/chat";
const chatStore = useChatStore();
// const { chat } = storeToRefs(chatStore);

const { getFullnames, dateFormat_Time } = useHelpers()

const search = ref("")
const rooms = ref([])
const filteredRooms = computed(() => {
  return rooms.value
    .filter((room) => {
      return (
        getFullnames(room.client)
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
        getFullnames(room.vendor)
          .toLowerCase()
          .includes(search.value.toLowerCase()) ||
        room.product.productName
          .toLowerCase()
          .includes(search.value.toLowerCase())
      );
    }).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
});
const receiver = (chatMessages) => {
  return currentUser.value.userId === chatMessages.clientId
    ? chatMessages.vendor
    : chatMessages.client;
};

const getData = async () => {
  rooms.value = await chatStore.getRooms(props.provider)
}
const activeRoom = ref(null);
const toggleChat = (room) => {

  openRoom(room.session);
  emit("toggleChat", room.session !== activeRoom.value);
  activeRoom.value = room.session




  
}
const openRoom = async (session) => {
  const room = await chatStore.getRoom(session, props.provider);

  chatStore.setChat(room);


};


onMounted(() => {
  getData()
})

</script>

<style lang="css" scoped></style>
