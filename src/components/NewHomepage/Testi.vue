<template>
  <div class="wrapperr">
    <div class="other_cards small_container">
      <Splide
        :options="{
          rewind: true,
          gap: 10,
          perPage: 5,
          autoScroll: {
            speed: 0.5,
          },
          breakpoints: {
            640: {
              perPage: 2,
            },
            767: {
              perPage: 2,
            },
            1024: {
              perPage: 3,
            },
            2000: {
              perPage: 4,
            },
          },
        }"
        :extensions="extensions"
        aria-label="My Favorite Images"
      >
        <SplideSlide v-for="(card, index) in cards" :key="index">
          <div :class="index % 2 == 0 ? 'Omain_card ' : 'card'">
            <img
              :class="index % 2 != 0 ? 'addbor' : ''"
              src="/images/prize.png"
              alt=""
            />
            <h1
              :class="index % 2 != 0 ? 'text-black Omain_text' : 'Omain_text'"
            >
              {{ card.main }}
            </h1>

            <h2
              :class="
                index % 2 != 0 ? ' text-black Oamt q-mb-lg' : 'Oamt q-mb-lg'
              "
            >
              {{ card.amt }}
            </h2>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// Default theme
import "@splidejs/vue-splide/css";

// or only core styles
import "@splidejs/vue-splide/css/core";
export default {
  components: { Splide, SplideSlide },
  data() {
    return {
      dialog: false,
      plan: [],
      data: {},
      errors: [],
      options: {
        drag: "free",
        rewind: true,
        focus: "center",
        autoWidth: true,
        pagination: true,
        arrows: false,
        gap: 10,
        perPage: 3,
        autoScroll: {
          speed: 0.5,
        },
      },
      extensions: {
        AutoScroll,
      },
      cards: [
        {
          main: "DIAMOND",
          price: "PRICE",
          amt: " Lorem ipsum dolor sit amet, consectetur Blandit et auctor elementum egestas ante vel  maecenas felis. ",
        },
        {
          main: "PLATIUM",
          price: "PRICE",
          amt: " Lorem ipsum dolor sit amet, consectetur Blandit et auctor elementum egestas ante vel  maecenas felis. ",
        },
        {
          main: "GOLD",
          price: "PRICE",
          amt: " Lorem ipsum dolor sit amet, consectetur Blandit et auctor elementum egestas ante vel  maecenas felis. ",
        },
        {
          main: "SILVER",
          price: "PRICE",
          amt: " Lorem ipsum dolor sit amet, consectetur Blandit et auctor elementum egestas ante vel  maecenas felis. ",
        },
        {
          main: "BRONZE",
          price: "PRICE",
          amt: " Lorem ipsum dolor sit amet, consectetur Blandit et auctor elementum egestas ante vel  maecenas felis. ",
        },
        {
          main: "SUMMIT NETWORK",
          price: "PRICE",
          amt: " Lorem ipsum dolor sit amet, consectetur Blandit et auctor elementum egestas ante vel  maecenas felis. ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapperr {
  padding: 5rem 0;
}

.main_text {
  font-weight: 900;
  font-size: 34.0381px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding-top: 7rem;
}
.Omain_text {
  font-weight: 900;
  font-size: 19.9953px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding-top: 2rem;
}
.Oprice {
  font-weight: 700;
  font-size: 11.2844px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.8em;
  color: rgba(255, 255, 255, 0.43);
}
.Oamt {
  font-weight: 700;
  font-size: 16.0034px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
  padding: 2rem 3rem;
}

.price {
  font-weight: 700;
  font-size: 19.2095px;
  line-height: 117%;
  text-align: center;
  letter-spacing: 0.8em;
  color: rgba(255, 255, 255, 0.43);
}

h2.amt {
  font-weight: 700;
  font-size: 54.4796px;
  line-height: 117%;
  text-align: center;
  color: #ffffff;
}

p.open {
  font-weight: 400;
  font-size: 26.1502px;
  line-height: 117%;
  text-align: center;
  text-decoration-line: underline;
  color: #ffffff;
  cursor: pointer;
}
.addbor {
  background: #fffbfb;
  border: 6px solid #550619;
}
.pack {
  font-weight: 500;
  font-size: 24px;
  line-height: 117%;
  text-align: center;
  color: #3a1f12;

  margin-top: 2rem;
}
h2.head {
  font-weight: 700;
  font-size: 60px;
  line-height: 117%;
  text-align: center;
  text-transform: capitalize;
  color: #1f1b5e;
}

/* small cards */
.Omain_card {
  border-radius: 6.40068px;
  position: relative;
  padding-top: 3rem;
  min-height: 350px;
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    207.09deg,
    #8d354a 16.92%,
    rgba(171, 4, 44, 0.78) 113.39%
  );
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.Omain_card img {
  width: 90px;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 20.7647px 71.878px 20.7647px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  object-fit: contain;
  height: 90px;
}

.card {
  border-radius: 6.40068px;
  position: relative;
  padding-top: 3rem;
  min-height: 350px;
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.card img {
  width: 90px;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 20.7647px 71.878px 20.7647px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  object-fit: contain;
  height: 90px;
}

.become {
  margin-top: 4rem;
  background: linear-gradient(180deg, #150f70 0%, #463cdf 100%);
}

@media (max-width: 800px) {
  h2.head {
    font-size: 50px;
  }
  h2.amt {
    font-size: 45px;
  }
}
</style>
