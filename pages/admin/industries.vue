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
          title="Add industry"
          @click="openDialog({ industry: '', categoryId: 0 }, true)"
        ></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Industries" :number="industries.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table
            density="compact"
            :headers="headers"
            :items="industries"
            :loading="loading"
            class="bg-background"
          >
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ industries.indexOf(item) + 1 }}</span>
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
        <AdminCoreDialogHeader title="Industry details" @close="closeDialog">
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
              title="Delete industry"
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
              v-model="payload.industry"
              label="Industry"
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
        name: 'Industy',
        itemTitle: payload.industry,
        id: payload.id,
      }"
      @cancel="deleteDialog = false"
      @delete="confirmDelete"
    />
  </ClientOnly>
</template>

<script setup>
const { replaceObjectEmptyStrings, filterDataPerField, getDetails } =
  useHelpers();
const { required, name } = useRules();

import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useIndustriestore } from "~/store/industries";
const { getIndustries, createIndustry, updateIndustry, deleteIndustry } =
  useIndustriestore();
const data = ref(await getIndustries(true));
const industries = computed(() => {
  return filterDataPerField(data.value, search.value);
});

import { useCategoryStore } from "~/store/categories";
const { getCategories } = useCategoryStore();
const categories = ref([]);
const loadData = ref(false);
const getData = async () => {
  loadData.value = true;
  categories.value = await getCategories(false);
  loadData.value = false;
};
watchEffect(() => {
  getData();
});
const categoriesList = computed(() => {
  return categories.value.map((c) => c.category);
});
const category = ref("");
const setCategory = (val) => {
  category.value = val;
  payload.value.categoryId = categories.value.find(
    (cat) => cat.category === val
  )?.id;
};

const categoriesFilter = computed(() => {
  return [
    "ALL",
    ...new Set(
      data.value.map(
        (c) => getDetails(categories.value, c.categoryId)?.category
      )
    ),
  ];
});
const categoryFilter = ref("ALL");
const setCategoryFilter = (val) => {
  categoryFilter.value = val;
};

const search = ref("");
const setSearch = (val) => {
  search.value = val;
};

const headers = [
  { title: "#", value: "no" },
  { title: "Name", value: "industry" },
  //   { title: "Category", value: "category" },
  { title: "Action", value: "action" },
];

const dialog = ref(false);
const createAction = ref(false);
const formData = ref(null);
const payload = ref({
  industry: "",
  //   categoryId: 0,
});
const openDialog = (item, create) => {
  payload.value = item;
  dialog.value = true;
  createAction.value = create;
  if (!create)
    category.value = getDetails(categories.value, item.categoryId)?.category;
};
const closeDialog = (item) => {
  payload.value = {
    industry: "",
    // categoryId: 0,
  };
  dialog.value = false;
  createAction.value = false;
};
const handleSubmit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    createAction.value
      ? await createIndustry(payload.value)
      : await updateIndustry(payload.value);
    if (!error.value) {
      data.value = await getIndustries(false);
      closeDialog();
    }
  }
};

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteIndustry(payload.value.id);
  if (!error.value) {
    data.value = await getIndustries(false);
    closeDialog();
    deleteDialog.value = false;
  }
};

useHead({
  title: "Industries' list",
});
</script>

<style lang="css" scoped></style>
