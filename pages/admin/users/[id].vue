<template>
  <div>
    <ClientOnly>
      <AdminCorePageDetailsHeader :view="view" route="admin-users" @toggleView="view = !view"
        @delete="deleteDialog = true">
        <div class="d-flex">
          <!-- <v-btn
            variant="text"
            size="small"
            color="primary-accent"
            class="text-caption text-none"
            rounded
          >
            <span>Resend OTP</span>
          </v-btn> -->
          <v-btn variant="text" size="small" color="primary-accent" class="text-caption text-none" rounded
            v-if="currentUser?.userId === data?.userId" @click="changePasswordDialog = true">
            <span>Change password</span>
          </v-btn>
        </div>
      </AdminCorePageDetailsHeader>
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="4">
            <v-card flat class="rounded-lg card-outlined pa-3">
              <AdminUserDetails :payload="data" v-if="view" />
              <AdminUserEdit :payload="data" @save="handleUpdate" v-else />
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="8">
            <v-card flat class="rounded-lg card-outlined h-100">
              <AdminUserStats :payload="data" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog width="500" v-model="changePasswordDialog" persistent>
        <v-card class="card-outlined rounded-lg system-bg">
          <AdminCoreDialogHeader title="Change password" @close="closeChangePasswordDialog">
          </AdminCoreDialogHeader>
          <v-card-text>
            <v-form ref="formData">
              <v-text-field label="Current password" prepend-inner-icon="mdi-lock-outline" autocomplete="off" autofocus
                name="newPassword" :append-inner-icon="`${showCurrentPassword
                  ? 'mdi-eye-off-outline'
                  : 'mdi-eye-outline'
                  }`" @click:append-inner="showCurrentPassword = !showCurrentPassword"
                :type="`${showCurrentPassword ? 'text' : 'password'}`" v-model="passwords.oldPassword"
                :rules="required()"></v-text-field>
              <div class="text-decoration-underline text-caption px-2 mb-1 cursor-pointer">
                <span>Generate new password</span>
              </div>
              <CorePassword :password="passwords.newPassword" :show-password="showPassword"
                @toggleShowPassword="showPassword = !showPassword" @weakPassword="checkPassword"
                @setPassword="setPassword" />
              <v-text-field label="Re-enter new password" prepend-inner-icon="mdi-lock-outline" autocomplete="off"
                :append-inner-icon="`${showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                  }`" @click:append-inner="showPassword = !showPassword"
                :type="`${showPassword ? 'text' : 'password'}`" v-model="passwords.confirm"
                :rules="confirmPassword(passwords.newPassword)" class="mt-2"></v-text-field>
              <div class="d-flex justify-end">
                <v-btn class="text-caption text-none rounded-lg" size="small" color="primary-accent"
                  prepend-icon="mdi-content-save" flat>
                  <span>Save</span>
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <AdminDeleteConfirmation :dialog="deleteDialog" :data="{
        name: 'User',
        itemTitle: getFullnames(data),
        id: data.userId,
      }" @cancel="deleteDialog = false" @delete="confirmDelete" />
    </ClientOnly>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { getFullnames } = useHelpers();
const { required, confirmPassword } = useRules();

import { useAppStore } from "~/store/app";
const { error, loading, currentUser } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { getUser, deleteUser, updateUser } = useAuthStore();
const data = ref(await getUser({ id }));

const view = ref(true);

const deleteDialog = ref(false);
const confirmDelete = async () => {
  await deleteUser(data.value.id);
  if (!error.value) {
    deleteDialog.value = false;
    setTimeout(() => {
      navigateTo({ name: "admin-users" });
    }, 3000);
  }
};

const changePasswordDialog = ref(false);
const formData = ref(null);
const showPassword = ref(false);
const showCurrentPassword = ref(false);
const passwords = ref({
  oldPassword: "",
  newPassword: "",
  confirm: "",
});
const isPasswordWeak = ref(false);
const checkPassword = (val) => {
  isPasswordWeak.value = val;
};
const setPassword = (val) => {
  passwords.value.newPassword = val;
};
const closeChangePasswordDialog = () => {
  changePasswordDialog.value = false;
  passwords.value = {
    oldPassword: "",
    newPassword: "",
    confirm: "",
  };
};

const handleUpdate = async () => {
  await updateUser(data.value);
  if (!error.value) data.value = await getUser({ id });
  setTimeout(() => {
    view.value = true;
  }, 1000);
};

useSeoMeta({
  title: data.value ? `${getFullnames(data.value)} - Details` : 'User Details',
});
</script>

<style lang="css" scoped></style>
