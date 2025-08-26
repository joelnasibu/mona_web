<template>
  <div class="text-caption d-flex flex-column">
    <div class="categories" v-if="categories">
      <div
        class="d-flex align-center cursor-pointer"
        :title="`${hideSubcategories ? 'Show' : 'Hide'} subcategories`"
        @click="hideSubcategories = !hideSubcategories"
      >
        <b>Categories</b>
        <v-spacer></v-spacer>
        <v-icon
          icon="mdi-chevron-down"
          :class="{ 'transform-180deg': hideSubcategories }"
        ></v-icon>
      </div>
      <v-expand-transition>
        <div class="" v-if="!hideSubcategories">
          <v-list class="pa-0 mt-2" density="compact" lines="false">
            <v-list-item
              class="text-capitalize rounded-lg"
              v-for="({ category, id }, i) in subcategoriesList"
              color="primary-accent"
              :value="id"
              :active="id === activeSubCategory"
              @click="activeSubCategory = id"
            >
              <span>{{ String(category).toLowerCase() }}</span>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>
    </div>
    <div class="subcategories" v-else>
      <div
        class="d-flex align-center cursor-pointer"
        :title="`${hideSubcategories ? 'Show' : 'Hide'} subcategories`"
        @click="hideSubcategories = !hideSubcategories"
      >
        <b>Subcategories</b>
        <v-spacer></v-spacer>
        <v-icon
          icon="mdi-chevron-down"
          :class="{ 'transform-180deg': hideSubcategories }"
        ></v-icon>
      </div>
      <v-expand-transition>
        <div class="" v-if="!hideSubcategories">
          <v-list class="pa-0 mt-2" density="compact" lines="false">
            <v-list-item
              class="text-capitalize rounded-lg"
              v-for="({ subcategory, id }, i) in subcategoriesList"
              color="primary-accent"
              :value="id"
              :active="subcategory === activeSubCategory"
              @click="activeSubCategory = subcategory"
            >
              <span>{{ String(subcategory).toLowerCase() }}</span>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="prices">
      <div
        class="d-flex align-center cursor-pointer ga-2"
        :title="`${hidePrices ? 'Show' : 'Hide'} prices`"
        @click="hidePrices = !hidePrices"
      >
        <b>Price range</b>
        <v-spacer></v-spacer>
        <v-icon icon="mdi-refresh" title="Reset"></v-icon>
        <v-icon
          icon="mdi-chevron-down"
          :class="{ 'transform-180deg': hidePrices }"
        ></v-icon>
      </div>
      <v-expand-transition>
        <div class="" v-if="!hidePrices">
          <div class="mt-2">
            <!-- <v-range-slider
              density="compact"
              color="primary-accent"
              hide-details
              strict
              :thumb-label="true"
              thumb-size="15"
              v-model="minMax"
              :step="0.5"
              :value="minMax"
            ></v-range-slider> -->
            <div class="d-flex ga-2">
              <div class="w-100">
                <span>Min</span>
                <v-text-field
                  hide-details
                  placeholder="0"
                  color="primary"
                  v-model.number="min"
                  @keypress="digitsOnly"
                ></v-text-field>
              </div>
              <div class="w-100">
                <span>Max</span>
                <v-text-field
                  hide-details
                  placeholder="0"
                  color="primary"
                  v-model.number="max"
                  @keypress="digitsOnly"
                ></v-text-field>
                <!-- @input="
                    if (minMax[1] > Math.max(...prices))
                      minMax[1] = Math.max(...prices);
                  " -->
              </div>
            </div>
            <v-btn
              class="mt-2 text-caption text-none"
              flat
              block
              size="small"
              color="primary-accent"
              @click="minMax = [min, max]"
            >
              <span>Apply</span>
            </v-btn>
          </div>
        </div>
      </v-expand-transition>
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="discounts">
      <div
        class="d-flex align-center cursor-pointer"
        :title="`${hideDiscounts ? 'Show' : 'Hide'} discounts`"
        @click="hideDiscounts = !hideDiscounts"
      >
        <b>Discount</b>
        <v-spacer></v-spacer>

        <v-btn
          size="small"
          icon="mdi-refresh"
          title="Reset"
          @click.stop="selectedDiscount = null"
          variant="text"
        ></v-btn>
        <v-icon
          icon="mdi-chevron-down"
          :class="{ 'transform-180deg': hideDiscounts }"
        ></v-icon>
      </div>
      <v-expand-transition>
        <div class="" v-if="!hideDiscounts">
          <div class="mt-2">
            <v-radio-group density="compact" v-model="selectedDiscount">
              <v-radio
                v-for="discount in discounts"
                color="primary-accent"
                :value="discount"
              >
                <template v-slot:label>
                  <div class="d-flex align-center ga-2 text-caption">
                    <span>{{ discount }}% & up</span>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>
      </v-expand-transition>
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="ratings">
      <div
        class="d-flex align-center cursor-pointer"
        :title="`${hideRatings ? 'Show' : 'Hide'} ratings`"
        @click="hideRatings = !hideRatings"
      >
        <b>Ratings</b>
        <v-spacer></v-spacer>

        <v-btn
          size="small"
          icon="mdi-refresh"
          title="Reset"
          @click.stop="selectedRating = null"
          variant="text"
        ></v-btn>
        <v-icon
          icon="mdi-chevron-down"
          :class="{ 'transform-180deg': hideRatings }"
        ></v-icon>
      </div>
      <v-expand-transition>
        <div class="" v-if="!hideRatings">
          <div class="mt-2">
            <v-radio-group density="compact" v-model="selectedRating">
              <v-radio
                v-for="rating in ratings"
                color="primary-accent"
                :value="rating"
              >
                <template v-slot:label>
                  <div class="d-flex align-center ga-2 text-caption">
                    <v-rating
                      :model-value="rating"
                      color="link"
                      density="compact"
                      size="x-small"
                      hide-details
                      readonly
                    ></v-rating>
                    <span>& up</span>
                  </div>
                </template>
              </v-radio>
            </v-radio-group>
          </div>
        </div>
      </v-expand-transition>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subcategories: Array,
  categories: Array,
  products: Array,
});
const emits = defineEmits(["filters"]);

const { digitsOnly } = useHelpers();

const subcategoriesList = computed(() => {
  return props.categories
    ? [{ category: "All", id: 0 }, ...props.categories]
    : [{ subcategory: "All", id: 0 }, ...props.subcategories];
});
const activeSubCategory = ref(0);
const hideSubcategories = ref(false);

const hidePrices = ref(false);
const prices = computed(() => {
  return props.products.map((p) => p.price);
});
const minMax = ref([
  props.products.length ? Math.min(...prices.value) : 0,
  props.products.length ? Math.max(...prices.value) : 100,
]);
const min = ref(minMax.value[0]),
  max = ref(minMax.value[1]);

const hideRatings = ref(false);
const ratings = [4, 3, 2, 1];
const selectedRating = ref(null);

const hideDiscounts = ref(false);
const discounts = [50, 40, 30, 10];
const selectedDiscount = ref(null);

watch(
  () => [
    activeSubCategory.value,
    minMax.value,
    selectedRating.value,
    selectedDiscount.value,
  ],
  ([newCategory, newPrices, newRating, newDiscount]) => {
    emits("filters", {
      category: newCategory,
      isCategory: !!props.categories,
      price: newPrices,
      rating: newRating,
      discount: newDiscount,
    });
  }
);
</script>

<style lang="css" scoped></style>
