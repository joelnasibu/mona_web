<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-plus"
          size="x-small"
          flat
          color="primary-dark"
          title="Add skill"
          @click="openDialog({ skill: '' }, true)"
        ></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Skills" :number="skills.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table
            density="compact"
            :headers="headers"
            :items="skills"
            :loading="loading"
            class="bg-background"
          >
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ skills.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="openDialog(item, false)" />
            </template>
          </v-data-table>
        </v-sheet>
      </div>
    </div>
    <v-dialog width="45%" persistent v-model="dialog">
      <v-card class="card-outlined rounded-lg">
        <AdminCoreDialogHeader title="Skill details" @close="closeDialog">
          <div class="px-3 d-flex align-center ga-2">
            <v-btn
              size="small"
              color="primary-accent"
              class="text-caption rounded-lg text-none"
              prepend-icon="mdi-content-save"
              :loading="loading"
              @click="handleSubmit"
            >
              <span>Save</span>
            </v-btn>
            <v-btn
              size="x-small"
              color="red-darken-4"
              icon="mdi-delete"
              title="Delete skill"
              flat
              @click="deleteDialog = true"
              v-if="!createAction"
            >
            </v-btn>
          </div>
        </AdminCoreDialogHeader>
        <v-card-text>
          <v-form ref="formData" class="py-5">
            <v-text-field
              :rules="required()"
              v-model="payload.skill"
              label="Skill"
              @keypress.enter.prevent="handleSubmit"
              autofocus
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <AdminDeleteConfirmation
      :dialog="deleteDialog"
      :data="{
        name: 'Skill',
        itemTitle: payload.skill,
        id: payload.id,
      }"
      @cancel="deleteDialog = false"
      @delete="confirmDelete"
    />
  </ClientOnly>
</template>

<script setup>
const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();
const { required, name } = useRules();

import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useSkillStore } from "~/store/skills";
const { getSkills, createSkill, updateSkill, deleteSkill } = useSkillStore();
const data = ref(await getSkills());
const skills = computed(() => {
  return filterDataPerField(data.value, search.value);
});

const search = ref("");
const setSearch = (val) => {
  search.value = val;
};

const headers = [
  { title: "#", value: "no" },
  { title: "Name", value: "skill" },
  { title: "Action", value: "action" },
];

const dialog = ref(false);
const createAction = ref(false);
const formData = ref(null);
const payload = ref({
  skill: "",
});
const openDialog = (item, create) => {
  payload.value = item;
  dialog.value = true;
  createAction.value = create;
};
const closeDialog = (item) => {
  payload.value = {
    skill: "",
  };
  dialog.value = false;
  createAction.value = false;
};
const handleSubmit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    createAction.value
      ? await createSkill(payload.value)
      : await updateSkill(payload.value);
    if (!error.value) {
      data.value = await getSkills(false);
      closeDialog();
    }
  }
};

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteSkill(payload.value.id);
  if (!error.value) {
    data.value = await getSkills(false);
    closeDialog();
    deleteDialog.value = false;
  }
};

useHead({
  title: "Skills' list",
});
</script>

<style lang="css" scoped></style>
