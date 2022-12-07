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

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true
  });
}
</script>

<style scoped></style>
