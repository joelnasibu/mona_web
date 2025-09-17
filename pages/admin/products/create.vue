<template>
  <div>
    <AdminProductInputs :payload="payload" route="admin-products" />
  </div>
</template>

<script setup>
definePageMeta({
<<<<<<< HEAD
  middleware: ["vendor-only"],
=======
  // middleware: ["vendor-only"],
>>>>>>> de5333dcf35abadaf9f91b69322130f22b8ea041
});

const payload = ref({
  productName: "",
  brand: "",
  model: "",
  description: "",
  summary: "",
  stock: [],
  businessId: 0,
  business: "",
  categoryId: 0,
  subcategoryId: 0,
  category: "",
  subcategory: "",
  images: [],
  thumbnail: null,
  price: 0,
  discount: 0,
});

useSeoMeta({
  title: "Create product",
});
</script>

<style lang="css" scoped></style>
