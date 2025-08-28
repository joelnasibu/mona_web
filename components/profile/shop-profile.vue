<template>
  <div>
    <div class="d-flex align-center ga-3 w-100" v-if="hasAccount">
      <div class="d-flex w-100 ga-2">
        <v-card width="60" class="bg-card pa-1 card-outlined rounded" flat>
          <v-icon size="45" color="primary-dark" icon="mdi-truck"></v-icon>
        </v-card>
        <div class="text-caption d-flex flex-column">
          <b>Delivery address</b>
          <div class="text-disabled">
            <p>{{ currentUser.account.location }}</p>
          </div>
          <div class="">
            <v-icon
              size="small"
              end
              :icon="`mdi-${preview ? 'pencil' : 'eye'}-outline`"
              v-if="isMobile"
              color="secondary"
              @click="preview = !preview"
            ></v-icon>
            <div
              v-else
              class="text-caption text-none cursor-pointer text-secondary"
              @click="preview = !preview"
            >
              <span>{{ preview ? "Change" : "Hide" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-expand-transition>
      <div class="" v-if="!preview">
        <v-form ref="formData" class="mt-3">
          <v-container class="mt-2">
            <v-row>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Quartier"
                  v-model.trim="account.location"
                  :rules="required()"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Avenue"
                  v-model.trim="account.avenue"
                  :rules="required()"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Numero"
                  v-model.number.trim="account.qrt"
                  :rules="required()"
                  @keypress="digitsOnly"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-btn
            color="primary-accent"
            size="small"
            class="rounded-lg text-caption"
            block
            flat
            :loading="loading"
            @click="handleSave"
          >
            <span>Save</span>
          </v-btn>
        </v-form>
      </div>
    </v-expand-transition>
  </div>
</template>

<script setup>
const { required } = useRules();
const { digitsOnly } = useHelpers();
const { isMobile } = useDevice();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { error, loading, currentUser } = storeToRefs(appStore);
//

import { useAuthStore } from "~/store/auth";
const { shopAccount, updateAccount } = useAuthStore();

const hasAccount = computed(() => {
  return currentUser.value.account;
});

const preview = ref(hasAccount.value);

const formData = ref(null);
const account = ref({
  userId: currentUser.value.userId,
  id: currentUser.value.account?.accountId,
  qrt: "",
  avenue: "",
  location: currentUser.value.account.location ?? "",
  cardDetails: currentUser.value.account.cardDetails ?? {
    accountNumber: "",
    accountName: "",
    exp: "",
    cvc: "",
  },
});
const handleSave = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    hasAccount.value
      ? await updateAccount(account.value, "accounts")
      : await shopAccount(account.value, "accounts");

    if (!error.value)
      setTimeout(() => {
        appStore.setUser({
          ...currentUser.value,
          account: account.value,
        });
        preview.value = !preview.value;
        // currentUser.value.account = account.value;
      }, 2000);
  }
};
</script>

<style lang="css" scoped></style>
