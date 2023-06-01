<template>
  <div>
    <div class="grid main section max container">
      <div class="left">
        <div class="show">
          <div class="main_text">Upskill with GreyAcademy</div>
          <div class="subtext">From Skills to Jobs</div>
        </div>

        <div class="desc">
          If you’re ready to upskill with GreyAcademy Now’s your chance to roll
          with champions! GreyAcademy is thrilled to announce our comprehensive
          training program starting on 1st May 2023. Our program is designed to
          equip individuals with the skills needed to succeed in today's
          fast-paced digital world. With courses ranging from Digital Marketing,
          Data Science & Analytics, Web Development/Frontend Programming,
          Product Design (UI/UX)...
        </div>
        <div class="read">
          <q-btn flat @click="read(mainText)">
            Read More <i class="fa-solid q-ml-sm fa-arrow-right"></i
          ></q-btn>
        </div>

        <div class="btn q-pt-md">
          <q-btn target="_blank" href="https://forms.gle/UN4GGjH74Va6v3aV9">
            Enroll now <i class="fa-solid q-ml-sm fa-arrow-right"></i>
          </q-btn>

          <!-- <q-btn @click="scroll">
            Enroll now <i class="fa-solid q-ml-sm fa-arrow-right"></i>
          </q-btn> -->
          <q-btn
            target="_blank"
            color="primary"
            class="q-ml-sm"
            href="https://paystack.com/pay/greyacademy"
          >
            Make Payment <i class="fa-solid q-ml-sm fa-arrow-right"></i>
          </q-btn>
        </div>
      </div>

      <div class="right">
        <div class="non">
          <div class="main_text">Upskill with GreyAcademy</div>

          <div class="subtext">From Skills to Jobs</div>
        </div>
        <img src="/images/course.jpg" alt="" />
      </div>
    </div>
    <div class="max cour">
      <div class="main_text q-pb-md">Our courses</div>
      <div class="courses_wrap q-pb-lg">
        <div
          v-for="(course, index) in courses"
          :key="index"
          class="courses_card"
        >
          <img :src="course.img" :alt="course.name" />
          <div class="subtext">
            {{ course.name }}
          </div>
          <div class="text-weight-bold q-mb-sm text-green text_price">
            NGN 92, 000
            <span class="text-red text_price_red">NGN 115, 000</span>
          </div>
          <div class="desc">
            {{ course.smallDesc }}
            <div class="read">
              <q-btn flat @click="read(course)">
                Read More <i class="fa-solid q-ml-sm fa-arrow-right"></i
              ></q-btn>
            </div>
            <q-btn class="enrolll" @click="scroll">
              Enroll now <i class="fa-solid q-ml-sm fa-arrow-right"></i>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
    <div id="register" class="grid max reverse q-pb-xl section container">
      <div class="left">
        <div class="subtext steps">Steps to Enroll</div>
        <ul type="I">
          <li>
            Make Payment
            <!-- <a
              target="_blank"
              class=""
              href="https://paystack.com/pay/greyacademy"
              >Click here</a
            > -->
          </li>
          <li>Get a screenshot of Evidence of Payment</li>
          <li>
            Fill out the enrollment form
            <!-- <a target="_blank" href="https://forms.gle/UN4GGjH74Va6v3aV9"
              >Click here</a
            > -->
          </li>
          <li>Start class on 1 st May, 2023 - Get certified in 2months</li>
        </ul>
        <div class="subtext color">
          For: Part payments: Pay to: <br />
          Greysoft Technologies <br />
          Sterling Bank Plc <br />
          0087979922
        </div>

        <div id="enroll" class="enroll q-pb-xl">
          <q-btn
            class="q-py-md q-px-sm q-ml-md"
            target="_blank"
            href="https://paystack.com/pay/greyacademy"
          >
            Make Payment <i class="fa-solid q-ml-sm fa-arrow-right"></i>
          </q-btn>
          <q-btn
            target="_blank"
            href="https://docs.google.com/forms/d/1rV3s_7Upghs1rTun_90EykOTN7Rrcpq0hfbMZqZhuPo/edit"
            class="q-py-md q-px-lg"
            color="red"
          >
            Enroll now <i class="fa-solid q-ml-sm fa-arrow-right"></i>
          </q-btn>
        </div>

        <div class="row q-mt-lg copy items-center justify-between">
          <div>
            Copyright © {{ new Date().getFullYear() }} Greysoft Technologies
          </div>

          <q-btn @click="refund = true" flat> Refund Policy </q-btn>
        </div>
      </div>

      <div class="right det">
        <div class="top_text">
          <div class="span">
            <img class="line" src="/images/line.png" alt="" />
          </div>
          <div>Register Now</div>
        </div>
        <div class="img">
          <img src="/images/register.jpg" alt="" />
        </div>
        <div class="top_text q-pt-md">
          <div>connect with us</div>
        </div>
        <div class="q-mt-md socials">
          <a target="_blank" href="https://twitter.com/greyhobb"
            ><i class="fa-brands fa-twitter"></i
          ></a>
          <a target="_blank" href="https://www.instagram.com/greyhobb/"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a target="_blank" href="https://web.facebook.com/greysoftng"
            ><i class="fa-brands fa-facebook"></i
          ></a>
          <a target="_blank" href="https://youtube.com/@greysofttechnologies"
            ><i class="fa-brands fa-youtube"></i
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
            ><i class="fa-brands fa-linkedin-in"></i
          ></a>
        </div>
      </div>
    </div>

    <q-dialog v-model="refund">
      <q-card>
        <q-card-section>
          <div class="text-h6">Our Refund Policy</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>
            At Greysoft, we strive to provide our clients with top-quality
            training programs that meet their needs and exceed their
            expectations. However, we understand that there may be circumstances
            where our clients may not be satisfied with our services. As such,
            we offer a refund policy that allows clients to reverse payments
            made for any of our courses after 45 days of payment, provided that
            they can verify that they are not satisfied with our services.
            Please note that refunds are subject to our verification process. We
            value our clients and are committed to ensuring their satisfaction
            with our services.
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <!-- <q-btn flat label="Decline" color="primary" v-close-popup /> -->
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Read More...</div>
          <div v-if="course.name" class="tex text-weight-bold">
            {{ course.name }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <p>
            {{ course.desc }}
          </p>
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

<script>
export default {
  data() {
    return {
      course: {},
      refund: false,
      mainText: {
        desc: "If you’re ready to upskill with GreyAcademy… Now’s your chance to roll with champions! GreyAcademy is thrilled to announce our comprehensive training program starting on 1st May 2023. Our program is designed to equip individuals with the skills needed to succeed in today's fast-paced digital world. With courses ranging from Digital Marketing, Data Science & Analytics, Web Development/Frontend Programming, Product Design (UI/UX), Photography, to Video Editing, our program offers a wide range of courses to suit your interests and career goals. Our expert instructors will provide you with practicaltraining, hands-on experience, and industry insights to help you build your skills and gain a competitive edge. Don't miss out on this opportunity to enhance your career prospects and take the first step towards success. Enroll now and join us for an exciting journey towards your professional growth.",
      },
      fixed: false,
      courses: [
        {
          img: "/images/datasc.jpg",
          name: "Data Science & Analytics",
          smallDesc:
            "In today's data-driven world, the demand for skilled professionals in data science and analytics is on the rise... ",
          desc: "In today's data-driven world, the demand for skilled professionals in data science and analytics is on the rise. GreyAcademy offers a comprehensive program in this field that covers everything from data collection and cleaning to advanced analytics and machine learning. Whether you're a beginner or an experienced data professional, our course will equip you with the skills you need to succeed in this exciting field. Enroll today and take the first step towards a rewarding career in data science!",
        },
        {
          img: "/images/frontendcourse.jpg",
          name: "Web Development/ Frontend Programming",
          smallDesc:
            "If you're looking to kickstart your career in web development, GreyAcademy's...",
          desc: "If you're looking to kickstart your career in web development, GreyAcademy's Web Development program is the perfect place to start. Our comprehensive curriculum covers everything from HTML and CSS to advanced JavaScript and frameworks like React and Vue. Our experienced instructors will guide you through the process of building responsive and dynamic websites that are optimized for performance and user experience. Enroll today and start building your web development skills!",
        },
        {
          img: "/images/prd.jpg",
          name: "Product Design (UI/UX)",
          smallDesc:
            "In today's digital age, a good user experience can make all the difference in the success of a product or service...",
          desc: "In today's digital age, a good user experience can make all the difference in the success of a product or service. GreyAcademy's Product Design program is designed to equip you with the skills you need to create compelling and intuitive user interfaces. Our curriculum covers everything from user research and wireframing to visual design and prototyping. Enroll today and start building your skills as a product designer!",
        },
        {
          img: "/images/photography.jpg",
          name: "Photography",
          smallDesc:
            "Photography is both an art and a science, and GreyAcademy's Photography program covers both aspects...",
          desc: "Photography is both an art and a science, and GreyAcademy's Photography program covers both aspects. Our experienced instructors will guide you through the process of capturing stunning images, from the basics of exposure and composition to more advanced techniques like lighting and editing. Whether you're a beginner or an experienced photographer, our program will help you take your skills to the next level. Enroll today and start capturing beautiful images!",
        },
        {
          img: "/images/videoedit.jpg",
          name: "Video Editing",
          smallDesc:
            "Video has become a ubiquitous medium in today's digital world, and GreyAcademy's Video Editing program is designed to help you create...",
          desc: "Video has become a ubiquitous medium in today's digital world, and GreyAcademy's Video Editing program is designed to help you create compelling video content. Our curriculum covers everything from basic video editing techniques to more advanced topics like color grading and motion graphics. Whether you're looking to create professional-quality videos for your business or just for fun, our program will help you take your skills to the next level. Enroll today and start creating amazing video content!",
        },
        {
          img: "/images/digital.jpg",
          name: "Digital Marketing",
          smallDesc:
            "GreyAcademy is thrilled to announce our upcoming Digital Marketing training classes starting on 1st May 2023. Our courses are designed...",
          desc: "GreyAcademy is thrilled to announce our upcoming Digital Marketing training classes starting on 1st May 2023. Our courses are designed to equip students with the knowledge and skills needed to succeed in the fast-paced world of digital marketing. Whether you're looking to launch a career in digital marketing, or wanting to upskill and stay ahead of the competition, our courses offer comprehensive and practical training in various areas of digital marketing. Don't miss out on this opportunity to learn from industry experts and take the first step towards your digital marketing career. Enroll now and join us for an exciting journey towards your success.",
        },
      ],
    };
  },

  methods: {
    read(course) {
      this.fixed = true;
      this.course = course;
    },

    scroll() {
      document.getElementById("enroll").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 7rem;
}

.text_price {
  font-weight: 800;
}

.text_price_red {
  font-size: 12px;
  margin-left: 1rem;
  text-decoration: line-through;
}
.max {
  max-width: 900px !important;
  margin: 0 auto;
}
@media (min-width: 1200px) {
  .max {
    max-width: 1000px !important;
    margin: 0 auto;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.grid.reverse {
  align-items: center;
}
.grid.reverse .left {
  order: 2;
}
.grid.reverse .right {
  order: 1;
}

.main_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  color: #0e1e5e;
}

.subtext {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  text-transform: capitalize;
  color: #000000;
  margin: 0.5rem 0;
}

.subtext.color {
  color: #0e1e5e;
}
.subtext.steps {
  font-size: 2rem;
  margin-bottom: 1.3rem;
  color: #0e1e5e;
}

.line {
  width: 80px !important;
}
.desc,
p,
.text-h6 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 161.4%;
  text-align: left;
  letter-spacing: 0.085em;
  color: #000000;
}

.btn {
  display: flex;
  justify-content: flex-end;
}

.courses_wrap .enrolll {
  position: absolute;
  bottom: 2%;
  left: 3%;
  background: #0e1e5e;
  color: #ffffff;
  text-transform: capitalize;
}

.read .q-btn {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 141.4%;
  letter-spacing: 0.145em;
  text-decoration-line: underline;
  font-variant: small-caps;
  color: #0e1e5e;

  padding: 0;
}

.btn .q-btn {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12.2544px;
  line-height: 141.4%;
  text-align: center;
  letter-spacing: 0.145em;
  font-variant: small-caps;
  color: #ffffff;
  background: #0e1e5e;
  padding: 0.7rem;
}

.right img {
  max-height: 500px;
  object-fit: contain;
}

.hold {
  background: #f1f6fb;
  margin-top: 4rem;
  padding: 2rem 0;
}

.right .top_text {
  font-family: "Montserrat";
  font-style: normal;
  text-align: right;
  font-weight: 600;
  font-size: 16px;
  line-height: 141.4%;
  letter-spacing: 0.145em;
  font-variant: small-caps;
  color: #0e1e5e;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.grid.reverse .right .top_text {
  justify-content: flex-start;
}
.grid.reverse .right.det .img {
  justify-content: flex-start;
}

.right.det .img {
  display: flex;
  justify-content: flex-end;
}

.right.det img {
  max-height: 300px;
  width: 350px;
}

.grid.reverse .right.det img {
  max-height: 100%;
  width: auto;
}

.right.det .btn {
  margin-top: 1rem;
}

.left ul li {
  list-style: disc;
  color: #0e1e5e;
  margin: 0.5rem 0;
}
.left ul li a {
  color: #0e1e5e;
  font-size: 12px;
  text-decoration: underline;
}

// courses

.courses .courses_left_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20.1846px;
  line-height: 161.4%;
  text-align: justify;
  letter-spacing: 0.145em;
  text-transform: capitalize;
  color: #0e1e5e;
}

.courses .courses_right_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 141.4%;
  letter-spacing: 0.145em;
  font-variant: small-caps;
  color: #0e1e5e;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}
.courses .courses_main_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 35.4783px;
  line-height: 141.4%;
  letter-spacing: 0.145em;
  font-variant: small-caps;
  color: #0e1e5e;
}

.courses_card {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  min-height: 450px;
  position: relative;
}

.weeks {
  padding-top: 5rem;
}
.cour {
  padding-top: 5rem;
}
.courses_wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 2rem;
}

.non {
  display: none;
}

.span {
  display: flex;
}
.socials {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.socials a {
  color: #0e1e5e;
}

//  foot

.foot_area_text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20.1846px;
  line-height: 161.4%;
  text-align: justify;
  letter-spacing: 0.145em;
  text-transform: capitalize;
  color: #0e1e5e;
}

.desc_foot {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 25.875px;
  line-height: 1.8;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
  color: #0e1e5e;
  margin-top: 2rem;
}

.copy {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 17.875px;
  line-height: 1.8;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
  color: #0e1e5e;
  margin-top: 2rem;
}
.copy .q-btn {
  background: #0e1e5e;
  color: #ffffff;
  text-transform: capitalize;
}

.starts {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 25.8559px;
  line-height: 141.4%;
  text-align: center;
  letter-spacing: 0.145em;
  font-variant: small-caps;
  color: #0e1e5e;
}

.enroll {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 2rem;
}

.enroll .q-btn {
  background: #0e1e5e;
  color: #ffffff;
}

@media (max-width: 800px) {
  .starts {
    font-size: 20.8559px;
  }
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .enroll {
    gap: 1rem;
    flex-wrap: wrap;
  }
}
@media (max-width: 500px) {
  .desc,
  p,
  .text-h6 {
    text-align: left;
  }

  .non {
    display: block;
  }

  .show {
    display: none;
  }

  .desc_foot {
    font-size: 17.875px;
    padding: 0.5rem;
  }

  .section.pad {
    padding: 2rem 0;
  }

  .foot_area_text {
    font-size: 18.1846px;
    line-height: 117.4%;
  }

  .enroll .q-btn {
    padding: 0.6rem;
    text-transform: capitalize;
    font-size: 14px;
  }

  .enroll {
    padding: 0;
  }

  .btn .q-btn {
    padding: 0.6rem;
    text-transform: capitalize;
    font-size: 14px;
  }

  .desc {
    text-align: left;
  }

  .courses .courses_main_text {
    font-size: 30.4783px;
  }

  .weeks {
    padding-top: 3rem;
  }

  .cour {
    width: 85%;
    margin: 0 auto;
  }

  .courses_wrap {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    padding-top: 1rem;
  }

  .courses_card {
    min-height: 470px;
    position: relative;
  }

  ul {
    padding-left: 1rem;
  }

  .grid.main .left {
    order: 2;
  }
  .grid.main .right {
    order: 1;
  }

  .copy {
    justify-content: center;
  }

  .section {
    padding-top: 6rem;
  }
}
</style>
