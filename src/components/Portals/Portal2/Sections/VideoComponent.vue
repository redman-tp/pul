<template>
  <!--
        - #VIDEO
      -->

  <section
    class="video has-bg-image"
    aria-label="video"
    style="background-image: url('/pe/video-bg.png')"
  >
    <div class="container">
      <div class="video-card">
        <div
          class="video-banner img-holder has-after"
          style="--width: ; --height: "
        >
          <img
            :src="section.image"
            width="970"
            height="550"
            loading="lazy"
            alt="video banner"
            class="img-cover"
          />

          <button class="play-btn" aria-label="play video">
            <i class="fa-solid fa-play"></i>
          </button>
        </div>

        <img
          src="/pe/video-shape-1.png"
          width="1089"
          height="605"
          loading="lazy"
          alt=""
          class="shape video-shape-1"
        />

        <img
          src="/pe/video-shape-2.png"
          width="158"
          height="174"
          loading="lazy"
          alt=""
          class="shape video-shape-2"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoComponent",
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
    return {};
  },
};
</script>
