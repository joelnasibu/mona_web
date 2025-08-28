<template>
  <v-form ref="formData" class="py-1">
    <v-container class="pa-0" fluid>
      <v-row align="center">
        <v-col class="d-flex flex-column align-center" cols="12" sm="3">
          <AdminCoreImage
            @setImage="setImage"
            :image="payload.image"
            :profile="false"
          />
        </v-col>
        <v-col cols="12" sm="9">
          <v-container class="pa-0 mt-4 row-form-data" fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Market"
                  v-model="payload.market"
                  :rules="required()"
                  id="selectCategory"
                  readonly
                >
                </v-text-field>
                <AdminCoreSelect
                  activator="#selectCategory"
                  :list="categories"
                  :listValue="payload.market"
                  @setItem="setMarket"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Name"
                  v-model="payload.businessName"
                  :rules="name()"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Store Number"
                  v-model="payload.storeNumber"
                  :rules="required()"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="PIN" v-model="payload.pin"></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  label="Registration date"
                  v-model="selectedDate"
                  :rules="required()"
                  readonly
                  @click="datePicker = true"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <AdminCoreCalendarDate
    :datePicker="datePicker"
    :date="payload.dateOfRegistration"
    @setDate="setDate"
    @close="datePicker = false"
  />
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { useBusinessTypeStore } from "~/store/business-types";
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { dateFormat_short } = useHelpers();
const { required, name } = useRules();

const { toggleSnackbar } = useAppStore();

const { getBusinessTypes } = useBusinessTypeStore();
const businessTypes = ref([]);
const loadTypes = ref(false);
const getData = async () => {
  loadTypes.value = true;
  businessTypes.value = await getBusinessTypes();

  loadTypes.value = false;
};
const businessTypesList = computed(() => {
  return businessTypes.value.map((b) => b.business_type);
});

const formData = ref(null);

const moveNext = async () => {
  let tab = 0;

  const { valid } = await formData.value.validate();
  if (valid) tab = 1;

  emits("step", tab);
};

const setImage = (val) => {
  props.payload.image = val;
};

const maxDate = new Date();
const datePicker = ref(false);
const selectedDate = computed({
  get() {
    return dateFormat_short(props.payload.dateOfRegistration);
  },
  set(val) {
    props.payload.dateOfRegistration = val;
  },
});

const setDate = (val) => {
  props.payload.dateOfRegistration = val.date;
  datePicker.value = !val.close;
};

const setBusinessType = (val) => {
  props.payload.businessType = val;
  props.payload.businessTypeId = businessTypes.value.find(
    (b) => b.business_type == val
  )?.id;
};

const categories = ["FORMAL", "UNFORMAL"],
  category = ["UNFORMAL"],
  setMarket = (val) => {
    props.payload.market = category.value = val;
  };

watchEffect(() => {
  getData();
});

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
</script>

<style lang="scss" scoped></style>
