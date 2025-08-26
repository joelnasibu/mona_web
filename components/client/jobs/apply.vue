<template>
  <ClientOnly>
    <div class="d-flex flex-column w-100">
      <div class="w-100">
        <div class="d-flex align-center ga-3 text-caption">
          <div class="d-flex ga-3">
            <v-avatar size="50" class="card-primary rounded-lg card-outlined"
              :image="currentUser.picture ?? profileImage" rounded="sm"></v-avatar>
            <div class="d-flex flex-column">
              <b>{{ getFullnames(currentUser) }}</b>
              <span>{{ currentUser.email }}</span>
              <span>{{ currentUser.phone }}</span>
            </div>
          </div>
          <v-spacer></v-spacer>
          <span class="text-primary-accent cursor-pointer" @click="myDetails = !myDetails">{{ myDetails ? "Hide" :
            "Change" }}</span>
        </div>
        <v-expand-transition>
          <div class="" v-if="myDetails">
            <v-form ref="formData" class="mt-5">
              <v-text-field label="Full names" v-model="application.applicant.name"></v-text-field>
              <v-text-field label="Email address" v-model="application.applicant.email"></v-text-field>
              <Telephone :number="application.applicant.phone" @set-phone="setPhone" />
            </v-form>
          </div>
        </v-expand-transition>
        <div class="d-flex flex-column ga-3 mt-5">
          <v-card flat class="pa-0 rounded-lg d-flex align-center card-outlined"
            v-for="{ name, file, title } in application.applicant.documents" :class="{ 'success-doc': file }"
            :key="name" @click="uploadDocument(name)">
            <div class="pa-2" :class="file ? 'success-doc-file' : ' card-white'">
              <Icon name="carbon:document-pdf" size="1.6rem" />
            </div>
            <div class="text-caption mx-3">
              <span>{{ title ? `${name} : ${title}` : `Upload ${name}` }}</span>
            </div>
            <v-spacer></v-spacer>
            <div title="Preview document">
              <v-card flat class="pa-2 card-secondary rounded-0 text-secondary"
                @click.stop="previewDoc({ name, file })">
                <Icon :name="file ? 'mdi:check-circle' : 'mdi:cloud-upload'" size="1.4rem" />
              </v-card>
            </div>
          </v-card>
        </div>
      </div>
      <div class="mt-auto d-flex justify-end w-100 pt-8 ga-2">
        <v-btn class="text-caption text-none mt-1" rounded="lg" color="primary-accent" variant="text" active
          size="small" @click="handleApply('INCOMPLETE')" :loading="loading" title="Finish application later">
          <span>Save draft</span>
        </v-btn>
        <v-btn class="text-caption text-none mt-1" rounded="lg" color="primary-accent" flat size="small"
          @click="handleApply('SUBMITTED')" :loading="loading">
          <span>Send Application</span>
        </v-btn>
      </div>
    </div>

    <PreviewDoc v-model="dialog" :doc-file="docFile" @close="closeDialog" />
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  payload: Object,
});
const emits = defineEmits(["close"]);

const { dateFormat_Month, getFullnames } = useHelpers();
const { name, email } = useRules();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { error, loading, token, currentUser, profileImage } =
  storeToRefs(appStore);

import { useJobStore } from "~/store/jobs";
const { apply } = useJobStore();

const myDetails = ref(false);
const formData = ref(null);
const application = ref({
  jobId: props.payload.jobId,
  userId: currentUser.value.userId,
  applicant: {
    name: `${currentUser.value.firstname} ${currentUser.value.lastname}`,
    email: currentUser.value.email,
    phone: currentUser.value.phone,

    documents: [],
  },
  applicationStatus: "SUBMITTED",
}),
  dialog = ref(false),
  docFile = ref(null),
  previewDoc = (filePDF) => {
    dialog.value = true;
    docFile.value = filePDF;
  },
  closeDialog = () => {
    dialog.value = false;
    docFile.value = null;
  };

const uploadDocument = (doc) => {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "application/pdf";
  input.click();
  let docFile = application.value.applicant.documents.find(
    (d) => d.name === doc
  );
  input.onchange = async (e) => {
    let file = e.target.files[0];
    docFile.title = e.target.files[0].name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      docFile.file = evt.target.result;
    };
    reader.readAsDataURL(file);
  };
};
const handleApply = async (status) => {
  if (application.value.applicant.documents.some((i) => i.file === null))
    appStore.toggleSnackbar({
      status: true,
      type: "warning",
      message: "Provide all documents",
    });
  else {
    application.value.applicationStatus = status;
    await apply(application.value);
    if (!error.value) {
      emits("close");
      formData.value.reset();
    }
  }
};

const setPhone = (val) => {
  application.value.applicant.phone = val;
};

onMounted(() => {
  if (props.payload.requiredDocuments) {
    application.value.applicant.documents = [];
    props.payload.requiredDocuments.forEach((doc) => {
      application.value.applicant.documents.push({
        name: doc,
        value: null,
        title: null,
        file:
          currentUser.value.applicant.documents?.find((d) => d.name === doc)
            ?.file ?? null,
      });
    });
  }
});
</script>

<style lang="css" scoped>
.success-doc {
  border-color: green !important;
  border-width: 2px !important;
}

.success-doc-file {
  background-color: green !important;
  color: white !important;
}
</style>
