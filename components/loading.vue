<template lang="html">
  <div style="display: none;" class="loading-page" v-bind:class="{'loading': loading }">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
@keyframes slideInFromLeft {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
.loading-page {
  animation: 0.5s slideInFromLeft;
}
.loading-page.loading {
  /* animation: 0.5s slideInFromLeft; */
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  z-index: 10000000000000000000000;
}
</style>