<template>
  <div>
    <heade class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
          <li>
            <NuxtLink :to="{ name: 'products' }" class="btn">
              Products
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </heade>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
