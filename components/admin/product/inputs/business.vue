<template>
  <v-form ref="formData">
    <v-text-field label="Business" v-model="payload.business" :rules="required()" readonly id="selectBusiness"
      :loading="loadData" appendInnerIcon="mdi-chevron-down"></v-text-field>
    <AdminCoreSelect activator="#selectBusiness" :list="businessesList" :listValue="payload.business"
      @setItem="setBusiness" />
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { required } = useRules();

import { useAppStore } from "~/store/app";
const { loading, currentUser } = storeToRefs(useAppStore());

import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore();
const businesses = ref([]);
const loadData = ref(false);
const getData = async () => {
  loadData.value = true;
  let allData = await getBusinesses(false);
  businesses.value = allData.filter(
    (b) => currentUser.value.role !== 'ADMINISTRATOR'
      ? b.userId === currentUser.value.userId
      : b
  );

  console.log(props.payload.business)

  props.payload.business = currentUser.value.role !== 'ADMINISTRATOR'
    ? businesses.value[0].businessName : props.payload.business.businessName

  props.payload.businessId = currentUser.value.role !== 'ADMINISTRATOR'
    ? businesses.value[0].code : props.payload.businessId

  loadData.value = false;
};
watchEffect(() => {
  getData();
});
const businessesList = computed(() => {
  return businesses.value.map((c) => c.businessName);
});

const setBusiness = (val) => {
  props.payload.business = val;
  props.payload.businessId = businesses.value.find(
    (item) => item.businessName === val
  )?.code;
};

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);

const formData = ref(null);
const moveNext = async () => {
  let tab = 1;
  const { valid } = await formData.value.validate();
  if (valid) tab = 2;
  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
