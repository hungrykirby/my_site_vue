<template lang="html">
  <div style="" class="loading-page" v-if="loading">
    <!--<p>Loading...</p>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start () {
      // サイト内遷移の場合はfirstLandingがundefinedになる
      if(this.firstLanding !== 0){
        this.loading = true
      }
    },
    finish () {
      this.firstLanding = 0 // 一回でもサイト上でロードしていると（サイト内遷移以外なら0を入れる）
      this.loading = false
    }
  }
}
</script>

<style>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
  color: black;
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  z-index: 10000000000000000000;
}
</style>