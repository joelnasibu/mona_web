<template>
  <v-form ref="pMethodForm">
    <v-container class="pa-0" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-text-field
            label="Supported Payment Methods"
            append-inner-icon="mdi-chevron-down"
          ></v-text-field>
          <div class="">
            <v-alert
              type="info"
              variant="tonal"
              density="compact"
              class="text-caption"
            >
              <span
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                aliquam, labore, ut sit explicabo molestias culpa voluptas
                inventore odio possimus optio cum veniam obcaecati magni
                veritatis nostrum dolor! Aut, cumque!</span
              >
            </v-alert>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="d-flex flex-column ga-3"
          style="border-left: 1px solid #ddd"
        >
          <div class="d-flex ga-4 align-center" v-for="n in 3" :key="n">
            <div class="">
              <v-img
                src="https://www.m-pesa.africa/images/mpesa-logo.png"
                width="100"
              ></v-img>
            </div>
            <div class="w-100">
              <div class="text-caption">
                <span>M-PESA</span>
              </div>

              <v-text-field label="Payment Number"></v-text-field>
            </div>
          </div>
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

const pMethodForm = ref(null);

const moveNext = async () => {
  let tab = 3;

  const { valid } = await pMethodForm.value.validate();
  if (valid) tab = 4;

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
