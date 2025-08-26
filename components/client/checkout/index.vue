<template>
  <div>
    <div class="">
      <div class="text-subtitle-1">
        <b>Customer details</b>
      </div>
      <div class="mt-4 d-flex align-center">
        <div class="d-flex w-100 ga-2">
          <v-card width="60" height="fit-content" class="bg-card pa-1 card-outlined rounded" flat>
            <v-icon size="45" color="primary-dark" icon="mdi-account"></v-icon>
          </v-card>
          <div class="text-caption d-flex flex-column w-100">
            <b>{{ getFullnames(currentUser) }}</b>
            <div class="text-disabled d-flex">
              <p>{{ user.phone }}</p>
            </div>
            <div class="">
              <v-icon size="small" end :icon="`mdi-${!editDetails ? 'pencil' : 'eye'}-outline`" v-if="isMobile"
                color="secondary" @click="editDetails = !editDetails"></v-icon>
              <div v-else class="text-caption text-none cursor-pointer text-secondary"
                @click="editDetails = !editDetails">
                <span>{{ !editDetails ? "Change" : "Hide" }}</span>
              </div>
            </div>
            <v-expand-transition>
              <div class="w-100" v-if="editDetails">
                <v-form ref="formData" class="mt-3">
                  <div class="mt-2 w-100">
                    <Telephone :number="user.phone" @set-phone="setPhone" />
                  </div>
                </v-form>
              </div>
            </v-expand-transition>
          </div>
        </div>
      </div>
    </div>
    <v-divider class="my-4"></v-divider>
    <div class="">
      <div class="text-subtitle-1">
        <b>Deliver details</b>
      </div>
      <div class="mt-4 d-flex align-center">
        <div class="d-flex ga-2 w-100">
          <v-card width="60" height="fit-content" class="bg-card pa-1 card-outlined rounded" flat>
            <v-icon size="45" color="primary-dark" icon="mdi-truck"></v-icon>
          </v-card>
          <div class="text-caption d-flex flex-column w-100">
            <b>{{ order.deliveryType }} delivery</b>
            <div class="text-grey-darken-1 d-flex">
              <p v-if="deliveryExtension == 0">
                Delivery 2 days after order is placed
              </p>
              <p v-else>Delivery in the next 2hours after order is placed</p>
            </div>
            <div class="">
              <v-icon size="small" end :icon="`mdi-${!editAddress ? 'pencil' : 'eye'}-outline`" v-if="isMobile"
                color="secondary" @click="editAddress = !editAddress"></v-icon>
              <div v-else class="text-caption text-none cursor-pointer text-secondary"
                @click="editAddress = !editAddress">
                <span>{{ !editAddress ? "Change" : "Hide" }}</span>
              </div>
            </div>

            <v-expand-transition>
              <div class="" v-if="editAddress">
                <v-form ref="formData" class="text-caption mt-3">
                  <span>Delivery Type</span>
                  <div class="px-2 px-md-4">
                    <v-radio-group density="compact" v-model="order.deliveryType" hide-details inline class="mt-1">
                      <v-radio v-for="(item, i) in deliveryTypes" color="primary-accent" :value="item"
                        class="margin-radio mx-3 mx-md-5" :key="i">
                        <template v-slot:label>
                          <div class="d-flex align-center ga-2 text-caption">
                            <span>{{ item }} </span>
                          </div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                    <div class="d-flex flex-wrap ga-2 mt-2">
                      <v-tooltip v-for="(
                          { title, description, list, disclaimer, value }, i
                        ) in deliveryExtensions" :key="i">
                        <template v-slot:activator="{ props }">
                          <v-btn class="text-none text-caption card-outlined rounded-lg" :class="{
                            'text-grey-darken-3':
                              value !== order.instantDelivery,
                          }" v-bind="props" :value="value" variant="text" :active="value === order.instantDelivery"
                            size="small" append-icon="mdi-information-outline" color="primary-accent" flat
                            @click="setFee(value)">
                            <span>{{ title }} delivery</span>
                            <div class="ml-2 text-secondary" v-if="i == 1">
                              <strong>+$5</strong>
                            </div>
                          </v-btn>
                        </template>
                        <v-card max-width="300" class="text-caption bg-transparent pa-2" flat>
                          <div class="">
                            <span>{{ description }}</span>
                            <ul class="mt-2">
                              <li v-for="(item, i) in list" :key="i" class="d-flex align-center">
                                <v-icon start icon="mdi-chevron-right" size="x-small"></v-icon>
                                {{ item }}
                              </li>
                            </ul>
                            <div class="mt-2" v-if="disclaimer">
                              <span>{{ disclaimer }}</span>
                            </div>
                          </div>
                        </v-card>
                      </v-tooltip>
                    </div>
                  </div>

                  <div class="mt-5">
                    <span>Address</span>
                    <div class="mt-1 px-2 px-md-4">
                      <p v-if="order.deliveryType === 'Pickup'" class="d-flex align-center">
                        <v-icon icon="mdi-map-marker-outline" start color="grey-darken-2"></v-icon>
                        CEMADEF drop off address
                      </p>
                      <v-container class="" v-else>
                        <v-row>
                          <v-col cols="12" sm="4" class="pa-1">
                            <v-text-field label="Quartier" v-model="account.qrt" :rules="order.deliveryType !== 'Pickup'
                                ? required()
                                : []
                              "></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4" class="pa-1">
                            <v-text-field label="Avenue" v-model="account.avenue" :rules="order.deliveryType !== 'Pickup'
                                ? required()
                                : []
                              "></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4" class="pa-1">
                            <v-text-field label="Numero" v-model="account.location" :rules="order.deliveryType !== 'Pickup'
                                ? required()
                                : []
                              "></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </div>
                </v-form>
              </div>
            </v-expand-transition>
          </div>
        </div>
      </div>
    </div>
    <v-divider class="my-4"></v-divider>
    <div class="">
      <div class="text-subtitle-1">
        <b>Payment details</b>
      </div>
      <div class="mt-4 d-flex align-center">
        <div class="d-flex ga-2 w-100">
          <v-card width="60" height="fit-content" class="bg-card pa-1 card-outlined rounded" flat>
            <v-icon size="45" color="primary-dark" icon="mdi-cash"></v-icon>
          </v-card>
          <div class="text-caption d-flex flex-column w-100">
            <b>{{ order.modeOfPayment }}</b>
            <div class="text-grey-darken-1 d-flex">
              <p>
                {{
                  order.modeOfPayment === "Cash on delivery"
                    ? "Paying to the cashier or rider"
                    : user.phone
                }}
              </p>
            </div>
            <div class="">
              <v-icon size="small" end :icon="`mdi-${!editPayment ? 'pencil' : 'eye'}-outline`" v-if="isMobile"
                color="secondary" @click="editPayment = !editPayment"></v-icon>
              <div v-else class="text-caption text-none cursor-pointer text-secondary"
                @click="editPayment = !editPayment">
                <span>{{ !editPayment ? "Change" : "Hide" }}</span>
              </div>
            </div>

            <v-expand-transition>
              <div class="" v-if="editPayment">
                <div class="d-flex ga-3 mt-4">
                  <div class="" v-for="({ title, icon }, i) in methods" :key="i">
                    <v-card :class="{ selected: title == order.modeOfPayment }" flat
                      class="bg-card pa-1 card-outlined rounded-lg" width="120" height="60"
                      @click="order.modeOfPayment = title">
                      <v-img :src="`/images/payments/${icon}.png`"></v-img>
                    </v-card>
                    <div class="text-caption text-center mt-1" :class="{
                      'font-weight-bold': title == order.modeOfPayment,
                    }">
                      <span>{{ title }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </v-expand-transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getFullnames } = useHelpers();
const { isMobile } = useDevice();
const { required } = useRules();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { currentUser, token } = storeToRefs(appStore);

import { useOrderStore } from "~/store/order";
const { order } = storeToRefs(useOrderStore());

const editDetails = ref(false);
const user = ref({
  phone: currentUser.value.phone,
  address: currentUser.value.account?.address,
});
const setPhone = (val) => {
  user.value.phone = val;
};

const editAddress = ref(false);
const deliveryTypes = ["Pickup", "Door step"];
const deliveryExtensions = [
  {
    title: "Normal",
    description: "Package will be delivered at the normal time ",
    list: [
      "Free delivery on orders above $50",
      "Same day delivery on orders placed before 12PM",
      "Orders to be delivered outside of Bunia will be delivered in 5 days",
    ],
    value: false,
  },
  {
    title: "Instant",
    description: "Will reduce the delivery time",
    list: [
      "Free delivery on orders above $50",
      "Delivery in the next 2h after placing the order",
      "Orders to be delivered outside of Bunia will be delivered in 2 days",
    ],
    disclaimer: "",
    value: true,
  },
];
const deliveryExtension = ref(0);
const account = ref({
  qrt: "",
  avenue: "",
  location: "",
});

const editPayment = ref(false);
const methods = ref([
  { title: "Cash on Delivery", icon: "cash" },
  { title: "M-Pesa", icon: "mpesa" },
]);
const phone = ref(user.phone);

const setFee = (val) => {
  if (val !== order.value.instantDelivery) {
    order.value.instantDelivery = val;
    val ? (order.value.deliveryFee += 5) : (order.value.deliveryFee -= 5);
  }
};
</script>

<style lang="css" scoped>
.margin-radio:first-child {
  margin-left: 0 !important;
}

.margin-radio:last-child {
  margin-right: 0 !important;
}

.selected {
  border: 2px solid rgba(var(--v-theme-secondary)) !important;
}
</style>
