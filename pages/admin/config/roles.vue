<template>
  <div>
    <div class="d-flex align-center ga-4 px-3">
      <div class="text-subtitle-2">
        <span>Roles</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        icon="mdi-plus"
        size="x-small"
        flat
        color="primary-dark"
        title="Add business"
        @click="handleOpen('create')"
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
        :items="computedRoles"
        density="compact"
        :loading="loading"
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
          <div class="d-flex align-center ga-2">
            <AdminBtnDetailsBtn @details="handleOpen('update', item)" />
            <v-btn
              color="red"
              icon="mdi-delete-outline"
              size="x-small"
              variant="text"
              class="rounded-lg"
              @click="handleOpen('delete', item)"
            ></v-btn>
          </div>
        </template>
      </v-data-table>
    </div>

    <v-dialog v-model="dialog" width="500">
      <v-card :loading="loading">
        <v-form ref="roleForm" @submit="handleSubmit">
          <admin-core-dialog-header title=" Role" @close="handleClose">
            <template #default>
              <v-btn
                class="text-caption mr-3"
                size="small"
                color="secondary"
                flat
                @click="handleSubmit"
                :loading="loading"
              >
                <span>Save</span>
              </v-btn>
            </template>
          </admin-core-dialog-header>
          <div class="pa-3">
            <v-text-field
              label="Name"
              v-model="payload.role"
              :rules="name()"
            ></v-text-field>

            <v-textarea
              label="Description"
              rows="2"
              v-model="payload.description"
              :rules="required()"
            ></v-textarea>
          </div>
        </v-form>
      </v-card>
    </v-dialog>

    <AdminDeleteConfirmation
      :dialog="deleteDialog"
      :data="{
        name: 'Role',
        itemTitle: payload.role,
        id: payload.id,
      }"
      @cancel="deleteDialog = false"
      @delete="confirmDelete"
    />
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { useRoleStore } from "~/store/roles";

const { filterDataPerField } = useHelpers(),
  roleStore = useRoleStore(),
  { loading, error } = storeToRefs(useAppStore()),
  { required, name } = useRules();

const search = ref("");

const statuses = [
    { name: "Active", value: true },
    { name: "Inactive", value: false },
  ],
  selectedStatus = ref(true);

const headers = [
  { title: "#", value: "index" },
  { title: "Name", value: "role" },
  { title: "Description", value: "description" },
  { title: "Actions", value: "actions" },
];

const paymentRoleInit = {
    role: "",
    description: "",
    status: true,
  },
  roleForm = ref(null),
  payload = ref({}),
  dialog = ref(false),
  action = ref(null),
  handleOpen = (newAction, paymentRoleData) => {
    payload.value = paymentRoleData || { ...paymentRoleInit };
    dialog.value = newAction !== "delete";
    deleteDialog.value = newAction === "delete";
    action.value = newAction;
  },
  handleClose = () => {
    dialog.value = false;
    payload.value = {};
  };

const roleList = await roleStore.getRoles(true),
  computedRoles = computed(() => {
    let sortedList = roleList.sort((a, b) => a.role.localeCompare(b.role));
    return filterDataPerField(sortedList, search.value, {});
  });

const handleSubmit = async () => {
  let { valid } = await roleForm.value?.validate();
  if (!valid) return;

  if (action.value === "create") {
    await roleStore.createRole(payload.value);
  } else if (action.value === "update") {
    await roleStore.updateRole(payload.value);
  }

  if (!error.value) handleClose();
};

const deleteDialog = ref(false),
  confirmDelete = async () => {
    await roleStore.deleteRole(payload.value.id);
    if (!error.value) handleClose();
  };
</script>

<style lang="scss" scoped></style>
