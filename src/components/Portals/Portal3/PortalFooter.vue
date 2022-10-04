<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <!-- <div class="footer-brand">
          <a href="#" class="logo">
            <img src="/pe/logo.svg" alt="Eduland logo" />
          </a>

          <p class="footer-text">
            Professionally scale cross functional human capital and extensive
            technology.
          </p>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-google"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li class="contact-item">
              <span>Call : </span>

              <a href="tel:5463876387" class="contact-link">546 3876 387</a>
            </li>

            <li class="contact-item">
              <span>Email : </span>

              <a href="mailto:example@gmail.com" class="contact-link"
                >example@gmail.com</a
              >
            </li>
          </ul>
        </div> -->

        <div class="footer-link-box">
          <div class="ol">
            <ul class="footer-list q-mb-md">
              <li>
                <p class="footer-link" v-if="portal.footer_info">
                  {{ portal.footer_info }}
                </p>
                <p class="footer-link">Powered By</p>
              </li>

              <li class="q-pb-md">
                <p class="footer-link-title">
                  Greysoft <br />
                  Technologies
                </p>
              </li>
              <ul class="social-list" v-if="portal.socials">
                <li v-for="social in portal.socials" :key="social.type">
                  <a target="_blank" :href="social.link" class="social-link">
                    <i :class="`fa-brands fa-${social.type}`"></i>
                  </a>
                </li>
              </ul>
            </ul>
            <li class="contact-item">
              <a href="tel:5463876387" class="contact-link"
                >Tel: {{ portal.phone }}</a
              >
            </li>
            <!-- <li class="contact-item">
              <a href="tel:5463876387" class="contact-link">Tel: 07060998702</a>
            </li> -->

            <!-- <li class="contact-item">
              <span>Email : </span>

              <a href="mailto:example@gmail.com" class="contact-link"
                >example@gmail.com</a
              >
            </li> -->
          </div>
          <!-- <ul class="footer-list">
            <li class="q-pb-md">
              <p class="footer-link-title">Specializations</p>
            </li>

            <li>
              <a href="#" class="footer-link">Frontend Engineering</a>
            </li>

            <li>
              <a href="#" class="footer-link">Backend Engineering</a>
            </li>

            <li>
              <a href="#" class="footer-link">Product Design</a>
            </li>

            <li>
              <a href="#" class="footer-link">Data Science</a>
            </li>
            <li>
              <a href="#" class="footer-link">Digital Marketing</a>
            </li>
            <li>
              <a href="#" class="footer-link">Blockchain Technology</a>
            </li>
          </ul> -->

          <ul
            class="footer-list"
            v-for="group in portal.footer_pages"
            :key="group.id"
          >
            <li>
              <p class="footer-link-title">{{ group.label }}</p>
            </li>

            <li v-for="page in group.pages" :key="page.id">
              <router-link
                :to="{ name: 'portal.home', params: { portal: portal.slug } }"
                class="footer-link"
                v-if="page.index"
              >
                {{ page.title }}
              </router-link>
              <router-link
                :to="{
                  name: 'portal.page',
                  params: { portal: portal.slug, page: page.slug },
                }"
                class="footer-link"
                v-else
              >
                {{ page.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          <a href="">{{
            (portal.copyright || "").replace("{year}", new Date().getFullYear())
          }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    portal: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.footer {
  background: var(--rich-black-fogra-29);
}

.footer-top {
  padding-block: var(--section-padding);
}

.footer .social-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
}

.footer .social-link {
  background: var(--raisin-black);
  color: var(--silver-chalice);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 18px;
  border-radius: 50%;
  border: 1px solid var(--raisin-black);
  transition: var(--transition);
}

.footer .social-link:is(:hover, :focus) {
  background: var(--rich-black-fogra-29);
  color: var(--cultured);
}

.footer-link-box {
  display: grid;
  gap: 30px;
}

.footer-list {
  max-width: 230px;
}

/* .footer-list li:first-child {
  margin-bottom: 10px;
} */

.footer-link-title {
  color: var(--cultured);
  font-family: var(--ff-poppins);
  font-size: 30px;
  /* font-size: var(--fs-4); */
}

.footer-link {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  padding-block: 10px;
  font-size: 17px;
  transition: var(--transition);
}
.footer-list li {
  margin: 0.5rem;
}

.footer-link:is(:hover, :focus) {
  color: var(--cultured);
  transform: translateX(3px);
}

.footer .contact-item {
  padding-block: 10px;
  list-style: none;
}

.footer .contact-item span {
  display: inline-block;
  color: var(--cultured);
  font-family: var(--ff-rubik);
  font-weight: var(--fw-500);
}

.footer .contact-link {
  display: inline-block;
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  font-weight: var(--fw-500);
}

.footer .contact-link address {
  font-style: normal;
}

.footer-bottom {
  padding-block: 20px;
  border-top: 1px solid var(--onyx);
}

.copyright {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  line-height: 1.7;
  text-align: center;
}

.copyright a {
  display: inline-block;
  color: inherit;
  transition: var(--transition);
}

.copyright a:is(:hover, :focus) {
  color: var(--cultured);
}
@media (min-width: 768px) {
  .footer-text {
    max-width: 400px;
  }
}
@media (min-width: 550px) {
  .footer-link-box {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .footer-link-box {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
