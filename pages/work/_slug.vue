<template>
  <section class="slug container">
    <img
      :src="post.fields.main_image.fields.url"
      :alt="post.fields.main_image.fields.title" srcset=""
    />
    <h2 class="slug_title">
      {{ article.fields.title }}
    </h2>
    <p class="slug_date">{{ article.fields.publishedAt }}</p>
    <div>
      {{ article.fields.concept }}
    </div>
    <div>
      <ul v-for="cat in article.fields.category" :key="cat.id">
        <li>{{ cat }}</li>
      </ul>
    </div>
    <div v-if="article.fields.links">
      <ul v-for="l in article.fields.links" :key="l.id">
        <li>
          <a target="_blank" :href="l[0].url">{{ l[0].text }} </a>
        </li>
      </ul>
    </div>
    <div v-if="article.fields.members">
      <ul v-for="m in article.fields.members" :key="m.id">
        <li>
          <p v-if="m[0].url == ''">{{ m[0].name }}</p>
          <a v-else target="_blank" :href="m[0].url">{{ m[0].name }} </a>
        </li>
      </ul>
    </div>
    <div>
      <ul v-for="role in article.fields.creater_role" :key="role.id">
        <li>{{ role }}</li>
      </ul>
    </div>
    <div>
      <ul v-for="place in article.fields.place" :key="place.id">
        <li>{{ place }}</li>
      </ul>
    </div>
    <div>
      <ul v-for="t in article.fields.tech" :key="t.id">
        <li>{{ t }}</li>
      </ul>
    </div>
    <div>
      <p>{{ article.fields.publishedAt }}</p>
    </div>
    <div v-if="article.fields.pictures">
      <ul v-for="pict in article.fields.pictures" :key="pict.id">
        <li>
          <img :src="pict.fields.file.url" :alt="pict.fields.title" srcset="">
        </li>
      </ul>
    </div>
    <div v-if="article.fields.awards">
      <ul v-for="award in article.fields.awards" :key="award.id">
        <li>{{ award }}</li>
      </ul>
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
import { mapGetters } from 'vuex'

const client = createClient()
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['setEyeCatch'])
  },
  transition: 'slide-right',
  async asyncData({ env, params }) {
    return await client
      .getEntry(params.sys)
      .then(entrie => {
        return {
          article: entrie
        }
      })
      .catch(console.error)
  }
}
</script>
