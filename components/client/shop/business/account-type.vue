<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="5">
        <div class="d-flex ga-3 text-grey-darken-2 text-caption">
          <v-icon start icon="mdi-information-outline" class=""></v-icon>
          <div class="">
            <span>Select the type of account you need.</span>

            <ul class="mt-4 ml-5">
              <li>
                <b>Vendor account: </b>
                <span
                  >designed for businesses and suppliers to manage their
                  products and services within the platform.
                </span>
              </li>
              <li class="mt-3">
                <b>Employer account: </b>
                <span
                  >designed for businesses and organizations to manage their
                  hiring and employment processes.</span
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
              label="Account type"
              v-model="type"
              id="selectAccounttype"
              readonly
              append-inner-icon="mdi-chevron-down"
              :rules="required()"
            ></v-text-field>
            <AdminCoreSelect
              activator="#selectAccounttype"
              :list="types.map((t) => t.title)"
              :list-value="type"
              @set-item="setType"
            />
          </div>
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
  emits("step", valid ? 1: 0);
};
</script>

<style lang="css" scoped></style>
