<template>
  <div class="">
    <v-form ref="formData">
      <v-container class="pa-0" fluid>
        <v-row justify="center">
          <v-col cols="12" sm="10">
            <v-row>
              <v-col cols="12" sm="4" class="d-none d-md-block">
                <v-radio-group
                  v-model="payload.grade"
                  color="secondary"
                  class=""
                  hide-details
                >
                  <v-radio v-for="n in 5" :value="n" :key="n" class="">
                    <template #label>
                      <div class="d-flex flex-column text-caption">
                        <b>Grade {{ n }}</b>
                        <span class="text-disabled mt-n1"
                          >Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Esse deserunt maxime repudiandae quasi magni
                          voluptate.
                        </span>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="12" sm="8" class="">
                <v-row align="start">
                  <v-col sm="12" md="6" lg="6" class="d-block d-md-none">
                    <v-text-field
                      label="Size"
                      v-model="payload.grade"
                      :rules="required()"
                      id="selectGrade"
                    ></v-text-field>
                  </v-col>
                  <v-col sm="12" md="6" lg="6">
                    <v-text-field
                      label="Size"
                      v-model="payload.size"
                      :rules="required()"
                    ></v-text-field>
                  </v-col>

                  <v-col sm="12" md="6" lg="6">
                    <v-text-field
                      placeholder="Color"
                      readonly
                      append-inner-icon="mdi-chevron-down"
                      :bg-color="payload.color"
                      id="selectColor"
                      :rules="required()"
                      v-model="payload.color"
                    ></v-text-field>
                    <v-menu
                      activator="#selectColor"
                      :close-on-content-click="false"
                    >
                      <v-card class="menu-list pa-0" style="width: fit-content">
                        <v-color-picker
                          v-model="payload.color"
                          mode="hexa"
                        ></v-color-picker>
                      </v-card>
                    </v-menu>
                  </v-col>

                  <v-col sm="12" md="6" lg="6">
                    <v-text-field
                      label="Quantity"
                      v-model.number="payload.quantity"
                      :rules="required()"
                      @keypress="digitsOnly"
                    ></v-text-field>
                  </v-col>

                  <v-col sm="12" md="6" lg="6">
                    <v-text-field
                      label="Expiry date"
                      v-model="selectedDate"
                      @click="datePicker = true"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <AdminCoreCalendarDate
      :datePicker="datePicker"
      :date="stock.expiration_date"
      :min="minDate"
      @setDate="setDate"
      @close="datePicker = false"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  edit: {
    type: Boolean,
    default: false,
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
const { error } = storeToRefs(useAppStore());

import { useSizeStore } from "~/store/sizes";
const { getSizesPerCategory } = useSizeStore();

import { useProductStore } from "~/store/products";
const {
  getProductStock,
  createProductStock,
  updateProductStock,
  deleteProductStock,
} = useProductStore();

const sizes = ref([]);
const edited = ref(false);
const loadData = ref(false);

const formData = ref(null);
const stocks = ref([]);
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
  stocks.value = await getProductStock(props.payload.productId);
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
  stock.value.image = image;
};

const reset = async () => {
  // await formData.value.reset();
  getData();
  stock.value = {
    stock: 1,
    price: props.payload.price,
    size: "",
    color: "",
    expiration_date: "",
  };
};

const handleStock = () => {
  if (edited.value) updateStock();
  else addStock();
};

const addStock = async () => {
  let availableStock = props.payload.stock.find(
    (item) => item.size == stock.value.size && item.color == stock.value.color
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
      alert("clicked", props.edit);
      if (props.edit) {
        loadData.value = true;
        stock.value.productId = props.payload.productId;
        await createProductStock(stock.value);
        loadData.value = false;
      } else {
        props.payload.stock.push(stock.value);
      }
      if (!error.value) reset();
    }
};

const editStock = async (item) => {
  stock.value = Object.assign({}, item);
  edited.value = true;
};

const updateStock = async () => {
  loadData.value = true;
  stock.value.productId = props.payload.productId;
  await updateProductStock(stock.value);

  if (!error.value) {
    reset();
    props.payload.stock = stocks.value;
    edited.value = false;
  }

  loadData.value = false;
};

const removeStock = async (item) => {
  if (edit.value) await deleteProductStock(stock.value);
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
    return stock.value.expiration_date
      ? dateFormat_short(stock.value.expiration_date)
      : "";
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

const moveNext = async () => {
  let tab = 2;
  const { valid } = await formData.value.validate();
  if (valid) tab = 3;

  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
