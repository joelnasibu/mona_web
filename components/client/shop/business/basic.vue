<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="5">
        <div class="text-caption d-flex ga-3 text-grey-darken-2">
          <v-icon start icon="mdi-information-outline" class="mt-1"></v-icon>
          <span
            >Enter your basic informations, such as your names, an initial step
            in tailoring your online presence to reflect your identity
            accurately.</span
          >
        </div>
      </v-col>
      <v-col cols="12" sm="7">
        <v-form ref="formData">
          <v-text-field
            label="First name"
            v-model="payload.firstname"
            :rules="name()"
          ></v-text-field>
          <v-text-field
            label="Last name"
            v-model="payload.lastname"
            :rules="name()"
          ></v-text-field>

          <v-text-field
            label="Gender"
            v-model="payload.gender"
            id="selectSellerGender"
            readonly
            append-inner-icon="mdi-chevron-down"
          ></v-text-field>
          <AdminCoreSelect
            activator="#selectSellerGender"
            :list="['MALE', 'FEMALE']"
            :list-value="payload.gender"
            @set-item="setGender"
          />
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
const { required, name } = useRules();
const { isMobile } = useDevice();

const formData = ref(null);

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const moveNext = async () => {
  let tab = 1;

  const { valid } = await formData.value.validate();
  if (valid) tab = 2;
  emits("step", tab);
};

const setGender = (val) => {
  props.payload.gender = val;
};
</script>

<style lang="css" scoped></style>
