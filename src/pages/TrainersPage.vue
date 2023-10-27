<template>
  <div>
    <section class="section-team">
      <div class="container q-mt-xl">
        <img src="/images/flow2.png" alt="" />
      </div>
      <div v-for="(trainer, index) in trainers" :key="index" class="container">
        <div class="row justify-center text-center">
          <div class="col-md-12 col-lg-6">
            <div class="header-section">
              <h2 class="title">{{ trainer.title }}</h2>
            </div>
          </div>
        </div>
        <!-- {{ classObject }} -->
        <div :class="classObject(trainer.trainersData)">
          <div
            v-for="(tutor, index) in trainer.trainersData"
            :key="tutor.name + index"
            class=""
          >
            <div class="single-person">
              <div class="person-image">
                <img :src="tutor.img" alt="" />
                <span v-if="tutor.role_icon" class="icon">
                  <i :class="tutor.icon"></i>
                </span>
              </div>
              <div class="person-info">
                <h3 class="full-name">{{ tutor.name }}</h3>
                <!-- <span class="speciality">Web Developer</span> -->

                <q-btn
                  v-if="trainer.title === 'Trainers'"
                  @click="handleReadbio(tutor)"
                  class="q-mt-md"
                  color="primary"
                  no-caps
                  no-wrap
                  >Read Bio
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TrainingGalleryVue />
    <q-dialog v-model="readModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Read More</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>{{ tutorObj.bio }}</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import TrainingGalleryVue from "src/components/TrainingGallery.vue";
import { computed, ref } from "vue";
let readModal = ref(false);
let tutorObj = ref({});

const handleReadbio = (tutordata) => {
  console.log(tutordata);
  tutorObj.value = tutordata;
  readModal.value = true;
};
const classObject = (param) => {
  if (param.length === 1) {
    return "grid one";
  } else if (param.length === 2) {
    return "grid two";
  } else if (param.length === 3) {
    return "grid three";
  } else if (param.length > 4) {
    return "grid four";
  } else {
    return "grid";
  }
};
let trainers = ref([
  // {
  //   title: "Master Trainer",
  //   trainersData: [
  //     {
  //       name: "Michael Ogungbe",
  //       role: "",
  //       img: "/images/bigmike.png",
  //       icon: "",
  //       role_icon: false,
  //     },
  //   ],
  // },
  // {
  //   title: "Cordinator and Accessor",
  //   trainersData: [
  //     {
  //       name: "Michael Ogungbe",
  //       role: "",
  //       role_icon: false,
  //       img: "/images/bigmike.png",
  //     },
  //     {
  //       name: "Ayuba Dauda",
  //       role: "",
  //       role_icon: false,
  //       img: "/images/ayuba.png",
  //     },
  //   ],
  // },
  // {
  //   title: "GESI and Safe guarding personel",
  //   trainersData: [
  //     {
  //       name: "Michael Ogungbe",
  //       role: "",
  //       role_icon: false,
  //       img: "/images/bigmike.png",
  //     },
  //   ],
  // },
  {
    title: "Trainers",
    trainersData: [
      {
        name: "Paul Udo",
        role_icon: true,
        img: "/images/paul.jpeg",
        role: "Software Engineer",
        icon: "fa-solid fa-code",
        bio: "I am a highly experienced software engineer with a passion for sharing knowledge and nurturing the next generation of tech professionals. With over 8 years of industry experience, I have a deep understanding of software development and principles and I am well versed in Software Design, Requirement gathering, Testing, Debugging, maintenance etc.",
      },
      {
        name: "Nancy Baba Ali ",
        role_icon: true,
        img: "/images/nancy.jpeg",
        role: "UI/UX Designer",
        icon: "fa-solid fa-pen",
        bio: "Nancy is a young lady who believes in the  power of knowledge. Passing this knowledge to the younger generation will be an honor and a privilege to do so. ",
      },
      {
        name: "Habiba Haruna",
        role_icon: true,
        img: "/images/haruna.jpeg",
        role: "Data Scientist",
        icon: "fa-solid fa-database",
        bio: "As an economics graduate with a passion for data science, I'm committed to helping students understand the intricacies of the economy and the power of data analysis.",
      },
      {
        name: "Ikupolati Tobi Emmanuel ",
        role_icon: true,
        img: "/images/tobi.png",
        role: "Software Engineer",
        icon: "fa-solid fa-code",
        bio: "I am a passionate frontend developer with three years of professional experience. However, my true passion lies in sharing my knowledge and helping others succeed in the exciting field of frontend development. Throughout my career, I have not only honed my coding skills but have also embarked on tutoring boot camps for aspiring frontend developers. These boot camps have allowed me to connect with individuals who are eager to learn and grow in this ever-evolving industry. I find immense joy in guiding them through the intricacies of frontend development, empowering them to unleash their creativity and build remarkable user experiences. My tutoring approach is founded on the belief that learning should be an engaging and enjoyable journey. I strive to create a supportive and collaborative environment where students feel comfortable asking questions, exploring new concepts, and pushing their boundaries. By tailoring my teaching methods to accommodate different learning styles, I ensure that each student receives the personalized attention they need to thrive.",
      },
      {
        name: "Gerard Alibaba Freeman",
        role_icon: true,
        img: "/images/gerald.jpg",
        role: "Animation/XR",
        icon: "fa-solid fa-gear",
        bio: "I'm Gerard Freeman, a dedicated 3D Artist and Animator. With a deep passion for creating immersive visual experiences, my portfolio showcases a diverse collection of 3D animations, character designs. I am holding a BSc degree from Nasarawa State University, Keffi, Nigeria. My portfolio showcases a diverse collection of 3D animations and character designs.",
      },
      {
        name: "Jibrin Jaafaru",
        role_icon: true,
        img: "/images/jibrin.jpeg",
        role: "AL/ML",
        icon: "fa-solid fa-robot",
        bio: "Jibrin is a skilled ML Engineer with an extensive theoretical foundation and practical background in Machine Learning and applied AI. He currently works as an ML Engineer at Greysoft Technologies. Additionally, Jibrin spearheads the FiveMinutes app as its CEO and Co-Founder.",
      },
      {
        name: "Okunola Kehinde Daniel",
        role_icon: true,
        img: "/images/kehinde.jpeg",
        role: "UI/UX Designer",
        icon: "fa-solid fa-pen",
        bio: "I'm a product designer and trainer who loves solving problems through attractive and practical designs. In various design roles, I've been fortunate to create, develop, and conceptualize a wide range of SaaS products for brands in Fintech, Agriculture, and Healthtech.",
      },
      {
        name: "Nafisa Lawal Idris",
        role_icon: true,
        img: "/images/nafisa.jpeg",
        role: "Data Scientist",
        icon: "fa-solid fa-database",
        bio: "Nafisa Lawal Idris is a pioneering Lead Data Scientist at Greysoft Technologies, with a rich background in BSc Statistics and PGD Management. Over three dynamic years in the tech industry, she has excelled in diverse sectors such as EdTech and Extended Reality. Nafisa is not just a technical expert but also a passionate advocate for empowering women in technology. She mentors for prestigious organizations like Kaggle and Women in Data Science (WiDS) Nigeria, while also serving as a Global Ambassador for WomenTech Network and Women in Data Science Worldwide (WiDS). Nafisa's dedication to innovation, blockchain technology, and integrating artificial intelligence into data analysis processes showcases her commitment to pushing the boundaries of data science possibilities.",
      },
      {
        name: "Umar Kabir",
        role_icon: true,
        img: "/images/umar.png",
        role: "Data Scientist",
        icon: "fa-solid fa-database",
        bio: "With a strong educational background in Data Science at Qwasar Silicon Valley and Explore Data Science Academy. Umar Kabir has skills in machine learning, data visualization, and Python programming. Umar Kabir is a Data Scientist and Business Analyst with a passion for mentoring and educating aspiring data enthusiasts, Umar has leveraged his expertise to become a student guardian at Qwasar Silicon Valley. His hands-on experience in diverse projects, demonstrating a comprehensive understanding of complex data-driven challenges.",
      },
      {
        name: "Praise Ogunleye ",
        role_icon: true,
        img: "/images/praise.jpg",
        role: "Software Engineer",
        icon: "fa-solid fa-code",
        bio: "I am Passionate and driven",
      },
    ],
  },

  {
    title: "UI/UX Trainers",
    trainersData: [
      {
        name: "Nancy Baba Ali ",
        role: "",
        role_icon: true,
        img: "/images/nancy.jpeg",
        icon: "fa-solid fa-pen",
        bio: "Nancy is a young lady who believes in the  power of knowledge. Passing this knowledge to the younger generation will be an honor and a privilege to do so. ",
      },
      {
        name: "Okunola Kehinde Daniel",
        role_icon: true,
        role: "",
        img: "/images/kehinde.jpeg",
        icon: "fa-solid fa-pen",
        bio: "I'm a product designer and trainer who loves solving problems through attractive and practical designs. In various design roles, I've been fortunate to create, develop, and conceptualize a wide range of SaaS products for brands in Fintech, Agriculture, and Healthtech.",
      },
    ],
  },
  {
    title: "Software Development Trainers",
    trainersData: [
      {
        name: "Paul Udo",
        role_icon: true,
        role: "",
        img: "/images/paul.jpeg",

        icon: "fa-solid fa-code",
        bio: "I am a highly experienced software engineer with a passion for sharing knowledge and nurturing the next generation of tech professionals. With over 8 years of industry experience, I have a deep understanding of software development and principles and I am well versed in Software Design, Requirement gathering, Testing, Debugging, maintenance etc.",
      },
      {
        name: "Ikupolati Tobi Emmanuel ",
        role_icon: true,
        role: "",
        img: "/images/tobi.png",
        icon: "fa-solid fa-code",
        bio: "I am a passionate frontend developer with three years of professional experience. However, my true passion lies in sharing my knowledge and helping others succeed in the exciting field of frontend development. Throughout my career, I have not only honed my coding skills but have also embarked on tutoring boot camps for aspiring frontend developers. These boot camps have allowed me to connect with individuals who are eager to learn and grow in this ever-evolving industry. I find immense joy in guiding them through the intricacies of frontend development, empowering them to unleash their creativity and build remarkable user experiences. My tutoring approach is founded on the belief that learning should be an engaging and enjoyable journey. I strive to create a supportive and collaborative environment where students feel comfortable asking questions, exploring new concepts, and pushing their boundaries. By tailoring my teaching methods to accommodate different learning styles, I ensure that each student receives the personalized attention they need to thrive.",
      },
      {
        name: "Praise Ogunleye",
        role: "",
        role_icon: true,
        img: "/images/praise.jpg",
        icon: "fa-solid fa-code",
        bio: "I am Passionate and driven",
      },
    ],
  },
  {
    title: "Data Science Trainers",
    trainersData: [
      {
        name: "Habiba Haruna",
        role_icon: true,
        role: "",
        img: "/images/haruna.jpeg",
        bio: "As an economics graduate with a passion for data science, I'm committed to helping students understand the intricacies of the economy and the power of data analysis.",
        icon: "fa-solid fa-database",
      },
      {
        name: "Nafisa Lawal Idris ",
        role_icon: true,
        role: "",
        img: "/images/nafisa.jpeg",
        bio: "Nafisa Lawal Idris is a pioneering Lead Data Scientist at Greysoft Technologies, with a rich background in BSc Statistics and PGD Management. Over three dynamic years in the tech industry, she has excelled in diverse sectors such as EdTech and Extended Reality. Nafisa is not just a technical expert but also a passionate advocate for empowering women in technology. She mentors for prestigious organizations like Kaggle and Women in Data Science (WiDS) Nigeria, while also serving as a Global Ambassador for WomenTech Network and Women in Data Science Worldwide (WiDS). Nafisa's dedication to innovation, blockchain technology, and integrating artificial intelligence into data analysis processes showcases her commitment to pushing the boundaries of data science possibilities.",
        icon: "fa-solid fa-database",
      },
      {
        name: "Umar Kabir",
        role: "",
        role_icon: true,
        img: "/images/umar.png",
        bio: "With a strong educational background in Data Science at Qwasar Silicon Valley and Explore Data Science Academy. Umar Kabir has skills in machine learning, data visualization, and Python programming. Umar Kabir is a Data Scientist and Business Analyst with a passion for mentoring and educating aspiring data enthusiasts, Umar has leveraged his expertise to become a student guardian at Qwasar Silicon Valley. His hands-on experience in diverse projects, demonstrating a comprehensive understanding of complex data-driven challenges.",
        icon: "fa-solid fa-database",
      },
    ],
  },
  {
    title: "Animation/XR",
    trainersData: [
      {
        name: "Gerard Alibaba Freeman",
        role_icon: true,
        role: "",
        img: "/images/gerald.jpg",
        bio: "I'm Gerard Freeman, a dedicated 3D Artist and Animator. With a deep passion for creating immersive visual experiences, my portfolio showcases a diverse collection of 3D animations, character designs. I am holding a BSc degree from Nasarawa State University, Keffi, Nigeria. My portfolio showcases a diverse collection of 3D animations and character designs.",
        icon: "fa-solid fa-gear",
      },
    ],
  },
  {
    title: "AI/ML",
    trainersData: [
      {
        name: "Jibrin Jaafaru",
        role_icon: true,
        role: "",
        img: "/images/jibrin.jpeg",
        bio: "Jibrin is a skilled ML Engineer with an extensive theoretical foundation and practical background in Machine Learning and applied AI. He currently works as an ML Engineer at Greysoft Technologies. Additionally, Jibrin spearheads the FiveMinutes app as its CEO and Co-Founder.",
        icon: "fa-solid fa-robot",
      },
    ],
  },
  {
    title: "Digital Marketing",
    trainersData: [
      {
        name: "Kehinde Odeyemi",
        role: "",
        role_icon: true,
        img: "/images/kehind.jpeg",
        icon: "fa-solid fa-globe",
        bio: "Kehinde ODEYEMI is a humanitarian and a digital marketer. He is the Founder of The Echo Digital Marketing Company (the organizer of T.E.D Invasion Conference). He founded T.E.D company on the 1st of August 2017 and has led the company to handle over 1700 jobs or solved over 1700 problems for companies, businesses and individuals within 75 months of inception.",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.container {
  margin: 4rem auto;
}

.q-card {
  min-width: 500px;
}
.section-team {
  margin-top: 0;
  padding-top: 4rem;
}

.section-team h2 {
  max-width: 700px;
}
.grid {
  place-items: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  place-items: center;
}

@media (min-width: 900px) {
  .grid.four {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .grid.two {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 2rem;
  }
  .grid.three {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 2rem;
  }
}

.section-team {
  font-family: "Poppins", sans-serif;
  // padding: 80px 0;
}

.section-team .header-section {
  margin-bottom: 50px;
}

.section-team .header-section .small-title {
  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 500;
  color: rgba(141, 53, 74, 0.34);
}

.section-team .header-section .title {
  font-weight: 700;
  font-size: 45px;
  line-height: 1.1;
}

.section-team .single-person {
  margin-top: 30px;
  padding: 30px;
  background-color: #f6f9ff;
  border-radius: 5px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  cursor: pointer;
  min-height: 330px;
  transition: all 0.5s ease-in-out;
}

.section-team .single-person:hover {
  background: linear-gradient(to right, #cf0635, #ab042c);
}

.section-team .single-person .person-image {
  position: relative;
  margin-bottom: 50px;
  border-radius: 50%;
  border: 4px dashed transparent;
  transition: padding 0.3s;
}

.section-team .single-person:hover .person-image {
  // padding: 12px;
  border: 4px dashed #fff;
}

.section-team .single-person .person-image img {
  width: 150px;
  max-width: 150px;
  height: 150px;
  object-position: top;
  border-radius: 50%;
}

.section-team .single-person .person-image .icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 60px;
  text-align: center;
  background: linear-gradient(to right, #ab042c, #ab042c);
  color: #fff;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 1rem;
  }
}

.section-team .single-person:hover .person-image .icon {
  background: none;
  background-color: #fff;
  color: #ab042c;
}

.section-team .single-person .person-info .full-name {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
  // white-space: nowrap;
}

.section-team .single-person .person-info .speciality {
  text-transform: uppercase;
  font-size: 14px;
  color: #ab042c;
}

.section-team .single-person:hover .full-name,
.section-team .single-person:hover .speciality {
  color: #fff;
}
.section-team .grid > div {
  max-width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 1100px) {
  .section-team .single-person {
    width: 250px;
  }
}
@media (max-width: 700px) {
  .section-team .header-section .title {
    font-size: 30px;
  }

  .section-team .single-person {
    max-width: 100%;
  }
  .q-card {
    min-width: 100%;
  }
}
</style>
