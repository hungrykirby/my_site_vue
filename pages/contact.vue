<template>
  <section class="contact container slug">
    <h2 class="">塙 克樹のContact</h2>
    <div class="md" v-html="contactMd"></div>
  </section>
</template>
<script>
import defaultEyeCatch from '~/assets/images/myself.jpg'
import contactMd from '~/assets/markdown/contact.md'
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  data(){
    return{
      contactMd: contactMd,
      meta: {
        title: "Contact",
        url: `https://zealous-saha-65c494.netlify.com/contact`,
        type: 'article',
        description: '塙 克樹のお問い合わせ先',
        image: 'http://zealous-saha-65c494.netlify.com/myself.jpg'
      }
    }
  },
}
</script>