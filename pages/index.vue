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
        :id="post.sys.id"
        :date="post.sys.updatedAt"
        :name_for_class="`work-${i}`"
      />
    </section>
  </div>
</template>

<script>
import Work from '~/components/work.vue';
import TheMainImage from '~/components/TheMainImage.vue'
import { createClient } from '~/plugins/contentful.js';

const client = createClient()

export default {
  transition: 'slide-left',
  components: {
    TheMainImage,
    Work
  },
  head() {
    return {
      title: 'index'
    }
  },
  asyncData({ env, params }) {
    return client
      .getEntries(env.CTF_BLOG_POST_TYPE_ID)
      .then(entries => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style>
</style>
