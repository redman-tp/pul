<template>
  <section class="join">
    <div class="join_hold">
      <div class="joi">
        <h2>{{ section.title }}</h2>
        <div class="begin">{{ section.subtitle }}</div>
      </div>

      <div class="join_det" v-if="section.list">
        <div class="joins" v-for="(item, i) in section.list" :key="i">
          <i class="fa-duotone fa-check"></i>
          <span>{{ item }}</span>
        </div>
      </div>

      <div class="join_now">
        <a :target="section.link.target" :href="section.link.url">{{
          section.link.title
        }}</a>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
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
};
</script>

<style scoped>
@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.1);
  }
}
/* .play .play-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #0aafe3;
  border: 1px solid #ffc702;
  animation: pulseAnim 2s forwards infinite;
} */

.join {
  background: url("/pe/mul.png") no-repeat center/cover;
  position: relative;
  height: 80vh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.join::before {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.84);
}

.join_hold {
  position: relative;
  z-index: 10;
  display: flex;
  gap: 3.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.join_hold .begin {
  font-weight: 400;
  font-size: 35.418px;
  line-height: 122%;
  text-align: center;
  margin-top: 0.7rem;
  color: #ffffff;
}

.join .joins {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.join .joins i {
  background: #00ab30;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.join h2 {
  color: #fff;
  text-align: center;
}
.join .join_det {
  color: #fff;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.join .join_det span {
  display: flex;
  align-items: center;
}
/* .join_now {
  margin-top: 4rem;
} */
.join .join_now a {
  padding: 27.5406px 39.5896px;
  width: 185.18px;
  height: 70.08px;
  background: #0aafe3;
  border-radius: 10px;
  display: inline-block;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  .join_hold .begin {
    font-size: 20.418px;
  }
}
@media (max-width: 500px) {
  .join_hold h2 {
    font-size: 2rem;
  }

  .join .join_now a {
    padding: 27.5406px 39.5896px;
    width: 180.18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60.08px;
  }
}
</style>
