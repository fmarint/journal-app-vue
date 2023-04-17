<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2" title="Borrar">
        Borrar
        <i class="fa fa-trash-alt" />
      </button>
      <button class="btn btn-info" title="Subir foto">
        Upload
        <i class="fa fa-upload" />
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>

  <FabButton icon="fa-save" />

  <img
    alt="Entry picture"
    class="img-thumbnail"
    src="https://images.pexels.com/photos/355235/pexels-photo-355235.jpeg?cs=srgb&dl=pexels-pixabay-355235.jpg&fm=jpg"
  />
</template>

<script>
import FabButton from "../components/FabButton.vue";
export default {
  components: { FabButton },
  data() {
    return {
      description: "",
    };
  },
  props: {
    item: {
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>