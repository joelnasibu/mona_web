<template>
  <div>
    <AdminJobInputs :payload="payload" route="admin-jobs" />
  </div>
</template>

<script setup>
const payload = ref({
  banner: null,
  jobName: "",
  jobType: "",
  jobtypeId: 0,
  business: "",
  businessId: 0,
  category: "",
  subcategory: "",
  subcategoryId: 0,
  industry: "",
  industryId: 0,
  requirements: [],
  skills: [],
  responsibilities: [],
  requiredDocuments: [],
  salaryRange: [0, 0],
  isConfidential: true,
  currency: "USD",
  experienceLevel: "ANY",
  experience: 0,
  location: "",
  applicationsLimit: 0,
  deadline: null,
  summary: "",
  description: "",
});

useSeoMeta({
  title: "Create job",
});
</script>

<style lang="css" scoped></style>
