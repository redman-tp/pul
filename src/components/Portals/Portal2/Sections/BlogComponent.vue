<template>
  <!--
        - #BLOG
      -->

  <section
    class="section blog has-bg-image"
    id="blog"
    aria-label="blog"
    style="background-image: url('/pe/blog-bg.svg')"
  >
    <div class="container">
      <p class="section-subtitle">Latest Articles</p>

      <h2 class="h2 section-title">Get News With Eduweb</h2>

      <ul class="grid-list" v-if="blog_posts.length">
        <li v-for="post in blog_posts" :key="post.id">
          <div class="blog-card">
            <figure
              class="card-banner img-holder has-after"
              style="--width: 370; --height: 370"
            >
              <img
                :src="post.image"
                width="370"
                height="370"
                loading="lazy"
                alt="Become A Better Blogger: Content Planning"
                class="img-cover"
              />
            </figure>

            <div class="card-content">
              <router-link
                :to="{
                  name: 'portal.post',
                  params: { portal: page.portal.slug, post: post.slug },
                }"
                href="#"
                class="card-btn"
                aria-label="read more"
              >
                <i class="fa-duotone fa-arrow-right"></i>
              </router-link>

              <!-- <a href="#" class="card-subtitle">{{post.subtitle}}</a> -->

              <h3 class="h3">
                <router-link
                  :to="{
                    name: 'portal.post',
                    params: { portal: page.portal.slug, post: post.slug },
                  }"
                  class="card-title"
                  >{{ post.title }}
                </router-link>
              </h3>

              <ul class="card-meta-list">
                <li class="card-meta-item">
                  <i class="fa-duotone fa-calendar-days"></i>

                  <span class="span">{{
                    date.formatDate(post.created_at, "MMM DD, YYYY")
                  }}</span>
                </li>

                <!-- <li class="card-meta-item">
                  <i class="fa-duotone fa-comments"></i>

                  <span class="span">Com 09</span>
                </li> -->
              </ul>

              <p class="card-text">
                {{ post.exerpt }}

                <router-link
                  :to="{
                    name: 'portal.post',
                    params: { portal: page.portal.slug, post: post.slug },
                  }"
                  style="display: inline-block"
                  class="text-primary"
                >
                  Read More
                </router-link>
              </p>
            </div>
          </div>
        </li>
      </ul>

      <img
        src="/pe/blog-shape.png"
        width="186"
        height="186"
        loading="lazy"
        alt=""
        class="shape blog-shape"
      />
    </div>
  </section>
</template>

<script>
import { date } from "quasar";
export default {
  name: "BlogComponent",
  props: {
    page: {
      type: Object,
      default: () => ({}),
    },
    section: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    return {
      date,
    };
  },
  created() {
    this.loadPosts();
  },
  data() {
    return {
      blog_posts: [],
    };
  },
  methods: {
    loadPosts() {
      this.loading_featured_posts = true;
      this.$api
        .get(`portals/${this.page.portal_id}/blogs?limit=3`)
        .then(({ data }) => {
          this.loading_featured_posts = false;
          this.blog_posts = data.data;
        })
        .catch((e) => {
          this.loading_featured_posts = false;
          this.$plugins.reader.error(e);
        });
    },
  },
};
</script>
