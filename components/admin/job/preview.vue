<template>
  <v-card flat color="card pa-0">
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b>Job details</b>
        </v-col>
        <v-col cols="12">
          <v-container class="pa-0" fluid>
            <v-row>
              <v-col cols="12" sm="4">
                <AdminCoreImage :image="payload.banner" :view="true" :profile="false" :editable="false" />
              </v-col>
              <v-col cols="12" sm="4">
                <div class="d-flex ga-2 preview-row">
                  <span>Name</span>
                  <b>{{ payload.jobName }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Type</span>
                  <b>{{ payload.jobType  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Location</span>
                  <b>{{ payload.location === "" ? "-" : payload.location }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Experience</span>
                  <b>{{ payload.experience ?? "-" }} Year(s)</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Experience Level</span>
                  <b>{{ payload.experienceLevel }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Applications limit</span>
                  <b>{{
                    payload.applicationsLimit <= 0 ? "No limit" : payload.applicationsLimit }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Deadline</span>
                  <b>{{ dateFormat_Month(payload.deadline) || "No Deadline" }}</b>
                </div>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="d-flex ga-2 preview-row">
                  <span>Industry</span>
                  <b>{{ payload.industry }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Category</span>
                  <b>{{
                    typeof payload.category === "object"
                      ? payload.category?.name
                      : payload.category
                  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Subcategory</span>
                  <b>{{
                    payload.subcategory ?? payload.category?.subcategory
                  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Business</span>
                  <b>{{
                    typeof payload.business === "object"
                      ? payload.business?.businessName
                      : payload.business
                  }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Currency</span>
                  <b>{{ payload.currency }}</b>
                </div>
                <div class="d-flex ga-2 preview-row">
                  <span>Salary range</span>
                  <b>{{ currencyFormat(payload.salaryRange[0]) }} -
                    {{ currencyFormat(payload.salaryRange[1]) }}</b>

                  <span :class="payload.isConfidential ? 'text-link' : 'text-secondary'"> [{{ payload.isConfidential ?
                    'hide' : 'show' }} salary]</span>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <v-badge :content="payload.skills?.length" inline color="link" location="end">
            <b class="mr-5">Skills</b>
          </v-badge>
        </v-col>
        <v-col cols="12">
          <v-list class="mt-1 bg-transparent pa-0" density="compact" lines="false">
            <v-list-item v-for="(item, i) in payload.skills" :key="i">
              <v-icon icon="mdi-chevron-right" start></v-icon>
              <span>{{ item }}</span>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <v-badge :content="payload.requirements?.length" inline color="link" location="end">
            <b class="mr-5">Requirements</b>
          </v-badge>
        </v-col>
        <v-col cols="12">
          <v-list class="mt-1 bg-transparent pa-0" density="compact" lines="false">
            <v-list-item v-for="(item, i) in payload.requirements" :key="i">
              <v-icon icon="mdi-chevron-right" start></v-icon>
              <span>{{ item }}</span>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <v-badge :content="payload.responsibilities?.length" inline color="link" location="end">
            <b class="mr-5">Responsibilities</b>
          </v-badge>
        </v-col>
        <v-col cols="12">
          <v-list class="mt-1 bg-transparent pa-0" density="compact" lines="false">
            <v-list-item v-for="(item, i) in payload.responsibilities" :key="i">
              <v-icon icon="mdi-chevron-right" start></v-icon>
              <span>{{ item }}</span>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <v-badge :content="payload.requiredDocuments?.length" inline color="link" location="end">
            <b class="mr-5">Documents</b>
          </v-badge>
        </v-col>
        <v-col cols="12">
          <v-list class="mt-1 bg-transparent pa-0" density="compact" lines="false">
            <v-list-item v-for="(item, i) in payload.requiredDocuments" :key="i">
              <v-icon icon="mdi-chevron-right" start></v-icon>
              <span>{{ item }}</span>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-caption" fluid>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b>Summary</b>
        </v-col>
        <v-col cols="12">
          <span>{{ payload.summary }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="preview-header">
          <b>Detailed description</b>
        </v-col>
        <v-col cols="12">
          <span v-html="payload.description"></span>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
defineProps({
  payload: Object,
});

const { currencyFormat, dateFormat_Month } = useHelpers();

const headers = [
  { title: "#", value: "no" },
  { title: "Skill", value: "skill" },
];
const headersReq = [
  { title: "#", value: "no" },
  { title: "Requirement", value: "requirement" },
];
const headersResp = [
  { title: "#", value: "no" },
  { title: "Responsibility", value: "responsibility" },
];
</script>

<style lang="css" scoped></style>
