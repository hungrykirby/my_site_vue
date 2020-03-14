<template>
  <nuxt-link
    :to="{ name: 'work-slug', params: {
      sys: id
    }}"
    class="wrapper"
  >
    <article class="work">
      <p class="title">{{ title }}</p>
      <p class="date">{{ date }}</p>
      <img class="top_image" :src="main_image_url" :alt="main_image_title" />
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
    date: {
      type: String,
      default: ''
    },
    concept: {
      type: String,
      default: ''
    },
    main_image_url: {
      type: String,
      default: ''
    },
    main_image_title: {
      type: String,
      default: ''
    },
    creater_roles: {
      type: Array,
      default: Array.new
    },
    links:{
      type: Array,
      default: Array.new
    },
    members: {
      type: JSON,
      default: JSON.new
    }
  }
}
</script>