<template>
  <div>
    <v-btn-toggle v-model="preview" variant="outlined" density="compact" border divided color="primary"
      class="rounded-lg">
      <v-btn class="text-caption" prepend-icon="mdi-eye-outline" :disabled="!isApplicant" :value="true">
        <span>Preview</span>
      </v-btn>
      <v-btn class="text-caption" prepend-icon="mdi-pencil-outline" :value="false">
        <span>Details</span>
      </v-btn>
    </v-btn-toggle>
    <v-window v-model="preview">
      <v-window-item :value="true">
        <div class="text-caption py-6 d-flex flex-column ga-3">
          <div class="d-flex justify-space-between details-row">
            <span>Title</span>
            <b>{{ applicant.title }}</b>
          </div>
          <div class="d-flex justify-space-between details-row">
            <span>Experience (yrs)</span>
            <b>{{ applicant.experience }}</b>
          </div>
          <div class="d-flex justify-space-between details-row">
            <span>Experience Level</span>
            <b>{{ applicant.experienceLevel }}</b>
          </div>
          <div class="d-flex justify-space-between details-row">
            <span>location</span>
            <b>{{ applicant.location }}</b>
          </div>
          <div class="">
            <span>Skills:</span>
            <div class="mx-2 mx-md-4 mt-3">
              <div class="d-flex ga-2 fle-wrap" v-if="applicant.skills.length">
                <CoreTag v-for="(skill, i) in applicant.skills" :key="i" :tag="skill" />
              </div>
              <div v-else>
                <p>No skills set</p>
              </div>
            </div>
          </div>
        </div>
        <v-divider class="mt-5 mb-3"></v-divider>
        <div class="py-2 text-body-2">
          <b>Documents</b>
        </div>
        <div class="d-flex flex-column ga-4">
          <div v-for="({ name, file }, i) in applicant.documents" :key="i">
            <v-card flat class="pa-0 rounded-lg d-flex align-center ga-3 card-outlined"
              @click="viewFile(applicant.documents[i])">
              <div class="pa-2" :class="file ? 'success-doc-file' : ' card-white'">
                <Icon name="carbon:document-pdf" size="1.6rem" />
              </div>
              <div class="text-caption">
                <span>{{ `${!file ? "Upload" : ""} ${name}` }}</span>
              </div>
            </v-card>
          </div>
        </div>
      </v-window-item>
      <v-window-item :value="false">
        <v-form ref="formData" class="mt-3">
          <v-container class="mt-2">
            <v-row>
              <v-col cols="12" sm="12" class="pa-1">
                <v-text-field label="Title" v-model.trim="applicant.title" :rules="required()"></v-text-field>
              </v-col>
              <v-col class="pa-1" cols="12" sm="6">
                <v-text-field label="Years of experience" v-model.number.trim="applicant.experience"
                  @keypress="digitsOnly" suffix="Year(s)"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="pa-1">
                <v-text-field label="Experience level" v-model.trim="applicant.experienceLevel" :rules="required()"
                  id="selectExperience" readonly append-inner-icon="mdi-chevron-down"></v-text-field>
                <AdminCoreSelect activator="#selectExperience" :list="[
                  'ANY',
                  'INTERNSHIP & GRADUATE',
                  'ENTRY LEVEL',
                  'SENIOR LEVEL',
                  'EXECUTIVE LEVEL',
                ]" :list-value="applicant.experienceLevel" @set-item="setExperience" />
              </v-col>
              <v-col cols="12" sm="6" class="pa-1">
                <v-text-field label="Skills" v-model="applicant.skills" :rules="required()" id="selectSkill" readonly
                  append-inner-icon="mdi-chevron-down" :loading="loader"></v-text-field>
                <AdminCoreSelect activator="#selectSkill" :list="skills" :list-value="applicant.skills"
                  @set-item="setSkill" :multiple="true" />
              </v-col>
              <v-col cols="12" sm="6" class="pa-1">
                <v-text-field label="Location" v-model.trim="applicant.location"></v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex flex-column ga-3 pa-1">
              <v-card flat class="pa-0 rounded-lg d-flex align-center ga-3 card-outlined"
                v-for="({ name, file, title }, i) in applicant.documents" :class="{ 'success-doc': file }" :key="i"
                @click="uploadDocument(name)">
                <div class="pa-2" :class="file ? 'success-doc-file' : ' card-white'">
                  <Icon name="carbon:document-pdf" size="1.6rem" />
                </div>
                <div class="text-caption">
                  <span>{{
                    title ? `${name} : ${title}` : `Upload ${name}`
                  }}</span>
                </div>
              </v-card>
            </div>
          </v-container>
          <v-btn color="primary-accent" size="small" class="rounded-lg text-caption mt-4" block flat :loading="loading"
            @click="handleSave">
            <span>Save</span>
          </v-btn>
        </v-form>
      </v-window-item>
    </v-window>

    <PreviewDoc v-model="dialog" :doc-file="docFile" @close="closeDialog" />
  </div>
</template>

<script setup>
const { required } = useRules();
const { isMobile } = useDevice();
const { digitsOnly } = useHelpers();

import { useAppStore } from "~/store/app";
const appStore = useAppStore();
const { error, loading, currentUser } = storeToRefs(appStore);
//

import { useAuthStore } from "~/store/auth";
const { shopAccount, updateAccount } = useAuthStore();

import { useSkillStore } from "~/store/skills";
const { getSkills } = useSkillStore();
const data = ref([]);
const loader = ref(false);
const getData = async () => {
  loader.value = true;
  data.value = await getSkills(false);
  loader.value = false;
};
onMounted(() => {
  getData();
});
const skills = computed(() => {
  return data.value.map((s) => s.skill);
});

const isApplicant = computed(() => {
  return currentUser.value.applicant;
});
const preview = ref(isApplicant.value ?? false);

const formData = ref(null);
const applicant = ref({
  userId: currentUser.value.userId,
  id: currentUser.value.applicant?.applicantId ?? 0,
  title: currentUser.value.applicant?.title ?? "",
  experience: currentUser.value.applicant?.experience ?? 0,
  experienceLevel: currentUser.value.applicant?.experienceLevel ?? "",
  location: currentUser.value.applicant?.location ?? "",
  documents: currentUser.value.applicant?.documents ?? [
    { name: "CV", value: null, title: null, file: null },
    { name: "Cover letter", value: null, title: null, file: null },
  ],
  skills: currentUser.value.applicant?.skills ?? [],
});

const handleSave = async () => {
  const { valid } = await formData.value.validate();
  if (valid) {
    if (applicant.value.documents.some((i) => i.file === null))
      appStore.toggleSnackbar({
        status: true,
        type: "warning",
        message: "Provide all documents",
      });
    else {
      isApplicant.value
        ? await updateAccount(applicant.value, "applicants")
        : await shopAccount(applicant.value, "applicants");

      if (!error.value)
        setTimeout(() => {
          appStore.setUser({
            ...currentUser.value,
            applicant: applicant.value,
          });
          preview.value = !preview.value;
          // currentUser.value.account = account.value;
        }, 2000);
    }
  }
};

const setExperience = (val) => {
  applicant.value.experienceLevel = val;
};
const setSkill = (val) => {
  if (applicant.value.skills.includes(val))
    applicant.value.skills.splice(applicant.value.skills.indexOf(val), 1);
  else applicant.value.skills.push(val);
};
const uploadDocument = (doc) => {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "application/pdf";
  input.click();
  let docFile = applicant.value.documents.find((d) => d.name === doc);
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

const dialog = ref(false),
  docFile = ref(null),
  viewFile = (val) => {
    docFile.value = val;
    dialog.value = true;
  },
  closeDialog = () => {
    dialog.value = false;
    docFile.value = null;
  };
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
