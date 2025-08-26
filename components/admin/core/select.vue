<template>
  <v-menu :activator="activator" :close-on-content-click="false" v-model="menu">
    <v-list class="pa-0 position-relative card-outlined rounded-lg ma-1" max-height="250" density="compact"
      lines="false">
      <div class="position-sticky bg-white text-caption" v-if="list.length > 6" style="top: 0; z-index: 1">
        <input type="search" :placeholder="`Filter (${list.length}) items...`" class="px-3 w-100 filter-input bg-card"
          autofocus v-model="search" />
        <v-divider></v-divider>
      </div>
      <div class="text-caption" v-for="(item, i) in filteredList" :key="i">
        <!-- emitting the activator because of job filters on jobs page(website) to retrieve the index -->
        <v-list-item @click="setItem(item)" :active="multiple ? listValue.includes(item) : listValue === item"
          color="secondary">
          <template v-slot:prepend>
            <div v-if="multiple" class="mr-3">
              <v-checkbox hide-details density="compact" color="secondary" v-model="checkboxValue"
                :value="item"></v-checkbox>
            </div>
          </template>
          <span>{{ item }}</span>
        </v-list-item>
        <v-divider></v-divider>
      </div>
      <div class="py-2 text-caption text-center" v-if="filteredList.length === 0">
        <span>No data</span>
      </div>
    </v-list>
  </v-menu>
</template>

<script setup>
const props = defineProps({
  list: Array,
  listValue: [String, Number, Array],
  activator: String,
  multiple: Boolean,
});
const emits = defineEmits(["setItem"]);

const checkboxValue = computed({
  get() {
    return props.listValue;
  },
  set() {
    emits("setItem");
  },
});

const menu = ref(false);
const search = ref("");
const filteredList = computed(() => {
  return props.list.filter((val) => {
    return val.toLowerCase().includes(search.value.toLowerCase());
  });
});

const setItem = (item) => {
  emits("setItem", item, props.activator);
  if (!props.multiple) menu.value = false;
  search.value = ""
};
</script>

<style lang="css" scoped>
.filter-input:focus {
  border: none;
  outline: none;
}

.filter-input {
  padding-block: 8.5px;
}
</style>
