<template>
<<<<<<< HEAD

  <div>
    <div class="d-flex flex-column ga-3 px-0 px-md-4">
      <div class="" v-for="(item, i) in verification" :key="i">
        <v-card flat class="d-flex ga-3 border pa-2 align-center">
          <v-avatar size="60" color="card" rounded="lg">
            <v-icon :icon="item.icon" size="2rem" :color="done ? 'secondary' : 'primary-accent'"></v-icon>
          </v-avatar>
          <div class="text-body-1 d-flex flex-column">
            <strong>{{ item.title }}</strong>
          </div>
          <v-spacer></v-spacer>
          <div v-if="done">
            <v-btn class="text-caption rounded-lg" size="small" flat variant="text" append-icon="mdi-check-circle"
              color="secondary" @click.prevent>
=======
  <div>
    <div class="d-flex flex-column ga-3 px-0 px-md-4">
      <div class="" v-for="(item, i) in verification" :key="i">
        <v-card flat class="d-flex ga-3 border align-center rounded-lg">
          <v-avatar
            size="60"
            color="card"
            class="rounded-0 rounded-ts-lg rounded-bs-lg"
          >
            <v-icon
              :icon="item.icon"
              size="1.4rem"
              :color="done ? 'secondary' : 'primary-accent'"
            ></v-icon>
          </v-avatar>
          <div class="text-caption d-flex flex-column">
            <span>{{ item.title }}</span>
          </div>
          <v-spacer></v-spacer>
          <div v-if="done">
            <v-btn
              class="text-caption rounded-lg px-5"
              size="small"
              flat
              variant="text"
              append-icon="mdi-check-circle"
              color="secondary"
              @click.prevent
            >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
              <span> verified </span>
            </v-btn>
          </div>
          <div class="d-flex align-center ga-3" v-else>
<<<<<<< HEAD
            <v-btn class="text-caption rounded-lg" size="small" flat variant="tonal"
              :prepend-icon="item.status ? 'mdi-check-circle' : 'mdi-dots-horizontal-circle-outline'"
              :color="item.status ? 'secondary' : 'primary-accent'" title="" @click.stop="handleVerification(item)">
              <span> {{ item.status ? 'Verified' : 'pending' }}</span>
            </v-btn>

          </div>
        </v-card>
        <v-divider></v-divider>
      </div>

    </div>
  </div>


=======
            <v-btn
              class="text-caption rounded-lg px-5"
              size="small"
              flat
              variant="tonal"
              :prepend-icon="
                item.status
                  ? 'mdi-check-circle'
                  : 'mdi-dots-horizontal-circle-outline'
              "
              :color="item.status ? 'secondary' : 'primary-accent'"
              title=""
              @click.stop="handleVerification(item)"
            >
              <span> {{ item.status ? "Verified" : "Pending" }}</span>
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </div>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
</template>

<script setup>
const emits = defineEmits(["loader", "details"]);

import { useAppStore } from "~/store/app";
import { useBusinessStore } from "~/store/business";
const appStore = useAppStore();
const { adminDrawer, profileImage } = storeToRefs(appStore);

const { getBusiness } = useBusinessStore();
const verification = ref([
  { icon: "mdi-store", title: "Business Profile", link: 1, status: false },
<<<<<<< HEAD
  { icon: "mdi-handshake-outline", title: "Business Approved", link: 2, status: false },
  { icon: "mdi-map-search", title: "Physical Visit (Due Diligence) ", link: 3, status: false },
  { icon: "mdi-cash-check", title: "Payment Verification", link: 4, status: false },
]);

const data = ref([])
=======
  {
    icon: "mdi-handshake-outline",
    title: "Business Approved",
    link: 2,
    status: false,
  },
  {
    icon: "mdi-map-search",
    title: "Physical Visit (Due Diligence) ",
    link: 3,
    status: false,
  },
  {
    icon: "mdi-cash-check",
    title: "Payment Verification",
    link: 4,
    status: false,
  },
]);

const data = ref([]);
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

const loader = ref(false);
const getData = async () => {
  emits("loader", true);
  loader.value = true;
  data.value = await getBusiness(adminDrawer.value.id);

<<<<<<< HEAD
  // case 1 
  verification.value[0].status = verifyBusiness

  // case 2 
  verification.value[1].status = data.value.approved
  // case 3
  verification.value[2].status = data.value.dueDiligence
  //case 4
  verification.value[3].status = data.value.isPaid


  emits("loader", false);
  loader.value = false;
  emits("details", verification.value.filter(val => val.status).length);
=======
  // case 1
  verification.value[0].status = verifyBusiness;

  // case 2
  verification.value[1].status = data.value.approved;
  // case 3
  verification.value[2].status = data.value.dueDiligence;
  //case 4
  verification.value[3].status = data.value.isPaid;

  emits("loader", false);
  loader.value = false;
  emits("details", verification.value.filter((val) => val.status).length);
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

  //
};

const done = computed(() => {
<<<<<<< HEAD
  return data.value?.verified ?? false
})

const verified = computed(() => {
  const status = verification.value.filter(val => val.status).length
  const verified = status == 4 ? true : false
  return verified
})
=======
  return data.value?.verified ?? false;
});

const verified = computed(() => {
  const status = verification.value.filter((val) => val.status).length;
  const verified = status == 4 ? true : false;
  return verified;
});
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
onMounted(() => {
  getData();
});

const verifyBusiness = computed(() => {
<<<<<<< HEAD
  let status = data.value.businessCategory || data.value.businessCategory == "UNFORMAL"
    ? true
    : data.value.businessCategory == 'FORMAL'
      ? data.value.businessType &&
      data.value.businessName &&
      data.value.registrationNumber &&
      data.value.email &&
      data.value.summary &&
      data.value.taxIdentificationNumber &&
      data.value.phone &&
      data.value.address.commune &&
      data.value.address.quartier &&
      data.value.address.avenue &&
      data.value.address.avenue

      : false



  return status

})


=======
  let status =
    data.value.businessCategory || data.value.businessCategory == "UNFORMAL"
      ? true
      : data.value.businessCategory == "FORMAL"
      ? data.value.businessType &&
        data.value.businessName &&
        data.value.registrationNumber &&
        data.value.email &&
        data.value.summary &&
        data.value.taxIdentificationNumber &&
        data.value.phone &&
        data.value.address.commune &&
        data.value.address.quartier &&
        data.value.address.avenue &&
        data.value.address.avenue
      : false;

  return status;
});
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

const handleVerification = (val) => {
  if (val.status) {
    //verify business
  } else {
<<<<<<< HEAD

    console.clear()
    console.log(val)
    switch (val.link) {
      case 1:
        navigateTo({ name: "admin-businesses-id", params: { id: data.value.id } })
        break;
      case 2: break;// approve

      case 3: break; //navigateTo({ name: "" })
      case 4: navigateTo({ name: "" })
    }

  }

=======
    console.clear();
    console.log(val);
    switch (val.link) {
      case 1:
        navigateTo({
          name: "admin-businesses-id",
          params: { id: data.value.id },
        });
        break;
      case 2:
        break; // approve

      case 3:
        break; //navigateTo({ name: "" })
      case 4:
        navigateTo({ name: "" });
    }
  }
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
};
</script>

<style lang="css" scoped></style>
