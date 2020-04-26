<template>
  <transition name="page">
    <div class="page">
      <TheHeader />
      <nuxt />
      <TheFooter />
    </div>
  </transition>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.page-enter {
  opacity: 0;
}
.page-enter-active {
  transition: opacity 2s;
}
</style>
<script>
import TheHeader from '~/components/common/TheHeader.vue';
import TheFooter from '~/components/common/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
