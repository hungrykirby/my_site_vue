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
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data(){
    return{
      defaultEyeCatch: defaultEyeCatch,
      aboutMd: aboutMd,
      meta: {
        title: "About",
        url: `https://zealous-saha-65c494.netlify.com/about`,
        type: 'article',
        description: '塙 克樹について。塙克樹ってどんな人物なの？',
        image: 'http://zealous-saha-65c494.netlify.com/myself.jpg'
      }
    }
  }
}
</script>