<template>
  <div>
    <div class="d-flex align-center ga-4 px-3">
      <div class="text-subtitle-2">
        <span>Markets</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        icon="mdi-plus"
        size="x-small"
        flat
        color="primary-dark"
        title="Add business"
        @click="handleOpen('create')"
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

    <v-data-table
      class="mt-3"
      :headers="headers"
      :items="computedMarkets"
      density="compact"
    >
      <template #item.index="{ index }">
        <span>{{ index + 1 }}</span>
      </template>
      <template #item.location="{ item }">
        <span>{{ item.lat }}, {{ item.long }}</span>
      </template>

      <template #item.status="{ item }">
        <admin-btn-status
          :status="item.status"
          :titles="{ isNot: 'Inactive', isAlready: 'Active' }"
        />
      </template>
      <template #item.actions="{ item }">
        <AdminBtnDetailsBtn @details="handleOpen('details', item)" />
      </template>
    </v-data-table>

    <v-dialog
      v-model="dialog"
      :fullscreen="showMap"
      :width="showMap ? '100%' : 500"
    >
      <v-card>
        <v-form ref="marketForm" @submit="">
          <admin-core-dialog-header title="Market Details" @close="handleClose">
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
          <v-container>
            <v-row justify="center">
              <v-col cols="12" :sm="showMap ? 5 : 12">
                <div class="pa-3">
                  <div class="d-flex align-center text-caption">
                    <div class="mx-auto text-center">
                      <span>Market Banner</span>
                      <AdminCoreImage
                        @setImage="setImage"
                        :image="market.banner"
                        :profile="false"
                        class="mt-1"
                      />
                    </div>
                  </div>
                  <v-text-field
                    label="Name"
                    class="mt-2"
                    v-model="market.name"
                  ></v-text-field>
                  <div class="d-flex flex-column flex-md-row ga-0 ga-md-4">
                    <v-text-field
                      label="Longitude"
                      v-model="market.long"
                    ></v-text-field>
                    <v-text-field
                      label="Latitude"
                      v-model="market.lat"
                    ></v-text-field>
                    <v-btn
                      variant="text"
                      :icon="showMap ? 'mdi-eye-off' : 'mdi-eye'"
                      size="x-small"
                      @click="showMap = !showMap"
                    ></v-btn>
                  </div>
                  <v-textarea
                    label="Description"
                    rows="2"
                    v-model="market.description"
                  ></v-textarea>
                </div>
              </v-col>
              <v-col
                cols="12"
                sm="7"
                style="border-left: 1px solid #ddd"
                class="pa-0"
                v-if="showMap"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.7581215807227!2d36.77758087406668!3d-1.3072630986803215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a78cebdceb9%3A0xf59c7f7075826ac6!2sToi%20Main%20Market!5e1!3m2!1sen!2ske!4v1756210493784!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </v-col>
            </v-row>
          </v-container>
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
  { title: "Name", value: "name" },
  { title: "Location", value: "location" },
  { title: "Status", value: "status" },
  { title: "Actions", value: "actions", sortable: false },
];

const marketFields = {
    name: "",
    banner: null,
    lat: "-1.28498913184757",
    long: "36.83612188891618",
    description: "",
  },
  market = ref({}),
  dialog = ref(false),
  action = ref(null),
  handleOpen = (newAction, marketData) => {
    action.value = newAction;
    market.value = marketData || { ...marketFields };
    dialog.value = true;
  },
  handleClose = () => {
    dialog.value = false;
    action.value = null;
    market.value = {};
    showMap.value = false;
  };

const setImage = (val) => {
  market.value.banner = val;
};

const showMap = ref(false);

const marketList = [
    {
      id: 1,
      name: "Adams",
      lat: "-1.28498913184757",
      long: "36.83612188891618",
      description: "A vibrant market located in the heart of the city.",
      banner: "",
      status: true,
    },
    {
      id: 2,
      name: "Eastleigh",
      lat: "-1.28333",
      long: "36.83333",
      description: "A bustling market known for its textiles and clothing.",
      banner: "",
      status: true,
    },
    {
      id: 3,
      name: "Westlands",
      lat: "-1.2921",
      long: "36.8219",
      description: "A trendy market with a variety of shops and eateries.",
      banner: "",
      status: true,
    },
    {
      id: 4,
      name: "Nairobi CBD",
      lat: "-1.286389",
      long: "36.817223",
      description: "The central business district of Nairobi.",
      banner: "",
      status: false,
    },
  ],
  computedMarkets = computed(() => {
    return filterDataPerField(marketList, search.value, {
      status: selectedStatus.value,
    });
  });
</script>

<style scoped></style>
