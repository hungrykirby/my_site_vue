<template>
  <section class="about container slug">
    <h2 class="">塙 克樹の公式サイト</h2>
    <img
      :src="require('~/assets/imgs/defaultEyeCatch.jpg')"
      alt="塙克樹のよくわからない画像" srcset=""
      class="eyecatch"
    >
    <div class="md" v-html="aboutMd"></div>
  </section>
</template>
<script>
import defaultEyeCatch from '~/assets/imgs/defaultEyeCatch.jpg'
import aboutMd from '~/assets/markdown/selfintroduce.md'
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data(){
    return{
      defaultEyeCatch: defaultEyeCatch,
      aboutMd: aboutMd,
      meta: {
        title: "もっと知りたい",
        url: `https://hanakatsuruby.me/about`,
        type: 'article',
        description: '塙 克樹について。塙克樹ってどんな人物なの？',
        image: 'http://hanakatsuruby.me/myself.jpg'
      }
    }
  }
}
</script>