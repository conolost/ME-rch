<template>
  <div>
    <p>Products</p>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products-pages",
});
let uri = "https://fakestoreapi.com/products";
const { data: products } = await useFetch(uri);

useHead({
  title: "myNuxt | merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<style scoped></style>
