<template>
  <div class="">
    <v-form ref="formData">
      <v-container class="pa-0" fluid>
        <v-row>

          <v-col cols="12" sm="4" class="text-caption" v-if="edit">
            <div class="ga-2 mt-3 d-flex">
              <div class="mx-auto d-flex flex-column align-center">
                <AdminCoreImage @setImage="setImage" :image="stock.image" :profile="false" :full-size="true"
                  :editable="false" />
              </div>
            </div>
          </v-col>

          <v-col cols="12" :sm="props.edit ? 8 : 12">
            <v-row align="start">

              <v-col sm="12" md="4" lg="4">
                <v-text-field :label="`Size(${sizesList.length})`" v-model="stock.size" :loading="loadData" readonly
                  id="selectSize" append-inner-icon="mdi-chevron-down"></v-text-field>
                <AdminCoreSelect activator="#selectSize" :list="sizesList" :listValue="payload.size"
                  @setItem="setSize" />
              </v-col>

              <v-col sm="12" md="4" lg="4">
                <v-text-field placeholder="Color" readonly append-inner-icon="mdi-chevron-down" :bg-color="stock.color"
                  id="selectColor"></v-text-field>
                <v-menu activator="#selectColor" :close-on-content-click="false">
                  <v-card class="menu-list pa-0" style="width: fit-content">
                    <v-color-picker v-model="stock.color" mode="hexa"></v-color-picker>
                  </v-card>
                </v-menu>
              </v-col>

              <v-col sm="12" md="4" lg="4">
                <v-text-field label="Quantity" v-model.number="stock.stock" :rules="required()"
                  @keypress="digitsOnly"></v-text-field>
              </v-col>

              <v-col sm="12" md="6" lg="6">
                <v-text-field label="Price" v-model.number="stock.price" :rules="required()" @keypress="digitsOnly"
                  prefix="USD"></v-text-field>
              </v-col>

              <v-col sm="12" md="6" lg="6">
                <v-text-field label="Expiry date" v-model="selectedDate" readonly
                  @click="datePicker = true"></v-text-field>
              </v-col>
            </v-row>
          </v-col>

        </v-row>

        <v-row>
          <v-col>
            <div class="w-100 d-flex justify-end ga-3">
              <v-btn icon="mdi-refresh" title="Restaurer" variant="text" class="card-outlined" rounded="lg"
                size="x-small" @click="reset"></v-btn>
              <v-btn :prepend-icon="edited ? 'mdi-content-save' : 'mdi-plus'" flat color="primary-accent"
                class="card-outlined text-caption text-none" rounded="lg" size="small" @click="handleStock"
                :loading="loadData">
                <span>{{ edited ? 'Update' : 'Add' }}</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-data-table density="compact" :headers="headers" :items="edit ? stocks : payload.stock" class="bg-background mt-10"
      :loading="loadData">

      <template v-slot:[`item.no`]="{ item }">
        <v-avatar v-if="item.image" size="40">
          <v-img :src="item.image"></v-img>
        </v-avatar>
        <span v-else>{{ stocks.indexOf(item) + 1 }}</span>

      </template>

      <template v-slot:[`item.price`]="{ item }">
        <span>{{ currencyFormat(item.price) }}</span>
      </template>

      <template v-slot:[`item.expiration_date`]="{ item }">
        <span>{{ item.expiration_date ? dateFormat_Month(item.expiration_date) : "-" }}</span>
      </template>

      <template v-slot:[`item.color`]="{ item }">
        <v-card :color="item.color" width="15" height="15" flat rounded="circle"></v-card>
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-btn v-if="edit" icon="mdi-pencil-outline" size="small" variant="text" title="Remove"
          @click="editStock(item)"></v-btn>

        <v-btn icon="mdi-delete-outline" size="small" variant="text" title="Remove" @click="removeStock(item)"></v-btn>
      </template>

    </v-data-table>

    <AdminCoreCalendarDate :datePicker="datePicker" :date="stock.expiration_date" :min="minDate" @setDate="setDate"
      @close="datePicker = false" />

  </div>
</template>

<script setup>
const props = defineProps({
  edit: {
    type: Boolean,
    default: false
  },
  payload: Object,
  trigger: Boolean,
});

const emits = defineEmits(["step"]);

const { required } = useRules();
const { digitsOnly, currencyFormat, dateFormat_Month, dateFormat_short } =
  useHelpers();

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();
const { error } = storeToRefs(useAppStore())

import { useSizeStore } from "~/store/sizes";
const { getSizesPerCategory } = useSizeStore();


import { useProductStore } from "~/store/products";
const { getProductStock, createProductStock, updateProductStock, deleteProductStock, } = useProductStore()

const sizes = ref([]);
const edited = ref(false)
const loadData = ref(false);

const formData = ref(null);
const stocks = ref([])
const stock = ref({
  image: null,
  stock: 1,
  price: props.payload.price,
  size: "",
  color: "",
  expiration_date: "",
});

const getData = async () => {
  loadData.value = true;
  sizes.value = await getSizesPerCategory(false, props.payload.categoryId);
  stocks.value = await getProductStock(props.payload.productId)
  loadData.value = false;
};

onMounted(() => {
  getData();
});

const sizesList = computed(() => {
  return sizes.value.map((c) => c.size);
});


const setSize = (val) => {
  stock.value.size = val;
};


const setImage = (image) => {
  stock.value.image = image
};

const reset = async () => {
  // await formData.value.reset();
  getData()
  stock.value = {
    stock: 1,
    price: props.payload.price,
    size: "",
    color: "",
    expiration_date: "",
  };
};

const handleStock = () => {
  if (edited.value) updateStock()
  else addStock()
}

const addStock = async () => {
  let availableStock = props.payload.stock.find(
    (item) =>
      item.size == stock.value.size && item.color == stock.value.color
  );
  const { valid } = await formData.value.validate();
  if (valid)
    if (availableStock)
      toggleSnackbar({
        status: true,
        type: "warning",
        message: "Stock with this size and color already exists",
      });
    else {
      alert('clicked', props.edit)
      if (props.edit) {
        loadData.value = true
        stock.value.productId = props.payload.productId
        await createProductStock(stock.value)
        loadData.value = false
      }
      else {
        props.payload.stock.push(stock.value);
      }
      if (!error.value)
        reset();
    }
};

const editStock = async (item) => {
  stock.value = Object.assign({}, item)
  edited.value = true
};

const updateStock = async () => {
  loadData.value = true
  stock.value.productId = props.payload.productId
  await updateProductStock(stock.value)

  if (!error.value) {
    reset()
    props.payload.stock = stocks.value
    edited.value = false
  }

  loadData.value = false

}

const removeStock = async (item) => {
  if (edit.value) await deleteProductStock(stock.value)
  let i = props.payload.stock.indexOf(item);
  if (i > -1) props.payload.stock.splice(i, 1);
};

const headers = [
  { title: "#", value: "no" },
  { title: "Size", value: "size" },
  { title: "Color", value: "color" },
  { title: "Quantity", value: "stock" },
  { title: "Price", value: "price" },
  { title: "Expiration Date", value: "expiration_date" },
  { title: "Action", value: "action" },
];

const minDate = new Date();

const datePicker = ref(false);

const selectedDate = computed({
  get() {
    return stock.value.expiration_date ? dateFormat_short(stock.value.expiration_date) : '';
  },
  set(val) {
    stock.value.expiration_date = val;
  },
});

const setDate = (val) => {
  stock.value.expiration_date = val.date;
  datePicker.value = !val.close;
};

watch(
  () => props.payload.categoryId,
  () => {
    getData();
  }
);

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);

const moveNext = () => {
  let tab = 2;
  if (props.payload.stock.length > 0) tab = 3;
  else
    toggleSnackbar({
      status: true,
      type: "warning",
      message: "Stock is required",
    });
  emits("step", tab);
};

</script>

<style lang="css" scoped></style>
