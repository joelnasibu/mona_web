<template>
  <div class="w-100 h-100 d-flex flex-column justify-space-between">
    <div class="d-flex justify-center align-center " v-if="loading" :style="{ height: '70dvh' }">
      <v-progress-circular indeterminate color="primary" :active="loading"></v-progress-circular>
    </div>
    <div v-else class="d-flex h-100 flex-column ">
      <div class=" d-flex pa-2 ga-1 align-center">

        <v-btn icon="mdi-arrow-left" title="Return" @click="close" variant="text" size="small" rounded="lg"></v-btn>
        <v-avatar class="bg-grey-lighten-2" size="35">
          <v-img :src="receiver?.picture ?? chat?.product?.thumbnail"></v-img>
        </v-avatar>
        <div class="text-caption d-flex flex-column text-capitalize">
          <div class="mt-n1 text-capitalize">
            <span>{{ chat.product.productName?.toLowerCase() }} ({{
              currencyFormat(chat.product.price ?? 0)
            }})
            </span>
          </div>
          <span class="text-disabled text-capitalize">{{ serverMessage }}</span>


        </div>
        <v-spacer></v-spacer>
        <div class="" title="More">
          <v-btn size="x-small" variant="text" rounded="lg" icon="mdi-dots-vertical"></v-btn>
          <v-menu activator="parent" location="start">
            <v-list dense class="pa-0 rounded-lg card-outlined">
              <v-list-item @click="showTimeStamp = !showTimeStamp">
                <span>{{ showTimeStamp ? "Hide" : "Show" }} time</span>
              </v-list-item>
              <v-list-item @click="clearChat()">
                <span>Delete</span>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <div class="flex-grow-1 ">
        <v-divider></v-divider>
        <div id="chatbox" class="w-100 px-3 d-flex flex-column ga-1 py-3   hide-scrollbar overflow-y-auto "
          :style="{ height: '50dvh' }">
          <p class="w-100 " v-for="(msg, i) in chat.chats" :key="i">
            <ChatMessage :msg="msg" :showTime="showTimeStamp" :loader="loader" :fail="failToSend" />
          </p>

          <div class="server d-flex  align-center" v-if="isTyping">
            <v-img :src="icon" width="35" height="35" />
            <em class="mx-2"> {{ getFullnames(receiver) }} typing ...</em>

          </div>

        </div>

      </div>

      <div class="">
        <v-divider class="mb-4"></v-divider>
        <div class="px-3 pb-3">

          <div class="ga-2 overflow-x-auto  hide-scrollbar" :style="{ whiteSpace: 'nowrap' }">
            <v-card flat color="primary" variant="outlined"
              class="py-1 px-2 text-caption rounded-lg mx-1 d-inline-block cursor-pointer overflow-y-auto border"
              :class="{ activeText: message === text }" v-for="(text, i) in quickTexts" :key="i"
              @click="message = text">
              <span>{{ text }}</span>
            </v-card>
          </div>
          <div class="d-flex align-center ga-2">
            <v-textarea height="80px" hide-details placeholder="Type your message..." auto-grow rows="1" max-rows="4"
              class="hide-scrollbar mt-2 rounded-lg" autofocus v-model="message" bg-color="white"
              @keypress.prevent.enter="handleSend" @keydown="handleKeyDown"></v-textarea>
            <v-btn icon="mdi-send" color="primary-dark" size="x-small" flat rounded="lg" title="Send message"
              @click="handleSend"></v-btn>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import icon from '~/assets/icons/typing.gif'
import { useAppStore } from "~/store/app";
import { useChatStore } from "~/store/chat";

const emits = defineEmits(["closeChat"]);
const { currencyFormat, getFullnames } = useHelpers();
// const { $socket } = useNuxtApp();
const supabase = useSupabase()
const chatStore = useChatStore();
const { chat } = storeToRefs(chatStore);
const { currentUser, loading } = storeToRefs(useAppStore());
const channel = ref()
const usersOnline = ref([])
const quickTexts = [
  "Is it available?",
  "What is the last price?",
  "Do you do delivery?",
  "What is the delivery time?",
  "Do you deliver with free delivery?",
];

const message = ref("");
const showTimeStamp = ref(false);
const failToSend = ref(null);
const loader = ref({
  status: false,
  msgId: null,
})
const isTyping = ref(false)

const receiver = computed(() => {
  return currentUser.value.userId === chat.value?.clientId
    ? chat.value?.vendor
    : chat.value?.client;
});

const serverMessage = ref('');

const timer = ref('')

const typer = (data) => {
  return chat.value.session == data?.session
    && currentUser.value.userId == data?.user
    ? false : true
}

const checkUserOnline = (data) => {
  if (chat.value.session == data?.session) {
    const receiver = currentUser.value.userId == data?.response.clientId
      ? { id: data?.response.vendorId, name: getFullnames(data?.response.vendor) }
      : { id: data?.response.clientId, name: getFullnames(data?.response.client) }


    const onlineUser = usersOnline.value.find(i => i.user == receiver.id)

    serverMessage.value = onlineUser
      ? receiver.name.toLowerCase() + ' is online'
      : receiver.name.toLowerCase() + ' is offline'
  }



}



const initSocket = async (msg) => {

  const index = msg.chats.length - 1
  const sender = msg.chats[index].sender
  if (chat.value.session == msg.session &&
    currentUser.value.userId !== sender)
    chat.value.chats = msg.chats





  // serverMessage.value = getFullnames(receiver.value).toLowerCase() + ' is offline'
  // if ($socket)
  //   if (chat.value) {
  //     $socket.on("join", (data) => {
  //       $socket.emit('joinRoom', data)
  //       //user online
  //       // pushUsers(data)
  //       // checkUserOnline(data)
  //     })
  //   }

  // $socket?.on('room_users', (data) => {
  //   usersOnline.value = data.users
  //   checkUserOnline(data.user)
  // })

  // $socket?.on("isTyping", (data) => {
  //   isTyping.value = typer(data)

  // })

  // $socket?.on('message', (msg) => {
  //   if (msg.sender == 'server')
  //     serverMessage.value = currentUser.value.userId !== msg.userId
  //       ? msg.message : ''
  //   else {
  //     const index = msg.chats.length - 1
  //     const sender = msg.chats[index].sender
  //     if (chat.value.session == msg.session &&
  //       currentUser.value.userId !== sender)
  //       chat.value.chats = msg.chats
  //   }

  // })
}
const leaveChat = () => {
  channel.value.unsubscribe()

  const index = usersOnline.value.findIndex(i => i.user == currentUser.value.userId)
  if (index > -1) {
    const offlineUser = usersOnline.value[index]
    usersOnline.value.splice(index, 1)

    // $socket.emit('leave', offlineUser)
    // checkUserOnline(offlineUser)
  }
}

const handleScroll = () => {
  var elt = document.getElementById('chatbox');
  if (elt) {

    elt.scrollTo({
      top: elt.scrollHeight,
      behavior: "smooth"
    })
    elt.scrollIntoView(false)
  }

};



const handleSend = async () => {
  if (!message.value) return false;
  clearTimeout(timer.value)
  isTyping.value = false

  const msgId = chat.value.chats.length + 1;
  loader.value = {
    status: true,
    msgId,
  };
  chat.value.chats.push({
    message: message.value,
    id: msgId,
    sender: currentUser.value.userId,
    isRead: false,
    createdAt: new Date(),
  });

  // $socket?.emit("chatMessage", chat.value.chats)
  message.value = "";


  handleScroll()
  let res = await chatStore.sendMessage(chat.value);



  if (!res) failToSend.value = msgId;

  loader.value = {
    status: false,
    msgId: null,
  };

};

const handleKeyDown = (event) => {

  // $socket.emit('typing', {
  //   user: currentUser.value.userId,
  //   session: chat.value.session
  // })

  if (event.shiftKey && event.key === "Enter") {
    message.value += "\n"; // Adds a new line to the input.
  }
};

const clearChat = async () => {
  chat.value.chats = []
  await chatStore.clearChat(chat.value);
}

const close = () => {
  loader.value = {
    status: false,
    msgId: null,
  };
  failToSend.value = null;
  message.value = null;
  leaveChat()
  emits("closeChat");
};



onMounted(() => {

  channel.value = supabase.channel(chat.value?.session).on('postgres_changes', { event: "*", schema: "public", table: "chatRooms" }, (payload) => {
    initSocket(payload.new)

  }).subscribe()

  handleScroll()
})



watch(isTyping, (val) => {
  if (val)
    timer.value = setTimeout(() => isTyping.value = false, 4000)
})

watch(loading, (val) => {
  handleScroll()
  if (!val) {
  }
})

</script>

<style lang="css" scoped>
.activeText {
  background-color: #49008015 !important;
}

#chatbox {
  position: relative;
  overflow: auto;
}
</style>
