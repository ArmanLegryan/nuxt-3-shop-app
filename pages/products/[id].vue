<template>
  <div>
    <h1>Product with id: {{ id }}</h1>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products"
});

const route = useRoute();

const id = route.params.id;
</script>

<style scoped></style>
