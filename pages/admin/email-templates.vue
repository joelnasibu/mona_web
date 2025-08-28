<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add Email Template"
          @click="openDialog({ title: '', template: '' }, true)"></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Email Templates" :number="templates.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="headers" :items="templates" :loading="loading"
            class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ templates.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.template`]="{ item }">
              <div class="pa-3" v-html="reducedStrings(item.template)"></div>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="openDialog(item, false)" />
            </template>
          </v-data-table>
        </v-sheet>
      </div>
    </div>
    <v-dialog fullscreen persistent v-model="dialog">
      <v-card class="card-outlined rounded-lg">
        <AdminCoreDialogHeader title="Email Template" @close="closeDialog">
          <div class="px-3 d-flex align-center ga-2">
            <v-btn size="small" color="primary-accent" class="text-caption rounded-lg text-none"
              prepend-icon="mdi-content-save" :loading="loading" @click="handleSubmit">
              <span>Save</span>
            </v-btn>
            <v-btn size="x-small" color="red-darken-4" icon="mdi-delete" title="Delete Title" flat
              @click="deleteDialog = true" v-if="!createAction">
            </v-btn>
          </div>
        </AdminCoreDialogHeader>
        <v-card-text>
          <v-form ref="formData" class="py-5">
            <v-text-field :rules="required()" v-model="payload.title" label="Template Title"
              @keypress.enter.prevent="handleSubmit" autofocus></v-text-field>

            <div class="d-flex flex-column my-2">
              <div class="d-flex">
                <v-btn size="small" variant="tonal" color="primary-accent" v-for="(variable, i) in variables" :key="i"
                  @click="handleAppend(variable)" class="mx-2">{{ variable }}</v-btn>
              </div>

            </div>


            <Editor :text="payload.template" @set-text="setTemplate" />
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
      name: 'Email Template',
      itemTitle: payload.title + ' TEMPLATE',
      id: payload.id,
    }" @cancel="deleteDialog = false" @delete="confirmDelete" />

  </ClientOnly>
</template>

<script setup>
const { filterDataPerField } = useHelpers();
const { required, name } = useRules();

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore()
const { loading, error } = storeToRefs(useAppStore());

const variables = [
  "applicant", "jobTitle", "company", "phone", "user", "email"
]

import { useTemplateStore } from "~/store/templates";
const { getTemplates, createTemplate, updateTemplate, deleteTemplate } = useTemplateStore();

const data = ref(await getTemplates());
const templates = computed(() => {
  return filterDataPerField(data.value, search.value);
});

const search = ref('');

const setSearch = (val) => {
  search.value = val;
};

const setTemplate = (val) => {
  payload.value.template = val
}

const handleAppend = (variable) => {
  const copied = `#${variable}`
  navigator.clipboard.writeText(copied)

  // await navigator.clipboard.readText() paste copied

  toggleSnackbar({
    status: true,
    type: "info",
    message: `<${copied}> copied to clipboard`
  })


}

const reducedStrings = (text) => {
  return text.substr(0, 250) + ' ...'
}

const headers = [
  { title: "#", value: "no" },
  { title: "Title", value: "title" },
  { title: "Template", value: "template" },
  { title: "Action", value: "action" },
];

const dialog = ref(false);
const createAction = ref(false);
const formData = ref(null);

const payload = ref({
  title: "",
  template: ""
});

const openDialog = (item, create) => {
  payload.value = item;
  dialog.value = true;
  createAction.value = create;
};

const closeDialog = (item) => {
  payload.value = {
    title: "",
    template: ""
  };
  dialog.value = false;
  createAction.value = false;
};

const handleSubmit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    createAction.value
      ? await createTemplate(payload.value)
      : await updateTemplate(payload.value);
    if (!error.value) {
      data.value = await getTemplates(false);
      closeDialog();
    }
  }
};

const deleteDialog = ref(false);

const confirmDelete = async () => {
  await deleteTemplate(payload.value.id);
  if (!error.value) {
    data.value = await getTemplates(false);
    closeDialog();
    deleteDialog.value = false;
  }
};

useHead({
  title: "Email Templates",
});
</script>

<style lang="css" scoped></style>
