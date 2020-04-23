<template>
  <section class="top-img-section" v-bind:class="{'top-loaded': loaded}">
    <img v-bind:src="siteTopImageSrc" alt="" srcset="" v-on:load="onLoaded" >
    <p>祖父は言った
      <br>
      「まじめに生きてきて後悔したことはないと」
      <br>
      その言葉を胸に
    </p>
  </section>
</template>
<script>
import SiteTopImage from '~/assets/imgs/sitetop.jpg'
export default {
  components: {
    SiteTopImage,
  },
  data(){
    return {
      siteTopImageSrc: SiteTopImage,
      loaded: false
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
}
</script>