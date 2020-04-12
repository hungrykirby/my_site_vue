<template>
  <section class="slug container work">
    <h2 class="slug_title">
      {{ article.fields.title }}
    </h2>
    <p class="slug_date right">{{ article.fields.publishedAt }}</p>
    <div class="md clear" v-html="$md.render(article.fields.concept)"></div>
    <img
      :src="setEyeCatch(article).url"
      :alt="setEyeCatch(article).title" srcset=""
      class="eyecatch"
    >
    <div>
      <h3>カテゴリー</h3>
      <ul class="row-li gray-li">
        <li v-for="cat in article.fields.category" :key="cat.id">{{ cat }}</li>
      </ul>
    </div>
    <div v-if="article.fields.links">
      <h3>関連リンク</h3>
      <ul class="row-li gray-li">
        <li v-for="l in article.fields.links.links" :key="l.id">
          <a target="_blank" :href="l.url">{{ l.text }} </a>
        </li>
      </ul>
    </div>
    <div v-if="article.fields.members">
      <h3>メンバー</h3>
      <ul class="row-li gray-li">
        <li v-for="m in article.fields.members.members" :key="m.id">
          <p v-if="m.url == ''">{{ m.name }}</p>
          <a v-else target="_blank" :href="m.url">{{ m.name }} </a>
        </li>
      </ul>
    </div>
    <div>
      <h3>役割</h3>
      <ul class="row-li gray-li">
        <li v-for="role in article.fields.creater_role" :key="role.id">{{ role }}</li>
      </ul>
    </div>
    <div>
      <h3>発表・公開場所</h3>
      <ul class="row-li gray-li">
        <li v-for="place in article.fields.place" :key="place.id">{{ place }}</li>
      </ul>
    </div>
    <div>
      <h3>使用技術</h3>
      <ul class="row-li gray-li">
        <li v-for="t in article.fields.tech" :key="t.id">{{ t }}</li>
      </ul>
    </div>
    <div v-if="article.fields.awards">
      <h3>受賞歴</h3>
      <ul class="row-li gray-li" v-for="award in article.fields.awards" :key="award.id">
        <li>{{ award }}</li>
      </ul>
    </div>
    <div class="pictures" v-if="article.fields.pictures">
      <h3>その他画像</h3>
      <ul v-bind:class="{ 'over-three': article.fields.pictures.length > 2 }">
        <li v-for="pict in article.fields.pictures" :key="pict.id">
          <img :src="pict.fields.file.url" :alt="pict.fields.title" srcset="">
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
import { mapGetters } from 'vuex'

const client = createClient()
export default {
  computed:{
    ...mapGetters(['setEyeCatch']),
  },
  async asyncData({ env, params }) {
    let article = null
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(res => (article = res.items[0])).catch(console.error)

    return { article,
      title: article.fields.title
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  }
}
</script>
