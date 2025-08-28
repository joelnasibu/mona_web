<template>
  <div>
    <div
      class="text-body-2 d-flex align-center justify-space-between bg-card pa-3 rounded-t-lg"
    >
      <b>{{ isAdmin ? "User details" : "Main details" }}</b>
      <div class="text-caption" v-if="isAdmin">
        <span>{{ payload?.userId }}</span>
      </div>
      <v-btn
        class="text-caption rounded-lg"
        size="small"
        color="primary-accent"
        prepend-icon="mdi-eye-outline"
        v-else
        variant="text"
        @click="emits('preview')"
      >
        <span>Preview</span>
      </v-btn>
    </div>
    <!-- <v-divider class="ma-0 mt-md-4"></v-divider> -->
    <div class="pa-1 text-caption d-flex flex-column ga-4">
      <div class="mx-auto d-flex flex-column align-center">
        <AdminCoreImage
          :profile="true"
          :image="payload?.picture"
          @set-image="setImage"
        />
      </div>
      <v-form ref="formData" class="mt-4">
        <v-container>
          <v-row>
            <v-col cols="12" class="py-0">
              <v-text-field
                label="Username"
                v-model="payload.username"
                :rules="required()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                label="First name"
                v-model="payload.firstname"
                :rules="name()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                label="Last name"
                v-model="payload.lastname"
                :rules="name()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field
                label="Email address"
                v-model="payload.email"
                :rules="email()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <Telephone :number="payload.phone" @set-phone="setPhone" />
            </v-col>
            <v-col cols="12" :sm="isAdmin ? 6 : 12" class="py-0">
              <v-text-field
                label="Gender"
                v-model="payload.gender"
                :rules="required()"
                id="selectGender"
                readonly
                append-inner-icon="mdi-chevron-down"
              ></v-text-field>
              <AdminCoreSelect
                activator="#selectGender"
                :list="['MALE', 'FEMALE']"
                :list-value="payload.gender"
                @set-item="setGender"
              />
            </v-col>
            <v-col cols="12" sm="6" class="py-0" v-if="isAdmin">
              <v-text-field
                label="Role"
                v-model="role"
                :rules="required()"
                id="selectRole"
                readonly
                :loading="loadRoles"
              ></v-text-field>
              <AdminCoreSelect
                activator="#selectRole"
                :list="listRoles"
                :list-value="role"
                @set-item="setRole"
              />
            </v-col>
          </v-row>
        </v-container>

        <v-btn
          block
          flat
          class="text-caption text-none rounded-lg"
          color="primary-accent"
          @click="handleSave"
          :loading="loading"
        >
          <span>Save</span>
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});
const emits = defineEmits(["save", "preview"]);

const { required, name, email, number } = useRules();

import { useAppStore } from "~/store/app";
const { loading, isAdmin } = storeToRefs(useAppStore());

import { useRoleStore } from "~/store/roles";
const { getRoles } = useRoleStore();
const roles = ref([]);
const loadRoles = ref(false);
const getData = async () => {
  loadRoles.value = true;
  roles.value = await getRoles(false);
  loadRoles.value = false;
};
watchEffect(() => {
  getData();
});
const listRoles = computed(() => {
  return roles.value
    .filter((r) => r.level === props.payload.accessLevel)
    .map((r) => r.role);
});
const role = ref(props.payload.role);
const setRole = (val) => {
  role.value = val;
  props.payload.roleId = roles.value.find((r) => r.role == val)?.id;
};

const setGender = (val) => {
  props.payload.gender = val;
};

const setImage = (val) => {
  props.payload.picture = val;
};

const setPhone = (val) => {
  //
  props.payload.phone = val;
};

const formData = ref(null);
const handleSave = async () => {
  const { valid } = await formData.value.validate();
  if (valid) emits("save");
};
</script>

<style lang="css" scoped></style>
