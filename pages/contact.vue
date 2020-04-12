<template>
  <section class="contact container slug">
    <h2 class="">塙 克樹のContact</h2>
    <div class="md" v-html="contactMd"></div>
  </section>
</template>
<script>
import defaultEyeCatch from '~/assets/images/myself.jpg'
import contactMd from '~/assets/markdown/contact.md'
export default {
  data(){
    return{
      contactMd: contactMd
    }
  },
  head() {
    return {
      title: 'Contact'
    }
  }
}
</script>