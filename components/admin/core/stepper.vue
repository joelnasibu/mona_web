<template>
  <ClientOnly>
    <div class="">
      <div class="py-2 d-flex justify-end align-center" v-if="action">
        <v-btn prepend-icon="mdi-chevron-left" class="text-caption text-capitalize mr-2"
          :color="step > 0 ? 'primary' : ''" size="small" flat title="Previous Step" :disabled="!step > 0"
          @click="$emit('navigate', step - 1)" variant="text" rounded>
          <span>Prev</span>
        </v-btn>
        <v-btn class="text-capitalize ml-2 text-caption" prepend-icon="mdi-content-save" size="small"
          v-if="step === sections.length - 1" flat color="primary" @click="emits('save')" :loading="loading" rounded>
          <span>Save</span>
        </v-btn>
        <v-btn append-icon="mdi-chevron-right" size="small" flat class="ml-2 text-caption text-capitalize"
          title="Next Step" v-else @click="$emit('validation')" color="main" variant="text" rounded>
          <span>Next</span>
        </v-btn>
      </div>
      <v-tabs v-model="tab" color="orange-darken-3" hide-slider icons-and-text show-arrows height="40"
        bg-color="off-white-1" fixed-tabs rounded class="rounded-t-lg">
        <v-tab v-for="(section, i) in sections" :key="i" :value="i" class="text-capitalize text-caption">
          <div class="d-flex align-center">
            <v-icon v-if="step > i" color="success" start>mdi-check-circle</v-icon>
            <v-icon v-else :icon="section.icon" size="small" start></v-icon>
            <span>{{ section.title }}</span>
          </div>
        </v-tab>
      </v-tabs>
    </div>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  step: [Number, String],
  sections: Array,
  action: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["navigate", "validation", "save"]);

import { useAppStore } from "~/store/app";
const { loading } = storeToRefs(useAppStore());

const tab = computed({
  get() {
    return props.step;
  },
  set(val) {

    if (val > props.step) emits('validation', props.step)
    else emits("navigate", val);
  },
});
</script>
<style scoped></style>
