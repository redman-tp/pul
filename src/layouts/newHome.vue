<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <header class="header bg-black" data-header>
      <div class="container">
        <div>
          <q-btn
            @click="toggleMenu"
            id="nav-open-btn"
            class="nav-open-btn logo"
            aria-label="Open Menu"
            data-nav-open-btn
          >
            <!-- <i class="fa-duotone fa-bars"></i> -->
            <i class="ri-menu-2-fill"></i>
          </q-btn>
        </div>

        <nav class="navbar" data-navbar>
          <q-btn
            class="nav-close-btn"
            aria-label="Close Menu"
            data-nav-close-btn
          >
            <i class="fa-duotone fa-xmark-large"></i>
          </q-btn>
          <q-item to="/" class="nav__logo logoRes">
            <img src="/pe/greysoftNGicon-01.svg" alt="" /> Grey<span>soft</span
            ><span class="ng">NG</span></q-item
          >

          <ul class="navbar-list">
            <li>
              <q-btn to="/" exact class="navbar-link" data-nav-link>
                <span>Home</span>
              </q-btn>
            </li>

            <li>
              <q-btn exact to="/about" class="navbar-link" data-nav-link>
                <span>About Us</span>
              </q-btn>
            </li>
            <li>
              <q-btn-dropdown
                color=""
                class="navbar-link"
                style="text-transfrom: capitalize"
                label="Our Solutions"
              >
                <q-list>
                  <q-item clickable to="/greyhobb" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyHobb</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable to="/greytech" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyTech</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable to="/greycreate" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyCreate</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable to="/greyacademy" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyAcademy</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable to="/careers" v-close-popup>
                    <q-item-section>
                      <q-item-label>Careers</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable to="/metaverse" v-close-popup>
                    <q-item-section>
                      <q-item-label>Metaverse</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </li>
            <!-- <li>
              <q-btn
                exact
                @click="gotocontact"
                class="navbar-link"
                data-nav-link
              >
                <span>Blog</span>
              </q-btn>
            </li> -->
          </ul>
        </nav>
        <nav class="nvbr" data-navbar>
          <ul class="navbar-list">
            <li>
              <q-btn to="/" exact class="navbar-link" data-nav-link>
                <span>Home</span>
              </q-btn>
            </li>

            <li>
              <q-btn exact to="/about" class="navbar-link" data-nav-link>
                <span>About Us</span>
              </q-btn>
            </li>
            <li>
              <q-btn-dropdown
                color=""
                class="navbar-link"
                style="text-transfrom: capitalize"
                label="Our Solutions"
              >
                <q-list>
                  <q-item clickable to="/greyhobb" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyHobb</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable to="/greytech" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyTech</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable to="/greycreate" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyCreate</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable to="/greyacademy" v-close-popup>
                    <q-item-section>
                      <q-item-label>GreyAcademy</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable to="/careers" v-close-popup>
                    <q-item-section>
                      <q-item-label>Careers</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable to="/metaverse" v-close-popup>
                    <q-item-section>
                      <q-item-label>Metaverse</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </li>
            <!-- <li>
              <q-btn
                exact
                @click="gotocontact"
                class="navbar-link"
                data-nav-link
              >
                <span>Blog</span>
              </q-btn>
            </li> -->
          </ul>
        </nav>
        <div class="tour">
          <q-btn-dropdown
            class="text-black vr"
            style="text-transfrom: capitalize"
            label="VR Tour"
          >
            <q-list class="list">
              <a
                href="https://kuula.co/share/collection/7vGlZ?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=-1"
                clickable
                target="_blank"
                class="item_sq"
              >
                <q-item-section>
                  <q-item-label>GreyHobb Tour</q-item-label>
                </q-item-section>
              </a>
              <a
                href="https://kuula.co/share/collection/7vbCd?logo=1&info=0&fs=1&vr=1&initload=0&thumbs=-1&alpha=0.90"
                clickable
                target="_blank"
                class="item_sq"
              >
                <q-item-section>
                  <q-item-label>MS Square Tour</q-item-label>
                </q-item-section>
              </a>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />

      <q-page-sticky position="bottom-right" :offset="fabPos">
        <q-fab
          icon="fa-solid fa-at"
          direction="up"
          class="add"
          :disable="draggingFab"
          v-touch-pan.prevent.mouse="moveFab"
        >
          <!-- <a target="_blank" href="https://web.facebook.com/greysoftng"
            ><q-fab-action color="primary" icon="mail" :disable="draggingFab"
          /></a> -->
          <a target="_blank" href="https://web.facebook.com/greysoftng"
            ><q-fab-action
              color="primary"
              icon="facebook"
              :disable="draggingFab"
          /></a>

          <a target="_blank" href="https://www.instagram.com/greyhobb/"
            ><q-fab-action
              color="primary"
              icon="fab fa-instagram"
              :disable="draggingFab"
          /></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
            ><q-fab-action
              color="primary"
              icon="fab fa-linkedin"
              :disable="draggingFab"
          /></a>
          <a target="_blank" href="https://twitter.com/greyhobb"
            ><q-fab-action
              color="primary"
              icon="fab fa-twitter"
              :disable="draggingFab"
          /></a>
          <!-- <a target="_blank" href=""
            ><q-fab-action
              color="primary"
              icon="fa-brands fa-whatsapp"
              :disable="draggingFab"
          /></a> -->
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      fabPos,
      draggingFab,

      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  mounted() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
      window.scrollY >= 50
        ? header.classList.add("active")
        : header.classList.remove("active");
    });

    this.toggleMenu();
  },
  watch: {
    $route(to, from) {
      document.querySelector(".navbar").classList.remove("active");
      console.log(to, from);
    },
  },

  methods: {
    toggleMenu() {
      const menu = document.getElementById("nav-open-btn");
      const navbar = document.querySelector(".navbar");
      const navTogglers = document.querySelector(".nav-close-btn");

      const toggleNavbar = function () {
        navbar.classList.add("active");
        // overlay.classList.toggle("active");
      };

      menu.addEventListener("click", toggleNavbar);

      const closeNavbar = function () {
        navbar.classList.remove("active");
        // overlay.classList.remove("active");
      };

      navTogglers.addEventListener("click", closeNavbar);
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Plus Jakarta Sans", sans-serif;
}

li {
  list-style: none;
  display: flex;
}

img {
  width: 100%;
}

.logoRes {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-60%, -20%);
}

.item_sq {
  display: inline-block;
  padding: 0.7rem;
}
.list {
  display: flex;
  flex-direction: column;
}

.vr {
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  border-radius: 2px;
  color: #fff !important;
  text-transform: capitalize;
  padding: 0.6rem 2rem;
  font-size: 18px;
  transition: all 0.5s ease-in-out;
}
.add {
  background: linear-gradient(
    285.19deg,
    rgba(207, 2, 187, 0.94) -17.8%,
    rgba(211, 172, 31, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  color: #fff;
}

.nav__logo {
  font-size: 2.5rem;
}

.vr:hover {
  background: linear-gradient(
    285.19deg,
    rgba(215, 197, 35, 0.94) -17.8%,
    rgba(207, 2, 187, 0.94) 67.55%,
    rgba(240, 13, 67, 0.94) 152.9%
  );
  border-radius: 2px;
}
.logo_text {
  min-height: unset;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.5em;
  color: #333333;
  text-transform: uppercase;
}

.logo_text span {
  font-weight: 400;
}

.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

input:focus,
textarea:focus {
  outline: none;
}

a {
  text-decoration: none;
  color: inherit;
}

input {
  width: 100%;
}

button {
  cursor: pointer;
}

:focus-visible {
  outline-offset: 4px;
}

::selection {
  background-color: var(--white_10);
}

::-webkit-scrollbar {
  width: 13px;
}

::-webkit-scrollbar-track {
  background-color: hsl(0, 0%, 95%);
}

::-webkit-scrollbar-thumb {
  background-color: var(--pistachio);
}

.btn {
  position: relative;
  background-color: var(--btn-bg, var(--pistachio));
  color: var(--white);
  font-weight: var(--fw-600);
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: var(--transition-2);
}

.btn i {
  --ionicon-stroke-width: 55px;
  font-size: 1.8rem;
}

.btn:not(.btn-outline)::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--btn-bg, var(--pistachio));
  transform: translate(5px, 5px);
  transition: var(--transition-2);
}

.btn:is(:hover, :focus)::after {
  transform: translate(0, 0);
}

.q-item.logo {
  min-height: 0;
  padding: 0;
}

.logo .logo_text {
  font-size: 1.5rem;
  color: black;
}

.btn-secondary {
  --btn-bg: var(--black);
}

.btn-secondary:is(:hover, :focus) {
  --btn-bg: var(--pistachio);
}

.btn-outline {
  border: 2px solid var(--white);
  background-color: transparent;
}

.btn-white {
  --btn-bg: var(--platinum);
  color: var(--black);
}

.section {
  padding-block: var(--section-padding);
}

.w-100 {
  width: 100%;
}

.section-text {
  line-height: 2;
}

.img-cover {
  width: 100%;
  height: 320px;
  object-fit: cover;
  transition: all 0.5s ease;
}
.img-cover:hover {
  position: relative;
  z-index: 1;
  transform: scale(1.1);
}

.lang-switch,
.header-action {
  display: none;
}
.header .q-btn::before {
  box-shadow: none;
}
.header {
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f6f6f6;
  z-index: 20;
  padding: 0.75rem 0;
}

.header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 140px);
  height: 1px;
  background-color: var(--white_10);
}

.header.active {
  background-color: var(--eerie-black-1);
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.8);
  position: fixed;
}

.header.active .logo_text {
  color: #fff;
}

.header.active::after {
  display: none;
}
.header.active .nav-open-btn {
  color: var(--white);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  // padding: 1rem 0;
}

.logo {
  color: var(--white);
  font-family: var(--ff-oswald);
  font-size: 3.2rem;
  text-transform: uppercase;
}

.nav-open-btn {
  color: white;
  font-size: 2rem;
}

.navbar {
  position: fixed;
  background-color: var(--eerie-black-1);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  outline: 1px solid var(--white_10);
  display: flex;
  flex-direction: column;
  z-index: 1;
  visibility: hidden;
  transition: 0.25s var(--cubic-in);
}

.nvbr .navbar-list {
  display: flex;
  gap: 70px;
  max-width: 100%;
}

.navbar.active {
  transform: translateY(-100%);
  visibility: visible;
  z-index: 100;
  transition: 0.5s var(--cubic-out);
}
.navbar.active .logo .logo_text {
  color: white;
}

.nav-close-btn {
  color: var(--white);
  font-size: 1.4rem;
  position: absolute;
  top: 15px;
  right: 15px;
}

.nav-close-btn i {
  --ionicon-stroke-width: 60px;
}

.navbar > .logo {
  font-size: 4rem;
  width: max-content;
  margin-inline: auto;
  margin-block-start: 50px;
}
.nav-open-btn {
  padding: 0;
  min-height: 1.5rem;
}

.navbar-list {
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding-inline: 30px;
  opacity: 1;
  transition: 0.5s ease;
  transition-delay: 0s;
}

.navbar.active .navbar-list {
  opacity: 1;
  transition-delay: 0.25s;
}

.navbar-link {
  color: white;
  font-size: 14px !important;
  font-weight: var(--fw-500);
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px 5px;
  padding-block: 8px;
  transition: var(--transition-1);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px !important;
  line-height: 21px;
  color: #ffffff;
}

.header.active .navbar-link {
  font-weight: 700;
}
.header.active .logo2 {
  height: 140px;
}
.navbar.active .navbar-link {
  color: var(--white);
  font-weight: 700;
}
.navbar.active .logo2 {
  height: 140px;
}

.navbar-link:is(:hover, :focus) {
  background-color: var(--pistachio);
}

@media (min-width: 1000px) {
  .container {
    max-width: 1400px;
    width: 100%;
    margin-inline: auto;
    padding-inline: 30px;
  }

  .section-title {
    line-height: 1.2;
  }

  .home .q-carousel__slide {
    background-position: center top !important;
  }

  .header.active .nav-close-btn {
    display: block;
  }

  // .navbar {
  //   all: unset;
  // }

  // .navbar-list {
  //   all: unset;
  //   display: flex;
  //   gap: 70px;
  // }

  // .header {
  //   padding: 1rem;
  // }

  .footer .container {
    margin-inline: 30px;
    width: auto;
  }
}

@media (max-width: 1000px) {
  .nvbr .navbar-list {
    display: none;
  }
}

@media (max-width: 600px) {
  .header {
    padding: 2px;
  }
  .logo img {
    width: 50px;
  }

  .nav-open-btn {
    font-size: 3rem;
  }
  .logo {
    color: var(--white);
    font-family: var(--ff-oswald);
    font-size: 2rem !important;
    text-transform: uppercase;
  }
  .vr {
    padding: 0.3rem 1.3rem;
    font-size: 14px;
  }
}
.logo img {
  width: 160px;
  height: 70px;
  object-fit: contain;
}

@media (max-width: 500px) {
  .logo img {
    width: 100px;
    object-fit: contain;
  }
  .nav-open-btn {
    font-size: 1.7rem;
  }
  .logo2 {
    width: 200px !important;
  }
}
@media (max-width: 400px) {
  .logo .logo_text {
    font-size: 1.1rem;
  }
}
</style>
