<template>
  <ClientOnly>
    <div>
      <AdminCorePageHeader
        :actualPage="{ icon: 'view-dashboard', name: 'Dashboard' }"
      >

      
        <!-- <div class="d-flex align-center ga-2">
          <v-btn
            size="small"
            rounded="lg"
            variant="text"
            class="text-caption card-outlined"
            prependIcon="mdi-filter-outline"
            id="selectPeriod"
            appendIcon="mdi-chevron-down"
          >
            <span>Period : {{ periodicity }}</span>
          </v-btn>
          <v-btn
            size="small"
            rounded="lg"
            variant="text"
            class="text-caption card-outlined"
            prependIcon="mdi-calendar-outline"
          >
            <span>{{ dateFormat_Month(new Date()) }}</span>
          </v-btn>
        </div>
        <AdminCoreSelect
          :list="dashboardPeriodicities"
          :listValue="periodicity"
          activator="#selectPeriod"
          @set-item="setPeriodicity"
        /> -->
        <div class="" v-if="!isVendor">
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
            append-icon="mdi-chevron-down"
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
      </AdminCorePageHeader>
      <!-- <div class="pa-2 bg-drawer rounded-t text-subtitle-2">
        <b>{{ period }} stats</b>
      </div> -->
      <div class="">
        <!-- <AdminDashboardVendor v-if="isVendor" /> -->
        <AdminDashboard />
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const { dateFormat_Month } = useHelpers();

import { useAppStore } from "~/store/app";
const { isVendor, currentUser } = storeToRefs(useAppStore());

const dashboardPeriodicities = ref(["Daily", "Weekly", "Monthly", "Annually"]);
const periodicity = ref("Daily");
const period = ref(new Date());
const setPeriodicity = (val) => {
  periodicity.value = val;
};
provide("periodicity", periodicity);
provide("period", period);

import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore();
const businesses = ref([]);
const business = ref({ name: "ALL BUSINESSES", id: 0 });
const businessesList = computed(() => {
  let businessMap = businesses.value.map((c) => c.businessName);
  return ["ALL BUSINESSES", ...businessMap];
});
const setBusiness = (val) => {
  business.value.name = val;
  business.value.id = businesses.value.find(
    (item) => item.businessName === val
  )?.id;
};
provide("business", business);

const getData = async () => {
  let allBusinesses = await getBusinesses(false);
  businesses.value = allBusinesses.filter((i) =>
    currentUser.value.accessLevel === 3
      ? i.userId === currentUser.value.userId
      : i
  );
  // business.value = {
  //   name: businesses.value[0].businessName,
  //   ...businesses.value[0],
  // };
};
watchEffect(() => {
  getData();
});
</script>

<style lang="css" scoped></style>
