<template>
  <div>
    <v-form ref="formData" class="mt-3">
      <v-container class="mt-2">
        <v-row>
          <v-col cols="12" sm="12" class="pa-1">
            <v-text-field
              label="Title"
              v-model.trim="applicant.title"
              :rules="required()"
            ></v-text-field>
          </v-col>
          <v-col class="pa-1" cols="12" sm="6">
            <v-text-field
              label="Years of experience"
              v-model.number.trim="applicant.experience"
              @keypress="digitsOnly"
              suffix="Year(s)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="pa-1">
            <v-text-field
              label="Experience level"
              v-model.trim="applicant.experienceLevel"
              :rules="required()"
              id="selectExperience"
              readonly
              append-inner-icon="mdi-chevron-down"
            ></v-text-field>
            <AdminCoreSelect
              activator="#selectExperience"
              :list="[
                'ANY',
                'INTERNSHIP & GRADUATE',
                'ENTRY LEVEL',
                'SENIOR LEVEL',
                'EXECUTIVE LEVEL',
              ]"
              :list-value="applicant.experienceLevel"
              @set-item="setExperience"
            />
          </v-col>
          <v-col cols="12" sm="6" class="pa-1">
            <v-text-field
              label="Skills"
              v-model="applicant.skills"
              :rules="required()"
              id="selectSkill"
              readonly
              append-inner-icon="mdi-chevron-down"
              :loading="loader"
            ></v-text-field>
            <AdminCoreSelect
              activator="#selectSkill"
              :list="skills"
              :list-value="applicant.skills"
              @set-item="setSkill"
              :multiple="true"
            />
          </v-col>
          <v-col cols="12" sm="6" class="pa-1">
            <v-text-field
              label="Location"
              v-model.trim="applicant.location"
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex flex-column ga-3 pa-1">
          <v-card
            flat
            class="pa-0 rounded-lg d-flex align-center card-outlined"
            v-for="{ name, file, title } in applicant.documents"
            :class="{ 'success-doc': file }"
            @click="uploadDocument(name)"
          >
            <div
              class="pa-2"
              :class="file ? 'success-doc-file' : ' card-white'"
            >
              <Icon name="carbon:document-pdf" size="1.6rem" />
            </div>
            <div class="text-caption mx-3">
              <span>{{ title ? `${name} : ${title}` : `Upload ${name}` }}</span>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex align-center ga-3" v-if="file">
              <v-icon
                icon="mdi-check-circle"
                size="x-small"
                color="success"
              ></v-icon>
              <div title="Preview document">
                <v-card
                  flat
                  class="pa-2 card-secondary rounded-0 text-secondary"
                  @click.stop="viewFile({ name, file })"
                >
                  <Icon name="mdi:eye" size="1.4rem" />
                </v-card>
              </div>
            </div>
          </v-card>
        </div>
      </v-container>
      <v-btn
        color="primary-accent"
        class="rounded-lg text-caption mt-4"
        block
        flat
        :loading="loading"
        @click="handleSave"
      >
        <span>Save</span>
      </v-btn>
    </v-form>

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
