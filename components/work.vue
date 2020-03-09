<template>
  <nuxt-link
    :to="{ name: 'work-slug', params: {
      sys: id
    }}"
    class="wrapper"
  >
    <article class="work">
      <p class="work_title">{{ title }}</p>
      <p class="work_text">{{ body }}</p>
      <p class="work_date">{{ date }}</p>
    </article>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>