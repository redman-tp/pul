<template>
  <q-page>
    <main class="main bootcamp">
      <!-- === HOME === -->
      <section class="q-py-lg" id="">
        <img class="img_width" src="/pe/devboot2.jpeg" alt="" />

        <div class=" ">
          <div class=""></div>
        </div>
      </section>

      <section class="section" id="about">
        <div class="small_container">
          <div class="">
            <p class="enc q-my-md text-weight-bold">
              Welcome to GreyAcademy We are glad to have you, please take a few
              steps to complete your registration.
            </p>
            <q-form
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
                  <div
                    class="input"
                    v-for="field in activeForm.fields"
                    :key="field.field_id"
                  >
                    <label :for="field.field_id" v-if="!field.hidden"
                      >{{ field.label }}
                      <i class="fa-solid fa-asterisk" v-if="field.required"></i
                    ></label>
                    <div class="input_wrap" v-if="!field.hidden">
                      <q-input
                        filled
                        dense
                        square
                        :id="field.field_id"
                        v-model="data.data[field.name]"
                        :type="field.type"
                        :name="field.name"
                        :placeholder="field.hint || field.label"
                        :rules="[
                          (val) =>
                            field.required
                              ? !!val ||
                                field.custom_error ||
                                `Please provide a valid value for ${field.label}`
                              : true,
                        ]"
                        :error="!!errors['data.' + field.name]"
                        :error-message="
                          errors['data.' + field.name]
                            ? errors['data.' + field.name][0]
                            : ''
                        "
                        v-if="
                          field.element === 'input' &&
                          ['text', 'tel', 'number', 'date'].includes(field.type)
                        "
                      />

                      <q-select
                        filled
                        dense
                        square
                        emit-value
                        map-options
                        :options="field.options"
                        :id="field.field_id"
                        v-model="data.data[field.name]"
                        :name="field.name"
                        :placeholder="field.hint || field.label"
                        :rules="[
                          (val) =>
                            field.required
                              ? !!val ||
                                field.custom_error ||
                                `Please provide a valid value for ${field.label}`
                              : true,
                        ]"
                        :error="!!errors['data.' + field.name]"
                        :error-message="
                          errors['data.' + field.name]
                            ? errors['data.' + field.name][0]
                            : ''
                        "
                        @update:model-value="setLearningPath($event, field)"
                        v-if="field.element === 'select'"
                      >
                        <template v-slot:option="{ itemProps, opt }">
                          <q-item v-bind="itemProps">
                            <q-item-section>
                              <q-item-label>{{ opt.label }}</q-item-label>
                            </q-item-section>
                            <q-item-section side v-if="opt.price">
                              <q-item-label>{{
                                $helper.money(opt.price)
                              }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </template>
                        <template v-slot:selected-item="{ opt, itemProps }">
                          <q-item v-bind="itemProps" dense>
                            <q-item-section>
                              <q-item-label>{{ opt.label }}</q-item-label>
                            </q-item-section>
                            <q-item-section side v-if="opt.price">
                              <q-item-label>{{
                                $helper.money(opt.price)
                              }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
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
                      <q-input
                        filled
                        dense
                        v-model="data.email"
                        type="email"
                        name="email"
                        id="email"
                        :rules="[
                          (val) =>
                            !!val || 'Please provide a valid email address',
                        ]"
                        :error="!!errors['email']"
                        :error-message="
                          errors['email'] ? errors['email'][0] : ''
                        "
                      />
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Password <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <q-input
                        filled
                        dense
                        v-model="data.password"
                        type="password"
                        name="password"
                        :rules="[
                          (val) => !!val || 'Please enter your login password',
                        ]"
                        :error="!!errors['password']"
                        :error-message="
                          errors['password'] ? errors['password'][0] : ''
                        "
                      />
                    </div>
                  </div>
                  <div class="input">
                    <label for=""
                      >Confirm Password <i class="fa-solid fa-asterisk"></i
                    ></label>
                    <div class="input_wrap">
                      <q-input
                        filled
                        dense
                        v-model="data.password_confirmation"
                        type="password"
                        name="password_confirmation"
                        :rules="[
                          (val) =>
                            (!!val && val === data.password) ||
                            'Passwords do not match',
                        ]"
                      />
                    </div>
                  </div>
                </q-step>
                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn
                      @click="step === 2 ? submit() : next($refs.stepper)"
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
            </q-form>

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
                  <!-- {{ data.payment }} -->
                  <div class="input_wrap">
                    <select v-model="data.payment" name="course" id="course">
                      <option selected :value="1">
                        Full payment (One time) {{ $h.money(learning_path.price) }}
                      </option>
                      <option :value="1 / 2">
                        Part payment (Two time payment)
                        {{ $h.money(learning_path.price / 2) }}
                      </option>
                      <option :value="1 / 3">
                        Triad payment (Three time payment)
                        {{ $h.money(learning_path.price / 3) }}
                      </option>
                      <option :value="1 / 4">
                        Quarter payment (Four time payment)
                        {{ $h.money(learning_path.price / 4) }}
                      </option>
                    </select>
                    <div class="error" v-if="errors['data.payment']">
                      {{ errors["data.payment"][1] }}
                    </div>
                  </div>
                </div>
                <q-card-actions align="right">
                  <t-paystack
                    style="border-radius: 8px"
                    class="bg-accent q-px-lg q-pt-xl q-pb-md text-white"
                    label="Make payment"
                    :data="{
                      type: 'portal',
                      portal_id: portal.id,
                      learning_path: learning_path.id,
                      installment: data.payment,
                      redirect: `${location.origin}${
                        $router.resolve({ name: 'user.payment.verify' }).href
                      }`,
                    }"
                  />
                </q-card-actions>
              </div>
            </q-dialog>
          </div>
        </div>
      </section>
      <div class="footer_img">
        <img class="img_width" src="/pe/devboot.jpeg" alt="" />
      </div>
    </main>
  </q-page>
</template>

<script>
import { ref } from "vue";
import stores from "src/stores/loader";
import TPaystack from "../TPaystack.vue";
export default {
  components: { TPaystack },
  computed: {
    loadedForm() {
      return stores.bootstrap.portal.reg_form || {};
    },
    portal() {
      return this.$boot.portal;
    },
  },
  setup() {
    return {
      location,
    };
  },
  data() {
    return {
      errors: [],
      errorMsg: [],
      loading: false,
      data: { data: {}, payment: 1 },
      step: ref(1),
      responseModal: false,
      activeForm: {},
      learning_path: {},
    };
  },
  mounted() {
    this.activeForm.fields = this.activeForm.fields.map((field) => {
      // If this field depends on the value of another field to be true then make this field visible
      if (field.options && field.options[0]) {
        this.setLearningPath(field.options[0].id, field)
      }
      if (field.required_if) {
        let dependency = field.required_if.split("=");
        this.processFields(
          field,
          this.data.data[dependency[0]] == dependency[1]
        );
        this.$watch(
          (e) => this.data.data[dependency[0]],
          (val) => {
            this.processFields(field, val == dependency[1]);
          }
        );
      }
      // If the field is a select field then select the first option
      if (field.element == "select") {
        this.data.data[field.name] = field.options[0].value;
      }
      return field;
    });
  },
  created() {
    this.loadForm();
  },
  methods: {
    next(ref) {
      this.$refs.appformm.validate().then((success) => {
        if (success) {
          ref.next();
        } else {
          this.$helper.notify("Your form has errors", "error");
        }
      });
    },
    submit() {
      this.$refs.appformm.validate().then((success) => {
        if (success) {
          this.loading = true;
          this.$q.loading.show();
          // Map through data and if field type is select then get convert the value to string
          this.data.data = Object.keys(this.data.data).reduce((acc, key) => {
            let field = this.activeForm.fields.find((f) => f.name == key);
            if (field && field.element == "select") {
              acc[key] = this.data.data[key].toString();
            } else {
              acc[key] = this.data.data[key];
            }
            return acc;
          }, {});
          this.$api
            .post(`portals/${this.portal.id}/register`, this.data)
            .then(({ data }) => {
              this.loading = false;
              this.$q.loading.hide();
              this.errors = {};
              this.$helper.notify(data.message, data.status || "success");
              this.responseModal = true;
              this.$refs.appformm.reset();
              this.$refs.appformm.resetValidation();
              this.data = { data: {} };
            })
            .catch((e) => {
              this.loading = false;
              this.$q.loading.hide();
              let error = this.$plugins.reader.error(e);
              this.errors = error.errors ?? {};
              this.$helper.notify(
                error.message || error,
                error.status || "error"
              );
            });
        } else {
          this.$helper.notify("Your form has errors", "error");
        }
      });
    },
    processFields(field, visible) {
      // Find field in the active form fields and set the current visibility
      let index = this.activeForm.fields.findIndex((f) => f.name == field.name);
      if (index > -1) {
        this.activeForm.fields[index].hidden = !visible;
      }
    },
    setLearningPath (id, field) {
      if (field.alias === "learning_paths") {
        this.learning_path = field.options.find((f) => f.id == id);
      }
    },
    loadForm() {
      if (this.loadedForm.id) {
        this.activeForm = this.loadedForm;
        return;
      }
      if (this.portal.reg_form_id) {
        this.$router.go(0);
      }
      this.$api
        .get(`get/forms/${this.portal.reg_form_id}`)
        .then(({ data }) => {
          this.loading = false;
          this.activeForm = data.data;
        })
        .catch((e) => {
          this.loading = false;
          this.$plugins.reader.error(e);
        });
    },
  },
};
</script>

<style scoped>
main {
  padding-bottom: 1.5rem;
}

section {
  padding: 2rem 0;
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

label {
  font-size: 15px;
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
.img_width {
  width: 70%;
  margin: 0 auto;
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

.input input,
.the-input {
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

  .img_width {
    width: 70%;
    margin: 0 auto;
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
