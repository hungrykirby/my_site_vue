<template>
  <section class="about container slug">
    <h2 class="">塙 克樹の公式サイト</h2>
    <img
      :src="defaultEyeCatch"
      alt="塙克樹のよくわからない画像" srcset=""
      class="eyecatch"
    >
    <div class="md" v-html="aboutMd"></div>
  </section>
</template>
<script>
import defaultEyeCatch from '~/assets/images/myself.jpg'
import aboutMd from '~/assets/markdown/selfintroduce.md'
export default {
  data(){
    return{
      defaultEyeCatch: defaultEyeCatch,
      aboutMd: aboutMd
    }
  }
}
</script>>