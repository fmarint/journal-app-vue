<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control mb-2"
        placeholder="Buscar Entrada"
      />
    </div>
    <div class="entry-scroll-area">
      <EntryItem :item="item" v-for="item in data" :key="item.id" />
    </div>
    
  </div>
  
</template>

<script>
// import EntryItem from "./EntryItem.vue";
import { defineAsyncComponent } from "vue";
export default {
  components: {
    EntryItem: defineAsyncComponent(() => import("./EntryItem.vue")),
  },
  data() {
    return {
      id: "numero ID",
      data : Entries
    };
  },
  methods: {

  },
};

const Entries = [
  { id: 1, date: "01/01/2023", description: "lorem ipsum dolor sit amet" },
  { id: 2, date: "01/01/2023", description: "lorem ipsum dolor sit amet2" },
  { id: 3, date: "01/01/2023", description: "lorem ipsum dolor sit amet3" },
  { id: 4, date: "01/01/2023", description: "lorem ipsum dolor sit amet4" },
  { id: 5, date: "01/01/2023", description: "lorem ipsum dolor sit amet5" },
  { id: 6, date: "01/01/2023", description: "lorem ipsum dolor sit amet6" },
  { id: 7, date: "01/01/2023", description: "lorem ipsum dolor sit amet7" }
]



</script>

<style  lang="scss" scoped>

.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scroll-area {
  border-top: 1px solid #c4c6c7;
  height: calc(100vh - 115px);
  overflow: auto;
}



</style>