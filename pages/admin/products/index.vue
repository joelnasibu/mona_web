<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <div class="mt-1">
<<<<<<< HEAD
          <v-btn prepend-icon="mdi-storefront-outline" class="card-outlined px-5 text-none text-caption"
            title="Select Business" density="compact" size="small" rounded="lg" flat id="selectBusiness" variant="text">
            <span>{{ business?.name }}</span>
          </v-btn>
          <div class="mt-1">
            <AdminCoreSelect activator="#selectBusiness" :list="businessesList" :listValue="business.name"
              @setItem="setBusiness" />
          </div>
        </div>
        <v-btn-toggle mandatory color="black" divided border density="compact" class="rounded-lg" v-model="status"
          title="Status">
          <v-btn variant="text" v-for="({ name, value }, i) in statuses" :key="i" class="text-none text-caption"
            :value="value">
=======
          <v-btn
            prepend-icon="mdi-storefront-outline"
            class="card-outlined px-5 text-none text-caption"
            title="Select Business"
            density="compact"
            size="small"
            rounded="lg"
            flat
            id="selectBusiness"
            variant="text"
          >
            <span>{{ business?.name }}</span>
          </v-btn>
          <div class="mt-1">
            <AdminCoreSelect
              activator="#selectBusiness"
              :list="businessesList"
              :listValue="business.name"
              @setItem="setBusiness"
            />
          </div>
        </div>
        <v-btn-toggle
          mandatory
          color="black"
          divided
          border
          density="compact"
          class="rounded-lg"
          v-model="status"
          title="Status"
        >
          <v-btn
            variant="text"
            v-for="({ name, value }, i) in statuses"
            :key="i"
            class="text-none text-caption"
            :value="value"
          >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
            <span>{{ name }}</span>
          </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
<<<<<<< HEAD
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add product"
          :to="{ name: 'admin-products-create' }" v-if="currentUser.accessLevel === 3"></v-btn>
=======
        <v-btn
          icon="mdi-plus"
          size="x-small"
          flat
          color="primary-dark"
          title="Add product"
          :to="{ name: 'admin-products-create' }"
        ></v-btn>
        <!-- v-if="currentUser.accessLevel === 3" -->
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Products" :number="products.length" />
        <v-sheet width="100%" color="transparent">
<<<<<<< HEAD
          <v-data-table density="compact" :headers="headers" :items="products" :loading="loading" class="bg-background">
=======
          <v-data-table
            density="compact"
            :headers="headers"
            :items="products"
            :loading="loading"
            class="bg-background"
          >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ products.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.publish`]="{ item }">
<<<<<<< HEAD
              <AdminBtnStatus :status="item.isPublished" :titles="{ isNot: 'Publish', isAlready: 'Published' }"
                @submit="handlePublish(item)" />
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="
                navigateTo({
                  name: 'admin-products-id',
                  params: { id: item.productId },
                })
                " />
=======
              <AdminBtnStatus
                :status="item.isPublished"
                :titles="{ isNot: 'Publish', isAlready: 'Published' }"
                @submit="handlePublish(item)"
              />
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn
                @details="
                  navigateTo({
                    name: 'admin-products-id',
                    params: { id: item.productId },
                  })
                "
              />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
            </template>
          </v-data-table>
        </v-sheet>
      </div>
      <v-dialog v-model="publishDialog" persistent fullscreen>
        <v-card class="card-outlined system-bg hide-scrollbar pa-0" rounded="0">
          <AdminCoreDialogHeader title="Publish product" @close="close">
<<<<<<< HEAD
            <v-btn rounded flat color="link" class="text-caption text-none mx-2" prepend-icon="mdi-check-circle-outline"
              :loading="loading" size="small" @click="publishConfirmation">
=======
            <v-btn
              rounded
              flat
              color="link"
              class="text-caption text-none mx-2"
              prepend-icon="mdi-check-circle-outline"
              :loading="loading"
              size="small"
              @click="publishConfirmation"
            >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
              <span>Publish</span>
            </v-btn>
          </AdminCoreDialogHeader>
          <v-card-text class="pa-0">
            <v-container class="py-0">
              <v-row justify="center">
                <v-col cols="12" sm="9">
                  <v-card class="bg-transparent pa-0">
                    <AdminProductPreview :payload="product" />
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </ClientOnly>
</template>

<script setup>
const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();

import { useAppStore } from "~/store/app";
const { loading, error, currentUser } = storeToRefs(useAppStore());

import { useBusinessStore } from "~/store/business";
const { getApprovedBusinesses } = useBusinessStore();
const businesses = ref([]);
const business = ref({ name: "ALL BUSINESSES", id: 0 });
const businessesList = computed(() => {
  let businessMap = businesses.value.map((c) => c.businessName);
  return ["ALL BUSINESSES", ...businessMap];
});
const setBusiness = (val) => {
  business.value.name = val;
  business.value.code = businesses.value.find(
    (item) => item.businessName === val
  )?.code;
};

import { useProductStore } from "~/store/products";
const { allProducts, businessProducts, productsPerCategory, publishProduct } =
  useProductStore();
const data = ref([]);

const getData = async () => {
  let allData = await allProducts();
  let businessData = await getApprovedBusinesses(false);

  data.value = allData.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.createdBy === currentUser.value.userId
      : i
  );
  data.value = replaceObjectEmptyStrings(data.value);

<<<<<<< HEAD
  businesses.value = businessData.filter(i =>
    currentUser.value.accessLevel === 3
      ? i.userId === currentUser.value.userId
      : i)
=======
  businesses.value = businessData.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.userId === currentUser.value.userId
      : i
  );
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
};
onMounted(() => {
  getData();
});

const products = computed(() => {
  return business.value.name !== "ALL BUSINESSES"
    ? filterDataPerField(data.value, search.value, {
<<<<<<< HEAD
      isPublished: status.value,
      businessId: business.value.code ?? "",
    })
    : filterDataPerField(data.value, search.value, {
      isPublished: status.value,
    });
=======
        isPublished: status.value,
        businessId: business.value.code ?? "",
      })
    : filterDataPerField(data.value, search.value, {
        isPublished: status.value,
      });
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
});

const search = ref("");
const setSearch = (val) => {
  search.value = val;
};

const headers = [
  { title: "#", value: "no" },
  { title: "ID", value: "productId" },
  { title: "Name", value: "productName" },
  // { title: "Model", value: "model" },
  { title: "Brand", value: "brand" },
  { title: "Stock", value: "stock.length" },
  { title: "Category", value: "category.name" },
  { title: "Subcategory", value: "category.subcategory" },
  { title: "Business", value: "business.businessName" },
  { title: "Published", value: "publish" },
  { title: "Action", value: "action" },
];

const statuses = [
  { name: "Published", value: true },
  { name: "Pending", value: false },
];
const status = ref(true);

const publishDialog = ref(false);
const product = ref({});
const handlePublish = (item) => {
  publishDialog.value = true;
  product.value = item;
};
const close = () => {
  publishDialog.value = false;
  product.value = {};
};
const publishConfirmation = async () => {
  await publishProduct(product.value.productId, { isPublished: true });
  if (!error.value) {
    close();
    getData();
  }
};

useSeoMeta({
  title: "Products",
});
</script>

<style lang="scss" scoped></style>
