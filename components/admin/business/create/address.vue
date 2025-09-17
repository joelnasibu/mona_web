<template>
  <v-form ref="addressForm">
    <v-container class="pa-0" fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Longitude"
            v-model="payload.long"
            :rules="required()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Longitude"
            v-model="payload.lat"
            :rules="required()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="py-0">
          <v-card flat>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske"
              width="100%"
              height="400px"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
  update: Boolean,
});
const emits = defineEmits(["step"]);

const { digitsOnly } = useHelpers();
const { fullName, email, number, required } = useRules();

import { useAppStore } from "~/store/app";
const { profileImage, currentUser } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { getUsers } = useAuthStore();

const addressForm = ref(null);

const moveNext = async () => {
  let tab = 2;

  const { valid } = await addressForm.value.validate();
  if (valid) tab = 3;

  emits("step", tab);
};

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
</script>

<style scoped></style>
