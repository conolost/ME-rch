<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/" class="font-bold">SolarSystem</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/products" class="bttn">Products</nuxt-link></li>
          <li><nuxt-link to="/products/abcd">abcd product</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <!-- -----------page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: aqua;
}
</style>
