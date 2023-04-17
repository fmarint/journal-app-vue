<template>
  <div
    class="entry-container pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ "Jueves" }}</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>
    <div class="entry-description">
      {{ item.description }}
    </div>
  </div>
  <!-- <hr /> -->
</template>

<script>
export default {
  methods: {},
  props: {
    item: {
      dataType: String,
      require: true,
    },
  },
  computed: {
    day() {
      return new Date(this.item.date).getDay();
    },
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #c4c6c7;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
}

.entry-title {
  color: rgb(30, 31, 31);
}

.entry-description {
  font-weight: 100;
}
</style>
