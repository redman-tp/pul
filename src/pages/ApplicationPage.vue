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
              The Kukah Prize For Young Innovators
            </h1>
            <p class="">
              The Kukah Prize for Young Innovators is intended to support and
              spur young and innovative Africans whose ideas embody the
              potential to transform their communities and the world around us.
            </p>
            <!-- <p class="start_sub">Registration is now open</p> -->
          </div>
        </div>
      </section>

      <section class="about section" id="about">
        <div class="about__container container grid">
          <div class="about__data">
            <h2 class="section__title about__title">Call for Entry</h2>
            <p class="wel">Welcome!</p>
            <p class="about__description">
              We are interested in innovative tech ideas/solutions that can make
              a lasting change in your community or globally. Imagine an idea
              that combats climate change (13) and restores terrestrial
              ecosystem (14). These ideas are in line with the
              <a target="_blank" href="https://sdgs.un.org/goals"
                >Sustainable Development Goals(SDG 13&14)</a
              >
              ; they preserve the sustainable future. <br />
              <br />
              The Kukah Prize for Young Innovators is for bright young minds who
              show exceptional promise worthy of recognition on a global stage;
              using technology to improve the lives of people and our collective
              African environment. <br />
              <br />
              Before submitting entry, please note that you will be required to
              upload a one minute video on YouTube, introducing yourself, your
              idea and elaborating on how your idea will make your community a
              better place, then share the link.
            </p>

            <img src="/pe/kuk.jpg" alt="" />
          </div>
          <div class="experience__img">
            <h2 class="class">Start Entry</h2>
            <p class="about__description">
              Please ensure that your entries are correct and are in line with
              the
              <q-btn @click="openTerms = true" class="modal__button" id="myBtn">
                Terms and Conditions
              </q-btn>
              before submission. Submission is final and irrevocable.
            </p>
            <h3 class="enc">
              <strong>"Female candidates are encouraged to apply"</strong>
            </h3>
            <!-- <p class="enc pulse q-my-md text-weight-bold">
              Please note that If you have not received an email confirming your
              submission kindly submit another entry.
            </p> -->
            <p class="enc pulse q-my-md text-weight-bold">
              Entry Submissions are now closed
            </p>

            <!-- <form
              ref="appformm"
              enctype="multipart/form-data"
              id="appForm"
              @submit.prevent="submit"
              class="form"
            >
              <div class="input">
                <label for=""
                  >First Name <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    id="firstName"
                    v-model="firstname"
                    type="text"
                    name="data[firstname]"
                  />
                </div>
                <div class="error" v-if="errors['data.firstname']">
                  {{ errors["data.firstname"][1] }}
                </div>

              </div>
              <div class="input">
                <label for=""
                  >Last Name <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="lastname"
                    id="lastName"
                    type="text"
                    name="data[lastname]"
                  />
                </div>
                <div class="error" v-if="errors['data.lastname']">
                  {{ errors["data.lastname"][1] }}
                </div>

              </div>

              <div class="input">
                <div class="hold_inputs">
                  <div class="input_wrap">
                    <label class="urls" for="">Website URL</label>
                    <input
                      v-model="website"
                      id="websiteURL"
                      type="text"
                      name="data[website]"
                    />

                    <div class="error" v-if="errors['data.website']">
                      {{ errors["data.website"][1] }}
                    </div>

                  </div>
                  <div class="input_wrap">
                    <label class="urls" for=""> LinkedIn URL</label>
                    <input
                      v-model="linkedin"
                      id="linkedinURL"
                      type="text"
                      name="data[linkedin]"
                    />
                    <div class="error" v-if="errors['data.linkedin']">
                      {{ errors["data.linkedin"][1] }}
                    </div>

                  </div>
                  <div class="input_wrap">
                    <label class="urls" for="">Facebook URL</label>
                    <input
                      v-model="facebook"
                      id="facebookURL"
                      type="text"
                      name="data[facebook]"
                    />
                    <div class="error" v-if="errors['data.facebook']">
                      {{ errors["data.facebook"][1] }}
                    </div>

                  </div>
                  <div class="input_wrap">
                    <label class="urls" for="">Twitter URL</label>
                    <input
                      v-model="twitter"
                      id="twitterURL"
                      type="text"
                      name="data[twitter]"
                    />
                    <div class="error" v-if="errors['data.twitter']">
                      {{ errors["data.twitter"][1] }}
                    </div>

                  </div>
                  <div class="input_wrap">
                    <label class="urls" for="">GitHub URL</label>
                    <input
                      v-model="github"
                      id="githubURL"
                      type="text"
                      name="data[github]"
                    />
                    <div class="error" v-if="errors['data.github']">
                      {{ errors["data.github"][1] }}
                    </div>

                  </div>
                </div>
              </div>

              <div class="input">
                <label for=""
                  >Email Address <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="email"
                    type="email"
                    name="data[email]"
                    id="email"
                  />
                  <div class="error" v-if="errors['data.email']">
                    {{ errors["data.email"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Phone Number <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="phone"
                    type="tel"
                    id="phone"
                    name="data[phone]"
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
                  <select v-model="gender" name="data[gender]" id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefernottosay">Prefer not to say</option>
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
                  <input v-model="dob" name="data[dob]" id="date" type="date" />
                  <div class="error" v-if="errors['data.dob']">
                    {{ errors["data.dob"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Residential Address <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="address"
                    type="text"
                    name="data[address]"
                    id="residency"
                  />

                  <div class="error" v-if="errors['data.address']">
                    {{ errors["data.address"][1] }}

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Highest Academic Qualification
                  <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    type="text"
                    v-model="qualification"
                    name="data[qualification]"
                    id="qualification"
                  />
                  <div class="error" v-if="errors['data.qualification']">
                    {{ errors["data.qualification"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Last School Attended <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="last_school"
                    type="text"
                    name="data[last_school]"
                    id="school"
                  />
                  <div class="error" v-if="errors['data.last_school']">
                    {{ errors["data.last_school"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Country <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <select v-model="country" name="data[country]" id="country">
                    <option value="nigeria">Nigeria</option>
                  </select>
                  <div class="error" v-if="errors['data.country']">
                    {{ errors["data.country"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Do you have any disabilities?
                  <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <select v-model="disabled" id="disability">
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
                    v-model="disabilities"
                    name="data[disabilities]"
                    id="disabilities"
                    placeholder="Please Specify"
                    type="text"
                  />
                  <div class="error" v-if="errors['data.disabilities']">
                    {{ errors["data.disabilities"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >What problem is your idea solving: And why?
                  <small
                    >Taking inspiration from the Sustainable Development Goals,
                    tell us in 3-4 lines about an issue within your own
                    community or globally that your idea is addressing to impact
                    our sustainable future</small
                  >
                  <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <textarea
                    v-model="problem"
                    name="data[problem]"
                    id="problem"
                  ></textarea>
                  <div class="error" v-if="errors['data.problem']">
                    {{ errors["data.problem"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >How are you solving this problem?
                  <small
                    >How is your idea impacting our sustainable future and
                    generating opportunities?</small
                  >
                  <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <textarea
                    v-model="solution"
                    name="data[solution]"
                    id="solution"
                  ></textarea>
                  <div class="error" v-if="errors['data.solution']">
                    {{ errors["data.solution"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >How does your idea stand out from the crowd?
                  <small
                    >There are many sustainable solutions to global issues from
                    the digitalization of farming to the electrification of
                    vehicles to the construction of stem learning centers. What
                    is unique about your idea?
                  </small>
                  <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <textarea
                    v-model="uniquenes"
                    name="data[uniquenes]"
                    id="uniquenes"
                  ></textarea>
                  <div class="error" v-if="errors['data.uniquenes']">
                    {{ errors["data.uniquenes"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >What is the potential value of your idea?
                  <small
                    >Who would benefit from your idea becoming a reality and
                    what larger impact could that have on the world?
                  </small>
                  <i class="fa-solid fa-asterisk"></i
                ></label>

                <div class="input_wrap">
                  <textarea
                    v-model="potential"
                    name="data[potential]"
                    id="potential"
                  ></textarea>
                  <div class="error" v-if="errors['data.potential']">
                    {{ errors["data.potential"][1] }}
                  </div>

                </div>
              </div>

              <div class="input">
                <label for="">
                  Provide a URL to your idea <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="idea_link"
                    type="text"
                    name="data[idea_link]"
                    id="ideaURL"
                  />
                  <div class="error" v-if="errors['data.idea_link']">
                    {{ errors["data.idea_link"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Are there any publications about your idea, if yes, please
                  share the URL
                </label>
                <div class="input_wrap">
                  <input
                    v-model="publication_link"
                    type="text"
                    name="data[publication_link]"
                    id="publication_link"
                  />
                  <div class="error" v-if="errors['data.publication_link']">
                    {{ errors["data.publication_link"][1] }}
                  </div>

                </div>
              </div>
              <div class="input">
                <label for=""
                  >Provide a URL to any other resource that supports your
                  submission</label
                >
                <div class="input_wrap">
                  <input
                    v-model="resource_link"
                    name="data[resource_link]"
                    id="resourceURL"
                    type="text"
                  />
                  <div class="error" v-if="errors['data.resource_link']">
                    {{ errors["data.resource_link"][1] }}
                  </div>

                </div>
              </div>

              <div class="input">
                <label for=""
                  >Upload a one minute video on YouTube, introducing yourself,
                  your idea and elaborating on how your idea will make your
                  community and the world a better place. Share the YouTube link
                  here (if you wish to keep your idea private, you may share a
                  private URL). <i class="fa-solid fa-asterisk"></i
                ></label>
                <div class="input_wrap">
                  <input
                    v-model="video_link"
                    type="text"
                    name="data[video_link]"
                    id="video_link"
                  />
                  <div class="error" v-if="errors['data.video_link']">
                    {{ errors["data.video_link"][1] }}
                  </div>

                </div>
              </div>

              <div class="terms">
                <input
                  type="checkbox"
                  v-model="terms"
                  name="terms"
                  id="terms"
                />
                <p>
                  I agree to the
                  <q-btn
                    v-ripple
                    @click="openTerms = true"
                    class="modal__button"
                    id="myBtn"
                  >
                    Terms and Conditions
                  </q-btn>
                  of the The Kukah Prize For Young Innovators
                </p>
              </div>
              <p class="enc q-mt-md text-weight-bold">
                If you have not received an Email confirming your submission
                please kindly submit another entry.
              </p>

              <div class="submit">
                <button
                  :loading="loading"
                  class="btn"
                  id="submitApp"
                  type="submit"
                >
                  Submit Entry
                </button>
                <a
                  href="https://docs.google.com/forms/d/1kCH-8hUtPiSOx1PG5XaBKQY3A77jAEV4Efuk2scf0xI"
                  target="_blank"
                  :loading="loading"
                  class="btn"

                  id="submitApp"
                  type="submit"
                >
                  Start Entry
                </a>
              </div>
            </form> -->
          </div>
        </div>
      </section>
      <q-dialog v-model="openTerms" class="termsDialog">
        <q-card class="modal containerr" id="myModal">
          <div
            id=" modal-content modal-container"
            class="card modal__container"
          >
            <div class="modal__content">
              <span @click="openTerms = false" class="close">&times;</span>
              <h1 class="primary-heading">Terms and Conditions</h1>
              <p class="paragraph">
                <span
                  >Please read the following terms and conditions carefully. By
                  agreeing to these terms and conditions, you acknowledge that
                  you have read and you agree that the following terms and
                  conditions govern the Kukah Awards and any work related
                  thereto.</span
                >
                <br />
                <br />

                <span class="wel"> Eligibility </span>
                To be eligible to compete for the Kukah Awards, registrants
                shall submit a complete registration between the open
                registration dates as stated in the Call for Entry documents. To
                qualify, all submissions must be in English, unless otherwise
                stated on the call for Entry page. <br />
                <br />
                A registrant may be prohibited or suspended from participating
                in the contest if the Kukah Award Committee, at its sole
                discretion, reasonably believes that such a person will have
                reached his/her 31st birthday at the time the award is received,
                has attempted to undermine the legitimate operation of the
                contest by, interring an alias, cheating, deception, or other
                unfair playing practices, providing false or misleading
                information, or if the registrant infringes any intellectual
                property right. A registrant may also be suspended and
                disqualified from participation in the event the registrant
                makes disparaging remarks about The Kukah Award, its associated
                agencies on social and digital media, or through the use of any
                other intermediaries, including but not limited to
                representatives of the media.
                <br /><br /><br />
                The Kukah Award Committee reserves the right to disqualify any
                submissions that are interpreted as derogatory or discriminatory
                against individuals or groups based on gender, ethnicity, sexual
                orientation, political affiliation, religion or any other
                faction. The committee reserves the discretionary right to
                disqualify submissions that suggest activities that are illegal
                in the country in which the submitting registrant resides, or
                submissions that suggest activities that could cause significant
                business loss to sponsors of the Award or associated partners or
                may for other reasons be deemed inappropriate.
                <br /><br /><br />
                Employees of any company within The Kukah Center, Greysoft
                Technologies and any other partners cannot participate. However,
                current and former interns, co-ops, and family members of
                employees may participate, so long as the family members are not
                related to judges or individuals who can directly influence
                prizes or competition status.
                <br /><br /><br />

                <span class="wel">Prize</span>

                The Kukah Award Committee reserves the right to substitute a
                prize with an item of equal or greater value in the event that
                all or part of a prize becomes unavailable. Prizes are awarded
                without warranty of any kind from the committee, express or
                implied, without limitation, except where this would be contrary
                to federal, state or local laws or regulations. Prize taxes are
                to be paid by the winner. Return of any prize/prize notification
                may result in disqualification and selection of an alternate
                winner. Any potential winner who cannot be contacted within 7
                days of attempted first notification will forfeit his/her
                prize/award.
                <br /><br /><br />
                Travel to the venue of the Award Ceremony will include for each
                registrant: airfare to and from the home country, hotel
                accommodation, and transport to and from the airport in the
                country hosting the Award Ceremony. The committee will not
                support airfare outside of the period of time for the Award
                Ceremony. The Award Committee will not cover extra airfare due
                to missing the flight on personal reasons and not airline
                related. The committee will not provide any additional airfare,
                meals, experiences or accommodation for family members or
                friends. Registrants may choose to bring guests at their own
                expense.
                <br /><br /><br />

                <span class="wel"> Intellectual Property Rights </span>

                The Kukah Award Committee shall have the right to use, copy,
                modify and make available to the public the submitted
                application in connection with the operation, conduct,
                administration and advertising and promotion of the contest via
                communication to the public, and in all types of marketing,
                beta-testing and demonstration activities. This also includes,
                but is not limited, to the right to make the submitted
                application available for trial purposes on similar terms. The
                intellectual and industrial property rights to the contest
                submission, if any, will remain with the registrants, except
                that these terms do not supersede any other assignment or grant
                of rights according to any other separate agreements between
                registrants and other parties. For the avoidance of doubt,
                nothing in these terms and conditions or the competition
                constitutes a transfer of any intellectual property rights
                independently developed by The Kukah Award Committee prior to,
                in parallel or after the competition.
                <br />
                <br />
                The Kukah Award Committee shall have the non-exclusive and
                perpetual right (but not the obligation) to use and license the
                use of your name, image and likeness in relation to any
                promotion of the Kukah Prize for Young Innovators on The Kukah
                Center homepage and that of its sponsors, as well as on their
                social media channels and at the Kukah Awards live event.

                <br /><br /><br />

                <span class="wel"> Data Protection </span>

                Each registrant acknowledges and agrees that in connection with
                the contest personal data, including but not limited to name and
                address, may be collected from him/her. Each such person hereby
                acknowledges and consents that the Kukah Award Committee may
                process and store data in different locations and display such
                personal data to the public and otherwise use it for the
                purposes and within the context of the contest, both current and
                in future iterations or as outlined in these terms and
                conditions or other requirements relating to the competition.
                The personal data will be kept secure and deleted when no longer
                needed. Furthermore, such persons have a right to access and
                rectify any personal data held by the committee through the
                e-mail address: thekukahprize@greysoft.ng <br />
                <br />
                <span class="wel"> Warranty and Indemnity </span>

                Each registrant warrants that the registration submitted by
                him/her is an original work and that they are the sole and
                exclusive owner and right holder thereof, and that they have the
                right to submit the application in the contest. Any indication
                which is to the contrary of the aforementioned requirement will
                lead to disqualification.
                <br /><br /><br />
                Each registrant agrees and undertakes not to submit any
                registration that (i) infringes any 3rd party proprietary,
                intellectual property, industrial property, personal rights or
                other rights, including without limitation, copyright,
                trademark, patent, trade secret, or confidentiality obligation;
                or (ii) otherwise violates applicable law in any relevant
                countries in the world. To the maximum extent permitted by law,
                each registrant indemnifies and agrees to keep indemnified The
                Kukah Center, its affiliates (meaning any legal entity that
                directly or indirectly controls, is controlled by, or under
                common control with the Kukah Center), agents, directors,
                officers, employees, representatives and assigns harmless at all
                times from and against any liability, claims, demands, losses,
                damages, costs and expenses resulting from any act, default or
                omission of the participant and/or a breach of any warranty set
                forth herein.
                <br /><br /><br />
                <span class="wel"> Exclusion of Liability </span>

                The Kukah Award Committee is not responsible for electronic
                transmission errors resulting in omission, interruption,
                deletion, defect, delay in operations or transmission. The
                committee is not responsible for theft or destruction or
                unauthorized access to or alterations of entry materials, or for
                technical, network, telephone equipment, electronic, computer,
                hardware or software malfunctions or limitations of any kind.
                The committee is not responsible for inaccurate transmissions of
                or failure to receive entry information by the committee on
                account of technical problems or traffic congestion on the
                internet or at any website or any combination thereof. The Kukah
                Award Commitee is not responsible for any typographical or other
                error in the printing of the offer, administration of the
                contest or in the announcement of the prize.
                <br /><br />
                <span class="wel">Governing Law </span>

                To the extent permitted by law, the rules, terms and conditions
                for the contest are governed by the laws of Nigeria. All
                disputes arising out of or in connection with the present
                Contractual Documents shall be finally settled in a Nigerian
                court of law with both parties legal representation.
              </p>
            </div>
            <footer class="q-mt-md">
              <p class="footer-heading text-center">
                © Copyright 2022 The Kukah Award Committee. All rights reserved.
              </p>
            </footer>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog v-model="responseModal" persistent>
        <div class="hold_dia">
          <div class="top">
            <div class="icon">
              <i class="ri-check-double-fill"></i>
            </div>
            <!-- <p>Send us an email</p> -->
            <h4 class="text-weight-bold">Your entry was successful</h4>
          </div>
          <q-card-actions align="right">
            <q-btn
              style="border-radius: 8px"
              class="bg-primary q-px-lg q-py-sm text-white"
              flat
              @click="goBack"
              label="Close"
              color="primary"
            />
          </q-card-actions>
        </div>
      </q-dialog>
    </main>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      responseModal: false,
      errorMsg: [],
      loading: false,
      disabilitiesInput: false,
      openTerms: false,
      terms: false,
      firstname: "",
      lastname: "",
      website: "",
      linkedin: "",
      twitter: "",
      facebook: "",
      github: "",
      email: "",
      phone: "",
      dob: "",
      address: "",
      country: "nigeria",
      disabled: "",
      disabilities: "",
      qualification: "",
      problem: "",
      solution: "",
      uniquenes: "",
      potential: "",
      video_link: "",
      publication_link: "",
      last_school: "",
      resource_link: "",
      idea_link: "",
      gender: "other",
    };
  },

  watch: {
    disabled: function () {
      if (this.disabled === "1") {
        document.getElementById("disabilities").disabled = false;
      } else {
        document.getElementById("disabilities").disabled = true;
      }
    },
  },

  methods: {
    submit() {
      if (this.terms === false) {
        alert("You need to agree to the Terms and Conditions");
        console.log(
          "You must agree with the Terms of Services and Privacy conditions"
        );
        this.$q.notify({
          message:
            "You must agree with our Terms of Services and Privacy conditions",
          color: "primary",
          position: "top",
        });
        return;
      } else {
        let firstname = this.firstname;
        let lastname = this.lastname;
        let gender = this.gender;
        let video_link = this.video_link;
        let resource_link = this.resource_link;
        let disabled = this.disabled;
        let disabilities = this.disabilities;
        let idea_link = this.idea_link;
        let uniquenes = this.uniquenes;
        let website = this.website;
        let facebook = this.facebook;
        let twitter = this.twitter;
        let github = this.github;
        let email = this.email;
        let linkedin = this.linkedin;
        let dob = this.dob;
        let address = this.address;
        let country = this.country;
        let qualification = this.qualification;
        let last_school = this.last_school;
        let potential = this.potential;
        let phone = this.phone;
        let problem = this.problem;
        let solution = this.solution;
        const formData = new FormData();
        formData.append("data[firstname]", firstname);
        formData.append("data[lastname]", lastname);
        formData.append("data[gender]", gender);
        formData.append("data[potential]", potential);
        formData.append("data[problem]", problem);
        formData.append("data[video_link]", video_link);
        formData.append("data[phone]", phone);
        formData.append("data[last_school]", last_school);
        formData.append("data[qualification]", qualification);
        formData.append("data[address]", address);
        formData.append("data[country]", country);
        formData.append("data[dob]", dob);
        formData.append("data[email]", email);
        formData.append("data[website]", website);
        formData.append("data[linkedin]", linkedin);
        formData.append("data[facebook]", facebook);
        formData.append("data[twitter]", twitter);
        formData.append("data[idea_link]", idea_link);
        formData.append("data[resource_link]", resource_link);
        formData.append("data[uniquenes]", uniquenes);
        formData.append("data[solution]", solution);
        formData.append("data[disabled]", disabled);
        if (this.disabled === "1") {
          formData.append("data[disabilities]", disabilities);
        } else {
          console.log("Not disabled");
        }
        formData.append("data[github]", github);
        this.$q.loading.show();
        this.loading = true;
        this.$api
          .post("get/form-data/1", formData)
          .then((resp) => {
            this.$q.loading.hide();

            console.log(resp);
            this.$q.notify({
              message: "Submission Successful",
              color: "green",
              position: "top",
              timeout: 3000,
            });
            this.responseModal = true;

            document.getElementById("appForm").reset();
          })
          .catch(({ response }) => {
            this.$q.loading.hide();
            this.errors = response.data.errors;
            // this.errorMsg = response.data.message;
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
      }
    },

    goBack() {
      this.responseModal = false;
      location.reload();
    },
  },
};
</script>

<style scoped>
main {
  padding-bottom: 1.5rem;
}
.hold_dia {
  background: white;
  padding: 3rem 1rem 1rem;
}
.hold_dia i {
  font-size: 6rem;
  color: #4bb543;
}

.hold_dia h4 {
  font-size: 2rem;
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
  color: #db9200;
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

.submit {
  margin-top: 2.5rem;
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

/* modal */
.primary-heading {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
}
.modal {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  border-radius: 15px;
  padding: 2rem;
  color: #fff;
  position: relative;
  width: 800px;
  z-index: 7000;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding: 1rem;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
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
@media (max-width: 708px) {
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
}

@media screen and (max-width: 550px) {
  .home__data-title {
    font-size: 2rem;
  }
  .primary-heading {
    font-size: 2rem;
  }
  .modal {
    padding: 0.75rem;
  }
  .prixes {
    width: 100%;
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
