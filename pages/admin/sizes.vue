<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-btn prepend-icon="mdi-filter-outline" class="card-outlined px-5 text-none text-caption"
          title="Select category" density="compact" size="small" rounded="lg" flat id="selectType" variant="text">
          <span>{{ `Category: ${categoryFilter}` }}</span>
        </v-btn>
        <div class="mt-1">
          <AdminCoreSelect activator="#selectType" :list="categoriesFilter" :listValue="categoryFilter"
            @setItem="setCategoryFilter" />
        </div>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add size"
          @click="openDialog({ size: '', categoryId: 0 }, true)"></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Sizes" :number="sizes.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="headers" :items="sizes" :loading="loading" class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ sizes.indexOf(item) + 1 }}</span>
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
        <AdminCoreDialogHeader title="Size details" @close="closeDialog">
          <div class="px-3 d-flex align-center ga-2">
            <v-btn size="small" color="primary-accent" class="text-caption rounded-lg text-none"
              prepend-icon="mdi-content-save" :loading="loading" @click="handleSubmit">
              <span>Save</span>
            </v-btn>
            <v-btn size="x-small" color="red-darken-4" icon="mdi-delete" title="Delete size" flat
              @click="deleteDialog = true" v-if="!createAction">
            </v-btn>
          </div>
        </AdminCoreDialogHeader>
        <v-card-text>
          <v-form ref="formData" class="py-5">
            <v-text-field :rules="required()" v-model="payload.size" label="Size" @keypress.enter.prevent="handleSubmit"
              autofocus></v-text-field>
            <div class="">
              <v-text-field label="Category" v-model="category" append-inner-icon="mdi-chevron-down" :rules="required()"
                readonly :loading="loadData" id="selectCategory"></v-text-field>
              <AdminCoreSelect activator="#selectCategory" :list="categoriesList" :listValue="category"
                @setItem="setCategory" />
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
      name: 'Size',
      itemTitle: payload.size,
      id: payload.id,
    }" @cancel="deleteDialog = false" @delete="confirmDelete" />
  </ClientOnly>
</template>

<script setup>
const { filterDataPerField, getDetails } =
  useHelpers();
const { required, name } = useRules();
import { useAppStore } from "~/store/app";
import { useSizeStore } from "~/store/sizes";
import { useCategoryStore } from "~/store/categories";

const { loading, error } = storeToRefs(useAppStore());

const { getSizes, getSizesPerCategory, createSize, updateSize, deleteSize } =
  useSizeStore();
const data = ref([]);
const sizes = computed(() => {
  return categoryFilter.value !== "ALL"
    ? filterDataPerField(data.value, search.value, {
      category: categoryFilter.value
    })
    : filterDataPerField(data.value, search.value);
});

const { getCategories } = useCategoryStore();
const categories = ref([]);
const loadData = ref(false);
const getData = async () => {
  loadData.value = true;
  categories.value = await getCategories(false);
  data.value = await getSizes(true,)
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
  { title: "Name", value: "size" },
  { title: "Category", value: "category" },
  { title: "Action", value: "action" },
];

const dialog = ref(false);
const createAction = ref(false);
const formData = ref(null);
const payload = ref({
  size: "",
  categoryId: 0,
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
    size: "",
    categoryId: 0,
  };
  dialog.value = false;
  createAction.value = false;
};
const handleSubmit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    createAction.value
      ? await createSize(payload.value)
      : await updateSize(payload.value);
    if (!error.value) {
      data.value = await getSizes(false);
      closeDialog();
    }
  }
};

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteSize(payload.value.id);
  if (!error.value) {
    data.value = await getSizes(false);
    closeDialog();
    deleteDialog.value = false;
  }
};

useHead({
  title: "Sizes",
});
</script>

<style lang="css" scoped></style>
