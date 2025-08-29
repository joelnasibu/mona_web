<template>
  <v-container fluid class="pa-6">
    <v-row>
      <!-- Grid 1 -->
      <v-col cols="12" md="3">
        <div class="d-flex flex-column" style="height: 340px;">
          <div class="text-h6 mb-2">Deals and Promotions</div>
          <v-hover v-slot="{ isHovering, props }">
            <router-link to="/shop/grid1" class="flex-grow-1">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
                class="flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                v-bind="props"
                :elevation="isHovering ? 6 : 0"
              />
            </router-link>
          </v-hover>
          <router-link
            to="/shop/grid1"
            class="mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
          >
            shop now...
          </router-link>
        </div>
      </v-col>

      <!-- Grid 2: Nested layout -->
      <v-col cols="12" md="3">
        <div class="d-flex flex-column" style="height: 340px;">
          <div class="text-h6 mb-2">Shop Home & Office</div>
          <v-row no-gutters class=" w-100">
            <!--  top image -->
            <v-col cols="12" class="pa-0">
              <v-hover v-slot="{ isHovering, props }">
                <router-link to="/shop/grid2/top" class="w-100 d-block">
                  <v-img
                    src=""
                    cover
                    class="rounded-lg transition-ease-in-out cursor-pointer"
                    height="40"
                    v-bind="props"
                    :elevation="isHovering ? 6 : 0"
                  />
                  <div class="text-center mt-1 text-body-2 font-weight-medium">
                     Top
                  </div>
                </router-link>
              </v-hover>
            </v-col>

            <!-- Three images -->
            <v-col cols="4" v-for="n in 3" :key="'grid2-'+n" class="pa-1">
              <v-hover v-slot="{ isHovering, props }">
                <router-link :to="`/shop/grid2/small${n}`" class="d-block">
                  <v-img
                    :src="`https://picsum.photos/200/150?random=${30+n}`"
                    cover
                    class="rounded-lg transition-ease-in-out cursor-pointer"
                    height="50"
                    v-bind="props"
                    :elevation="isHovering ? 6 : 0"
                  />
                  <div class="text-center mt-1 text-body-2">
                    Small {{ n }}
                  </div>
                </router-link>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <!-- Grid 3: Nested 2x2 -->
      <v-col cols="12" md="3">
        <div class="d-flex flex-column" style="height: 340px;">
          <div class="text-h6 mb-2">Electronics</div>
          <v-row no-gutters class="flex-grow-1 pa-1">
            <v-col cols="6" v-for="n in 4" :key="'grid3-'+n" class="pa-1">
              <v-hover v-slot="{ isHovering, props }">
                <router-link :to="`/shop/grid3/item${n}`" class="d-block">
                  <v-img
                    :src="`https://picsum.photos/200/150?random=${40+n}`"
                    cover
                    class="rounded-lg transition-ease-in-out cursor-pointer"
                    height="40"
                    v-bind="props"
                    :elevation="isHovering ? 6 : 0"
                  />
                  <div class="text-center mt-1 text-body-2">
                    Sub {{ n }}
                  </div>
                </router-link>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <!-- Grid 4 -->
      <v-col cols="12" md="3">
        <div class="d-flex flex-column" style="height: 340px;">
          <div class="text-h6 mb-2">Health & Personal Care</div>
          <v-hover v-slot="{ isHovering, props }">
            <router-link to="/shop/grid4" class="flex-grow-1">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                cover
                class="flex-grow-1 rounded-lg transition-ease-in-out cursor-pointer"
                v-bind="props"
                :elevation="isHovering ? 6 : 0"
              />
            </router-link>
          </v-hover>
          <router-link
            to="/shop/grid4"
            class="mt-2 text-orange-darken-2 font-weight-bold cursor-pointer"
          >
            shop now...
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
