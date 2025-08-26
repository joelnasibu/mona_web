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
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add subcategory" @click="
          openDialog({ subcategory: '', image: null, type: 'SHOP' }, true)
          "></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Subcategories" :number="subcategories.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="headers" :items="subcategories" :loading="loading"
            class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ subcategories.indexOf(item) + 1 }}</span>
            </template>

            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="openDialog(item, false)" />
            </template>
          </v-data-table>
        </v-sheet>
      </div>
    </div>
    <v-dialog width="55%" persistent v-model="dialog">
      <v-card class="card-outlined rounded-lg">
        <AdminCoreDialogHeader title="Subcategory details" @close="closeDialog">
          <div class="px-3 d-flex align-center ga-2">
            <v-btn size="small" color="primary-accent" class="text-caption rounded-lg text-none"
              prepend-icon="mdi-content-save" :loading="loading" @click="handleSubmit">
              <span>Save</span>
            </v-btn>
            <v-btn size="x-small" color="red-darken-4" icon="mdi-delete" title="Delete subcategory" flat
              @click="deleteDialog = true" v-if="!createAction">
            </v-btn>
          </div>
        </AdminCoreDialogHeader>
        <v-card-text>
          <v-form ref="formData" class="py-5">
            <v-container>
              <v-row align="center">
                <v-col cols="12" sm="5">
                  <div class="mx-auto d-flex flex-column align-center">
                    <AdminCoreImage :profile="false" :aspectRatio="0" :image="payload?.image" @set-image="setImage" />
                  </div>
                </v-col>
                <v-col cols="12" sm="7">
                  <v-text-field :rules="required()" v-model="payload.subcategory" label="Subcategory"
                    autofocus></v-text-field>
                  <div class="">
                    <v-text-field label="Category" v-model="category" append-inner-icon="mdi-chevron-down"
                      :rules="required()" readonly :loading="loadData" id="selectCategory"></v-text-field>
                    <AdminCoreSelect activator="#selectCategory" :list="categoriesList" :listValue="category"
                      @setItem="setCategory" />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
      name: 'Subcategory',
      itemTitle: payload.subcategory,
      id: payload.id,
    }" @cancel="deleteDialog = false" @delete="confirmDelete" />
  </ClientOnly>
</template>

<script setup>
const { replaceObjectEmptyStrings, filterDataPerField, getDetails } =
  useHelpers();
const { required, name } = useRules();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { loading, error, currentUser } = storeToRefs(appStore);

import { useSubcategoryStore } from "~/store/subcategories";
const {
  getSubcategories,
  getSubcategoriesByType,
  createSubcategory,
  updateSubcategory,
  deleteSubcategory,
} = useSubcategoryStore();
const data = ref(await getSubcategories());
const subcategories = computed(() => {
  return categoryFilter.value !== "ALL"
    ? filterDataPerField(data.value, search.value, {
      category: categoryFilter.value
    })
    : filterDataPerField(data.value, search.value);
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
  { title: "Name", value: "subcategory" },
  { title: "Category", value: "category" },
  { title: "Action", value: "action" },
];

const dialog = ref(false);
const createAction = ref(false);
const formData = ref(null);
const payload = ref({
  subcategory: "",
  image: null,
  categoryId: 0,
});
const openDialog = (item, create) => {
  payload.value = item;
  dialog.value = true;
  createAction.value = create;
  if (!create)
    category.value = getDetails(categories.value, item.categoryId)?.category;
};
const closeDialog = () => {
  payload.value = {
    subcategory: "",
    image: null,
    categoryId: 0,
  };
  dialog.value = false;
  createAction.value = false;
  category.value = "";
};
const setImage = (val) => {
  payload.value.image = val;
};
const setCategoryType = (val) => {
  payload.value.type = val;
};
const handleSubmit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    // if (payload.value.image === "" || !payload.value.image) {
    //   appStore.toggleSnackbar({
    //     status: true,
    //     type: "warning",
    //     message: "Subcategory image is required",
    //   });
    // } else {
    createAction.value
      ? await createSubcategory(payload.value)
      : await updateSubcategory(payload.value);
    if (!error.value) {
      data.value = await getSubcategories(false);
      closeDialog();
    }
    // }
  }
};

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteSubcategory(payload.value.id);
  if (!error.value) {
    data.value = await getSubcategories(false);
    closeDialog();
    deleteDialog.value = false;
  }
};

useHead({
  title: "Sub-Categories",
});
</script>

<style lang="css" scoped></style>
