<template>
  <div class="container top-index">
    <TheMainImage/>
    <section class="works-section">
      <p>Works</p>
      <Work
        v-for="(post,i ) in posts"
        :key="i"
        :title="post.fields.title"
        :concept="post.fields.concept"
        :published_at="post.fields.publishedAt"
        :main_image_url="post.fields.main_image.fields.file.url"
        :main_image_title="post.fields.main_image.fields.title"
        :slug="post.fields.slug"
        :id="post.sys.id"
        :date="post.sys.updatedAt"
        :name_for_class="`work-${i}`"
      />
    </section>
  </div>
</template>

<script>
import Work from '~/components/work.vue';
import TheMainImage from '~/components/TheMainImage.vue';
import { createClient } from '~/plugins/contentful.js';

const client = createClient()

export default {
  components: {
    TheMainImage,
    Work
  },
  head() {
    return {
      title: '',
      titleTemplate: 'きゃりかつルーム',
      meta: [
        { hid: 'description', name: 'description', content: '塙克樹公式サイトきゃりかつルームのトップ' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: 'きゃりかつルーム' },
        { hid: 'og:description', property: 'og:description', content: '塙克樹公式サイトきゃりかつルームのトップ' },
        { hid: 'og:url', property: 'og:url', content: `https://zealous-saha-65c494.netlify.com` },
        { hid: 'og:image', property: 'og:image', content: 'http://zealous-saha-65c494.netlify.com/myself.jpg' },
        { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
        { hid: 'twitter:site', name: 'twitter:site', content: "@hungrykirby"}
      ],
    }
  },
  data(){
  },
  methods: {
  },
  mounted() {
  },
  async asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishedAt'
      })
      .then(entries => {
        return {
          posts: entries.items,
        }
      })
      .catch(console.error)
  }
}
</script>
