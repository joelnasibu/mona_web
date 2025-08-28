<template>
  <v-btn
    class="card-outlined rounded-lg"
    :icon="`mdi-bookmark${saved || item.isSaved ? '' : '-outline'}`"
    color="primary-accent"
    variant="text"
    size="small"
    :title="saved || item.isSaved ? 'Remove from saved' : 'Add to saved'"
    @click.stop="toggleWishlist"
    :loading="loader"
  >
  </v-btn>
</template>

<script setup>
const props = defineProps({
    item: Object,
    type: String,
    saved: Boolean,
  }),
  emits = defineEmits(["toggleWishlist"]);

import { useAppStore } from "~/store/app";
const { error, currentUser } = storeToRefs(useAppStore());

import { useSavedItemStore } from "~/store/saved-items";
const { saveItem, deleteSavedItem } = useSavedItemStore();

const loader = ref(false),
  toggleWishlist = async () => {
    loader.value = true;
    props.saved || props.item.isSaved
      ? await deleteSavedItem(props.item.id)
      : await saveItem({
          userId: currentUser.value.userId,
          itemId: props.item.id,
          type: props.type,
        });
    loader.value = false;

    if (!error.value) emits("toggleWishlist");
  };
</script>

<style lang="css" scoped></style>
