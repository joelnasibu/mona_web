<template>
  <div>
    <AdminCorePageHeader route="admin-users">
      <div class="d-flex align-center">
        <v-btn
          class="text-capitalize ml-2 text-caption"
          prepend-icon="mdi-content-save"
          size="small"
          flat
          color="primary-dark"
          @click="submit"
          :loading="loading"
          rounded
        >
          <span>Save</span>
        </v-btn>
      </div>
    </AdminCorePageHeader>
    <v-form ref="formData" class="mt-5">
      <v-container class="pa-0" fluid>
        <v-row>
          <v-col cols="12" sm="3">
            <AdminCoreImage
              :profile="true"
              :image="payload.picture"
              @set-image="setImage"
            />
          </v-col>
          <v-col cols="12" sm="9">
            <v-container class="pa-0 row-form-data" fluid>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="First name"
                    v-model="payload.firstname"
                    :rules="name()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Last name"
                    v-model="payload.lastname"
                    :rules="name()"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12" sm="4">
                  <v-text-field label="Username" v-model="payload.username" :rules="required()"></v-text-field>
                </v-col> -->
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email address"
                    v-model="payload.email"
                    :rules="emailOnly()"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <Telephone :number="payload.phone" @setPhone="setPhone" />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Gender"
                    v-model="payload.gender"
                    id="selectGender"
                    readonly
                  ></v-text-field>
                  <AdminCoreSelect
                    activator="#selectGender"
                    :list="['MALE', 'FEMALE']"
                    :listValue="payload.gender"
                    @setItem="setGender"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Role"
                    v-model="role"
                    :rules="required()"
                    id="selectRole"
                    readonly
                    append-inner-icon="mdi-chevron-down"
                  ></v-text-field>

                  <AdminCoreSelect
                    activator="#selectRole"
                    :list="listRoles"
                    :listValue="role"
                    @setItem="setRole"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <div class="text-right text-caption">
                    <span
                      class="text-decoration-underline cursor-pointer"
                      @click="
                        payload.password = payload.cpassword = randPassword();
                        showPassword = true;
                      "
                      >Generate password</span
                    >
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <CorePassword
                    :password="payload.password"
                    :show-password="showPassword"
                    @toggleShowPassword="showPassword = !showPassword"
                    @weakPassword="checkPassword"
                    @setPassword="setPassword"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Confirm password"
                    v-model="payload.cpassword"
                    :rules="confirmPassword(payload.password)"
                    prepend-inner-icon="mdi-lock-outline"
                    :type="`${showPassword ? 'text' : 'password'}`"
                    :append-inner-icon="`${
                      showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                    }`"
                    @click:append-inner="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
const { required, name, number, emailOnly, confirmPassword } = useRules();
const { digitsOnly, randPassword } = useHelpers();

import { useAppStore } from "~/store/app";
const { loading, error, currentUser } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { createUser } = useAuthStore();

import { useRoleStore } from "~/store/roles";
const { getRoles } = useRoleStore(),
  roles = ref([]),
  loadRoles = ref(false),
  getData = async () => {
    loadRoles.value = true;
    roles.value = await getRoles(false);
    console.log("roles", roles.value);
    loadRoles.value = false;
    // console.table(roles.value);
  };
onMounted(() => {
  getData();
});

const listRoles = computed(() => {
    return roles.value
      .filter((r) =>
        currentUser.value.accessLevel === 1
          ? r
          : r.level === currentUser.value.accessLevel &&
            r.role !== currentUser.value.role
      )
      .map((r) => r.role);
  }),
  role = ref(""),
  setRole = (val) => {
    role.value = val;
    payload.value.roleId = roles.value.find((r) => r.role == val)?.id;
  };

const payload = ref({
  email: "",
  phone: "",
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  cpassword: "",
  roleId: 0,
  picture: null,
  gender: "",
});
const showPassword = ref(false);

const formData = ref(null);
const submit = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    await createUser(payload.value);
    if (!error.value)
      setTimeout(() => {
        navigateTo({
          name: "admin-users",
        });
      }, 2000);
  }
};

const setImage = (val) => {
  payload.value.picture = val;
};

const isPasswordWeak = ref(false);
const checkPassword = (val) => {
  isPasswordWeak.value = val;
};
const setPassword = (val) => {
  payload.value.password = val;
};
const setGender = (val) => {
  payload.value.gender = val;
};

const setPhone = (val) => {
  //
  payload.value.phone = val;
};

useSeoMeta({
  title: "Add user",
});
</script>

<style lang="css" scoped></style>
