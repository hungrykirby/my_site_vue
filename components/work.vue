<template>
  <div
    class="top"
    v-bind:class="{'scroll-active': isInScreen || true}"
  >
    <nuxt-link
      :to="{ name: 'work-slug', params: {
        sys: id,
        slug: slug
      }}"
      class="wrapper"
      v-bind:class="[`${name_for_class}`]"
    >
      <article class="work">
        <div class="not-display-before-load" v-bind:class="{'loaded': loaded}">
          <p class="title">{{ title }}</p>
          <p class="date">{{ published_at }}</p>
        </div>
        <img class="top_image" v-bind:src="main_image_url" v-bind:alt="main_image_title" v-on:load="onLoaded"  />
      </article>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollY: 0,
      height: 0,
      position: 0,
      loaded: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
    window.addEventListener('load', () => {
      this.onScroll()
      this.onResize()
    })
  },
  computed:{
    isInScreen(){
      if((this.height !== 0 && this.position < 1 * this.height / 2) ||
        (process.browser && this.scrollY + this.height - document.body.scrollHeight + 50 >= 0
      )){
        return true
      }else{
        if(this.height === 0){
          if(process.browser){
            this.height = document.documentElement.clientHeight
          }
        }
        return false
      }
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
      this.onScroll();
      this.onResize();
    },
    onScroll () {
      this.scrollY = window.pageYOffset;
      this.position = this.getPosition();
    },
    onResize () {
      this.height = document.documentElement.clientHeight
    },
    getPosition () {
      if(this.$el){
        return this.$el.getBoundingClientRect().top
      }else{
        return 0
      }
    },
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
    slug: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    published_at: {
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
