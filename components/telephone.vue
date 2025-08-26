<template>

  <div :id="`field_${handle_id}`">
    <v-text-field :label="label" :maxLength="9" v-model.number="phone" @keypress="digitsOnly" :id="handle_id"
      :rules="required ? number() : []" :loading="loading" :hide-details="!required">
      <!-- :prefix="getCountryCallingCode(country) ?? '+243'" -->
      <template v-slot:prepend-inner>
        <div class="d-flex align-center justify-center append text-caption" :id="`country_${handle_id}`">
          <!-- 
          <flag :iso="country.cca2" :title="chainCountryName(country)" :squared="false" /> -->
          <span class="mx-2">{{
            getCountryCallingCode(country) ?? "+243"
          }}</span>
          <v-icon class="icon" icon="mdi-chevron-down" :class="{ 'transform-180deg': menu }" size="13"
            color="grey"></v-icon>
        </div>
      </template>
      <v-menu :activator="`#country_${handle_id}`" :close-on-content-click="false" v-model="menu">
        <v-list class="pa-0 position-relative card-outlined rounded-lg mt-2 mb-4 ml-n3 hide-scrollbar" max-height="250"
          :width="inputWidth" density="compact" lines="false">
          <div class="pa-0 text-caption bg-grey-lighten-3 position-sticky" style="top: 0; z-index: 1">
            <input type="search" :placeholder="`Filter (${allCountries.length}) items...`"
              class="px-3 w-100 filter-input" id="searchInput" v-model="search" autofocus autocomplete="off" />
          </div>
          <v-divider></v-divider>
          <div v-for="(item, i) in allCountries" :key="i" class="text-caption" :title="chainCountryName(item)">
            <v-list-item color="secondary" @click="setCountry(item)" :active="country == item">
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
    common: "DR Congo",
    official: "Democratic Republic of the Congo",
    nativeName: {
      fra: {
        official: "République démocratique du Congo",
        common: "RD Congo",
      },
      kon: {
        official: "Repubilika ya Kongo Demokratiki",
        common: "Repubilika ya Kongo Demokratiki",
      },
      lin: {
        official: "Republiki ya Kongó Demokratiki",
        common: "Republiki ya Kongó Demokratiki",
      },
      lua: {
        official: "Ditunga dia Kongu wa Mungalaata",
        common: "Ditunga dia Kongu wa Mungalaata",
      },
      swa: {
        official: "Jamhuri ya Kidemokrasia ya Kongo",
        common: "Jamhuri ya Kidemokrasia ya Kongo",
      },
    },
  },
  tld: [".cd"],
  cca2: "CD",
  ccn3: "180",
  cca3: "COD",
  cioc: "COD",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    CDF: {
      name: "Congolese franc",
      symbol: "FC",
    },
  },
  idd: {
    root: "+2",
    suffixes: ["43"],
  },
  capital: ["Kinshasa"],
  altSpellings: [
    "CD",
    "DR Congo",
    "Congo-Kinshasa",
    "Congo, the Democratic Republic of the",
    "DRC",
  ],
  region: "Africa",
  subregion: "Middle Africa",
  languages: {
    fra: "French",
    kon: "Kikongo",
    lin: "Lingala",
    lua: "Tshiluba",
    swa: "Swahili",
  },
  translations: {
    ara: {
      official: "جمهورية الكونغو الديمقراطية",
      common: "الكونغو",
    },
    bre: {
      official: "Republik Demokratel Kongo",
      common: "Kongo-Kinshasa",
    },
    ces: {
      official: "Demokratická republika Kongo",
      common: "DR Kongo",
    },
    cym: {
      official: "Gweriniaeth Ddemocrataidd Congo",
      common: "Gweriniaeth Ddemocrataidd Congo",
    },
    deu: {
      official: "Demokratische Republik Kongo",
      common: "Kongo (Dem. Rep.)",
    },
    est: {
      official: "Kongo Demokraatlik Vabariik",
      common: "Kongo DV",
    },
    fin: {
      official: "Kongon demokraattinen tasavalta",
      common: "Kongon demokraattinen tasavalta",
    },
    fra: {
      official: "République démocratique du Congo",
      common: "Congo (Rép. dém.)",
    },
    hrv: {
      official: "Demokratska Republika Kongo",
      common: "Kongo, Demokratska Republika",
    },
    hun: {
      official: "Kongói Demokratikus Köztársaság",
      common: "Kongói Demokratikus Köztársaság",
    },
    ita: {
      official: "Repubblica Democratica del Congo",
      common: "Congo (Rep. Dem.)",
    },
    jpn: {
      official: "コンゴ民主共和国",
      common: "コンゴ民主共和国",
    },
    kor: {
      official: "콩고 민주 공화국",
      common: "콩고 민주 공화국",
    },
    nld: {
      official: "Democratische Republiek Congo",
      common: "Congo (DRC)",
    },
    per: {
      official: "جمهوری دموکراتیک کنگو",
      common: "کنگو دموکراتیک",
    },
    pol: {
      official: "Demokratyczna Republika Konga",
      common: "Demokratyczna Republika Konga",
    },
    por: {
      official: "República Democrática do Congo",
      common: "República Democrática do Congo",
    },
    rus: {
      official: "Демократическая Республика Конго",
      common: "Демократическая Республика Конго",
    },
    slk: {
      official: "Konžská demokratická republika",
      common: "Kongo",
    },
    spa: {
      official: "República Democrática del Congo",
      common: "Congo (Rep. Dem.)",
    },
    srp: {
      official: "Демократска Република Конго",
      common: "ДР Конго",
    },
    swe: {
      official: "Demokratiska republiken Kongo",
      common: "Kongo-Kinshasa",
    },
    tur: {
      official: "Kongo Demokratik Cumhuriyeti",
      common: "Kongo Demokratik Cumhuriyeti",
    },
    urd: {
      official: "جمہوری جمہوریہ کانگو",
      common: "کانگو",
    },
    zho: {
      official: "刚果民主共和国",
      common: "民主刚果",
    },
  },
  latlng: [0, 25],
  landlocked: false,
  borders: ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
  area: 2344858,
  demonyms: {
    eng: {
      f: "Congolese",
      m: "Congolese",
    },
    fra: {
      f: "Congolaise",
      m: "Congolais",
    },
  },
  flag: "🇨🇩",
  maps: {
    googleMaps: "https://goo.gl/maps/KfhNVn6VqdZXWu8n9",
    openStreetMaps: "https://www.openstreetmap.org/relation/192795",
  },
  population: 108407721,
  gini: {
    2012: 42.1,
  },
  fifa: "COD",
  car: {
    signs: ["CGO"],
    side: "right",
  },
  timezones: ["UTC+01:00", "UTC+02:00"],
  continents: ["Africa"],
  flags: {
    png: "https://flagcdn.com/w320/cd.png",
    svg: "https://flagcdn.com/cd.svg",
    alt: "The flag of the Democratic Republic of the Congo has a sky-blue field with a yellow-edged red diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. A large five-pointed yellow star is situated above the diagonal band on the upper hoist side of the field.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/cd.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/cd.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [-4.32, 15.3],
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
