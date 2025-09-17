<template>
  <v-form ref="formData" class="py-1">
    <v-container class="pa-0" fluid>
      <v-row align="center">
        <v-col class="d-flex flex-column align-center" cols="12" sm="3">
<<<<<<< HEAD
          <AdminCoreImage @setImage="setImage" :image="payload.image" :profile="false" />
=======
          <AdminCoreImage
            @setImage="setImage"
            :image="payload.image"
            :profile="false"
          />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
        </v-col>
        <v-col cols="12" sm="9">
          <v-container class="pa-0 mt-4 row-form-data" fluid>
            <v-row>
<<<<<<< HEAD
              <v-col cols="12" sm="4">
                <v-text-field label="Name" v-model="payload.businessName" :rules="required()"></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field label="Type" v-model="payload.businessType" :rules="required()" id="selectBusinessType"
                  :loading="loadTypes" readonly>
                </v-text-field>
                <AdminCoreSelect activator="#selectBusinessType" :list="businessTypesList"
                  :listValue="payload.businessType" @setItem="setBusinessType" />
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field label="Category" v-model="payload.businessCategory" :rules="required()"
                  id="selectCategory" readonly>
                </v-text-field>
                <AdminCoreSelect activator="#selectCategory" :list="categories" :listValue="payload.businessCategory"
                  @setItem="setCategory" />
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6">
<<<<<<< HEAD
                <v-text-field label="TIN" v-model="payload.taxIdentificationNumber"
                  :rules="payload.category === 'FORMAL' ? required() : []"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="RCCM" v-model="payload.registrationNumber"
                  :rules="payload.category === 'FORMAL' ? required() : []"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Bank account name" v-model="payload.bankDetails.accountName"
                  :rules="payload.category === 'FORMAL' ? required() : []"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Bank account no" v-model="payload.bankDetails.accountNo"
                  :rules="payload.category === 'FORMAL' ? required() : []"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Registration date" v-model="selectedDate" :rules="required()" readonly
                  @click="datePicker = true"></v-text-field>
=======
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
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
<<<<<<< HEAD
  <AdminCoreCalendarDate :datePicker="datePicker" :date="payload.dateOfRegistration" @setDate="setDate"
    @close="datePicker = false" />
=======
  <AdminCoreCalendarDate
    :datePicker="datePicker"
    :date="payload.dateOfRegistration"
    @setDate="setDate"
    @close="datePicker = false"
  />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
const { required } = useRules();
=======
const { required, name } = useRules();
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

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
<<<<<<< HEAD
  if (valid)
    if (props.payload.image) tab = 1;
    else
      toggleSnackbar({
        status: true,
        message: "Image is required",
        type: "warning",
      });
=======
  if (valid) tab = 1;

>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
<<<<<<< HEAD
  setCategory = (val) => {
    props.payload.businessCategory = category.value = val;
  };


=======
  setMarket = (val) => {
    props.payload.market = category.value = val;
  };

>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
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
