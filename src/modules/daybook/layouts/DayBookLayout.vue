<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-2">
      <EntryList />
    </div>
    <div class="col">
      <!-- Contenedor de los children -->
      <!-- Opcion 01 -->
      <!-- <RouterView /> -->
      <!-- Opcion 02 -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),
  },
};
</script>