<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-btn
          prepend-icon="mdi-filter-outline"
          class="card-outlined px-5 text-none text-caption"
          title="Select type"
          density="compact"
          size="small"
          rounded="lg"
          flat
          id="selectType"
          variant="text"
        >
          <span>{{ `Type: ${type}` }}</span>
        </v-btn>
        <div class="mt-1">
          <AdminCoreSelect
            activator="#selectType"
            :list="['ALL', 'SHOP', 'JOB']"
            :listValue="type"
            @setItem="setType"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-plus"
          size="x-small"
          flat
          color="primary-dark"
          title="Add category"
          @click="openDialog({ category: '', image: null, type: 'SHOP' }, true)"
        ></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Categories" :number="categories.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table
            density="compact"
            :headers="headers"
            :items="categories"
            :loading="loading"
            class="bg-background"
          >
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ categories.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.image`]="{ item }">
              <v-avatar size="30">
                <v-img :src="item.image" ></v-img>
              </v-avatar>
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
        <AdminCoreDialogHeader title="Category details" @close="closeDialog">
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
              title="Delete category"
              flat
              @click="deleteDialog = true"
              v-if="!createAction"
            >
            </v-btn>
          </div>
        </AdminCoreDialogHeader>
        <v-card-text>
          <v-form ref="formData" class="py-5">
            <v-container>
              <v-row align="center">
                <v-col cols="12" sm="5">
                  <div class="mx-auto d-flex flex-column align-center">
                    <AdminCoreImage
                      :profile="false"
                      :aspectRatio="0"
                      :image="payload?.image"
                      @set-image="setImage"
                    />
                  </div>
                </v-col>
                <v-col cols="12" sm="7">
                  <v-text-field
                    :rules="required()"
                    v-model="payload.category"
                    label="Category"
                    autofocus
                  ></v-text-field>
                  <div class="">
                    <v-text-field
                      :rules="required()"
                      v-model="payload.type"
                      label="Type"
                      id="selectCategoryType"
                      readonly
                      append-inner-icon="mdi-chevron-down"
                    ></v-text-field>
                    <div class="mt-1">
                      <AdminCoreSelect
                        activator="#selectCategoryType"
                        :list="['SHOP', 'JOB']"
                        :listValue="payload.type"
                        @setItem="setCategpryType"
                      />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <AdminDeleteConfirmation
      :dialog="deleteDialog"
      :data="{
        name: 'Category',
        itemTitle: payload.category,
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
const appStore = useAppStore();
const { loading, error } = storeToRefs(appStore);

import { useCategoryStore } from "~/store/categories";
const { getCategories, createCategory, updateCategory, deleteCategory } =
  useCategoryStore();
const data = ref(await getCategories());
const categories = computed(() => {
  return type.value !== "ALL"
    ? filterDataPerField(data.value, search.value, {
        type: type.value,
      }).sort((a,b)=>a.category>b.category?1:-1)
    : filterDataPerField(data.value, search.value);
});

const type = ref("ALL");
const setType = (val) => {
  type.value = val;
};

const search = ref("");
const setSearch = (val) => {
  search.value = val;
};

const headers = [
  { title: "#", value: "no" },
  { title: "Image", value: "image" },
  { title: "Name", value: "category" },
  { title: "Type", value: "type" },
  { title: "Action", value: "action" },
];

const dialog = ref(false);
const createAction = ref(false);
const formData = ref(null);
const payload = ref({
  category: "",
  image: null,
  type: "SHOP",
});
const openDialog = (item, create) => {
  payload.value = item;
  dialog.value = true;
  createAction.value = create;
};
const closeDialog = (item) => {
  payload.value = {
    category: "",
    image: null,
    type: "SHOP",
  };
  dialog.value = false;
  createAction.value = false;
};
const setImage = (val) => {
  payload.value.image = val;
};
const setCategpryType = (val) => {
  payload.value.type = val;
};
const handleSubmit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    // if (payload.value.image === "" || !payload.value.image) {
    //   appStore.toggleSnackbar({
    //     status: true,
    //     type: "warning",
    //     message: "Category image is required",
    //   });
    // } else {
    createAction.value
      ? await createCategory(payload.value)
      : await updateCategory(payload.value);
    if (!error.value) {
      data.value = await getCategories(false);
      closeDialog();
    }
    // }
  }
};

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteCategory(payload.value.id);
  if (!error.value) {
    data.value = await getCategories(false);
    closeDialog();
    deleteDialog.value = false;
  }
};

useHead({
  title: "Categories' list",
});
</script>

<style lang="css" scoped></style>
