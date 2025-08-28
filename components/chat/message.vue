<template>



  <div class="text-caption  d-flex align-center ga-2 w-100 overflow-y-auto"
    :class="isSender(msg.sender) ? 'justify-end' : 'justify-start'"
    ref="chat">
    <v-expand-x-transition v-if="!isSender(msg.sender)">
      <div class="text-caption text-grey d-flex align-center" :style="{ fontSize: '9px !important' }" v-if="showTime">
        <v-icon size="8" icon="mdi-clock-outline" class="mr-1"></v-icon>
        <span>{{ msg.createdAt }}</span>
      </div>
    </v-expand-x-transition>
    <v-icon icon="mdi-close-circle-outline" title="Retry" class="cursor-pointer" color="red"
      @click="defineEmits('retrySending')" v-if="!loader.status && fail === msg.id"></v-icon>
    <div class="message position-relativen d-flex align-center ga-2"
      :class="isServer(msg.sender) ? 'server' : isSender(msg.sender) ? 'send' : 'receive'">
      <span>{{ msg.message }}</span>
      <v-expand-x-transition>
        <v-progress-circular :size="10" width="1" indeterminate color="green-lighten-4"
          v-if="loader.status && loader.msgId === msg.id"></v-progress-circular>
      </v-expand-x-transition>
    </div>
    <v-expand-x-transition v-if="isSender(msg.sender)">
      <div class="text-caption text-grey d-flex align-center" :style="{ fontSize: '9px !important' }" v-if="showTime">
        <v-icon size="8" icon="mdi-clock-outline" class="mr-1"></v-icon>
        <span>{{ getTime(msg.createdAt) }}</span>
      </div>
    </v-expand-x-transition>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const { isMobileOrTablet } = useDevice();
const props = defineProps({
  msg: Object,
  showTime: Boolean,
  loader: Object,
  fail: [String, Number],
}),
  { getTime } = useHelpers();

const { currentUser } = storeToRefs(useAppStore());
const chat = ref()
const isSender = (sender) => {
  return sender === currentUser.value.userId
};

const isServer = (sender) => {
  return sender === 'server'
}





// watch(() => props.loader.status, (val) => {
//   scrollTop()
// })


</script>

<style lang="css" scoped></style>
