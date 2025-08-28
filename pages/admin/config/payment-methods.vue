<template>
  <div>
    <div class="d-flex align-center ga-4 px-3">
      <div class="text-subtitle-2">
        <span>Supported Payment Methods</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        icon="mdi-plus"
        size="x-small"
        flat
        color="primary-dark"
        title="Add business"
        @click="handleOpen()"
      ></v-btn>
    </div>
    <v-divider class="my-3"></v-divider>
    <div class="d-flex align-center px-3">
      <admin-core-search :search="search" @search="search = $event" />
      <v-spacer></v-spacer>
      <v-btn-toggle
        mandatory
        color="black"
        divided
        border
        density="compact"
        class="rounded-lg"
        v-model="selectedStatus"
      >
        <v-btn
          variant="text"
          v-for="({ name, value }, i) in statuses"
          class="text-none text-caption"
          :value="value"
          :key="i"
        >
          <span>{{ name }}</span>
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="mt-3">
      <v-data-table
        :headers="headers"
        :items="computedMethods"
        density="compact"
      >
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>

        <template #item.status="{ item }">
          <admin-btn-status
            :status="item.status"
            :titles="{ isNot: 'Inactive', isAlready: 'Active' }"
          />
        </template>
        <template #item.actions="{ item }">
          <AdminBtnDetailsBtn @details="handleOpen(item)" />
        </template>
      </v-data-table>
    </div>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-form ref="marketForm" @submit="">
          <admin-core-dialog-header title="Payment Method" @close="handleClose">
            <template #default>
              <v-btn
                class="text-caption mr-3"
                size="small"
                color="secondary"
                flat
              >
                <span>Save</span>
              </v-btn>
            </template>
          </admin-core-dialog-header>
          <div class="pa-3">
            <div class="d-flex align-center text-caption">
              <div class="mx-auto text-center">
                <span>Payment method Banner</span>
                <AdminCoreImage
                  @setImage="setImage"
                  :image="payload.banner"
                  :profile="false"
                  class="mt-1"
                />
              </div>
            </div>
            <v-text-field
              label="Name"
              class="mt-2"
              v-model="payload.name"
            ></v-text-field>

            <v-textarea
              label="Description"
              rows="2"
              v-model="payload.description"
            ></v-textarea>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const { filterDataPerField } = useHelpers();

const search = ref("");

const statuses = [
    { name: "Active", value: true },
    { name: "Inactive", value: false },
  ],
  selectedStatus = ref(true);

const headers = [
  { title: "#", value: "index" },
  { title: "", value: "banner" },
  { title: "Name", value: "name" },
  { title: "Status", value: "status" },
  { title: "Description", value: "description" },
  { title: "Actions", value: "actions" },
];

const paymentMethodInit = {
    name: "",
    description: "",
    status: true,
  },
  payload = ref({}),
  dialog = ref(false),
  handleOpen = (paymentMethodData) => {
    payload.value = paymentMethodData || { ...paymentMethodInit };
    dialog.value = true;
  },
  handleClose = () => {
    dialog.value = false;
    action.value = null;
    payload.value = {};
  };

const methodList = [
    {
      id: 1,
      name: "Credit Card",
      description: "Pay with your credit card",
      status: true,
      banner: "credit-card-banner.jpg",
    },
    {
      id: 2,
      name: "PayPal",
      description: "Pay with your PayPal account",
      status: true,
      banner: "paypal-banner.jpg",
    },
    {
      id: 3,
      name: "Bank Transfer",
      description: "Pay via bank transfer",
      status: false,
      banner: "bank-transfer-banner.jpg",
    },
    {
      id: 4,
      name: "Mpesa send money",
      description: "Pay with your Mpesa account",
      status: true,
      banner: "mpesa-banner.jpg",
    },
    {
      id: 5,
      name: "Mpesa lipa na pochi",
      description: "Pay with your Mpesa account",
      status: true,
      banner: "mpesa-banner.jpg",
    },
    {
      id: 6,
      name: "Mpesa buy goods",
      description: "Pay with your Mpesa account",
      status: true,
      banner: "mpesa-banner.jpg",
    },
    {
      id: 7,
      name: "Mpesa paybill",
      description: "Pay with your Mpesa account",
      status: true,
      banner: "mpesa-banner.jpg",
    },
    {
      id: 8,
      name: "Airtel Money",
      description: "Pay with your Airtel Money account",
      status: true,
      banner: "mpesa-banner.jpg",
    },
  ],
  computedMethods = computed(() => {
    return filterDataPerField(methodList, search.value, {
      status: selectedStatus.value,
    });
  });
</script>

<style lang="scss" scoped></style>
