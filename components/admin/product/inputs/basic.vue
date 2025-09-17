<template>
  <div>
    <v-container class="pa-0" fluid>
      <v-row align="center">
        <v-col cols="12" sm="4" class="text-caption">
          <div class="mx-auto d-flex flex-column align-center">
<<<<<<< HEAD
            <AdminCoreImage @setImage="setImage" :image="payload.thumbnail" :profile="false" :full-size="true"
              :editable="false" />
=======
            <AdminCoreImage
              @setImage="setImage"
              :image="payload.thumbnail"
              :profile="false"
              :full-size="true"
              :editable="false"
            />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
          </div>
        </v-col>
        <v-col cols="12" sm="8">
          <v-form ref="formData">
            <v-container class="pa-0" fluid>
              <v-row>
                <v-col lg="6" md="6" xs="12" class="py-0">
<<<<<<< HEAD
                  <v-text-field label="Name" v-model="payload.productName" :rules="name()"
                    @input.capture="transformToUpperCase"></v-text-field>
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field label="Brand" v-model="payload.brand"></v-text-field>
=======
                  <v-text-field
                    label="Name"
                    v-model="payload.productName"
                    :rules="name()"
                    @input.capture="transformToUpperCase"
                    id="selectProduct"
                    append-inner-icon="mdi-chevron-down"
                  ></v-text-field>
                  <AdminCoreSelect
                    activator="#selectProduct"
                    :list="data.map((v) => v.productName)"
                    :listValue="payload.productName"
                    @setItem="setProduct"
                  />
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field
                    label="Brand"
                    v-model="payload.brand"
                  ></v-text-field>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                </v-col>
                <!-- <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field label="Model" v-model="payload.model" :rules="required()"></v-text-field>
                </v-col> -->
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
<<<<<<< HEAD
                  <v-text-field label="Category" v-model="payload.category" append-inner-icon="mdi-chevron-down"
                    :rules="required()" readonly :loading="loadData" id="selectCategory"></v-text-field>
                  <AdminCoreSelect activator="#selectCategory" :list="categoriesList" :listValue="payload.category"
                    @setItem="setCategory" />
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field label="Subcategory" v-model="payload.subcategory" append-inner-icon="mdi-chevron-down"
                    :rules="payload.category ? required() : []" readonly :loading="loadData" id="selectSubcategory"
                    :disabled="payload.category === ''"></v-text-field>
                  <AdminCoreSelect activator="#selectSubcategory" :list="subcategoriesList"
                    :listValue="payload.subcategory" @setItem="setSubcategory" />
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field label="Price" v-model.number="payload.price" :rules="required()" @keypress="digitsOnly"
                    prefix="USD"></v-text-field>
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <div class="d-flex ga-2">
                    <v-text-field label="Discount" v-model.number="payload.discount" @keypress="digitsOnly" suffix="%"
                      :hint="currencyFormat(
                        Number(
                          payload.price -
                          priceAfterDiscount(
                            payload.price,
                            payload.discount
                          )
                        )
                      )
                        " persistent-hint></v-text-field>
                    <v-text-field label="Price after discount" v-model="handlePriceAfterDiscount" readonly prefix="USD"
                      v-if="handlePriceAfterDiscount > 0" style="opacity: 0.6"></v-text-field>
=======
                  <v-text-field
                    label="Category"
                    v-model="payload.category"
                    append-inner-icon="mdi-chevron-down"
                    :rules="required()"
                    readonly
                    :loading="loadData"
                    id="selectCategory"
                  ></v-text-field>
                  <AdminCoreSelect
                    activator="#selectCategory"
                    :list="categoriesList"
                    :listValue="payload.category"
                    @setItem="setCategory"
                  />
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field
                    label="Subcategory"
                    v-model="payload.subcategory"
                    append-inner-icon="mdi-chevron-down"
                    :rules="payload.category ? required() : []"
                    readonly
                    :loading="loadData"
                    id="selectSubcategory"
                    :disabled="payload.category === ''"
                  ></v-text-field>
                  <AdminCoreSelect
                    activator="#selectSubcategory"
                    :list="subcategoriesList"
                    :listValue="payload.subcategory"
                    @setItem="setSubcategory"
                  />
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <v-text-field
                    label="Price"
                    v-model.number="payload.price"
                    :rules="required()"
                    @keypress="digitsOnly"
                    prefix="USD"
                  ></v-text-field>
                </v-col>
                <v-col lg="6" md="6" xs="12" sm="6" class="py-0">
                  <div class="d-flex ga-2">
                    <v-text-field
                      label="Discount"
                      v-model.number="payload.discount"
                      @keypress="digitsOnly"
                      suffix="%"
                      :hint="
                        currencyFormat(
                          Number(
                            payload.price -
                              priceAfterDiscount(
                                payload.price,
                                payload.discount
                              )
                          )
                        )
                      "
                      persistent-hint
                    ></v-text-field>
                    <v-text-field
                      label="Price after discount"
                      v-model="handlePriceAfterDiscount"
                      readonly
                      prefix="USD"
                      v-if="handlePriceAfterDiscount > 0"
                      style="opacity: 0.6"
                    ></v-text-field>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-expand-transition>
<<<<<<< HEAD
            <div class="no-wrap overflow-x-auto w-100 hide-scrollbar" v-if="payload.images.length > 0">
              <v-badge :content="payload.images.length" color="link" class="text-subtitle-2 mt-3" inline>
                <span class="mr-5">Product Images</span>
              </v-badge>
              <div class="ga-2 mt-3 d-flex">
                <div class="position-relative" v-for="(img, i) in payload.images" :key="i">
                  <v-hover v-slot="{ isHovering, props }">
                    <div class="" v-bind="props">
                      <v-card width="100" class="card-outlined rounded-lg" flat
                        :class="{ 'visible-image': payload.thumbnail === img }">
                        <v-img :src="img" :aspect-ratio="4 / 3">
                          <v-expand-transition>
                            <div v-if="isHovering" class="d-flex text-caption cursor-pointer" style="
                                height: 100%;
                                background: rgba(0, 0, 0, 0.3);
                              " title="Remove image" @click="removeItem(i)">
                              <v-icon icon="mdi-delete" class="ma-auto" color="white" size="x-large"></v-icon>
=======
            <div
              class="no-wrap overflow-x-auto w-100 hide-scrollbar"
              v-if="payload.images.length > 0"
            >
              <v-badge
                :content="payload.images.length"
                color="link"
                class="text-subtitle-2 mt-3"
                inline
              >
                <span class="mr-5">Product Images</span>
              </v-badge>
              <div class="ga-2 mt-3 d-flex">
                <div
                  class="position-relative"
                  v-for="(img, i) in payload.images"
                  :key="i"
                >
                  <v-hover v-slot="{ isHovering, props }">
                    <div class="" v-bind="props">
                      <v-card
                        width="100"
                        class="card-outlined rounded-lg"
                        flat
                        :class="{ 'visible-image': payload.thumbnail === img }"
                      >
                        <v-img :src="img" :aspect-ratio="4 / 3">
                          <v-expand-transition>
                            <div
                              v-if="isHovering"
                              class="d-flex text-caption cursor-pointer"
                              style="
                                height: 100%;
                                background: rgba(0, 0, 0, 0.3);
                              "
                              title="Remove image"
                              @click="removeItem(i)"
                            >
                              <v-icon
                                icon="mdi-delete"
                                class="ma-auto"
                                color="white"
                                size="x-large"
                              ></v-icon>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                            </div>
                          </v-expand-transition>
                        </v-img>
                      </v-card>
                      <v-slide-y-transition>
<<<<<<< HEAD
                        <div class="text-caption text-center text-link cursor-pointer text-decoration-underline"
                          v-if="isHovering && img !== payload.thumbnail" @click="payload.thumbnail = img">
=======
                        <div
                          class="text-caption text-center text-link cursor-pointer text-decoration-underline"
                          v-if="isHovering && img !== payload.thumbnail"
                          @click="payload.thumbnail = img"
                        >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                          <span>Set as thumbnail</span>
                        </div>
                      </v-slide-y-transition>
                    </div>
                  </v-hover>
                  <v-slide-y-transition>
<<<<<<< HEAD
                    <div class="text-caption text-center" v-if="payload.thumbnail === img">
                      <span>Thumbnail</span>
                      <v-icon icon="mdi-check-circle" end size="x-small"></v-icon>
=======
                    <div
                      class="text-caption text-center"
                      v-if="payload.thumbnail === img"
                    >
                      <span>Thumbnail</span>
                      <v-icon
                        icon="mdi-check-circle"
                        end
                        size="x-small"
                      ></v-icon>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                    </div>
                  </v-slide-y-transition>
                </div>
              </div>
            </div>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps({
  edit: {
    type: Boolean,
<<<<<<< HEAD
    default: false
=======
    default: false,
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
  },
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { required, name } = useRules();
<<<<<<< HEAD
const { digitsOnly, priceAfterDiscount, currencyFormat, transformToUpperCase } = useHelpers();
=======
const { digitsOnly, priceAfterDiscount, currencyFormat, transformToUpperCase } =
  useHelpers();
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
import { useSubcategoryStore } from "~/store/subcategories";
const { getSubcategoriesPerCategory } = useSubcategoryStore();
const categories = ref([]);
const subcategories = ref([]);
const loadData = ref(false);
const getData = async () => {
  // let [cat, subcat] = await Promise.all([
  //   getCategoriesByType(false, "SHOP"),
  //   getSubcategories(false),
  // ]);
  // subcategories.value = subcat;

  loadData.value = true;
<<<<<<< HEAD
  categories.value = await getCategoriesByType(false, 'SHOP');
  if (props.edit) props.payload.categoryId = categories.value.find((cat) => cat.category === props.payload.category)?.id;
=======
  categories.value = await getCategoriesByType(false, "SHOP");
  if (props.edit)
    props.payload.categoryId = categories.value.find(
      (cat) => cat.category === props.payload.category
    )?.id;
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
  loadData.value = false;
};
watchEffect(() => {
  getData();
});
const categoriesList = computed(() => {
  return categories.value.map((c) => c.category);
});

const setCategory = async (val) => {
<<<<<<< HEAD
  loadData.value = true
  props.payload.category = val;
  props.payload.categoryId = categories.value.find((cat) => cat.category === val)?.id;
  props.payload.subcategory = "";
  subcategories.value = await getSubcategoriesPerCategory(false, props.payload.categoryId)
  loadData.value = false
=======
  loadData.value = true;
  props.payload.category = val;
  props.payload.categoryId = categories.value.find(
    (cat) => cat.category === val
  )?.id;
  props.payload.subcategory = "";
  subcategories.value = await getSubcategoriesPerCategory(
    false,
    props.payload.categoryId
  );
  loadData.value = false;
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
};

const subcategoriesList = computed(() => {
  return subcategories.value
    .filter((sub) => sub.categoryId === props.payload.categoryId)
    .map((sub) => sub.subcategory);
});

const setSubcategory = (val) => {
  props.payload.subcategory = val;
  props.payload.subcategoryId = subcategories.value.find(
    (sub) => sub.subcategory === val
  )?.id;
};

<<<<<<< HEAD

=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const setImage = (val) => {
  if (props.payload.thumbnail && props.edit) {
    //props.payload.images[0];
    props.payload.images.push(val);
  } else {
    props.payload.thumbnail = val;
  }
};
const removeItem = (index) => {
  props.payload.images.splice(index, 1);
};

const handlePriceAfterDiscount = computed(() => {
  return priceAfterDiscount(props.payload.price, props.payload.discount);
});

const formData = ref(null);

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const moveNext = async () => {
  let tab = 0;

  const { valid } = await formData.value.validate();
  if (valid)
    if (props.payload.thumbnail) tab = 1;
    else
      toggleSnackbar({
        status: true,
        message: "Image is required",
        type: "warning",
      });
  emits("step", tab);
};
<<<<<<< HEAD
=======

import { useProductStore } from "~/store/products";
const { businessProducts, publishedProducts } = useProductStore(),
  data = await publishedProducts(),
  setProduct = (val) => {
    let prod = data.find((p) => p.productName === val);
    if (!!prod)
      Object.keys(props.payload).forEach((element) => {
        props.payload[element] = prod[element];
        setCategory(prod.category.name);
        props.payload.subcategory = prod.category.subcategory;
      });

    console.log(prod, props.payload);
  };
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
</script>

<style lang="css" scoped>
.visible-image {
  border-color: rgba(var(--v-theme-link)) !important;
  border-width: 2px !important;
}
</style>
