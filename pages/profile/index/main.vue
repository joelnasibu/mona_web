<template>
  <v-card class="px-2 px-md-4 rounded-lg" flat>
    <v-card class="rounded-lg d-flex px-4 px-md-8 bg-card box-shadow-bottom" flat>
      <v-container>
        <v-row justify="space-between" align="center">
          <v-col cols="3">
            <!-- <v-avatar
              :size="isMobile ? 50 : 135"
              :image="currentUser.picture"
            ></v-avatar> -->
            <AdminCoreImage :profile="true" :avatar="true" :image="user?.picture" @set-image="setImage" />
          </v-col>
          <v-col cols="8">
            <div style="width: max-content">
              <div class="text-capitalize" style="font-size: 1.5rem">
                <b>{{ getFullnames(currentUser).toLowerCase() }} </b>
              </div>
              <v-btn class="text-caption px-10 rounded-lg my-2" color="grey-darken-2" variant="outlined" block>
                <span>Get verified</span>
                <v-icon icon="mdi-check-decagram" end size="15" color="grey"></v-icon>
              </v-btn>
            </div>
            <div class="text-caption text-disabled">
              <span>Joined on {{ dateFormat_Month(currentUser.dateCreated) }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-container class="mt-4">
      <v-row justify="center">
        <v-col cols="12" sm="11">
          <div class="d-flex flex-column w-100">
            <div class="text-caption d-flex flex-column ga-2">
              <v-form ref="formData">
                <div class="">
                  <div class="text-subtitle-2 pb-3">
                    <b>Display names</b>
                    <div class="text-caption text-disabled d-flex align-center">
                      <v-icon icon="mdi-information-outline" start></v-icon>
                      <span>Everyone can see your display names</span>
                    </div>
                  </div>
                  <div class="d-flex flex-wrap ga-2 w-100 mt-1">
                    <v-text-field label="First name" v-model="user.firstname" :rules="name()"></v-text-field>
                    <v-text-field label="Last name" v-model="user.lastname" :rules="name()"></v-text-field>
                  </div>
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="mt-6">
                  <div class="text-subtitle-2 pb-3">
                    <b>Unique Identifier</b>
                  </div>
                  <!-- <div class="d-flex flex-wrap ga-2 w-100 mt-1"> -->
                  <v-text-field label="Username" v-model="user.username" :rules="required()"></v-text-field>
                  <v-text-field label="Email address" v-model="user.email" :rules="email()"></v-text-field>
                  <Telephone :number="user.phone" @set-phone="setPhone" />
                  <!-- </div> -->
                </div>
                <v-divider class="my-2"></v-divider>
                <div class="mt-6">
                  <div class="text-subtitle-2 pb-3">
                    <b>Other account details</b>
                  </div>
                  <div class="w-100">
                    <div class="text-caption d-flex align-center">
                      <div class="text-body-2">
                        <span>Gender</span>
                      </div>
                      <v-spacer></v-spacer>
                      <v-radio-group hide-details inline color="primary-accent" v-model="user.gender">
                        <v-radio v-for="gender in genders" :value="String(gender).toUpperCase()" class="">
                          <template v-slot:label>
                            <div class="text-caption">
                              <span>{{ gender }}</span>
                            </div>
                          </template>
                        </v-radio>
                      </v-radio-group>
                    </div>
                  </div>
                </div>
                <v-btn class="text-caption mt-5" color="primary-accent" flat block @click="handleSave"
                  :loading="loading">
                  <span>Save</span>
                </v-btn>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
const { isMobile } = useDevice(),
  { getFullnames, dateFormat_Month } = useHelpers(),
  { required, name, email, number } = useRules();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { error, loading, token, currentUser, profileImage } =
  storeToRefs(appStore);

const genders = ["Male", "Female"],
  user = ref(currentUser.value),
  setPhone = (val) => {
    user.value.phone = val;
  },
  setImage = (val) => {
    user.value.picture = val;
  };

import { useAuthStore } from "~/store/auth";
const { updateUser } = useAuthStore(),
  formData = ref(null),
  handleSave = async () => {
    const { valid } = await formData.value.validate();
    if (valid) await updateUser(user.value);
  };
</script>

<style lang="css" scoped></style>
