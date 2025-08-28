<template>
  <div :id="`field_${handle_id}`">
    <v-text-field
      :label="label"
      :maxLength="9"
      v-model.number="phone"
      @keypress="digitsOnly"
      :id="handle_id"
      :rules="required ? number() : []"
      :loading="loading"
      :hide-details="!required"
    >
      <!-- :prefix="getCountryCallingCode(country) ?? '+243'" -->
      <template v-slot:prepend-inner>
        <div
          class="d-flex align-center justify-center append text-caption"
          :id="`country_${handle_id}`"
        >
          <!-- 
          <flag :iso="country.cca2" :title="chainCountryName(country)" :squared="false" /> -->
          <span class="mx-2">{{
            getCountryCallingCode(country) ?? "+243"
          }}</span>
          <v-icon
            class="icon"
            icon="mdi-chevron-down"
            :class="{ 'transform-180deg': menu }"
            size="13"
            color="grey"
          ></v-icon>
        </div>
      </template>
      <v-menu
        :activator="`#country_${handle_id}`"
        :close-on-content-click="false"
        v-model="menu"
      >
        <v-list
          class="pa-0 position-relative card-outlined rounded-lg mt-2 mb-4 ml-n3 hide-scrollbar"
          max-height="250"
          :width="inputWidth"
          density="compact"
          lines="false"
        >
          <div
            class="pa-0 text-caption bg-grey-lighten-3 position-sticky"
            style="top: 0; z-index: 1"
          >
            <input
              type="search"
              :placeholder="`Filter (${allCountries.length}) items...`"
              class="px-3 w-100 filter-input"
              id="searchInput"
              v-model="search"
              autofocus
              autocomplete="off"
            />
          </div>
          <v-divider></v-divider>
          <div
            v-for="(item, i) in allCountries"
            :key="i"
            class="text-caption"
            :title="chainCountryName(item)"
          >
            <v-list-item
              color="secondary"
              @click="setCountry(item)"
              :active="country == item"
            >
              <template v-slot:prepend>
                <div class="pr-3">
                  <!-- <flag :iso="item.cca2" :title="item.name.official" :squared="false" /> -->
                </div>
              </template>
              <span class="">{{
                `${item.name.common} (${getCountryCallingCode(item)})`
              }}</span>
            </v-list-item>
            <v-divider></v-divider>
          </div>
          <div class="" v-if="allCountries.length === 0">
            <div class="py-5 text-caption text-center">
              <span>No countries</span>
            </div>
          </div>
        </v-list>
      </v-menu>
    </v-text-field>
  </div>
</template>

<script setup>
const props = defineProps({
  number: [String, Number],
  required: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: "Telephone number",
  },
});
const emits = defineEmits(["setPhone"]);
// const phone = defineModel()

const { digitsOnly } = useHelpers();
const { number } = useRules();

const country = ref({
  name: {
    common: "Kenya",
    official: "Republic of Kenya",
    nativeName: {
      eng: {
        official: "Republic of Kenya",
        common: "Kenya",
      },
      swa: {
        official: "Republic of Kenya",
        common: "Kenya",
      },
    },
  },
  tld: [".ke"],
  cca2: "KE",
  ccn3: "404",
  cioc: "KEN",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    KES: {
      symbol: "Sh",
      name: "Kenyan shilling",
    },
  },
  idd: {
    root: "+2",
    suffixes: ["54"],
  },
  capital: ["Nairobi"],
  altSpellings: ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
  region: "Africa",
  subregion: "Eastern Africa",
  languages: {
    eng: "English",
    swa: "Swahili",
  },
  latlng: [1.0, 38.0],
  landlocked: false,
  borders: ["ETH", "SOM", "SSD", "TZA", "UGA"],
  area: 580367.0,
  demonyms: {
    eng: {
      f: "Kenyan",
      m: "Kenyan",
    },
    fra: {
      f: "Kényane",
      m: "Kényan",
    },
  },
  cca3: "KEN",
  translations: {
    ara: {
      official: "جمهورية كينيا",
      common: "كينيا",
    },
    bre: {
      official: "Republik Kenya",
      common: "Kenya",
    },
    ces: {
      official: "Keňská republika",
      common: "Keňa",
    },
    cym: {
      official: "Republic of Kenya",
      common: "Kenya",
    },
    deu: {
      official: "Republik Kenia",
      common: "Kenia",
    },
    est: {
      official: "Keenia Vabariik",
      common: "Keenia",
    },
    fin: {
      official: "Kenian tasavalta",
      common: "Kenia",
    },
    fra: {
      official: "République du Kenya",
      common: "Kenya",
    },
    hrv: {
      official: "Republika Kenija",
      common: "Kenija",
    },
    hun: {
      official: "Kenyai Köztársaság",
      common: "Kenya",
    },
    ind: {
      official: "Republik Kenya",
      common: "Kenya",
    },
    ita: {
      official: "Repubblica del Kenya",
      common: "Kenya",
    },
    jpn: {
      official: "ケニア共和国",
      common: "ケニア",
    },
    kor: {
      official: "케냐 공화국",
      common: "케냐",
    },
    nld: {
      official: "Republiek Kenia",
      common: "Kenia",
    },
    per: {
      official: "جمهوری کنیا",
      common: "کنیا",
    },
    pol: {
      official: "Republika Kenii",
      common: "Kenia",
    },
    por: {
      official: "República do Quénia",
      common: "Quénia",
    },
    rus: {
      official: "Республика Кения",
      common: "Кения",
    },
    slk: {
      official: "Kenská republika",
      common: "Keňa",
    },
    spa: {
      official: "República de Kenya",
      common: "Kenia",
    },
    srp: {
      official: "Република Кенија",
      common: "Кенија",
    },
    swe: {
      official: "Republiken Kenya",
      common: "Kenya",
    },
    tur: {
      official: "Kenya Cumhuriyeti",
      common: "Kenya",
    },
    urd: {
      official: "جمہوریہ کینیا",
      common: "کینیا",
    },
    zho: {
      official: "肯尼亚共和国",
      common: "肯尼亚",
    },
  },
  flag: "\uD83C\uDDF0\uD83C\uDDEA",
  maps: {
    googleMaps: "https://goo.gl/maps/Ni9M7wcCxf8bJHLX8",
    openStreetMaps: "https://www.openstreetmap.org/relation/192798",
  },
  population: 53771300,
  gini: {
    2015: 40.8,
  },
  fifa: "KEN",
  car: {
    signs: ["EAK"],
    side: "left",
  },
  timezones: ["UTC+03:00"],
  continents: ["Africa"],
  flags: {
    png: "https://flagcdn.com/w320/ke.png",
    svg: "https://flagcdn.com/ke.svg",
    alt: "The flag of Kenya is composed of three equal horizontal bands of black, red with white top and bottom edges, and green. An emblem comprising a red, black and white Maasai shield covering two crossed white spears is superimposed at the center of the field.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/ke.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/ke.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [-1.28, 36.82],
  },
  postalCode: {
    format: "#####",
    regex: "^(\\d{5})$",
  },
});
const phone = computed({
  get() {
    let code, num;
    if (String(props.number).charAt(0) === "+" || props.number.length >= 12) {
      code =
        String(props.number).charAt(0) === "+"
          ? props.number.substring(0, 4)
          : `+${props.number.substring(0, 3)}`;
      num = props.number.substring(props.number.charAt(0) === "+" ? 4 : 3);
      country.value = countries.value.find(
        (c) => getCountryCallingCode(c) === code
      );
    } else {
      num = props.number;
    }

    return num;
  },
  set(val) {
    emits("setPhone", `${getCountryCallingCode(country.value)}${val}`);
  },
});

const handle_id = computed(() => {
  return props.label === "Telephone number"
    ? "default_telephone"
    : props.label.replaceAll(" ", "_");
});

import { useAppStore } from "@/store/app";
const app = useAppStore();
const { loading } = storeToRefs(app);

const search = ref("");
const countries = ref(await app.getCountries());

const allCountries = computed(() => {
  let all = countries.value
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
    .filter((val) => {
      return String(val.name.official)
        .toLowerCase()
        .includes(search.value.toLowerCase());
    });
  return [
    country.value,
    ...all.filter((c) => c.name.official !== country.value.name.official),
  ];
});

const menu = ref(false);
const setCountry = (ctry) => {
  menu.value = false;
  country.value = ctry;
  country.value.callingCode = getCountryCallingCode(ctry);
  document.getElementById(handle_id.value).focus();

  emits(
    "setPhone",
    `${getCountryCallingCode(country.value)}${props.number.substring(4)}`
  );
};

const getCountryCallingCode = (ctry) => {
  return Object.keys(ctry?.idd).length !== 0
    ? `${ctry.idd?.root}${ctry.idd?.suffixes[0]}`
    : "-";
};
const chainCountryName = (ctry) => {
  return `${ctry.name.official}`;
};

const inputWidth = ref(0);
onMounted(() => {
  let input = document.getElementById(`field_${handle_id.value}`);
  inputWidth.value = input.offsetWidth;
});
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
