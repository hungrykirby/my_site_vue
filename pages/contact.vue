<template>
  <section class="contact container slug">
    <h2 class="">塙 克樹のお問い合わせ先</h2>
    <div class="md" v-html="contactMd"></div>
  </section>
</template>
<script>
import contactMd from '~/assets/markdown/contact.md'
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data(){
    return{
      contactMd: contactMd,
      meta: {
        title: "お問い合わせ",
        url: `https://hanakatsuruby.me/contact`,
        type: 'article',
        description: '塙 克樹のお問い合わせ先。ここから連絡が取れるぞ！',
        image: 'http://hanakatsuruby.me/myself.jpg'
      }
    }
  },
}
</script>