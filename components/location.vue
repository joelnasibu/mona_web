<template>
  <div>
    <v-text-field
      :label="label"
      v-model="location"
      :disabled="disabled"
      :rules="isRequired ? required() : []"
      id="selectLocation"
    ></v-text-field>
  </div>
</template>

<script setup>
const emits = defineEmits(["setLocation"]);
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "Location",
  },
});

const { required } = useRules();
const location = defineModel();

const searchResults = ref([]);
const service = ref(null);

// const autocomplete = ref(null);
// const initAutocomplete = () => {
//   if (process.client) {
//     autocomplete.value = new google.maps.places.Autocomplete(
//       document.getElementById("selectLocation"),
//       {
//         types: ["establishment"],
//         componentRestrictions: { country: ["CD"] },
//         fields: ["place_id", "geometry", "name"],
//       }
//     );
//   }
// };

// onMounted(() => {
//     initAutocomplete();
// });
// const initMap = () => {
//   let d=new google.maps.places.AutocompleteService()
//
// };

// useHead({
//   script: [
//     {
//       src: `//map.googleapis.com/maps/api/js?key=${
//         import.meta.env.VITE_GOOGLE_MAP_KEY
//       }&libraries=places&loading=async`,
//       async: true,
//       defer: true,
//       callback: initMap(),
//     },
//   ],
// });
</script>

<style lang="css" scoped></style>
