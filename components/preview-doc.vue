<template>
  <v-dialog persistent fullscreen v-model="dialog">
    <v-card class="card-outlined hide-scrollbar" rounded="0">
      <AdminCoreDialogHeader
        :title="`Preview ${docFile?.name}`"
        @close="emits('close')"
      />
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        :src="docFile?.file"
      ></iframe>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
    docFile: Object,
  }),
  emits = defineEmits(["close"]),
  dialog = defineModel();
</script>

<style lang="css" scoped></style>
