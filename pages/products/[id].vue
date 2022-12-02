<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products"
});
const route = useRoute();
const id = route.params.id;
const url = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(url, { key: id });
</script>

<style scoped></style>
