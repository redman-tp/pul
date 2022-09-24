<template>
  <q-page>
    <main class="main">
      <!-- === HOME === -->
      <section class="home" id="home">
        <img
          src="https://img.freepik.com/free-photo/system-developers-analyzing-code-wall-screen-tv-looking-errors-while-team-coders-collaborate-artificial-intelligence-project-programmers-working-together-machine-learning-software_482257-41819.jpg?t=st=1657026444~exp=1657027044~hmac=d6ab17b34b44d06a560a0a5aa8b45cc81c0fd932846a7d25c35df162f046c73d&w=2000"
          alt=""
          class="home__img"
        />

        <div class="home__container container">
          <div class="home__data">
            <h1 class="home__data-title">
              The Kukah Prize for Young Innovators
            </h1>
            <p class="">
              The Kukah Prize for Young Innovators is intended to support and
              spur young and innovative Africans whose ideas embody the
              potential to transform their communities and the world around us.
            </p>

            <div class="row items-center no-wrap">
              <q-btn to="/application" class="start_sub">Apply Now</q-btn>
              <a
                href="https://docs.google.com/forms/d/1dlxHSx-QGq7lJL6xA5SCQyx_Exx9OTdNC0hZbp4T3fM"
                target="_blank"
                :loading="loading"
                class="btn"
                id="submitApp"
                type="submit"
              >
                Book a Seat
              </a>
            </div>
          </div>
          <div class="deadline">
            <!-- <div class="submitt">
              <h5>Deadline Extension</h5>

              <p class="">New Entry Submission Deadline: 15th August, 2022</p>
            </div> -->
            <div class="submitt">
              <h5>Deadline</h5>

              <p class="">Entry Submissions are now closed.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="hold_logs">
        <img class="kukahlogo" src="/pe/kuklogo.png" alt="" />
      </section> -->

      <section class="about addmer section" id="about">
        <div class="about__containerr container grid">
          <div class="about__data">
            <h2 class="section__title about__title">
              THE KUKAH PRIZE FOR YOUNG INNOVATORS
            </h2>

            <!-- <h4>Dancing in the Metaverse</h4> -->
            <p class="about__description">
              The Kukah Prize for Young Innovators is an award of recognition
              for outstanding innovators in the field of technology presented to
              young Africans who show exceptional promise as developing leaders
              in digital transformation. Bright young minds with creative
              technological ideas/solutions to developmental challenges both in
              their communities, and the world at large will be evaluated by
              judges in the startup and tech space across the continent for the
              most innovative digital ideas/solutions in the form of startups or
              initial concepts meeting global developmental challenges.
            </p>

            <div class="prixes">
              <span>Prizes:</span>

              <div class="cash">
                <i class="ri-star-fill"></i>
                <p>First Position</p>
                <h4>₦2,000,000</h4>
              </div>
              <div class="cash">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <p>Second Position</p>
                <h4>₦1,000,000</h4>
              </div>
              <div class="cash">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <p>Third Position</p>
                <h4>₦500,000</h4>
              </div>
            </div>
          </div>

          <div class="prize">
            <h4>Eligibility and Selection Criteria:</h4>
            <ul class="eligibility">
              <li class="shaded">
                <span
                  >The nominee shall not have reached their 31st birthday by the
                  time the award is received.</span
                >
              </li>
              <li class="">
                <span>Nominees must be Nigerian (Maiden Edition)</span>
              </li>
              <li class="shaded">
                <span
                  >The award will be presented to an individual whose innovative
                  work demonstrates high levels of excellence in
                  technology.</span
                >
              </li>
              <li class="">
                <span
                  >The award winner will be selected based on the candidate's
                  research's outstanding quality, novelty, and
                  significance.</span
                >
              </li>
              <li class="shaded">
                <span
                  >We encourage women and persons with disabilities to submit
                  entries. We are willing to provide reasonable accommodations
                  for persons with disabilities where needed.</span
                >
              </li>

              <li class="">
                <span
                  >Nominees are eligible for a single submission; multiple
                  submissions would automatically disqualify them.</span
                >
              </li>
              <li class="shaded">
                <span>Female candidates are encouraged to apply.</span>
              </li>
              <li class="">
                <span>Entry submissions are <strong>FREE</strong>.</span>
              </li>
            </ul>

            <p class="sub">Submission Deadline: 15th August, 2022</p>
          </div>
        </div>
      </section>

      <section class="about q-pt-xl section" id="about">
        <div class="about__container flexer container grid">
          <div class="about__data">
            <h2 class="section__title kuk about__title">
              The Kukah Centre (TKC)
            </h2>
            <p class="about__description">
              <a href="https://thekukahcentre.org">The Kukah Centre</a> (TKC) is
              a Nigeria-based policy research institute, founded by Most Rev.
              Matthew Hassan Kukah, Bishop of the Catholic Diocese of Sokoto.
              The Centre has offices in Abuja and Kaduna. It treats political
              leadership as a collaborative exercise that requires multiple
              governance structures at various levels – individuals, households,
              small businesses, the organized private sector, NGOs and
              government. Interfaith dialogue is at the core of the Centre’s
              work and involves actively promoting conversations among Nigeria’s
              faith communities, as well as between leaders in faith and public
              policy. The Kukah Centre aspires to become Nigeria’s leading
              institution for the promotion of an active and engaged citizenry
              by providing support for inclusive dialogue and advocacy
              initiatives.
            </p>
          </div>

          <div class="experience__img grid">
            <img src="/pe/Kuk.jpeg" alt="Bishop Kukah" />
          </div>
        </div>
      </section>

      <section class="submit_appp">
        <div class="dettt">
          <h2>Live<span class="bold"> Award Ceremony</span></h2>

          <div class="submit">
            <h4>Sheraton Abuja Hotel - Aug 31st, 2022</h4>
            <p>
              Three selected winners will receive the Kukah prize for young
              innovators at Sheraton Abuja Hotel Federal Capital Territory(FCT),
              Nigeria.
            </p>
          </div>
          <div class="book">
            <a
              href="https://docs.google.com/forms/d/1dlxHSx-QGq7lJL6xA5SCQyx_Exx9OTdNC0hZbp4T3fM"
              target="_blank"
              :loading="loading"
              class="btn"
              id="submitApp"
              type="submit"
            >
              Book a Seat
            </a>
          </div>
        </div>
      </section>
      <Boards />
      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">
              Establishment and Support
            </h2>
            <p class="about__description">
              This award is established by
              <a target="_blank" href="https://greysoft.ng/"
                >Greysoft Technologies</a
              >
              and The
              <a target="_blank" href="https://thekukahcentre.org"
                >Kukah Center</a
              >

              This maiden edition will be presented to winners during the 70th
              Birthday Ceremony of His Lordship, Bishop Matthew Hassan Kukah on
              the 31st August 2022. The winners of this award will in addition,
              have access to various opportunities with organizations such as
              Microsoft ADC and Google.
            </p>

            <q-btn to="/application" class="submit_application row">
              Apply Now <i class="bx bx-chevrons-right bx-fade-right"></i
            ></q-btn>
          </div>

          <div class="experience__img grid">
            <img src="/pe/fem.jpg" alt="" />
          </div>
        </div>
      </section>

      <section class="submit_app">
        <div class="submit_now">
          <h2>Submit your idea</h2>

          <div class="submit">
            <p>Ready to enter? Click here to submit your idea</p>

            <q-btn to="/application" class="submit_application">
              Apply Now <i class="bx bx-chevrons-right bx-fade-right"></i
            ></q-btn>
          </div>
        </div>
      </section>

      <hr class="hr" />

      <section class="enquiries container">
        <small>For more enquiries</small>

        <div class="socials">
          <a target="_blank" href="https://wa.me/07060998702" class="social">
            <i class="ri-whatsapp-fill"></i>
            <span>07060998702</span>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/thekukahprize"
            class="social"
          >
            <i class="ri-twitter-fill"></i>
            <span>@thekukahprize</span>
          </a>
          <a
            target="_blank"
            href="https://web.facebook.com/thekukahprize/"
            class="social"
          >
            <i class="ri-facebook-fill"></i>
            <span>@thekukahprize</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/the-kukah-prize/"
            class="social"
          >
            <i class="ri-linkedin-fill"></i>
            <span>@thekukahprize</span>
          </a>
          <a
            target="_blank"
            href="mailto:thekukahprize@greysoft.ng/?subject=subject&cc=cc@greysoft.ng"
            class="social"
          >
            <i class="ri-mail-open-fill"></i>
            <span>thekukahprize@greysoft.ng</span>
          </a>
          <a target="_blank" href="" class="social">
            <img class="koo" src="/pe/koo.svg" alt="" />
            <span>@thekukahprize</span>
          </a>
        </div>
      </section>
    </main>
  </q-page>
</template>

<script>
import Boards from "../components/BoardsComponent.vue";
export default {
  components: {
    Boards,
  },
};
</script>

<style scoped>
.home {
  height: 85vh;
}

.addmer {
  margin-top: 5rem !important;
}

.home__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85vh;
  object-fit: cover;
  object-position: 9%;
}

.home::before {
  content: "";
  position: absolute;
  background: #000000;
  background-blend-mode: multiply;
  opacity: 0.45;
  top: 0;
  right: 0;
  width: 100%;
  height: 85vh;
  z-index: 2;
}

/* .home__data {
  position: relative;
  z-index: 5;
  top: 50%;
} */

.home__container {
  display: flex;
  align-items: center;
  position: relative;
  top: 10%;
}

.home__data-subtitle,
.home__data-title,
.home__social-link,
.home__info,
.home__data-title-d {
  color: #231f20;
}

.home__data-title,
.home__data-title-d {
  text-align: left;
  color: #fff;
}

.home__data p {
  color: #fff;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 1.5rem 0;
}

.home__data-subtitle {
  display: block;
  font-weight: var(--font-semi-bold);
  margin-bottom: var(--mb-0-75);
}

.home__data-title {
  padding-top: 1.5rem;
  font-size: 2.7rem;
  max-width: 700px;
  /* font-size: var(--biggest-font-size); */
  font-weight: var(--font-medium);
  /* margin-bottom: var(--mb-2-5); */
}

.home__data-title-d {
  font-size: var(--h2-font-size);
  font-weight: 300;
  /* margin-bottom: var(--mb-2-5); */
  margin-bottom: 1rem;
  /* max-width: 500px; */
}
.about__containerr {
  grid-template-columns: 4fr 2.5fr;
  /* align-items: center; */
  gap: 1rem;
  display: grid;
}
.start_sub {
  color: #db9200;
  font-size: 18px;
  border: 1px solid #db9200;
  margin: 1.5rem 0;
  padding: 1rem;
  width: 160px;
  border-radius: 10px;
  margin-right: 0.75rem;
  transition: all 0.5s ease-in-out;
  height: 70px;
}
.start_sub:hover {
  color: #db9200;
  background: #f4f4f4;
  font-size: 18px;
  border: 1px solid #e5e5e583;
  margin: 1.5rem 0;
  padding: 0.45rem;
}

.hold_logs .kukahlogo {
  width: 150px;
  /* margin-top: 3rem; */
}
.prize h4 {
  font-size: 25px;
}
.enquiries {
  padding: 2rem 0;
}

.enquiries small {
  font-size: 20px;
}

.enquiries .socials {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.enquiries .socials .social {
  display: flex;
  align-items: center;
  color: var(--text-color);
  transition: all 0.5s ease-in-out;
}
.enquiries .socials .social:hover {
  background: #f4f4f4;
  padding: 0.55rem;
}
.enquiries .socials .social span {
  font-size: 15px;
}
.enquiries .socials i {
  font-size: 2rem;
  margin-right: 0.55rem;
}

.logos {
  margin: 3rem auto 1rem;
  width: 90%;
}

.hold_logs {
  width: 90%;
  margin: 3rem auto 0rem;
}

.prixes {
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgb(38, 75, 127) 35%,
    rgb(18, 42, 75) 100%
  );

  width: 70%;
  padding: 1rem 0;
  border-top-left-radius: 30%;
  border-bottom-right-radius: 20%;
}

.kuk {
  color: rgba(2, 0, 36, 1) !important;
}

.cash {
  text-align: center;
}

.cash:nth-child(1) {
  margin-top: 1rem;
}

.cash i {
  color: rgba(188, 135, 39, 255);
  font-size: 1.2rem;
  margin: 0 !important;
}
.cash p {
  color: #fff;
  font-size: 1rem;
  opacity: 0.7;
}
.cash h4 {
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
}
.cash i {
  color: rgba(188, 135, 39, 255);
  font-size: 1.6rem;
}
.prixes span {
  padding: 1rem 0.75rem;
  font-size: 1.5rem;
  background: rgba(188, 135, 39, 255);
  border-top-left-radius: 30%;
  border-bottom-right-radius: 30%;
  margin-bottom: 2rem;
}
.submit_app {
  margin: 3rem 0;
  padding: 3rem;
  background: #f4f4f4;
}

.submit p {
  margin-bottom: 2rem;
}
.submit_appp {
  margin: 3rem 0;
  padding: 2rem;
  background: url("/pe/group-asia-young-creative-people-smart-casual-wear-discussing-business-brainstorming.jpg")
    no-repeat center center/cover;
  height: 450px;
  display: flex;
  align-items: center;
}

.submit_appp .submit p {
  color: #fff;
  font-size: 1.5rem;
  max-width: 700px;
  font-weight: 500;
}
.submit_appp .submit h4 {
  color: #fff;
  font-size: 1.5rem;
  max-width: 700px;
  margin: 1rem 0;
  font-weight: 300;
  font-weight: 700;
}
.submit_appp .submit .submit_application {
  color: #db9200;
  background: none;
  font-size: 1.5rem;
}
.submit_appp h2 {
  font-size: 2.5rem;
  max-width: 1100px;
  color: #fff;
  font-weight: 300;
}

.submit_appp span.bold {
  font-weight: 700;
}

.submit_now {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
}
.submit_now h2 {
  font-size: 3rem;
  font-weight: 500;
  color: var(--text-color) !important;
}

.submit_now p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.submit_application {
  color: #fff;
  background: #db9200;
  width: 200px;
  padding: 0.75rem;
  border-radius: 10px;
}

.hr {
  margin: 2rem auto;
  padding: 3rem o;
  width: 90%;
  color: rgba(241, 231, 231, 0.932);
}
.koo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}
.eligibility li {
  position: relative;
  margin: 1.3rem 0;
  color: var(--text-color);
  padding-left: 0.5rem;
  display: flex;
  align-items: flex-start;
  font-size: 16px;
}
.eligibility li.shaded {
  padding: 1rem 1rem 1rem 0;
  background: #f4f4f4;
  padding-left: 0.5rem;
}
.eligibility li span {
  margin-left: 1.5rem;
}
.eligibility li::before {
  content: "\f00c";
  font-family: "FontAwesome";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #db9200;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.006rem;
}

.sub {
  font-size: 12px;
  font-style: italic;
}
.enquiries .ri-whatsapp-fill {
  color: #25d366;
}

.enquiries .ri-twitter-fill {
  color: #1da1f2;
}

.enquiries .ri-facebook-fill {
  color: #4267b2;
}

.enquiries .ri-linkedin-fill {
  color: #0072b1;
}

.enquiries .ri-mail-open-fill {
  color: #c71610;
}

.eligibility {
  font-size: 16px;
}

.submitt {
  background: rgba(255, 0, 0, 0.5);
}
.submitt p {
  font-size: 20px;
  font-style: italic;
  color: white;
  margin-left: 1rem;
  padding: 0.5rem;
}
.submitt h5 {
  font-size: 30px;
  font-style: italic;
  color: white;
  margin-left: 1rem;
  padding: 0.5rem;
}

.btn {
  background: #db9200;
  padding: 1.05rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 1rem;
  border-radius: 10px;
  width: 160px;
  /* display: inline-block; */
  color: #fff;
  min-height: 2.572em;
  height: 70px;
  transition: all 0.5 ease-in-out;
}
.btn:hover {
  background: transparent;
  color: #db9200;
  border: 1px solid white;
  font-size: 16px;
}

@media screen and (min-width: 960px) {
  /* .home__data {
    top: 35%;
    align-self: center;
  } */
}
@media screen and (min-width: 1200px) {
  /* .home__data {
    top: 35%;
    align-self: center;
  } */
}

@media (min-width: 1000px) {
  .home {
    height: 80vh;
    display: flex;
    align-items: center;
  }

  .home__container {
    top: 10%;
  }
}

@media screen and (min-height: 721px) {
  body {
    margin: 0;
  }
  .home__container {
    margin-bottom: 4rem;
  }
  .home__img {
    height: 85vh;
  }

  .home::before {
    content: "";
    position: absolute;
    /* background-color: #ab042c; */
    background: #000000;
    background-blend-mode: multiply;
    opacity: 0.45;
    top: 0;
    right: 0;
    width: 100%;
    height: 85vh;
    z-index: 2;
  }
}

@media (max-width: 920px) {
  .about__containerr {
    grid-template-columns: 1fr;
    display: grid;
  }
  .prize {
    margin-top: 1rem;
  }
  .prixes {
    width: 80%;
  }
  .submit_now {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 420px) {
  .home__container {
    height: 90vh;
  }
  .home__img {
    height: 85vh;
  }

  .home {
    height: 85vh;
  }
  .hold_logs {
    margin: 2rem auto 1rem;
  }
}
@media (max-width: 300px) {
  .home__container {
    height: 90vh;
  }
  .hold_logs {
    margin: 4rem auto 1rem;
  }
}
@media (max-width: 708px) {
  .home__data p {
    font-size: 1rem;
  }
  .experience__img {
    margin-top: 2rem;
  }

  .prixes {
    width: 100%;
    position: relative;
  }
  .prixes span {
    margin-left: -70%;
  }

  .submit_appp h2 {
    font-size: 1.5rem;
  }
  .submit_appp .submit h4 {
    color: #fff;
    font-size: 1rem;
  }
  .submit_appp .submit p {
    font-size: 1.3rem;
  }

  .submit_appp {
    padding: 1rem;
    height: 400px;
  }
  .submit_app {
    padding: 1rem 0 2rem;
  }
  .submit_now h2 {
    font-size: 1.5rem;
  }
  .submit_now p {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  .enquiries .socials i {
    font-size: 2rem;
    margin-right: 0.55rem;
  }
  .eligibility li span {
    font-size: 0.75rem;
  }
  .about__description {
    font-size: 15px;
  }
  .section__title {
    font-size: var(--h2-font-size);
  }

  .home__container {
    flex-direction: column;
    top: 23%;
  }

  /* .home__data {
    top: 10%;
  } */

  .submit_application {
    margin: 0 auto;
  }

  .home__container {
    display: flex;
    align-items: center;
    position: relative;
    top: 15%;
  }
  .hold_logs {
    display: flex;
    justify-content: center;
  }
  .submitt {
    margin-left: 0rem;
    font-size: 25px;
  }
  .cash h4 {
    font-size: 1rem;
  }
  .cash i {
    font-size: 1rem;
  }

  .enquiries .socials .social span {
    font-size: 18px;
  }
  .prize {
    margin-top: 1rem;
  }
  .prize h4 {
    font-size: 20px;
  }
}

@media screen and (max-width: 550px) {
  .home__data-title {
    font-size: 2rem;
  }
  .prixes {
    width: 100%;
  }

  /* .deadline {
    margin-top: 3rem;
  } */

  .btn {
    padding: 0.95rem;
    font-size: 15px;
    height: 50px;
  }
  .start_sub {
    font-size: 15px;
    padding: 0.75rem;
    height: 50px;
  }
}

@media screen and (max-width: 380px) {
  .home__data-title {
    font-size: 2rem;
  }
  .home-course img {
    width: 120px;
    height: 100px;
    object-fit: contain;
  }
  .home__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 40%;
  }
  .home::before {
    height: 100vh;
  }

  .hold_logs img {
    margin-top: 1rem;
  }
  .home {
    height: 95vh;
  }

  .submitt h5 {
    font-size: 25px;
  }
  .submitt p {
    font-size: 20px;
  }
}

@media (max-width: 320px) {
  .home {
    height: 70vh;
  }
  .home__data {
    top: 0%;
  }
  .submitt h5 {
    font-size: 18px;
  }
  .submitt p {
    font-size: 15px;
  }
  .home__container {
    top: 8%;
  }
  .home__data-title {
    font-size: 1.7rem;
  }
  .hold_logs .kukahlogo {
    margin-top: 9rem;
  }

  .btn {
    padding: 0.95rem;
    font-size: 12px;
    height: 50px;
    width: 120px;
  }
  .start_sub {
    font-size: 12px;
    padding: 0.75rem;
    width: 120px;
    height: 50px;
  }

  .home::before {
    content: "";
    position: absolute;
    background: #000000;
    background-blend-mode: multiply;
    opacity: 0.45;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
  }
  .home__img {
    height: 100vh;
  }
}

@media (max-width: 318px) {
  .submit_appp {
    height: 480px;
  }
}
</style>
