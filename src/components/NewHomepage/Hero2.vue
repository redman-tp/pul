<template>
  <div class="hero2">
    <q-carousel swipeable animated v-model="slide" thumbnails infinite>
      <q-carousel-slide :name="1" img-src="/images/he.png">
        <div class="topic">
          <strong> <span>01.</span>GreySoft Technologies</strong>
          <h1>
            Increasing Digital Access <br />
            for Improved Living.
          </h1>
        </div>
        <!-- <div class="emoji">
          <Emojis />
        </div> -->
      </q-carousel-slide>
    </q-carousel>
    <div class="holder">
      <div class="left">
        <a target="_blank" href="https://web.facebook.com/greysoftng"
          ><i class="fa-brands fa-facebook-f"></i
        ></a>
        <a target="_blank" href="https://www.instagram.com/greyhobb/"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a target="_blank" href="https://twitter.com/greyhobb"
          ><i class="fa-brands fa-twitter"></i
        ></a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
          ><i class="fa-brands fa-linkedin-in"></i
        ></a>
      </div>

      <div class="right">
        <q
          >To help people leverage <br />
          technology for improved <br />
          livelihood</q
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import Emojis from "../../components/NewHomepage/Emojis.vue";
export default {
  components: {
    // Emojis,
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style scoped>
.topic {
  position: absolute;
  z-index: 2;
  right: 37%;
  padding-left: 2rem;
  top: 40%;
}

.emoji {
  position: absolute;
  z-index: 2;
  right: 63%;
  top: 55%;
}

strong {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15.9px;
  line-height: 1;
  color: #6d6d6d;
}

strong span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24.9px;
  line-height: 1;
  color: #6d6d6d;
}

h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  /* font-size: 52px; */
  line-height: 1.1;
  color: #ffffff;
  margin-top: 1.3rem;
}
.left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.holder {
  display: flex;
  gap: 4rem;
  border-bottom: 1px solid #bababa;
  padding: 1rem;
  padding-left: 5%;
  align-items: center;
  height: 138px;
}

.hero2 q {
  font-family: "Inter" !important;
  font-style: normal !important;
  font-weight: 300 !important;
  font-size: 20px !important;
  line-height: 150% !important;
  text-transform: capitalize !important;
  color: #292929 !important;
}

a {
  text-decoration: none;
}

a {
  background: rgba(48, 46, 46, 0.1);
  /* opacity: 0.1; */
  border-radius: 17.8462px;
  padding: 0.7rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
i {
  color: #302e2e;
  font-size: 1.5rem;
}

@media (min-width: 1300px) {
  .topic {
    right: 45%;
  }
}
@media (max-width: 768px) {
  strong {
    color: #fff;
  }

  strong span {
    color: #fff;
  }

  .holder {
    flex-direction: column;
    height: 100%;
    padding: 2rem 0;
    gap: 2rem;
  }

  .topic {
    right: 30%;
    top: 30%;
    /* transform: translateX(-50%); */
  }

  h1 {
    font-size: 30px;
  }

  .hero2 q {
    font-size: 20px !important;
  }
}
</style>
