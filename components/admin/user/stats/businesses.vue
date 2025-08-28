  <template>
  <div>
    <div class="d-flex align-center ga-3">
      <AdminCoreSearch :search="search" @search="setSearch" />
      <v-btn
        class="card-outlined text-caption text-none rounded-lg"
        density="compact"
        flat
        variant="text"
        prepend-icon="mdi-filter-outline"
        id="selectBusinessType"
        title="Business type"
      >
        <span>{{ `Business type: ${businessType}` }}</span>
      </v-btn>
      <AdminCoreSelect
        activator="#selectBusinessType"
        :list="businessTypesList"
        :listValue="businessType"
        @setItem="setBusinessType"
      />
    </div>
    <div class="mt-2">
      <v-sheet width="100%" color="transparent">
        <v-data-table
          density="compact"
          :headers="headers"
          :items="filteredBusinesses"
          class="bg-background"
        >
          <template v-slot:[`item.no`]="{ item }">
            <span>{{ filteredBusinesses.indexOf(item) + 1 }}</span>
          </template>
          <template v-slot:[`item.image`]="{ item }">
            <v-avatar size="30" :image="item.image"></v-avatar>
          </template>
          <template v-slot:[`item.action`]="{ item }">
            <AdminBtnDetailsBtn
              @details="
                navigateTo({
                  name: 'admin-businesses-id',
                  params: { id: item.id },
                })
              "
            />
          </template>
        </v-data-table>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});
const emits = defineEmits(["setLoader"]);

const { replaceObjectEmptyStrings, filterDataPerField } = useHelpers();

import { useBusinessStore } from "~/store/business";
const { getBusinesses } = useBusinessStore();
const businesses = ref([]);
const getData = async () => {
  emits("setLoader", true);
  let businessesList = await getBusinesses(false);
  emits("setLoader", false);
  businesses.value = replaceObjectEmptyStrings(
    businessesList.filter((b) => b.userId === props.payload.userId)
  );
  //
};
onMounted(() => {
  getData();
});

const search = ref("");
const setSearch = (val) => {
  search.value = val;
};
const filteredBusinesses = computed(() => {
  return filterDataPerField(businesses.value, search.value);
});

const businessType = ref("All");
const businessTypesList = computed(() => {
  return ["All", ...businesses.value.map((b) => b.businessType)];
});
const setBusinessType = (val) => {
  businessType.value = val;
};

const headers = [
  { title: "#", value: "no" },
  { title: "Code", value: "code" },
  { title: "Logo", value: "image" },
  { title: "Business", value: "businessName" },
  { title: "Type", value: "businessType" },
  { title: "Action", value: "action" },
];
</script>

<style lang="css" scoped></style>
