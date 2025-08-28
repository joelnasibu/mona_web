<template>
  <ClientOnly>
    <div>
      <div class="d-flex align-center ga-3 flex-wrap">
        <AdminCoreSearch :search="search" @search="setSearch" />
        <v-btn-toggle mandatory color="black" divided border density="compact" v-if="currentUser.accessLevel < 3"
          class="rounded-lg" v-model="accessLevel">
          <v-btn variant="text" v-for="({ role }, i) in userAccessLevels" class="text-none text-caption" :value="role"
            :key="i">
            <span>{{ role }}</span>
          </v-btn>
        </v-btn-toggle>
        <div class="" v-if="currentUser.accessLevel === 3">
          <v-btn prepend-icon="mdi-storefront-outline" class="card-outlined px-5 text-none text-caption"
            title="Select Business" density="compact" size="small" rounded="lg" flat id="selectBusiness" variant="text">
            <span>{{ business?.name }}</span>
          </v-btn>
          <div class="mt-1">
            <AdminCoreSelect activator="#selectBusiness" :list="businessesList" :listValue="business.name"
              @setItem="setBusiness" />
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" size="x-small" flat color="primary-dark" title="Add user"
          :to="{ name: 'admin-users-create' }"></v-btn>
      </div>
      <div class="mt-4">
        <AdminCoreTableHeader text="Users" :number="users.length" />
        <v-sheet width="100%" color="transparent">
          <v-data-table density="compact" :headers="filteredHeaders" :items="users" :loading="loading"
            class="bg-background">
            <template v-slot:[`item.no`]="{ item }">
              <span>{{ users.indexOf(item) + 1 }}</span>
            </template>
            <template v-slot:[`item.name`]="{ item }">
              <span>{{ getFullnames(item) }}</span>
            </template>
            <template v-slot:[`item.phoneVerified`]="{ item }">
              <v-icon size="small" color="grey-darken-2" :icon="`mdi-${item.phoneVerified ? 'check' : 'close'
                }-circle-outline`"></v-icon>
            </template>
            <template v-slot:[`item.emailVerified`]="{ item }">
              <!-- :color="item.emailVerified ? 'secondary' : 'red-darken-3'" -->
              <v-btn v-if="!item.emailVerified" variant="tonal" color="primary" prepend-icon="mdi-close-circle-outline"
                :loading="loading" @click="handleEmailVerification(item)" class="text-caption" size="x-small">
                verify Email
              </v-btn>
              <v-icon v-else color="grey-darken-2" size="small" :icon="`mdi-${item.emailVerified ? 'check' : 'close'
                }-circle-outline`"></v-icon>
            </template>

            <template v-slot:[`item.action`]="{ item }">
              <AdminBtnDetailsBtn @details="
                navigateTo({
                  name: 'admin-users-id',
                  params: { id: item.id },
                })
                " />
            </template>
          </v-data-table>
        </v-sheet>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { useAuthStore } from "~/store/auth";
import { useBusinessStore } from "~/store/business";

const { getFullnames, replaceObjectEmptyStrings, filterDataPerField } = useHelpers();

const { currentUser, loading } = storeToRefs(useAppStore());



const { getBusinesses } = useBusinessStore(),
  businesses = ref([]),
  business = ref({}),
  businessesList = computed(() => {
    let businessMap = businesses.value.map((c) => c.businessName);
    return [...businessMap];
  }),
  setBusiness = async (val) => {
    business.value.name = val;
    business.value.id = businesses.value.find(
      (item) => item.businessName === val
    )?.id;

    await getVendorBusinessUsers();
  };


const { getUsers, getBusinessUsers, emailVerified } = useAuthStore(),
  data = ref([]),

  getData = async () => {
    let allBusinesses = await getBusinesses(false);
    businesses.value = allBusinesses.filter((i) =>
      currentUser.value.accessLevel === 3
        ? i.userId === currentUser.value.userId
        : i
    );
    business.value = {
      name: businesses.value[0]?.businessName,
      id: businesses.value[0]?.id,
    };

    data.value =
      currentUser.value.accessLevel === 3
        ? await getVendorBusinessUsers()
        : await getUsers();
    filterUsersByAccessLevel();
    data.value = replaceObjectEmptyStrings(data.value);
  },

  filterUsersByAccessLevel = () => {
    data.value = data.value.filter((u) =>
      currentUser.value?.accessLevel == 1
        ? u
        : currentUser.value.accessLevel == 2
          ? u.accessLevel > 1
          : u.accessLevel == currentUser.value?.accessLevel
    );
  },

  users = computed(() => {
    const advanced = accessLevel.value !== 'All'
      ? { role: accessLevel.value }
      : {}

    return filterDataPerField(data.value, search.value, advanced)



    // return data.value.filter((val) => {
    //   return accessLevel.value === "All"
    //     ? getFullnames(val)
    //       ?.toLowerCase()
    //       .includes(search.value.toLowerCase()) ||
    //     val.username.toLowerCase().includes(search.value.toLowerCase())
    //     : val.role == accessLevel.value.toUpperCase() &&
    //     (getFullnames(val)
    //       ?.toLowerCase()
    //       .includes(search.value.toLowerCase()) ||
    //       val.username.toLowerCase().includes(search.value.toLowerCase()));
    // });
  }),

  getVendorBusinessUsers = async () => {
    let newUsers = business.value.id
      ? await getBusinessUsers({
        enableLoader: false,
        business: business.value.id,
      })
      : [];

    return newUsers;
  };

const handleEmailVerification = async (item) => {
  try {
    const res = await emailVerified(item.userId)

    setTimeout(() => {
      getData()
    }, 500)


  } catch (error) {
    console.log(error)
  }
}



watchEffect(() => {
  getData();
});

const search = ref(""),
  setSearch = (val) => {
    search.value = val;
  };

const headers = [
  { title: "#", value: "no" },
  { title: "Name", value: "name" },
  { title: "Username", value: "username" },
  { title: "Role", value: "role", hide: true },
  { title: "Phone", value: "phone" },
  { title: "Email", value: "email" },
  { title: "Email verifictaion", value: "emailVerified" },
  { title: "Action", value: "action" },
],
  filteredHeaders = computed(() => {
    return accessLevel.value === "All"
      ? headers
      : headers.filter((h) => !h.hide);
  });

const btns = [
  { role: "All", accessLevel: [1, 2] },
  { role: "Administrator", accessLevel: [1] },
  // { role: "Cemadef", accessLevel: [1, 2] },
  { role: "Vendor", accessLevel: [1, 2] },
  { role: "End user", accessLevel: [1, 2] },
],
  accessLevel = ref("All"),
  userAccessLevels = computed(() => {
    return btns.filter((btn) =>
      btn.accessLevel.includes(currentUser.value?.accessLevel)
    );
  });

useSeoMeta({
  title: "Users",
});

</script>
