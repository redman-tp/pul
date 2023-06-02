<template>
  <div class="wrapper">
    <div class="hold container">
      <div class="who">Our Think-Hat Crew</div>
      <p class="desc">
        We are a prolific team of experienced innovators who continuously
        tinker, question, and turn challenges into opportunities, unveiling
        market-ready solutions for our communities. When we are not about
        creating solutions, you can find us in the passionate space of our
        favorite sports, movies, and hangout venue.
      </p>
    </div>

    <!-- <div>Milo</div> -->
    <div class="grid">
      <figure v-for="(staff, index) in staffs" :key="index" class="effect-milo">
        <div class="img">
          <img :src="staff.img" :alt="staff.name" />
        </div>

        <figcaption>
          <span class="socials row items-center">
            <a href="">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
          <div>
            {{ staff.name }} <br />
            <span>{{ staff.position }}</span>
          </div>

          <!-- <p>Milo went to the woods. He took a fun ride and never came back.</p> -->
          <!-- <a href="#">View more</a> -->
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffs: [
        {
          name: "Dr. Manzo Maigari",
          position: "Chairman, Greysoft Technologies",
          linkedIn: "",
          img: "/images/dr.png",
          twitter: "",
          quote: "",
        },
        {
          name: "Isah Raphael",
          position: "CEO/CTO",
          linkedIn: "",
          img: "/images/ralph.png",
          twitter: "",
          quote: "",
        },
        {
          name: "Dr. Dala Alphonso",
          position: "Chief Information Officer",
          linkedIn: "https://www.linkedin.com/in/raphael-isah-93a98a104/",
          img: "/images/dala.jpeg",
          twitter: "https://twitter.com/RealRalphG",
          quote: "",
        },
        {
          name: "Michael Ogungbe",
          position: "Chief Operations Officer",
          img: "/images/bigmike.png",
          linkedIn: "",
          twitter: "",
          quote: "",
        },
        // {
        //   name: "Bilal Salau",
        //   position: "Chief Creative Director",
        //   img: "/images/bil.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        // {
        //   name: "Victor Peter",
        //   position: "Chief Technical Officer",
        //   img: "/images/vic.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        {
          name: "Stephanie Akut",
          position: "Human Resource Manager",
          img: "/images/stef.jpeg",
          linkedIn: "",
          twitter: "",
        },
        // {
        //   name: "Mariya bilal",
        //   position: "Community Manager",
        //   img: "/images/mariya.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        // {
        //   name: "Favour Bulus",
        //   position: "Production Lead",
        //   img: "/images/bulus.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        {
          name: "Emmanuel Nwabuodafi",
          position: "Lead Frontend Engineer",
          img: "/images/emma.png",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Joshua Nnamani",
          position: " Backend Engineer",
          img: "/images/josh.png",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Jerry Kaduma(Rico)",
          position: "VR Engineer",
          img: "/images/rico.jpg",
          linkedIn: "",
          twitter: "",
        },
        // {
        //   name: "Helen",
        //   position: "Secretary",
        //   img: "/images/helena.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        {
          name: "Ademola Adewale",
          position: "Lead Product Designer",
          img: "/images/sirgappy.png",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "John Obi",
          position: "Lead Backend Engineer",
          img: "/images/john.png",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Victor Idumufinide",
          position: "Lead Photographer",
          img: "/images/victor.png",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Nancy Baba-Al",
          position: "Head of Marketing",
          img: "/images/nancy.jpg",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Keren Bush",
          position: "Administrative Assistant",
          img: "/images/juju.jpg",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Chidinma Nwonye",
          position: "Content Writer",
          img: "/images/dinma.jpg",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Tadongyi Fyada",
          position: "Assistant Creative Director",
          img: "/images/juju1.jpg",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Freeman Gerard Alibaba",
          position: "3D Animation and Design",
          img: "/images/gerald.jpg",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Abdullahi Saidu",
          position: "UX/UI Designer",
          img: "/images/abdul.png",
          linkedIn: "",
          twitter: "",
        },
        {
          name: "Tobi Ikupolati",
          position: "Frontend Engineer",
          img: "/images/tobi.png",
          linkedIn: "",
          twitter: "",
        },
        // {
        //   name: "Kate Mcarthy",
        //   position: "Videographer",
        //   img: "/images/kate.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        // {
        //   name: "Ekoh",
        //   position: "Digital Marketer",
        //   img: "/images/ekoh.png",
        //   linkedIn: "",
        //   twitter: "",
        // },
        {
          name: "Ayuba Dauda",
          position: "Devops Engineer",
          img: "/images/ayuba.png",
          linkedIn: "",
          twitter: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 3rem;
  background: rgba(34, 34, 34, 0.1);
}

.hold {
  margin: 5rem auto 5rem;
}
.who {
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  text-transform: capitalize;
  color: #8d354a;
}

p.desc {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  /* font-size: 35px; */
  font-size: 25px;
  line-height: 130%;
  text-align: justify;
  color: #000000;
  margin-top: 1rem;
}

img {
  height: 100%;
}

.grid {
  position: relative;
  margin: 0 0.5rem;
  padding: 1em 0 4em;
  /* max-width: 1000px; */
  list-style: none;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 0.4rem;
  z-index: 10;
}

/* Common style */
.grid figure {
  position: relative;
  float: left;
  overflow: hidden;
  /* margin: 10px 1%; */
  min-width: 220px;
  max-width: 480px;
  max-height: 360px;
  /* width: 48%; */
  /* background: #3085a3; */
  text-align: center;
  cursor: pointer;
}

.grid figure img {
  position: relative;
  display: block;
  min-height: 100%;
  max-width: 100%;
  /* height: 300px; */
  /* object-position: top; */
  object-fit: contain;
  opacity: 0.8;
}

.grid figure figcaption {
  padding: 2em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.socials {
  position: absolute;
  right: 12%;
  top: 5%;
  flex-wrap: nowrap;
  z-index: 2;
  gap: 0.5rem;
}
.socials i {
  color: #fff;
}

.grid figure div {
  /* word-spacing: -0.15em; */
  font-weight: 800;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  color: #ffffff;
}

.grid figure div span {
  font-weight: 300;
  font-size: 12px;
}

.grid figure div,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

figure.effect-milo {
  position: relative;
}

figure.effect-milo .img {
  max-width: none;
  width: -webkit-calc(100% + 60px);
  width: calc(100% + 60px);
  position: relative;
  opacity: 1;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-30px, 0, 0) scale(1.12);
  transform: translate3d(-30px, 0, 0) scale(1.12);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

figure.effect-milo .img::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: 1;
}

/* figure.effect-milo:hover img {
  opacity: 0.5;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
} */
figure.effect-milo:hover .img::before {
  -webkit-transform: translate3d(0, 25%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, 25%, 0) translate3d(0, -40px, 0);
  /* background: none; */
  transition: all 1.5s ease-in;
  /* padding: 1rem 0 4rem; */
  top: 57%;
}

figure.effect-milo div {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 1em 1.2em;
  z-index: 2;
}

figure.effect-milo p {
  padding: 0 10px 0 0;
  width: 100%;
  z-index: 2;
  position: relative;
  border-right: 1px solid #fff;
  text-align: right;
  margin-top: 2rem;
  opacity: 0;
  font-size: 0.75rem;
  -webkit-transition: opacity 0.35s, -webkit-transform 2s;
  /* -webkit-transition: opacity 0.35s, -webkit-transform 0.35s; */
  transition: opacity 0.35s, transform 2s;
  /* transition: opacity 0.35s, transform 0.35s; */
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-50px, 0, 0);
}

figure.effect-milo:hover p {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

@media (min-width: 1300px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  figure.effect-milo:hover .img::before {
    top: 62%;
  }
}
@media (max-width: 768px) {
  .hold {
    margin: 2rem auto 5rem;
  }
  .wrapper {
    padding-top: 6rem;
  }
  .grid {
    margin: 1rem;
  }
}
</style>
