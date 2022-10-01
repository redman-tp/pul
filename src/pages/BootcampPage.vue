<template>
  <q-page>
    <main class="main bootcamp">
      <!-- === HOME === -->
      <section class="q-py-lg" id="">
        <img src="/pe/devboot2.jpeg" alt="" class="" />

        <div class=" ">
          <div class=""></div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="small_container">
          <div class="">
            <!-- <p class="enc pulse q-my-md text-weight-bold">
              Entry Submissions are now closed
            </p> -->

            <form
              ref="appformm"
              enctype="multipart/form-data"
              id="appForm"
              @submit.prevent="submit"
              class="form"
            >
              <q-stepper
                v-model="step"
                ref="stepper"
                contracted
                color="primary"
                animated
                header-nav
                active-color="purple"
                inactive-color="dark"
              >
                <q-step
                  :name="1"
                  title="Select campaign settings"
                  icon="settings"
                  :done="step > 1"
                >
                  <div class="input">
                    <label for=""
                      >Full Name <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <input
                        id="firstName"
                        v-model="data.firstname"
                        type="text"
                        name="fullname"
                      />
                    </div>
                    <div class="error" v-if="errors['data.fullname']">
                      {{ errors["data.fullname"][1] }}
                    </div>
                  </div>

                  <div class="input">
                    <label for=""
                      >Phone Number <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <input
                        v-model="data.phone"
                        type="tel"
                        id="phone"
                        name="phone"
                      />
                      <div class="error" v-if="errors['data.phone']">
                        {{ errors["data.phone"][1] }}
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Gender <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <select v-model="data.gender" name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefernottosay">
                          Prefer not to say
                        </option>
                      </select>
                      <div class="error" v-if="errors['data.gender']">
                        {{ errors["data.gender"][1] }}
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Select course <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <select v-model="data.course" name="course" id="course">
                        <option value="UI/UX(Product Design)">
                          UI/UX(Product Design)
                        </option>
                        <option value="Frontend Development">
                          Frontend Development
                        </option>
                        <option value="Backend Development">
                          Backend Development
                        </option>
                        <option value="Data Science">Data Science</option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                      </select>
                      <div class="error" v-if="errors['data.gender']">
                        {{ errors["data.gender"][1] }}
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Date of Birth <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <input
                        v-model="data.dob"
                        name="dob"
                        id="date"
                        type="date"
                      />
                      <div class="error" v-if="errors['data.dob']">
                        {{ errors["data.dob"][1] }}
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Do you have any disabilities?
                      <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <select
                        name="disabled"
                        v-model="data.disabled"
                        id="disability"
                        ref="disabled"
                      >
                        <option value="0">No</option>

                        <option value="1">Yes</option>
                      </select>

                      <div class="error" v-if="errors['data.disabled']">
                        {{ errors["data.disabled"][1] }}
                      </div>
                    </div>
                  </div>

                  <div class="input">
                    <div class="input_wrap">
                      <input
                        disabled
                        v-model="data.disabilities"
                        name="disabilities"
                        id="disabilities"
                        placeholder="Please Specify"
                        type="text"
                      />
                      <div class="error" v-if="errors['data.disabilities']">
                        {{ errors["data.disabilities"][1] }}
                      </div>
                    </div>
                  </div>
                </q-step>
                <q-step
                  :name="2"
                  title="Create an ad group"
                  caption="Optional"
                  icon="done_all"
                  :done="step > 2"
                >
                  <div class="input">
                    <label for=""
                      >Email Address <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <input
                        v-model="data.email"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <div class="error" v-if="errors['data.email']">
                        {{ errors["data.email"][1] }}
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Password <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <input
                        v-model="data.password"
                        type="password"
                        name="password"
                      />
                      <div class="error" v-if="errors['data.password']">
                        {{ errors["data.password"][1] }}
                      </div>
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Confirm Password <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <input
                        v-model="data.confirm_password"
                        type="password"
                        name="confirm_password"
                      />
                      <div class="error" v-if="errors['data.confirm_password']">
                        {{ errors["data.confirm_password"][1] }}
                      </div>
                    </div>
                  </div>
                </q-step>
                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn
                      @click="step === 2 ? submit() : $refs.stepper.next()"
                      color="primary"
                      :label="step === 2 ? 'Finish' : 'Continue'"
                    />
                    <q-btn
                      v-if="step > 1"
                      flat
                      color="primary"
                      @click="$refs.stepper.previous()"
                      label="Back"
                      class="q-ml-sm"
                    />
                  </q-stepper-navigation>
                </template>
              </q-stepper>
            </form>

            <q-dialog v-model="responseModal">
              <div class="hold_dia">
                <div class="top">
                  <!-- <div class="icon">
                    <i class="ri-check-double-fill"></i>
                  </div> -->
                  <div class="icon">
                    <img src="/pe/pricing.jpeg" alt="" />
                  </div>
                  <!-- <p>Send us an email</p> -->
                  <!-- <h4 class="text-weight-bold">Your entry was successful</h4> -->
                  <p class="text-subtitle6 q-mt-lg">
                    Welcome onboard to the Grey community, we are commited to
                    giving you the best experience possible
                  </p>
                </div>

                <div class="input">
                  <label for=""
                    >Select payment plan <i class="fa-solid fa-asterisk"></i
                  ></label>
                  <div class="input_wrap">
                    <select v-model="data.payment" name="course" id="course">
                      <option value="Full payment">
                        Full payment(One time)
                      </option>
                      <option value="Part payment">
                        Part payment (Two time payment)
                      </option>
                      <option value="Triad payment">
                        Triad payment (Three time payment)
                      </option>
                      <option value="Quarter payment">
                        Quarter payment (Four time payment)
                      </option>
                    </select>
                    <div class="error" v-if="errors['data.payment']">
                      {{ errors["data.payment"][1] }}
                    </div>
                  </div>
                </div>
                <q-card-actions align="right">
                  <q-btn
                    style="border-radius: 8px"
                    class="bg-accent q-px-lg q-pt-xl q-pb-md text-white"
                    flat
                    @click="makePayment"
                    label="Make payment"
                    color="primary"
                  />
                </q-card-actions>
              </div>
            </q-dialog>
          </div>
        </div>
      </section>

      <div class="footer_img">
        <img src="/pe/devboot.jpeg" alt="" />
      </div>
    </main>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      errors: [],
      errorMsg: [],
      loading: false,
      data: {},
      disabled: this.$refs.disabled,
      step: ref(1),
      responseModal: true,
    };
  },
  watch: {
    disabled: function () {
      // if (this.data.disabled === "1") {
      //   document.getElementById("disabilities").disabled = false;
      // } else {
      //   document.getElementById("disabilities").disabled = true;
      // }
    },
  },

  mounted() {
    this.disabled = document.getElementById("disability").value;
    // console.log(this.$refs.disabled.value);
    // console.log(document.getElementById("disability").value);
  },

  methods: {
    submit() {
      this.$api
        .post("get/form-data/4", { data: this.data })
        .then((resp) => {
          this.$q.loading.hide();

          console.log(resp);
          this.$q.notify({
            message: "Submission Successful",
            color: "green",
            position: "top",
            timeout: 3000,
          });

          document.getElementById("appForm").reset();
        })
        .catch(({ response }) => {
          this.$q.loading.hide();
          this.errors = response.data.errors;
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          setTimeout(() => {
            this.errors = [];
          }, 12000);
          console.log(response);
        });
    },
    makePayment() {
      console.log("first");
    },
  },
};
</script>

<style scoped>
main {
  padding-bottom: 1.5rem;
}

.small_container {
  width: 55%;
  max-width: 1440px;
  margin: 5rem auto 2rem;
}
.hold_dia {
  background: white;
  padding: 3rem 1rem 1rem;
}
.hold_dia i {
  font-size: 3rem;
  color: #4bb543;
}

.hold_dia h4 {
  font-size: 1rem;
  line-height: 1.1;
  color: #4bb543;
}

.hold_dia .top {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2rem;
}
.home {
  height: 72vh;
}

.error {
  color: red;
}

.wel {
  display: block;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.76rem;
}

.home__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 79vh;
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
  height: 79vh;
  z-index: 2;
}

.home__data {
  position: relative;
  z-index: 5;
  top: 50%;
}

.home__container {
  align-content: center;
  row-gap: 3rem;
  z-index: 10;
  height: 60vh;
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
  font-size: 3rem;
  max-width: 700px;
  font-weight: var(--font-medium);
}

.home__data-title-d {
  font-size: var(--h2-font-size);
  font-weight: 300;
  margin-bottom: 1rem;
}

.about__container {
  row-gap: 2.5rem;
  place-items: flex-start;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 7%;
}
.experience__img h2 {
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.enc {
  font-size: 16px;
}

.input {
  margin: 1rem 0;
}

.input .input_wrap {
  margin-top: 0.551rem;
  width: 100%;
}

.input input {
  padding: 0.75rem;
  width: 100%;
  background: #f4f4f4;
  width: 100%;
}

.input textarea {
  border: none;
  background: #f4f4f4;
  padding: 0.75rem;
  width: 100%;
}
.input textarea:focus {
  outline: none;
}

.input i {
  margin-left: 0 !important;
  font-size: 10px;
  color: #9c27b0;
}

.input select {
  width: 100%;
  background: #f4f4f4;
  padding: 0.75rem;
  border: none;
}
.input select:focus {
  outline: none;
}

#disabilities:disabled {
  background: #dddddd;
}

.terms {
  display: flex;
  align-items: center;
}
.terms p {
  margin-left: 0.55rem;
}

.terms button {
  color: #db9200;
  background: none;
  border: none;
}

.submit .btn {
  background: #db9200;
  padding: 0.85rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  border-radius: 10px;
  width: 150px;
  color: #fff;
}

.hold_inputs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* flex-wrap: wrap; */
}

.hold_inputs input {
  margin-top: 0.75rem;
}

p.control {
  color: #e5e5e583;
}

.submit_app {
  margin: 3rem 0;
  padding: 5rem;
  background: #f4f4f4;
}

.submit_now {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.submit_now h2 {
  font-size: 3rem;
  font-weight: 500;
}

.submit_now p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.submit_application {
  color: #fff;
  background: #db9200;
  padding: 0.75rem;
}

.pulse {
  animation: zoom 2s infinite;
  animation-delay: 2s;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (min-width: 960px) {
  .home__data {
    top: 35%;
    align-self: center;
  }
}
@media screen and (min-width: 1200px) {
  .home__data {
    top: 45%;
    align-self: center;
  }
}

@media (min-width: 1000px) {
  .home {
    height: 70vh;
    display: flex;
    align-items: center;
  }

  .urls {
    font-size: 11px;
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
    height: 74vh;
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
    height: 74vh;
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
  .prixes[data-v-93dc9798] {
    width: 80%;
  }
}
@media (max-width: 800px) {
  .home__data p {
    font-size: 1rem;
  }
  .experience__img {
    margin-top: 2rem;
  }

  .about__description {
    font-size: 15px;
  }
  .section__title {
    font-size: var(--h1-font-size);
  }

  .home__data {
    top: 10%;
  }

  .home {
    height: 70vh;
  }

  .home__container {
    display: grid;
  }
  .hold_logs {
    display: flex;
    justify-content: center;
  }
  .small_container {
    width: 75%;
    max-width: 1440px;
    margin: 5rem auto;
  }
}

@media screen and (max-width: 550px) {
  .home__data-title {
    font-size: 2rem;
  }
  .primary-heading {
    font-size: 2rem;
  }
  .small_container {
    width: 90%;
    max-width: 1440px;
    margin: 5rem auto;
  }
  .about__container {
    row-gap: 2.5rem;
    place-items: flex-start;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 25%;
  }
  .hold_inputs {
    flex-wrap: wrap;
  }

  .home__container {
    height: 90vh;
  }
}

@media screen and (max-width: 370px) {
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
    height: 79vh;
    object-fit: cover;
    object-position: 40%;
  }
}
@media screen and (max-width: 380px) {
  .enc,
  .terms p {
    font-size: 12px;
  }
}

@media (max-width: 320px) {
  .home {
    height: 70vh;
  }
  .home__data {
    top: 0%;
  }

  .about__container {
    margin-top: 28%;
  }
}
</style>
