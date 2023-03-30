<template>
  <div>
    <h2>About</h2>
    <p>
      123Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non
      accusamus assumenda dignissimos, officia tempora sequi ut eum at nulla.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non
      accusamus assumenda dignissimos, officia tempora sequi ut eum at nulla.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/USD");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 30px;
}
p {
  margin: 20px 0;
}
</style>
