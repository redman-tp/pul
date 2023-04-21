<template>
  <div class="bg-gray">
    <section class="services" id="services">
      <div class="activities__wrap container">
        <h2>Our Activities</h2>

        <div class="activities__wraps">
          <Splide :options="options" aria-label="Vue Splide Example">
            <SplideSlide v-for="(activity, index) in activities" :key="index">
              <div class="activities__card">
                <i
                  v-if="activity.imgs"
                  class="ri-arrow-down-fill"
                  @click="openModal(activity)"
                ></i>
                <div class="activities__img">
                  <img :src="activity.img" alt="" />
                </div>
                <div class="det">
                  <!-- <h4>{{ activity.title }}</h4> -->
                  <p>
                    {{ activity.desc }}
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>

    <q-dialog v-model="openModals" class="activityModal">
      <q-card
        style="width: 100%; height: 100%"
        class="modal containerr"
        id="myModal"
      >
        <q-carousel swipeable animated v-model="slide" thumbnails infinite>
          <q-carousel-slide :name="1" :img-src="modalImgs[0]" />
          <q-carousel-slide :name="2" :img-src="modalImgs[1]" />
          <q-carousel-slide :name="3" :img-src="modalImgs[2]" />
          <q-carousel-slide :name="4" :img-src="modalImgs[3]" />
        </q-carousel>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { ref } from "vue";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
  data() {
    return {
      openModals: false,
      activities: [
        {
          title: "Kaduna Business Community and Gov. Nasir El Rufai",
          img: "/images/kuk1.jpeg",
          desc: `The Kukah Prize for Young Innovators was well attended by presidents and state governors of Nigeria`,
          imgs: [
            "/images/kuk2.jpeg",
            "/images/kuk3.jpeg",
            "/images/kuk4.jpeg",
            "/images/kuk5.jpeg",
          ],
        },
        {
          title: "Remote Jobs",
          img: "/images/ceospeech.jpeg",
          desc: ` CEO, Greysoft Technologies, speaks at the Kukah Prize for Young Innovators on the vision of the award`,
        },
        {
          title: "Bishop MH Kukah at Greysoft on Digital Literacy",
          img: "/images/winners.jpeg",
          desc: `Winners of the maiden edition of the Kukah Prize for Young Innovators 2022.`,
        },
        {
          title: "The Kukah Prize for Young Innovators",
          img: "/images/okwu.jpeg",
          desc: `Honorary award to Dr. Jude Onwudili of Aston University, College of Engineering.`,
        },
        {
          title: "We are Community Driven!",
          img: "/images/kadin.jpeg",
          desc: `CEO Greysoft Technologies and the Administrator, Kaduna State Capital Authority, Hafiz Bayero at the KadInvest 7.0 - Kaduna Investment Summit.`,
        },
        {
          title: "UK Aid funded Apprenticeship and Traineeship S4P Program",
          img: "/images/vr1.jpeg",
          desc: `Kaduna State becomes the first sub national government to hold its summit in the metaverse - We made this happen!`,
        },
        {
          title: "KADIPA meets GreyHobb",
          img: "/images/vr2.jpeg",
          desc: `Kaduna State experiences the metaverse in a whole new way. Digital government investment summit live on VR`,
        },
        {
          title: "Certiport Authorized Testing Center (CATC)",
          img: "/images/vr3.jpeg",
          desc: `Experience the 7th Kaduna Investmwnt Summit from the metaverse, powered by Greysoft Technologies.`,
        },
        {
          title: "Nigeria/Kaduna Startup Bill",
          img: "/images/boot.jpeg",
          desc: `Greysoft's Booth at the KadInvest 7.0 - we are committed to Emerging technologies and helping you understand and leverage it.`,
        },
        {
          title: "NFT Bootcamp",
          img: "/images/smallbus.jpeg",
          desc: `The Manzo Small Business Challenge is a business pitch event that enable Startups to win prizes on pitching their services and business strategies.`,
        },
        {
          title: "Fullstack Bootcamp",
          img: "/images/ihifix.jpeg",
          desc: `Ihifix Digital Summit on Open Governance. Greysoft's participation highlights the importance of technology in achieving transparency in governance.`,
        },
        {
          title: "Bootcamp Winners – N500,000",
          img: "/images/bill.jpeg",
          desc: `CEO Greysoft Technologies at the NABG - Bill and Melinda Gates powered regional conference on enhancing Agribusiness practices.`,
        },
        {
          title: "Greysoft Open Day",
          img: "/images/empower.jpeg",
          desc: `At Greysoft, we empower women and youth to take advantage of technology for improved livelihood.`,
        },
        {
          title: "Kids Code Class",
          img: "/images/agritech.jpeg",
          desc: ` Greysoft AgriTech Open Day - Startup Founders pitch their business to carry community along with their works.`,
        },
        {
          title: "Free/Paid Acting Class",
          img: "/images/openday1.jpeg",
          desc: ` Greysoft Open Day is an event where Founders meet Community (users of their products) for a heart to heart.`,
          imgs: ["/images/openday2.jpeg"],
        },
        {
          title: "Script Writing Conference",
          img: "/images/coworking.jpeg",
          desc: ` Co-working at Greysoft Technologies is thrilling with waves of ideas and team exchanging hands.`,
        },
        {
          title: "Script Writing Conference",
          img: "/images/kids.jpeg",
          desc: `Kids Code Class at Greysoft Technologies introduces young children to digital skills at tender ages.`,
        },
        {
          title: "GreyHobb Game Day",
          img: "/images/smallbusi.jpeg",
          desc: `Rachael Bawado wins the Manzo Small Business Challenge 2022 and bags N500,000`,
        },
        {
          title: "GreyHobb Game Day",
          img: "/images/tmax.jpeg",
          desc: `Project TMAX in partnership with the Federal Government and ITF on upskilling youth and women.`,
          imgs: ["/images/tmax1.jpeg", "/images/tmax2.jpeg"],
        },
        {
          title: "GreyHobb Game Day",
          img: "/images/s4p.jpeg",
          desc: `Greysoft Partners with the Skills for Prosperity team to enhance digital skills (from skills to jobs) powered by UKAids`,
        },
        {
          title: "GreyHobb Game Day",
          img: "/images/int.jpeg",
          desc: ` International Women's Day - Empowering Women with Digital Skill.`,
          imgs: ["/images/int1.jpeg"],
        },
        {
          title: "GreyHobb Game Day",
          img: "/images/natview.jpeg",
          desc: `CEO and COO Greysoft Technologies and the CEO, Natview Technologies at the 2022 Datathon in Kaduna.`,
        },
        {
          title: "GreyHobb Game Day",
          img: "/images/drmanzo.jpeg",
          desc: `Dr. Manzo Maigari, Chairman, Greysoft Technologies speaks on the impact of technology in African societies at the Kukah Prize for Young Innovators.`,
        },
      ],
      modalImgs: [],
      options: {
        rewind: true,
        // autoplay: true,
        arrows: false,
        perPage: 3,
        breakpoints: {
          1200: {
            perPage: 4,
          },
          1135: {
            perPage: 3,
          },
          800: {
            perPage: 2,
          },
          800: {
            perPage: 1,
          },
        },
      },
    };
  },

  methods: {
    openModal(activity) {
      console.log(activity);
      this.modalImgs = activity.imgs;
      this.openModals = true;
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  font-size: 20px;
  font-weight: 800;
}

.activities__wraps p {
  font-size: 16px;
}
.activities__wraps .activities__img img {
  width: 100%;
  height: 200px;
}
.activities__wraps .activities__card {
  min-height: 350px;
}

@media (min-width: 1000px) {
  .activities__wraps .activities__card {
    min-height: 400px;
  }
}
</style>
