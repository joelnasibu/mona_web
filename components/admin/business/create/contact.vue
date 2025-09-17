<template>
  <v-form ref="formData" class="mt-5" lazy-validation>
    <v-container class="pa-0 row-form-data" fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8">
          <div class="bg-card pa-2 text-caption">
            <span>Business contact</span>
          </div>
          <v-container class="px-2 py-4 rounded mt-3" fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Business email address"
                  v-model="payload.email"
<<<<<<< HEAD
                  :rules="payload.businessType === 'FORMAL' ? email() : []"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <Telephone
                  :number="payload.phone"
                  @set-phone="setPhone"
                  :required="true"
                />
=======
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <Telephone :number="payload.phone" @set-phone="setPhone" />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
              </v-col>

              <v-col cols="12" sm="4">
                <v-text-field
                  label="Contact person names"
                  v-model="payload.contactPerson.names"
<<<<<<< HEAD
                  :rules="fullName()"
=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  label="Contact person email"
                  v-model="payload.contactPerson.email"
<<<<<<< HEAD
                  :rules="email()"
=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <Telephone
                  label="Contact person phone"
                  :number="payload.contactPerson.phone"
                  @set-phone="setContactPersonPhone"
<<<<<<< HEAD
                  :required="true"
=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                />
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" sm="4" v-if="currentUser.accessLevel < 3">
          <div class="bg-card pa-2 text-caption">
            <span>Owner</span>
          </div>
          <v-container class="px-2 py-4 rounded mt-3" fluid>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Owner"
                  v-model="owner.names"
                  :rules="required()"
                  id="selectOwner"
                  append-inner-icon="mdi-chevron-down"
                  readonly
                ></v-text-field>
                <AdminCoreSelect
                  activator="#selectOwner"
                  :list="userList"
                  :listValue="user"
                  @setItem="setUser"
                />
                <div class="pb-1">
                  <v-card
                    flat
                    width="250"
                    height="250"
                    class="mx-auto card-outlined rounded-lg"
                  >
                    <v-img :src="owner.picture ?? profileImage"></v-img>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
  update: Boolean,
});
const emits = defineEmits(["step"]);

const { digitsOnly } = useHelpers();
const { fullName, email, number, required } = useRules();

import { useAppStore } from "~/store/app";
const { profileImage, currentUser } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { getUsers } = useAuthStore();
const users = ref([]);
const getData = async () => {
  if (currentUser.value.accessLevel < 3) users.value = await getUsers(false);
  if (props.update) {
    let businessOwner = users.value.find(
      (u) => u.userId === props.payload.userId
    );
    owner.value = {
      names: businessOwner.firstname + " " + businessOwner.lastname,
      picture: businessOwner.picture,
    };
  } else {
    if (currentUser.value.accessLevel == 3)
      props.payload.userId = currentUser.value.userId;
  }
};
watchEffect(() => {
  getData();
});
const user = ref("");
const userList = computed(() => {
  return users.value
    .filter((u) => u.roleId == 8)
    .map((b) => b.firstname + " " + b.lastname);
});

const owner = ref({
  names: "",
  picture: null,
});

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

const setUser = (val) => {
  let u = users.value.find((b) => b.firstname + " " + b.lastname == val);
  props.payload.userId = u?.userId;
  owner.value = {
    names: u.firstname + " " + u.lastname,
    picture: u.picture,
  };
  // props.payload.owner=owner.value
};
const setPhone = (val) => {
  props.payload.phone = val;
};
const setContactPersonPhone = (val) => {
  props.payload.contactPerson.phone = val;
};
</script>

<style lang="css" scoped></style>
