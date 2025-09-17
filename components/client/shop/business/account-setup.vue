<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="12" sm="5">
        <div class="text-caption d-flex ga-3 text-grey-darken-2">
          <v-icon start icon="mdi-information-outline" class="mt-1"></v-icon>
<<<<<<< HEAD
          <span>This critical step involves associating your account with distinct
            email, phone number and username entries, ensuring secure
            authentication and personalized communication tailored to your
            identity.</span>
=======
          <span
            >This critical step involves associating your account with distinct
            email, phone number and username entries, ensuring secure
            authentication and personalized communication tailored to your
            identity.</span
          >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
        </div>
      </v-col>
      <v-col cols="12" sm="7">
        <v-form ref="formData">
<<<<<<< HEAD

          <!-- {{ payload.email }} -->
          <v-text-field label="Email" v-model="payload.email" :rules="email()"></v-text-field>
          <v-text-field label="Username" v-model="payload.username" :rules="name()"></v-text-field>
          <Telephone :number="payload.phone" @set-phone="setPhone" />




          <v-btn size="small" flat block color="primary-dark" rounded class="text-caption" @click="moveNext"
            :loading="loading">
=======
          <!-- {{ payload.email }} -->
          <v-text-field
            label="Email"
            v-model="payload.email"
            :rules="emailOnly()"
          ></v-text-field>
          <!-- <v-text-field
            label="Username"
            v-model="payload.username"
            :rules="name()"
          ></v-text-field> -->
          <Telephone
            :number="payload.phone"
            @set-phone="setPhone"
            :required="true"
          />

          <v-btn
            size="small"
            flat
            block
            color="primary-dark"
            rounded
            class="text-caption"
            @click="moveNext"
            :loading="loading"
          >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
            <span>Verify</span>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <AdminCoreDialogHeader title="Warning" @close="dialog = false">
        </AdminCoreDialogHeader>
        <v-card-text class="pa-4">
          <v-window v-model="page">
            <v-window-item :value="1">
              <div class="text-caption d-flex ga-3 mb-5 text-grey-darken-2">
<<<<<<< HEAD
                <v-icon start icon="mdi-alert-outline" size="x-large" color="warning" class="mt-1"></v-icon>
                <span>

                  <p>Account Email <strong>{{ isUnique.email }}</strong> already exist as a <strong>{{ isUnique.role
                  }}</strong>.</p>
                  <p class="mt-3">Would you like to upgrade this account to Vendor or Employee ?</p>
=======
                <v-icon
                  start
                  icon="mdi-alert-outline"
                  size="x-large"
                  color="warning"
                  class="mt-1"
                ></v-icon>
                <span>
                  <p>
                    Account Email <strong>{{ isUnique.email }}</strong> already
                    exist as a <strong>{{ isUnique.role }}</strong
                    >.
                  </p>
                  <p class="mt-3">
                    Would you like to upgrade this account to Vendor or Employee
                    ?
                  </p>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                </span>
              </div>
              <v-form ref="formDataUpdate" @submit.prevent>
                <div class="">
<<<<<<< HEAD
                  <v-text-field label="Account Type" v-model="role" id="selectAccountRole" readonly
                    append-inner-icon="mdi-chevron-down"></v-text-field>
                  <AdminCoreSelect activator="#selectAccountRole" :list="roles" :list-value="role"
                    @set-item="setRole" />
                </div>
                <v-btn size="small" flat block color="primary-dark" rounded class="text-caption" @click="handleUpdate">
=======
                  <v-text-field
                    label="Account Type"
                    v-model="role"
                    id="selectAccountRole"
                    readonly
                    append-inner-icon="mdi-chevron-down"
                  ></v-text-field>
                  <AdminCoreSelect
                    activator="#selectAccountRole"
                    :list="roles"
                    :list-value="role"
                    @set-item="setRole"
                  />
                </div>
                <v-btn
                  size="small"
                  flat
                  block
                  color="primary-dark"
                  rounded
                  class="text-caption"
                  @click="handleUpdate"
                >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                  <span>update account</span>
                </v-btn>
              </v-form>
            </v-window-item>
            <v-window-item :value="2">
<<<<<<< HEAD

              <div class="text-caption d-flex ga-3 mb-5 text-grey-darken-2">
                <v-icon start icon="mdi-alert-outline" size="x-large" color="warning" class="mt-1"></v-icon>
=======
              <div class="text-caption d-flex ga-3 mb-5 text-grey-darken-2">
                <v-icon
                  start
                  icon="mdi-alert-outline"
                  size="x-large"
                  color="warning"
                  class="mt-1"
                ></v-icon>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                <span>
                  <p>Please Verify Account Ownership!</p>
                </span>
              </div>
              <v-form ref="formDataUpdate" @submit.prevent>
<<<<<<< HEAD
                <v-text-field label="Enter password" class="mt-1" v-model="password"
                  prepend-inner-icon="mdi-lock-outline" :type="`${showPassword ? 'text' : 'password'}`"
                  :append-inner-icon="`${showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                    }`" @click:append-inner="showPassword = !showPassword"
                  @keypress.enter="verifyOwnership"></v-text-field>
                <v-btn size="small" flat block color="primary-dark" rounded :loading="loading" class="text-caption"
                  @click="verifyOwnership">
                  <span>verify</span>
                </v-btn>
              </v-form>



            </v-window-item>
          </v-window>

        </v-card-text>
      </v-card>


    </v-dialog>


=======
                <v-text-field
                  label="Enter password"
                  class="mt-1"
                  v-model="password"
                  prepend-inner-icon="mdi-lock-outline"
                  :type="`${showPassword ? 'text' : 'password'}`"
                  :append-inner-icon="`${
                    showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                  }`"
                  @click:append-inner="showPassword = !showPassword"
                  @keypress.enter="verifyOwnership"
                ></v-text-field>
                <v-btn
                  size="small"
                  flat
                  block
                  color="primary-dark"
                  rounded
                  :loading="loading"
                  class="text-caption"
                  @click="verifyOwnership"
                >
                  <span>verify</span>
                </v-btn>
              </v-form>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-dialog>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
  </v-container>
</template>

<script setup>
const props = defineProps({
  payload: Object,
  trigger: Boolean,
});
const emits = defineEmits(["step"]);
<<<<<<< HEAD
const { number, name, email } = useRules();
// const { digitsOnly } = useHelpers();
// const { isMobile } = useDevice();


=======
const { number, name, emailOnly } = useRules();
// const { digitsOnly } = useHelpers();
// const { isMobile } = useDevice();

>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
import { useAppStore } from "~/store/app";
const { loading, error } = storeToRefs(useAppStore());

import { useAuthStore } from "~/store/auth";
const { checkUniqueFields, confirmUser } = useAuthStore();

const formData = ref(null);
const formDataUpdate = ref(null);

const dialog = ref(false);
const isUnique = ref({});

const types = ref([
  { title: "VENDOR", value: 8 },
  { title: "EMPLOYER", value: 6 },
<<<<<<< HEAD
])
const page = ref(1);
const password = ref("")
const showPassword = ref(false)
const roles = computed(() => types.value.map(i => i.title))
const role = ref('');
=======
]);
const page = ref(1);
const password = ref("");
const showPassword = ref(false);
const roles = computed(() => types.value.map((i) => i.title));
const role = ref("");
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const setRole = (val) => {
  role.value = isUnique.value.role = val;
  isUnique.value.roleId = types.value.find((r) => r.title == val)?.value;
};

<<<<<<< HEAD

=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const moveNext = async () => {
  let tab = 2;

  const { valid } = await formData.value.validate();

  if (valid) {
    isUnique.value = await checkUniqueFields(props.payload);
<<<<<<< HEAD
    if (isUnique.value.change) dialog.value = true
    else{
      props.payload = Object.assign(props.payload, isUnique.value)
        tab = isUnique.value.change ? 2 : 3;
    }


=======
    if (isUnique.value.change) dialog.value = true;
    else {
      props.payload = Object.assign(props.payload, isUnique.value);
      tab = isUnique.value.change ? 2 : 3;
    }
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
  }
  setTimeout(
    () => {
      emits("step", tab);
    },
    isUnique.value.error ? 10 : 2000
  );
};

<<<<<<< HEAD

const handleUpdate = async () => {
  const { valid } = await formDataUpdate.value.validate();
  if (valid) {
    page.value = 2

  }
}

=======
const handleUpdate = async () => {
  const { valid } = await formDataUpdate.value.validate();
  if (valid) {
    page.value = 2;
  }
};
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

const verifyOwnership = async () => {
  try {
    const res = await confirmUser({
      username: props.payload.email,
<<<<<<< HEAD
      password: password.value
    })


    if (res) {
      dialog.value = false
      
    props.payload = Object.assign(props.payload, isUnique.value)
      page.value = 1
      setTimeout(() => {
        emits('step', 4)
      }, 2000);
    }

  } catch (e){
    props.payload.change = false
   }

}
=======
      password: password.value,
    });

    if (res) {
      dialog.value = false;

      props.payload = Object.assign(props.payload, isUnique.value);
      page.value = 1;
      setTimeout(() => {
        emits("step", 4);
      }, 2000);
    }
  } catch (e) {
    props.payload.change = false;
  }
};
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

watch(
  () => props.trigger,
  () => {
    moveNext();
  }
);

const setPhone = (val) => {
  //
  props.payload.phone = val;
};
</script>
