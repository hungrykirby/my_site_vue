<template>
  <div>
    <TheHeader/>
    <div class="container">
      <h1 class="title">
        きゃりかつルーム
      </h1>
      <div>
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
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '~/components/common/TheHeader.vue';
import TheFooter from '~/components/common/TheFooter.vue';
import Work from '~/components/work.vue';
import { createClient } from '~/plugins/contentful.js';

const client = createClient()

export default {
  transition: 'slide-left',
  components: {
    TheHeader,
    TheFooter,
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
