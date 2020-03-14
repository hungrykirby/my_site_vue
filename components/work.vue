<template>
  <nuxt-link
    :to="{ name: 'work-slug', params: {
      sys: id
    }}"
    v-bind:class="[{active:hoge}, `${name_for_class}`]"
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
  data() {
    return {
      hoge: {}
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize: function() {
      if (process.browser) {
        if (window.innerWidth <= 800) {
          this.hoge = true
        } else {
          this.hoge = false
        }
      }
    }
  },
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
    name_for_class: {
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
    members: {
      type: JSON,
      default: JSON.new
    }
  }
}

</script>