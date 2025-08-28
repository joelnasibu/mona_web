<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" sm="6">
        <v-form ref="formData" @submit.prevent>
          <div class="d-flex ga-3">
            <v-text-field
              label="Skill"
              v-model="skill"
              type="search"
              @keypress.enter.prevent="addSkills"
              :rules="required()"
            ></v-text-field>
            <v-btn
              icon="mdi-plus"
              flat
              color="primary-accent"
              class="text-caption text-none"
              rounded
              size="x-small"
              @click="addSkills"
            >
            </v-btn>
          </div>
        </v-form>

        <div class="mt-2 text-caption">
          <b>Skills</b>
          <v-list
            class="mt-1 bg-transparent pa-0"
            density="compact"
            lines="false"
          >
            <v-list-item v-for="(item, i) in payload.skills">
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
                  @click="removeSkills(i)"
                ></v-btn>
              </template>
            </v-list-item>
            <v-list-item
              class="text-grey-darken-1"
              v-if="payload.skills.length === 0"
            >
              <span>No skills added</span>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-form ref="formDataReq" @submit.prevent>
          <div class="d-flex ga-3">
            <v-text-field
              label="Requirement"
              v-model="requirement"
              type="search"
              @keypress.enter.prevent="addRequirements"
              :rules="required()"
            ></v-text-field>
            <v-btn
              icon="mdi-plus"
              flat
              color="primary-accent"
              class="text-caption text-none"
              rounded
              size="x-small"
              @click="addRequirements"
            >
            </v-btn>
          </div>
        </v-form>

        <div class="mt-2 text-caption">
          <b>Requirements</b>
          <v-list
            class="mt-1 bg-transparent pa-0"
            density="compact"
            lines="false"
          >
            <v-list-item v-for="(item, i) in payload.requirements">
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
                  @click="removeRequirements(i)"
                ></v-btn>
              </template>
            </v-list-item>
            <v-list-item
              class="text-grey-darken-1 pa-4"
              v-if="payload.requirements.length === 0"
            >
              <span>No requirements added</span>
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
const skill = ref("");
const reset = async () => {
  await formData.value.reset();
  //   skill.value = '';
};
const addSkills = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    let alreadyAdded = props.payload.skills.find((item) => item == skill.value);
    if (alreadyAdded)
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "Skill already exists",
      });
    else {
      props.payload.skills.push(skill.value);
      reset();
    }
  }
};
const removeSkills = (index) => {
  props.payload.skills.splice(index, 1);
};

const formDataReq = ref(null);
const requirement = ref("");
const resetReq = async () => {
  await formDataReq.value.reset();
  //   skill.value = '';
};
const addRequirements = async () => {
  const { valid } = await formDataReq.value.validate();
  if (valid) {
    let alreadyAdded = props.payload.requirements.find(
      (item) => item == requirement.value
    );
    if (alreadyAdded)
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "Requirement already exists",
      });
    else {
      props.payload.requirements.push(requirement.value);
      resetReq();
    }
  }
};
const removeRequirements = (index) => {
  props.payload.requirements.splice(index, 1);
};

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);

const moveNext = () => {
  let tab = 1;
  if (props.payload.skills.length > 0 && props.payload.requirements.length > 0)
    tab = 2;
  else {
    const skillsRequired = props.payload.skills.length === 0;
    toggleSnackbar({
      status: true,
      type: "warning",
      message: `${skillsRequired ? "Skills" : "Requirements"} are required`,
    });
  }
  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
