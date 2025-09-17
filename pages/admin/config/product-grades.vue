<template>
  <div>
    <div class="d-flex align-center ga-4 px-3">
      <div class="text-subtitle-2">
        <span>Product Grades</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        icon="mdi-plus"
        size="x-small"
        flat
        color="primary-dark"
        title="Add business"
        @click="handleOpen()"
      ></v-btn>
    </div>
    <v-divider class="my-3"></v-divider>
    <div class="d-flex align-center px-3">
      <admin-core-search :search="search" @search="search = $event" />
      <v-spacer></v-spacer>
    </div>

    <div class="mt-3">
      <v-data-table
        :headers="headers"
        :items="computedGrades"
        density="compact"
      >
        <template #item.index="{ index }">
          <span>{{ index + 1 }}</span>
        </template>

        <template #item.status="{ item }">
          <admin-btn-status
            :status="item.status"
            :titles="{ isNot: 'Inactive', isAlready: 'Active' }"
          />
        </template>
        <template #item.actions="{ item }">
          <AdminBtnDetailsBtn @details="handleOpen(item)" />
        </template>
      </v-data-table>
    </div>

    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-form ref="marketForm" @submit="">
          <admin-core-dialog-header title="Product Grade" @close="handleClose">
            <template #default>
              <v-btn
                class="text-caption mr-3"
                size="small"
                color="secondary"
                flat
              >
                <span>Save</span>
              </v-btn>
            </template>
          </admin-core-dialog-header>
          <div class="pa-3">
            <v-text-field label="Name" v-model="payload.name"></v-text-field>

            <v-textarea
              label="Description"
              rows="2"
              v-model="payload.description"
            ></v-textarea>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const { filterDataPerField } = useHelpers();

const search = ref("");

const statuses = [
    { name: "Active", value: true },
    { name: "Inactive", value: false },
  ],
  selectedStatus = ref(true);

const headers = [
  { title: "#", value: "index" },
  { title: "Name", value: "name" },
  { title: "Description", value: "description" },
  { title: "Actions", value: "actions" },
];

const paymentGradeInit = {
    name: "",
    description: "",
    status: true,
  },
  payload = ref({}),
  dialog = ref(false),
  handleOpen = (paymentGradeData) => {
    payload.value = paymentGradeData || { ...paymentGradeInit };
    dialog.value = true;
  },
  handleClose = () => {
    dialog.value = false;
    action.value = null;
    payload.value = {};
  };

const gradeList = [
    {
      id: 1,
      name: "Grade 1",
      description: "Description for Grade 1",
    },
    {
      id: 2,
      name: "Grade 2",
      description: "Description for Grade 2",
    },
    {
      id: 3,
      name: "Grade 3",
      description: "Description for Grade 3",
    },
    {
      id: 4,
      name: "Grade 4",
      description: "Description for Grade 4",
    },
    {
      id: 5,
      name: "Grade 5",
      description: "Description for Grade 5",
    },
  ],
  computedGrades = computed(() => {
    return filterDataPerField(gradeList, search.value, {});
  });
</script>

<style lang="scss" scoped></style>
