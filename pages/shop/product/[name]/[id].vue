<template>
  <div class="">
    <div class="">
      <Title>{{ product.productName }}</Title>
      <Meta name="og:title" :content="product.productName" />
      <Meta name="og:image" :content="product.image" />
      <Meta name="og:description" :content="product.description" />
      <Meta name="twitter:title" :content="product.productName" />
      <Meta name="twitter:image" :content="product.image" />
      <Meta name="twitter:description" :content="product.description" />
    </div>
    <ClientOnly>
      <CoreMidScreenLayout>
        <v-container class="pa-0" fluid>
          <v-row class="ma-auto">
            <v-col cols="12" class="px-0">
              <CoreLinks :links="links" />
            </v-col>
          </v-row>
          <v-row class="ma-auto card-outlined rounded-lg">
            <v-col cols="12" sm="4">
<<<<<<< HEAD
              <v-card flat class="bg-transparent w-100 h-100 rounded-0 pa-0 pa-md-2">
                <div class="pa-2 pa-md-4 card-outlined rounded-lg">
                  <v-card height="250" flat class="card-white rounded-lg pa-2">
                    <v-img :src="displayingImage" :lazy-src="displayingImage" hwight="100%" width="100%"></v-img>
                  </v-card>
                </div>
                <div class="py-2 mt-2 mt-md-4 card-outlined rounded-lg">
                  <CoreHorizontalScroller :smallBtns="true" :show-scroller-progress="false">
                    <div class="mx-1 product-image-fit h-100 horizontal-scroller-card rounded-lg pa-1"
                      v-for="(image, i) in productImages" :key="i"
                      :class="{ 'actual-image': displayingImage == image }">
                      <v-card flat width="60px" id="scrollerCard"
                        class="prod-image-fit cursor-pointer rounded-sm bg-white pa-0">
                        <v-img :src="image" alt="" @click="displayingImage = image"></v-img>
=======
              <v-card
                flat
                class="bg-transparent w-100 h-100 rounded-0 pa-0 pa-md-2"
              >
                <div class="pa-2 pa-md-4 card-outlined rounded-lg">
                  <v-card height="250" flat class="card-white rounded-lg pa-2">
                    <v-img
                      :src="displayingImage"
                      :lazy-src="displayingImage"
                      hwight="100%"
                      width="100%"
                    ></v-img>
                  </v-card>
                </div>
                <div class="py-2 mt-2 mt-md-4 card-outlined rounded-lg">
                  <CoreHorizontalScroller
                    :smallBtns="true"
                    :show-scroller-progress="false"
                  >
                    <div
                      class="mx-1 product-image-fit h-100 horizontal-scroller-card rounded-lg pa-1"
                      v-for="(image, i) in productImages"
                      :key="i"
                      :class="{ 'actual-image': displayingImage == image }"
                    >
                      <v-card
                        flat
                        width="60px"
                        id="scrollerCard"
                        class="prod-image-fit cursor-pointer rounded-sm bg-white pa-0"
                      >
                        <v-img
                          :src="image"
                          alt=""
                          @click="displayingImage = image"
                        ></v-img>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                      </v-card>
                    </div>
                  </CoreHorizontalScroller>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="5">
              <v-card flat class="bg-transparent w-100 h-100 rounded-0 py-3">
                <div class="">
<<<<<<< HEAD
                  <div class="text-secondary-accent text-body-2 d-flex align-center">
                    <v-icon icon="mdi-check" start size="small"></v-icon>
                    <span>In stock </span>
                    <v-spacer></v-spacer>
                    <ClientShopProductDeal :discount="product.discount" v-if="product.discount > 0" />
=======
                  <div
                    class="text-secondary-accent text-body-2 d-flex align-center"
                  >
                    <v-icon icon="mdi-check" start size="small"></v-icon>
                    <span>In stock </span>
                    <v-spacer></v-spacer>
                    <ClientShopProductDeal
                      :discount="product.discount"
                      v-if="product.discount > 0"
                    />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                  </div>
                  <div class="text-h6 font-weight-black mt-3">
                    <strong>{{ product.productName }}</strong>
                  </div>
                  <v-spacer></v-spacer>
                </div>
                <div class="my-4">
<<<<<<< HEAD
                  <ClientShopProductFullRating :rating="product.rating" :reviews="product.reviews.length" :stock="stock"
                    :small="false" />
                </div>
                <div class="d-flex align-center w-100">
                  <ClientShopProductQuantity :quantity="quantity" @increase="handleQuantity" />
                  <v-spacer></v-spacer>
                  <div class="d-flex flex-column align-end">
                    <div class="d-flex align-center">
                      <ClientShopProductPrices :payload="product" :discount="product.discount" :small="false" />
=======
                  <ClientShopProductFullRating
                    :rating="product.rating"
                    :reviews="product.reviews.length"
                    :stock="stock"
                    :small="false"
                  />
                </div>
                <div class="d-flex align-center w-100">
                  <ClientShopProductQuantity
                    :quantity="quantity"
                    @increase="handleQuantity"
                  />
                  <v-spacer></v-spacer>
                  <div class="d-flex flex-column align-end">
                    <div class="d-flex align-center">
                      <ClientShopProductPrices
                        :payload="product"
                        :discount="product.discount"
                        :small="false"
                      />
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                    </div>
                    <div class="text-caption text-grey">
                      <span>Shipping not included</span>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <div class="py-2" v-if="sizes.length">
                    <div class="text-caption">
                      <b>Size</b>
                    </div>
<<<<<<< HEAD
                    <v-radio-group density="compact" v-model="size" hide-details inline>
                      <v-radio v-for="(item, i) in sizes" color="primary-accent" :value="item" :key="i"
                        class="margin-radio mx-2">
=======
                    <v-radio-group
                      density="compact"
                      v-model="size"
                      hide-details
                      inline
                    >
                      <v-radio
                        v-for="(item, i) in sizes"
                        color="primary-accent"
                        :value="item"
                        :key="i"
                        class="margin-radio mx-2"
                      >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                        <template v-slot:label>
                          <div class="d-flex align-center ga-2 text-caption">
                            <span>{{ item }} </span>
                          </div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </div>
                  <div class="py-2" v-if="colors.length">
                    <div class="text-caption">
                      <b>Color</b>
                    </div>

<<<<<<< HEAD
                    <div class="d-flex flex-wrap align-center ga-2 text-caption pt-1 px-1">
                      <div v-for="item in product.stock.map((s) => s.color)" :key="item">
                        <v-card :color="item" class="pa-2 card-outlined rounded-circle"
                          :class="{ selected: item === color }" flat @click="handleSelection(2, item)"></v-card>
=======
                    <div
                      class="d-flex flex-wrap align-center ga-2 text-caption pt-1 px-1"
                    >
                      <div
                        v-for="item in product.stock.map((s) => s.color)"
                        :key="item"
                      >
                        <v-card
                          :color="item"
                          class="pa-2 card-outlined rounded-circle"
                          :class="{ selected: item === color }"
                          flat
                          @click="handleSelection(2, item)"
                        ></v-card>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-1">
<<<<<<< HEAD
                  <v-btn color="primary-accent" :prepend-icon="`mdi-heart${product.isSaved ? '' : '-outline'
                    }`" block class="text-body-2 text-none mt-4 rounded-lg" @click="toggleWishlist"
                    :loading="loadWishList" flat>
=======
                  <v-btn
                    color="primary-accent"
                    :prepend-icon="`mdi-heart${
                      product.isSaved ? '' : '-outline'
                    }`"
                    block
                    class="text-body-2 text-none mt-4 rounded-lg"
                    @click="toggleWishlist"
                    :loading="loadWishList"
                    flat
                  >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                    <!-- variant="text" -->
                    <span>{{
                      product.isSaved
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }}</span>
                  </v-btn>
                </div>
                <v-divider class="my-3"></v-divider>
<<<<<<< HEAD
                <div class="d-flex flex-column ga-3 text-grey-darken-2 text-caption">

=======
                <div
                  class="d-flex flex-column ga-3 text-grey-darken-2 text-caption"
                >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                  <div class="d-flex prod-details-row" v-if="product.brand">
                    <span>Brand:</span>
                    <span>{{ product.brand }}</span>
                  </div>
                  <v-divider v-if="product.brand"></v-divider>

                  <div class="d-flex prod-details-row">
                    <span>Warranty:</span>
                    <span>No warranty</span>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="3">
              <v-card flat class="bg-transparent card-outlined pa-2">
                <!-- <div class="d-flex flex-column ga-2">
                  <v-tooltip
                    v-for="(
                      { title, description, list, disclaimer }, i
                    ) in deliveryTypes"
                    :key="i"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        class="text-none text-caption card-outlined text-grey-darken-2"
                        v-bind="props"
                        :value="i"
                        variant="text"
                        :active="i == delivery"
                        size="small"
                        append-icon="mdi-information-outline"
                        block
                        flat
                        @click="delivery = i"
                      >
                        <span>{{ title }} delivery</span>
                        <div class="ml-2 text-secondary" v-if="i == 1">
                          <strong>+$5</strong>
                        </div>
                      </v-btn>
                    </template>
                    <v-card
                      max-width="300"
                      class="text-caption bg-transparent pa-2"
                      flat
                    >
                      <div class="">
                        <span>{{ description }}</span>
                        <ul class="mt-2">
                          <li
                            v-for="(item, i) in list"
                            :key="i"
                            class="d-flex align-center"
                          >
                            <v-icon
                              start
                              icon="mdi-chevron-right"
                              size="x-small"
                            ></v-icon>
                            {{ item }}
                          </li>
                        </ul>
                        <div class="mt-2" v-if="disclaimer">
                          <span>{{ disclaimer }}</span>
                        </div>
                      </div>
                    </v-card>
                  </v-tooltip>
                </div> -->
                <div class="text-subtitle-2 my-3">
                  <div class="d-flex justify-space-between">
                    <span>Subtotal</span>
                    <strong>{{ currencyFormat(grandTotal) }}</strong>
                  </div>
                </div>
                <div class="text-caption mt-3">
                  <div class="d-flex text-secondary">
                    <div class="">
<<<<<<< HEAD
                      <Icon name="material-symbols-light:assignment-return" size="5em" />
                    </div>
                    <div class="ml-2 d-flex flex-column">
                      <span>Return Policy</span>
                      <span class="text-grey-darken-4 my-1">Items can be returned in its original condition for a
                        full refund or replacement within 30 days of
                        receipt.</span>
                      <div class="text-secondary">
                        <span class="text-decoration-underline">Full return policy</span>
=======
                      <Icon
                        name="material-symbols-light:assignment-return"
                        size="5em"
                      />
                    </div>
                    <div class="ml-2 d-flex flex-column">
                      <span>Return Policy</span>
                      <span class="text-grey-darken-4 my-1"
                        >Items can be returned in its original condition for a
                        full refund or replacement within 30 days of
                        receipt.</span
                      >
                      <div class="text-secondary">
                        <span class="text-decoration-underline"
                          >Full return policy</span
                        >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <v-card flat class="bg-transparent card-outlined pa-3 mt-5">
                <div class="d-flex ga-2">
<<<<<<< HEAD
                  <v-avatar rounded="0" :image="product.business.logo" color="card"></v-avatar>
=======
                  <v-avatar
                    rounded="0"
                    :image="product.business.logo"
                    color="card"
                  ></v-avatar>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                  <div class="text-caption">
                    <div class="break-word text-body-2">
                      <p>{{ product.business.businessName }}</p>
                    </div>
                    <div class="break-word">
                      <p>{{ businessLocation }}</p>
                    </div>
                  </div>
                </div>
                <v-divider class="my-4"></v-divider>
                <div class="text-caption d-flex flex-column ga-2">
                  <div class="d-flex align-center text-primary-accent">
<<<<<<< HEAD
                    <v-icon size="small" icon="mdi-storefront-outline" start color="primary-accent"></v-icon>
                    <NuxtLink class="text-decoration-underline" :to="{
                      name: 'company-name-id',
                      params: {
                        id: product.businessId,
                        name: String(product.business.businessName)
                          .toLowerCase()
                          .replaceAll(' ', '-'),
                      },
                      query: {
                        type: 'products',
                      },
                    }" @click.stop>Visit shop</NuxtLink>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon size="small" icon="mdi-shield-check-outline" start></v-icon>
=======
                    <v-icon
                      size="small"
                      icon="mdi-storefront-outline"
                      start
                      color="primary-accent"
                    ></v-icon>
                    <NuxtLink
                      class="text-decoration-underline"
                      :to="{
                        name: 'company-name-id',
                        params: {
                          id: product.businessId,
                          name: String(product.business.businessName)
                            .toLowerCase()
                            .replaceAll(' ', '-'),
                        },
                        query: {
                          type: 'products',
                        },
                      }"
                      @click.stop
                      >Visit shop</NuxtLink
                    >
                  </div>
                  <div class="d-flex align-center">
                    <v-icon
                      size="small"
                      icon="mdi-shield-check-outline"
                      start
                    ></v-icon>
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                    <span>Verified seller</span>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon size="small" icon="mdi-earth" start></v-icon>
                    <span>Worldwide shipping</span>
                  </div>
<<<<<<< HEAD
                  <v-btn :href="contactSeller" class="rounded-lg text-caption mt-4" variant="outlined" flat
                    prepend-icon="mdi-phone-outline" size="small" color="secondary-accent">
                    <span>Call seller</span>
                  </v-btn>
                  <v-btn size="small" color="secondary-accent" class="text-caption rounded-lg text-white" flat
                    prepend-icon="mdi-chat-processing-outline" @click="startChat" :loading="loadChat">
=======
                  <v-btn
                    :href="contactSeller"
                    class="rounded-lg text-caption mt-4"
                    variant="outlined"
                    flat
                    prepend-icon="mdi-phone-outline"
                    size="small"
                    color="primary"
                  >
                    <span>Call seller</span>
                  </v-btn>
                  <v-btn
                    size="small"
                    color="primary"
                    class="text-caption rounded-lg"
                    flat
                    variant="text"
                    active
                    prepend-icon="mdi-chat-processing-outline"
                    @click="startChat"
                    :loading="loadChat"
                  >
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
                    <span>Start a chat</span>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="mt-10 pb-4">
          <v-row class="card-outlined rounded-lg">
            <v-col class="pa-0" cols="12">
              <v-tabs v-model="tab" bg-color="transparent" color="link">
                <v-tab class="text-caption text-capitalize">Description</v-tab>
                <v-tab class="text-caption text-capitalize">Reviews</v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12">
              <v-window class="bg-transparent" v-model="tab">
                <v-window-item :value="0">
                  <div class="text-caption">
                    <p v-html="String(product.description)"></p>
                  </div>
                </v-window-item>
                <v-window-item :value="1">
                  <ClientShopProductCustomerFeedbacks :product="product" />
                </v-window-item>
              </v-window>
            </v-col>
          </v-row>
        </v-container>
      </CoreMidScreenLayout>
    </ClientOnly>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { useSavedItemStore } from "~/store/saved-items";
import { useProductStore } from "~/store/products";
import { useCartStore } from "~/store/cart";

const appStore = useAppStore();
const { loading, error, currentUser } = storeToRefs(appStore);
const { saveProduct, deleteSavedProduct } = useSavedItemStore();
const { getProduct } = useProductStore();
const cartStore = useCartStore();
const route = useRoute();
const { cart } = storeToRefs(cartStore);
const {
  priceAfterDiscount,
  currencyFormat,
  discountPercentage,
  capitalizeFirstLetter,
  getFullnames,
<<<<<<< HEAD
  getAddress
=======
  getAddress,
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
} = useHelpers();

const productId = route.params.id;
const product = ref(await getProduct(productId));

const delivery = ref(0);
const handlePriceAfterDiscount = ref(
  priceAfterDiscount(product.value.price, product.value.discount)
);
const displayingImage = ref(product.value.thumbnail);
const size = ref("");
const color = ref("");
const tab = ref(0);
<<<<<<< HEAD
const stock = ref(product.value.totalStock ?? 0)
const price = ref(0)
const quantity = ref(1)




=======
const stock = ref(product.value.totalStock ?? 0);
const price = ref(0);
const quantity = ref(1);
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

//computed properties
const productImages = computed(() => {
  return [product.value.thumbnail, ...product.value.images];
});

<<<<<<< HEAD


=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const isProductInCart = computed(() => {
  return cart.value.find(
    (i) =>
      i.productId === product.value.productId && i.quantity === quantity.value
  );
});

const grandTotal = computed(() => {
  return (
    quantity.value *
    priceAfterDiscount(product.value.price, product.value.discount)
  );
});

const businessLocation = computed(() => {
<<<<<<< HEAD
  return getAddress(product.value.business.address)
})
=======
  return getAddress(product.value.business.address);
});
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

const sizes = computed(() => {
  return product.value.stock.map((s) => s.size).filter((v) => v !== "");
});
const colors = computed(() => {
  return product.value.stock.map((s) => s.color).filter((v) => v !== "");
});

//methods

const add = () => {
  cartStore.toggleProductInCart({
    image: product.value.thumbnail,
    productId: product.value.productId,
    productName: product.value.productName,
    quantity: quantity.value,
    price: priceAfterDiscount(product.value.price, product.value.discount),
    total: Number(product.value.price * quantity.value),
    description: product.value.summary,
    size: size.value,
    color: color.value,
    businessId: product.value.businessId,
    business: product.value.business,
    discount: product.value.discount,
  });
};

const handleQuantity = (value) => {
<<<<<<< HEAD
  if (stock.value == 0) appStore.toggleSnackbar({
    status: true,
    message: `${product.value.productName} Out of Stock`,
    type: 'error'
  })
  else if (value && stock.value == quantity.value) appStore.toggleSnackbar({
    status: true,
    message: 'Stock is Full',
    type: 'warning'
  })
  else
    quantity.value = value ? quantity.value + 1 : quantity.value - 1
}
=======
  if (stock.value == 0)
    appStore.toggleSnackbar({
      status: true,
      message: `${product.value.productName} Out of Stock`,
      type: "error",
    });
  else if (value && stock.value == quantity.value)
    appStore.toggleSnackbar({
      status: true,
      message: "Stock is Full",
      type: "warning",
    });
  else quantity.value = value ? quantity.value + 1 : quantity.value - 1;
};
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

const handleSelection = (option, item) => {
  switch (option) {
    case 0:
<<<<<<< HEAD

=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
      break;
    case 1:
      break;
    case 2:
      //color selection
<<<<<<< HEAD
      color.value = item
      const payload = product.value.stock.find(i => i.color == item)

      console.log(payload)

      // Get stock : whether in stock or out of stock
      stock.value = payload.stock ?? 0
      // Get size : 
      size.value = payload.size ?? ''
      //Get image 

      displayingImage.value = payload.image ?? product.value.thumbnail

      //set price

      price.value = payload.price ?? product.value.price

      // quantity 
      quantity.value = stock.value <= quantity.value ? stock.value : quantity.value

      break;
  }
}

=======
      color.value = item;
      const payload = product.value.stock.find((i) => i.color == item);

      console.log(payload);

      // Get stock : whether in stock or out of stock
      stock.value = payload.stock ?? 0;
      // Get size :
      size.value = payload.size ?? "";
      //Get image

      displayingImage.value = payload.image ?? product.value.thumbnail;

      //set price

      price.value = payload.price ?? product.value.price;

      // quantity
      quantity.value =
        stock.value <= quantity.value ? stock.value : quantity.value;

      break;
  }
};
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

const links = [
  { title: "Home", route: "/shop" },
  { title: String(product.value.productName).toLowerCase() },
];
//
//   product.value,
//   product.value.stock.map((s) => s.colorCode).filter((v) => v !== "")
// );

<<<<<<< HEAD

=======
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
const loadWishList = ref(false),
  toggleWishlist = async () => {
    loadWishList.value = true;
    if (appStore.isLoggeIn) {
      product.value.isSaved
        ? await deleteSavedProduct(product.value.savedId)
        : await saveProduct({
<<<<<<< HEAD
          userId: currentUser.value.userId,
          productId: product.value.productId,
        });
=======
            userId: currentUser.value.userId,
            productId: product.value.productId,
          });
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

      if (!error.value) product.value = await getProduct(productId);

      loadWishList.value = false;
    } else {
      navigationRedirect();
    }
  },
  navigationRedirect = () => {
    const routeRedirect = {
      name: "shop-product-name-id",
      params: route.params,
    };
    appStore.setRedirect(routeRedirect);
    navigateTo({
      name: "auth",
    });
  };

const contactSeller = () => {
<<<<<<< HEAD
  if (product.business.phone)
    window.open(product.business.phone);
  else
    appStore.toggleSnackbar({
      status: true,
      message: 'Numéro de téléphone non fourni',
      type: "warning"
    })
=======
  if (product.business.phone) window.open(product.business.phone);
  else
    appStore.toggleSnackbar({
      status: true,
      message: "Numéro de téléphone non fourni",
      type: "warning",
    });
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
};

import { useChatStore } from "~/store/chat";
const chatStore = useChatStore(),
  loadChat = ref(false),
  startChat = async () => {
    if (!appStore.isLoggeIn) {
      navigationRedirect();
      return;
    }

    loadChat.value = true;

    let session = `${currentUser.value.userId}-${product.value.productId}`;
    let room = await chatStore.getRoom(session);
    let discussion = room
      ? room
      : {
<<<<<<< HEAD
        chats: [],
        session,
        clientId: currentUser.value.userId,
        client: {
          clientId: currentUser.value.userId,
          email: currentUser.value.email,
          name: getFullnames(currentUser.value),
        },
        productId: product.value.productId,
        product: {
          price: product.value.price,
          productId: product.value.productId,
          productName: product.value.productName,
          thumbnail: product.value.thumbnail,
        },
        vendorId: product.value.createdBy,
        vendor: {
          name: product.value.business.businessName,
          picture: product.value.business.logo,
        },
      };
=======
          chats: [],
          session,
          clientId: currentUser.value.userId,
          client: {
            clientId: currentUser.value.userId,
            email: currentUser.value.email,
            name: getFullnames(currentUser.value),
          },
          productId: product.value.productId,
          product: {
            price: product.value.price,
            productId: product.value.productId,
            productName: product.value.productName,
            thumbnail: product.value.thumbnail,
          },
          vendorId: product.value.createdBy,
          vendor: {
            name: product.value.business.businessName,
            picture: product.value.business.logo,
          },
        };
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041

    chatStore.setChat(discussion ?? {});
    chatStore.toggleChatStatus();

    console.log(discussion);

    // let rooms = await chatStore.getRoom("asdf922");
    // console.log(rooms);

    loadChat.value = false;
  };
</script>

<style lang="css" scoped>
.short-description {
  -webkit-line-clamp: 5 !important;
}

.horizontal-scroller-card {
  border: 1.5px solid transparent;
}

.actual-image {
  transition: border-color 0.5s ease-in;
  border-color: rgba(var(--v-theme-link)) !important;
}

.product-color {
  outline: 1.5px solid rgba(var(--v-theme-secondary-accent));
  outline-offset: 1.5px;
}

.prod-details-row span:first-child {
  width: 20ch;
}

.selected {
  outline: 1.5px solid rgba(var(--v-theme-primary-accent)) !important;
}

.margin-radio:first-child {
  margin-left: 0 !important;
}

.margin-radio:last-child {
  margin-right: 0 !important;
}
</style>
