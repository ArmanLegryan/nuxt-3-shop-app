<template>
  <div>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vel quia
      voluptate mollitia ex excepturi doloribus error suscipit eveniet
      recusandae.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vel quia
      voluptate mollitia ex excepturi doloribus error suscipit eveniet
      recusandae.
    </p>

    <div>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/user/5");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
