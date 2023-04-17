<template>
  <nav class="navbar bg-primary">
    <a
      class="navbar-brand text-white pointer"
      @click="$router.push('/daybook')"
    >
      <img
        src="@/assets/logo.svg"
        alt="Vue Logo"
        class="d-inline-block align-text-top mx-2"
        height="30"
      />
      DayBook
    </a>
    <div class="d-flex">
      <button class="btn btn-outline-info">
        <i class="fa fa-sign-out-alt" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
</style>
