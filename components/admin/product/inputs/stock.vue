<template>
  <div class="">
    <v-form ref="formData">
      <v-container class="pa-0" fluid>
<<<<<<< HEAD
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
=======
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
                  <v-radio v-for="n in 5" :value="n" class="">
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
        </v-row>
      </v-container>
    </v-form>

<<<<<<< HEAD
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

=======
    <AdminCoreCalendarDate
      :datePicker="datePicker"
      :date="stock.expiration_date"
      :min="minDate"
      @setDate="setDate"
      @close="datePicker = false"
    />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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

const { required } = useRules();
const { digitsOnly, currencyFormat, dateFormat_Month, dateFormat_short } =
  useHelpers();

import { useAppStore } from "~/store/app";
const { toggleSnackbar } = useAppStore();
<<<<<<< HEAD
const { error } = storeToRefs(useAppStore())
=======
const { error } = storeToRefs(useAppStore());
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

import { useSizeStore } from "~/store/sizes";
const { getSizesPerCategory } = useSizeStore();

<<<<<<< HEAD

import { useProductStore } from "~/store/products";
const { getProductStock, createProductStock, updateProductStock, deleteProductStock, } = useProductStore()

const sizes = ref([]);
const edited = ref(false)
const loadData = ref(false);

const formData = ref(null);
const stocks = ref([])
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
  stocks.value = await getProductStock(props.payload.productId)
=======
  stocks.value = await getProductStock(props.payload.productId);
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
  loadData.value = false;
};

onMounted(() => {
  getData();
});

const sizesList = computed(() => {
  return sizes.value.map((c) => c.size);
});

<<<<<<< HEAD

=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const setSize = (val) => {
  stock.value.size = val;
};

<<<<<<< HEAD

const setImage = (image) => {
  stock.value.image = image
=======
const setImage = (image) => {
  stock.value.image = image;
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
};

const reset = async () => {
  // await formData.value.reset();
<<<<<<< HEAD
  getData()
=======
  getData();
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
  stock.value = {
    stock: 1,
    price: props.payload.price,
    size: "",
    color: "",
    expiration_date: "",
  };
};

const handleStock = () => {
<<<<<<< HEAD
  if (edited.value) updateStock()
  else addStock()
}

const addStock = async () => {
  let availableStock = props.payload.stock.find(
    (item) =>
      item.size == stock.value.size && item.color == stock.value.color
=======
  if (edited.value) updateStock();
  else addStock();
};

const addStock = async () => {
  let availableStock = props.payload.stock.find(
    (item) => item.size == stock.value.size && item.color == stock.value.color
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
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
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
    }
};

const editStock = async (item) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
    return stock.value.expiration_date ? dateFormat_short(stock.value.expiration_date) : '';
=======
    return stock.value.expiration_date
      ? dateFormat_short(stock.value.expiration_date)
      : "";
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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

<<<<<<< HEAD
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

=======
const moveNext = async () => {
  let tab = 2;
  const { valid } = await formData.value.validate();
  if (valid) tab = 3;

  emits("step", tab);
};
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
</script>

<style lang="css" scoped></style>
