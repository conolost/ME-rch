<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non
      accusamus assumenda dignissimos, officia tempora sequi ut eum at nulla.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non
      accusamus assumenda dignissimos, officia tempora sequi ut eum at nulla.
    </p>
    <input type="text" v-model="m" class="border-4" />
    <button @click="m++">increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      m: 8,
    };
  },
};
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
