<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img src="/pe/logo.svg" alt="Eduland logo" />
          </a>

          <p class="footer-text">
            {{ portal.footer_info }}
          </p>

          <ul class="social-list" v-if="portal.socials">
            <li v-for="social in portal.socials" :key="social.type">
              <a :href="social.link" class="social-link">
                <i :class="`fa-brands fa-${social.type}`"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-link-box">
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

          <ul class="footer-list">
            <li>
              <p class="footer-link-title">Contact</p>
            </li>

            <li class="contact-item">
              <span>Call : </span>

              <a :href="`tel:${portal.phone}`" class="contact-link">{{
                portal.phone
              }}</a>
            </li>

            <li class="contact-item">
              <span>Email : </span>

              <a :href="`mailto:${portal.email}`" class="contact-link">{{
                portal.email
              }}</a>
            </li>

            <li class="contact-item">
              <span>Address : </span>

              <a href="#" class="contact-link">
                <address>{{ portal.address }}</address>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright" v-if="portal.copyright">
          {{ !portal.copyright.includes("&copy;") ? "&copy; " : ""
          }}{{ portal.copyright }}
        </p>
        <p class="copyright" v-else>
          &copy; Copyright {{ new Date().getFullYear() }}, {{ portal.name }} by
          Greysoft Technologies
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

.footer-brand {
  margin-bottom: 50px;
}

.footer-brand .logo img {
  width: 160px;
  margin-bottom: 20px;
}

.footer-text {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  line-height: 1.8;
  margin-bottom: 30px;
}

.footer .social-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
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

.footer-list li:first-child {
  margin-bottom: 10px;
}

.footer-link-title {
  color: var(--cultured);
  font-family: var(--ff-poppins);
  font-size: var(--fs-4);
}

.footer-link {
  color: var(--silver-chalice);
  font-family: var(--ff-rubik);
  padding-block: 10px;
  transition: var(--transition);
}

.footer-link:is(:hover, :focus) {
  color: var(--cultured);
  transform: translateX(3px);
}

.footer .contact-item {
  padding-block: 10px;
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
