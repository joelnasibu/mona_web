<template>
  <v-dialog v-model="dialog" width="300" :close-on-content-click="false">
    <div
      class="text-center d-flex flex-column align-center justify-center dates-calendar bg-white rounded-lg overflow-hidden"
    >
      <v-date-picker
        color="primary-dark"
        max-width="300"
        :title="'Select date'"
        class="rounded-lg"
        v-model="selectedDate"
        ref="date"
        :max="max"
        :min="min"
      >
      </v-date-picker>
      <div class="d-flex justify-end w-100 pa-2 ga-1">
        <v-btn
          variant="text"
          size="small"
          text
          class="text-caption text-capitalize rounded-lg"
          @click="emits('close')"
        >
          <span>Cancel</span>
        </v-btn>
        <v-btn
          size="small"
          color="primary-dark"
          flat
          class="text-caption text-capitalize rounded-lg"
          @click="emits('setDate', { date: newDate, close: true })"
        >
          <v-icon left size="small">mdi-content-save</v-icon>
          <span>Save</span>
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  datePicker: Boolean,
  date: [String, Date],
  max: [String, Date],
  min: [String, Date],
});
const emits = defineEmits(["setDate", "close"]);

const dialog = computed({
  get() {
    return props.datePicker;
  },
  set(val) {},
});

const newDate = ref(props.date);
const selectedDate = computed({
  get() {
    return props.date;
  },
  set(val) {
    emits("setDate", { date: val, close: false });
    newDate.value = val;
  },
});
</script>

<style lang="css" scoped></style>
