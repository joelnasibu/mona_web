<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="5" class="d-none d-md-block">
        <div class="d-flex ga-3 text-grey-darken-2 text-caption">
          <v-icon start icon="mdi-information-outline" class=""></v-icon>
          <div class="">
            <span>Select your market location & products category.</span>

            <ul class="mt-4 ml-5">
              <li>
                <span
                  >Designed for businesses and suppliers to manage their
                  products and services within the platform.</span
                >
              </li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="7">
        <v-form ref="formData">
          <div class="">
            <v-text-field
              label="Market"
              v-model="type"
              id="selectMarket"
              readonly
              append-inner-icon="mdi-chevron-down"
              :rules="required()"
            ></v-text-field>
            <AdminCoreSelect
              activator="#selectMarket"
              :list="types.map((t) => t.title)"
              :list-value="type"
              @set-item="setType"
            />
          </div>
          <v-text-field
            label="Store Number"
            v-model="payload.storeNumber"
            :rules="required()"
          ></v-text-field>
          <div class="">
            <v-text-field
              label="Category"
              v-model="category"
              id="selectAccountCategory"
              readonly
              append-inner-icon="mdi-chevron-down"
              :rules="required()"
            ></v-text-field>
            <AdminCoreSelect
              activator="#selectAccountCategory"
              :list="categories.map((t) => t.title)"
              :list-value="category"
              @set-item="setCategory"
            />
          </div>
          <v-btn
            size="small"
            flat
            block
            color="primary-dark"
            rounded
            class="text-caption"
            @click="moveNext"
          >
            <span>Continue</span>
          </v-btn>
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
const { required } = useRules();
const { isMobile } = useDevice();

const formData = ref(null),
  types = [
    { title: "VENDOR", value: 8 },
    { title: "EMPLOYER", value: 6 },
  ],
  type = ref(""),
  setType = (val) => {
    type.value = props.payload.role = val;
    props.payload.roleId = types.find((r) => r.title == val).value;
  };

const categories = [
    { title: "ONG", value: 2 },
    { title: "ENTREPRISE", value: 0 },
    { title: "INDIVIDU", value: 1 },
  ],
  category = ref(""),
  setCategory = (val) => {
    category.value = props.payload.category = val;
    props.payload.type = categories.find((i) => i.title == val).value;
  };

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const moveNext = async () => {
  const { valid } = await formData.value.validate();
  emits("step", valid ? 1 : 0);
};
</script>

<style lang="css" scoped></style>
