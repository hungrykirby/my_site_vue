<template>
  <div
    class="top"
    v-bind:class="[`w-type-${windowTypeNum}`]"
  >
    <nuxt-link
      :to="{ name: 'work-slug', params: {
        sys: id
      }}"
      class="wrapper"
      v-bind:class="[`${name_for_class}`]"
    >
      <article class="work">
        <div>
          <p class="title">{{ title }}</p>
          <p class="date">{{ published_at }}</p>
        </div>
        <img class="top_image" :src="main_image_url" :alt="main_image_title" />
      </article>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      windowTypeNum: "0"
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
        if (window.innerWidth < 460) {
          this.windowTypeNum = "1"
        } else if (window.innerWidth < 640){
          this.windowTypeNum = "2"
        } else if (window.innerWidth < 960){
          this.windowTypeNum = "3"
        } else {
          this.windowTypeNum = "4"
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
    published_at: {
      type: Date,
      default: Date.now()
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