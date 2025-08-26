<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" sm="6">
        <v-form ref="formData" @submit.prevent>
          <div class="d-flex ga-3">
            <v-text-field
              label="Responsibility"
              v-model="responsibility"
              type="search"
              @keypress.enter.prevent="addResponsibilities"
              :rules="required()"
            ></v-text-field>
            <v-btn
              icon="mdi-plus"
              flat
              color="primary-accent"
              class="text-caption text-none"
              rounded
              size="x-small"
              @click="addResponsibilities"
            >
            </v-btn>
          </div>
        </v-form>

        <div class="mt-2 text-caption">
          <b>Responsibilities</b>
          <v-list
            class="mt-1 bg-transparent pa-0"
            density="compact"
            lines="false"
          >
            <v-list-item v-for="(item, i) in payload.responsibilities">
              <v-icon icon="mdi-chevron-right" start></v-icon>
              <span>{{ item }}</span>
              <v-spacer></v-spacer>
              <template v-slot:append>
                <v-btn
                  variant="text"
                  icon="mdi-delete-outline"
                  size="x-small"
                  class="mx-2"
                  title="Remove"
                  @click="removeResponsibilities(i)"
                ></v-btn>
              </template>
            </v-list-item>
            <v-list-item
              class="text-grey-darken-1 pa-4"
              v-if="payload.responsibilities.length === 0"
            >
              <span>No responsibilities added</span>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-form ref="formDataDoc" @submit.prevent>
          <div class="d-flex ga-3">
            <v-text-field
              label="requiredDocument"
              v-model="requiredDocument"
              type="search"
              @keypress.enter.prevent="addrequiredDocuments"
              :rules="required()"
            ></v-text-field>
            <v-btn
              icon="mdi-plus"
              flat
              color="primary-accent"
              class="text-caption text-none"
              rounded
              size="x-small"
              @click="addrequiredDocuments"
            >
            </v-btn>
          </div>
        </v-form>

        <div class="mt-2 text-caption">
          <b>Required documents</b>
          <v-list
            class="mt-1 bg-transparent pa-0"
            density="compact"
            lines="false"
          >
            <v-list-item v-for="(item, i) in payload.requiredDocuments">
              <v-icon icon="mdi-chevron-right" start></v-icon>
              <span>{{ item }}</span>
              <v-spacer></v-spacer>
              <template v-slot:append>
                <v-btn
                  variant="text"
                  icon="mdi-delete-outline"
                  size="x-small"
                  class="mx-2"
                  title="Remove"
                  @click="removerequiredDocuments(i)"
                ></v-btn>
              </template>
            </v-list-item>
            <v-list-item
              class="text-grey-darken-1 pa-4"
              v-if="payload.requiredDocuments.length === 0"
            >
              <span>No required documents added</span>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { required } = useRules();

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();

const formData = ref(null);
const responsibility = ref("");
const reset = async () => {
  await formData.value.reset();
  //   responsibility.value = '';
};
const addResponsibilities = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    let alreadyAdded = props.payload.responsibilities.find(
      (item) => item == responsibility.value
    );
    if (alreadyAdded)
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "Responsibility already exist",
      });
    else {
      props.payload.responsibilities.push(responsibility.value);
      reset();
    }
  }
};
const removeResponsibilities = (index) => {
  props.payload.responsibilities.splice(index, 1);
};

const formDataDoc = ref(null);
const requiredDocument = ref("");
const resetDoc = async () => {
  await formDataDoc.value.reset();
  //   requiredDocument.value = '';
};
const addrequiredDocuments = async () => {
  const { valid } = await formDataDoc.value.validate();
  if (valid) {
    let alreadyAdded = props.payload.requiredDocuments.find(
      (item) => item == requiredDocument.value
    );
    if (alreadyAdded)
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "document already added",
      });
    else {
      props.payload.requiredDocuments.push(requiredDocument.value);
      resetDoc();
    }
  }
};
const removerequiredDocuments = (index) => {
  props.payload.requiredDocuments.splice(index, 1);
};

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);

const moveNext = () => {
  let tab = 2;
  if (
    props.payload.responsibilities.length > 0 &&
    props.payload.requiredDocuments.length > 0
  )
    tab = 3;
  else {
    const responsibilitiesRequired =
      props.payload.responsibilities.length === 0;
    toggleSnackbar({
      status: true,
      type: "warning",
      message: `${
        responsibilitiesRequired ? "Responsibilities" : "documents"
      } are required`,
    });
  }
  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
