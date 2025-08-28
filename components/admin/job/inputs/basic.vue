<template>
  <v-container class="pa-0" fluid>
    <v-row align="center">
      <v-col cols="12" sm="3" class="text-caption">
        <div class="mx-auto d-flex flex-column align-center">
          <AdminCoreImage @setImage="setImage" :image="payload.banner" :profile="false" />
        </div>
      </v-col>
      <v-col cols="12" sm="9">
        <v-form ref="formData">
          <v-container class="pa-0" fluid>
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Name" v-model="payload.jobName" :rules="name()"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Type" v-model="payload.jobType" append-inner-icon="mdi-chevron-down"
                  :rules="required()" readonly :loading="loadData" id="selectType"></v-text-field>
                <AdminCoreSelect activator="#selectType" :list="jobTypesList" :listValue="payload.jobType"
                  @setItem="setJobType" />
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <Location :disabled="payload.jobType === 'REMOTE'" v-model="payload.location"
                  :is-required="payload.jobType !== 'REMOTE'" />
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <div class="d-flex ga-2">
                  <v-text-field label="Experience" v-model="payload.experience" @keypress="digitsOnly"
                    suffix="Year(s)"></v-text-field>
                  <v-text-field label="Experience Level" v-model="payload.experienceLevel" readonly
                    append-inner-icon="mdi-chevron-down" id="selectLevel"></v-text-field>
                  <AdminCoreSelect activator="#selectLevel" :list="[
                    'ANY',
                    'INTERNSHIP & GRADUATE',
                    'ENTRY LEVEL',
                    'SENIOR LEVEL',
                    'EXECUTIVE LEVEL',
                  ]" :listValue="payload.experienceLevel" @setItem="setExperienceLevel" />
                </div>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Currency" v-model="payload.currency" append-inner-icon="mdi-chevron-down"
                  :rules="required()" readonly :loading="loadData" id="selectCurrency"></v-text-field>
                <AdminCoreSelect activator="#selectCurrency" :list="['USD', 'FC']" :listValue="payload.currency"
                  @setItem="setCurrency" />
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <div class="d-flex ga-4">
                  <v-text-field label="Min Salary" v-model.number="payload.salaryRange[0]" @keypress="digitsOnly"
                    :prefix="payload.currency"></v-text-field>
                  <v-text-field label="Max Salary" v-model.number="payload.salaryRange[1]" @keypress="digitsOnly"
                    @input="controlMaxSalary" :prefix="payload.currency"></v-text-field>

                  <v-switch v-model="payload.isConfidential" color="link" density="compact" label="salary confidential"
                    class="text-caption"></v-switch>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Applications limit" v-model="payload.applicationsLimit"
                  @keypress="digitsOnly"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Deadline" v-model="selectedDate" :rules="required()" readonly
                  @click="datePicker = true"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Category" v-model="payload.category" append-inner-icon="mdi-chevron-down"
                  :rules="required()" readonly :loading="loadData" id="selectCategory"></v-text-field>
                <AdminCoreSelect activator="#selectCategory" :list="categoriesList" :listValue="payload.category"
                  @setItem="setCategory" />
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Subcategory" v-model="payload.subcategory" append-inner-icon="mdi-chevron-down"
                  :rules="required()" readonly :loading="loadData" id="selectSubcategory"
                  :disabled="payload.category === ''"></v-text-field>
                <AdminCoreSelect activator="#selectSubcategory" :list="subcategoriesList"
                  :listValue="payload.subcategory" @setItem="setSubcategory" />
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Industry" v-model="payload.industry" append-inner-icon="mdi-chevron-down"
                  :rules="required()" readonly :loading="loadData" id="setIndustry"></v-text-field>
                <AdminCoreSelect activator="#setIndustry" :list="industriesList" :listValue="payload.industry"
                  @setItem="setIndustry" />
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Business" v-model="payload.business" append-inner-icon="mdi-chevron-down"
                  :rules="required()" readonly :loading="loadData" id="setBusiness"></v-text-field>
                <AdminCoreSelect activator="#setBusiness" :list="businessesList" :listValue="payload.business"
                  @setItem="setBusiness" />
              </v-col>
            </v-row>
          </v-container>
          <AdminCoreCalendarDate :datePicker="datePicker" :date="payload.deadline" :min="minDate" @setDate="setDate"
            @close="datePicker = false" />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { required, name } = useRules();
const { digitsOnly, dateFormat_short } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { currentUser } = storeToRefs(appStore);

import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore();
const businesses = ref([]);
const businessesList = computed(() => {
  return businesses.value.map((c) => c.businessName);
});
const setBusiness = (val) => {
  props.payload.business = val;
  props.payload.businessId = businesses.value.find(
    (item) => item.businessName === val
  )?.code;
};

import { useIndustriestore } from "~/store/industries";
const { getIndustries } = useIndustriestore();
const industries = ref([]);
const industriesList = computed(() => {
  return industries.value.map((c) => c.industry);
});
const setIndustry = (val) => {
  props.payload.industry = val;
  props.payload.industryId = industries.value.find(
    (item) => item.industry === val
  )?.id;
};

import { useJobTypeStore } from "~/store/job-types";
const { getJobTypes } = useJobTypeStore();
const jobTypes = ref([]);
const jobTypesList = computed(() => {
  return jobTypes.value.map((b) => b.job_type);
});
const setJobType = (val) => {
  props.payload.jobType = val;
  props.payload.jobtypeId = jobTypes.value.find((b) => b.job_type == val)?.id;
  if (props.payload.jobType === "REMOTE") props.payload.location = "";
};

import { useCategoryStore } from "~/store/categories";
const { getCategoriesByType } = useCategoryStore();
import { useSubcategoryStore } from "~/store/subcategories";
const { getSubcategories } = useSubcategoryStore();
const categories = ref([]);
const subcategories = ref([]);
const loadData = ref(false);
const getData = async () => {
  loadData.value = true;
  let [cat, subcat, types, bus, ind] = await Promise.all([
    getCategoriesByType(false, "JOB"),
    getSubcategories(false),
    getJobTypes(false),
    getBusinesses(false),
    getIndustries(false),
  ]);
  categories.value = cat;
  subcategories.value = subcat;
  jobTypes.value = types;
  businesses.value = bus.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.userId === currentUser.value.userId
      : i
  );
  industries.value = ind;
  loadData.value = false;
};
watchEffect(() => {
  getData();
});
const categoriesList = computed(() => {
  return categories.value.map((c) => c.category);
});
// const subcategories = ref([]);
const subcategoriesList = computed(() => {
  return subcategories.value
    .filter((sub) => sub.categoryId === catId.value)
    .map((sub) => sub.subcategory);
});
const catId = ref(0);
const setCategory = (val) => {
  props.payload.category = val;
  props.payload.subcategory = "";
  catId.value = categories.value.find((cat) => cat.category === val)?.id;
};
const setSubcategory = (val) => {
  props.payload.subcategory = val;
  props.payload.subcategoryId = subcategories.value.find(
    (sub) => sub.subcategory === val
  )?.id;
};

const minDate = new Date();
const datePicker = ref(false);
const selectedDate = computed({
  get() {
    return dateFormat_short(props.payload.deadline);
  },
  set(val) {
    props.payload.deadline = val;
  },
});
const setDate = (val) => {
  props.payload.deadline = val.date;
  datePicker.value = !val.close;
};

const setImage = (val) => {
  props.payload.banner = val;
};
const setExperienceLevel = (val) => {
  props.payload.experienceLevel = val;
};
const setCurrency = (val) => {
  props.payload.currency = val;
};

const controlMaxSalary = (evt) => {
  let min = props.payload.salaryRange[0];
  let max = evt.target.value;

  setTimeout(() => {
    props.payload.salaryRange[1] = max <= min ? Number(min) + 1 : Number(max)
  }, 2000)
}


watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const formData = ref(null);
const moveNext = async () => {
  let tab = 0;
  const { valid } = await formData.value.validate();
  if (valid)
    if (props.payload.banner) tab = 1;
    else
      appStore.toggleSnackbar({
        status: true,
        message: "Banner is required",
        type: "warning",
      });
  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
