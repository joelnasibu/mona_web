<template>
  <v-form ref="formData">
    <v-container class="pa-0 row-form-data">
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Country"
            v-model="payload.address.country"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Province"
            v-model="payload.address.province"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Town"
            v-model="payload.address.town"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Commune"
            v-model="payload.address.commune"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Quartier"
            v-model="payload.address.quartier"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Avenue"
            v-model="payload.address.avenue"
            :rules="required()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="No"
            v-model="payload.address.no"
            :rules="required()"
            @keypress="digitsOnly"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);

const { required } = useRules();
const { digitsOnly } = useHelpers();

const formData = ref(null);

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);
const moveNext = async () => {
  let tab = 2;
  const { valid } = await formData.value.validate();
  if (valid) tab = 3;

  emits("step", tab);
};
</script>

<style lang="css" scoped></style>
