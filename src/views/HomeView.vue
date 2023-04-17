<script >
// import { ref } from "vue";
// import { useRouter } from "vue-router";

export default {
  //Option API ---
  data() {
    return {
      value2: "Valor 2 con Option API",
      value1: "Valor 2 con Option API",
    };
  },
  methods: {
    gotoDayBook2() {
      this.$router.push("daybook");
    },
  },
  //Composition API ---
  // setup() {
  //   const router = useRouter();
  //   const value1 = ref("Valor 1 con Composition API");

  //   const gotoDayBook = () => {
  //     router.push("daybook");
  //   };

  //   return {
  //     gotoDayBook,
  //     value1,
  //   };
  // },
};
</script>

<template>
  <main>
    <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />

    <h1>HOME VIEW</h1>

    <button @click="gotoDayBook2" class="btn btn-primary">Day Book</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Sucess</button>
    <br /><br />
    <span>{{ value1 }}</span
    ><br />
    <span>{{ value2 }}</span>
  </main>
</template>
