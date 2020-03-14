<template>
  <section class="slug">
    <h1 class="slug_title">
      {{ article.fields.title }}
    </h1>
    <p class="slug_date">article updated at{{ article.sys.updatedAt }}</p>
    <div>
      <ul v-for="cat in article.fields.category" :key=cat>
        <li>{{ cat }}</li>
      </ul>
    </div>
    <div v-if="article.fields.links">
      <ul v-for="l in article.fields.links" :key=l>
        <li>
          <a target="_blank" :href="l[0].url">{{ l[0].text }} </a>
        </li>
      </ul>
    </div>
    <div v-if="article.fields.members">
      <ul v-for="m in article.fields.members" :key=m>
        <li>
          <p v-if="m[0].url == ''">{{ m[0].name }}</p>
          <a v-else target="_blank" :href="m[0].url">{{ m[0].name }} </a>
        </li>
      </ul>
    </div>
    <div>
      <ul v-for="role in article.fields.creater_role" :key=role>
        <li>{{ role }}</li>
      </ul>
    </div>
    <div>
      <ul v-for="place in article.fields.place" :key=place>
        <li>{{ place }}</li>
      </ul>
    </div>
    <div>
      <ul v-for="t in article.fields.tech" :key=t>
        <li>{{ t }}</li>
      </ul>
    </div>
    <div>
      <p>{{ article.fields.publishedAt }}</p>
    </div>
    <div v-if="article.fields.pictures">
      <ul v-for="pict in article.fields.pictures" :key=pict>
        <li>
          <img :src="pict.fields.file.url" :alt="pict.fields.title" srcset="">
        </li>
      </ul>
    </div>
    <div v-if="article.fields.awards">
      <ul v-for="award in article.fields.awards" :key=award>
        <li>{{ award }}</li>
      </ul>
    </div>
    <div>
      {{ article.fields.concept }}
    </div>
    <img :src="article.fields.main_image.fields.file.url" :alt="article.fields.main_image.fields.title" srcset="">
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
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