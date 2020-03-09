<template>
  <div>
    <TheHeader/>
    <div class="container">
      <div>
        <h1 class="title">
          きゃりかつルーム
        </h1>
        <h2 class="subtitle">
          ようこそ<br>きゃりかつの作りかけの部屋へ
        </h2>
        <Work
          v-for="(post,i ) in posts"
          :key="i"
          :title="post.fields.title"
          :body="post.fields.body.content[0].content[0].value"
          :id="post.sys.id"
          :date="post.sys.updatedAt"
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
