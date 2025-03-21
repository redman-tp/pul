<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <header class="header" :class="{ 'header--active': isHeaderActive }" data-header>
      <div class="container">
        <!-- Menu Button - Only visible on mobile -->
        <div class="menu-trigger">
          <button
            @click="toggleMenu"
            id="nav-open-btn"
            class="nav-open-btn"
            aria-label="Open Menu"
            type="button"
          >
            <div class="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <!-- Logo - Positioned on the left -->
        <q-item to="/" class="nav__logo">
          <img src="/pe/greysoftNGicon-01.svg" alt="Greysoft" class="logo-image" />
          <span class="logo-text">
            <span class="grey-part"></span><span class="soft-part">Greysoft</span
            ><span class="ng-part text-weight-thin mobile-hide"> Technologies</span>
          </span>
        </q-item>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <ul class="nav-list">
            <li v-for="(item, index) in navigationItems" :key="index">
              <q-btn
                :to="item.to"
                :label="item.label"
                class="nav-link"
                :class="{ 'has-dropdown': item.dropdown }"
                flat
                no-caps
              >
                <template v-if="item.dropdown" #append>
                  <div class="dropdown-indicator">
                    <i class="fas fa-chevron-down dropdown-icon"></i>
                  </div>
                </template>
                <q-menu
                  v-if="item.dropdown"
                  class="modern-dropdown bg-transparent"
                  transition-show="jump-down"
                  transition-hide="jump-up"
                  :class="{ 'tour-dropdown': item.label === 'VR Tour' }"
                  :offset="[0, 15]"
                >
                  <div class="dropdown-grid" :class="{ 'single-column': item.label === 'VR Tour' }">
                    <q-item
                      v-for="(subItem, subIndex) in item.dropdown"
                      :key="subIndex"
                      :to="subItem.to"
                      clickable
                      v-close-popup
                      class="dropdown-item bg-red"
                    >
                      <div class="dropdown-card">
                        <div class="card-icon-wrapper">
                          <i :class="subItem.icon" class="card-icon"></i>
                        </div>
                        <div class="card-content">
                          <div class="card-title">{{ subItem.label }}</div>
                          <div class="card-description">{{ subItem.description }}</div>
                        </div>
                        <div class="card-arrow">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </q-item>
                  </div>
                </q-menu>
              </q-btn>
            </li>
          </ul>
        </nav>

        <!-- CTA Button -->
        <div class="header-cta">
          <q-btn
            color="primary"
            class="cta-button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdAVwe8QMlFevQc7nxhKgSLP5ynUXA6F609UVryvVUtbm83pg/viewform?usp=header"
            target="_blank"
          >
            <span class="cta-text">Q2 Townhall 2025</span>
            <i class="fas fa-arrow-right"></i>
          </q-btn>
        </div>
      </div>

      <!-- Tech Elements -->
      <div class="tech-elements">
        <div class="tech-circle"></div>
        <div class="tech-dots"></div>
        <div class="tech-grid"></div>
      </div>
    </header>

    <!-- Fullscreen Drawer -->
    <div class="fullscreen-drawer" :class="{ 'drawer--active': isDrawerOpen }">
      <div class="drawer-content">
        <!-- Close Button -->
        <q-btn @click="toggleMenu" class="drawer-close" flat round aria-label="Close Menu">
          <i class="fas fa-times"></i>
        </q-btn>

        <!-- Drawer Logo -->
        <div class="drawer-logo">
          <img src="/pe/greysoftNGicon-01.svg" alt="Greysoft" class="drawer-logo-image" />
          <span class="drawer-logo-text">
            <span class="grey-part">Grey</span><span class="soft-part">soft</span
            ><span class="ng-part">NG</span>
          </span>
        </div>

        <!-- Drawer Navigation -->
        <nav class="drawer-nav">
          <ul class="drawer-nav-list">
            <li v-for="(item, index) in navigationItems" :key="index" class="drawer-nav-item">
              <q-btn
                v-if="!item.dropdown"
                :to="item.to"
                :label="item.label"
                class="drawer-nav-link"
                flat
                no-caps
              />
              <q-expansion-item
                v-else
                :label="item.label"
                class="drawer-nav-link"
                expand-separator
                icon-right="fas fa-chevron-down"
              >
                <div
                  class="drawer-dropdown-container"
                  :class="{ 'single-column': item.label === 'VR Tour' }"
                >
                  <q-item
                    v-for="(subItem, subIndex) in item.dropdown"
                    :key="subIndex"
                    :to="subItem.to"
                    clickable
                    class="drawer-dropdown-item"
                  >
                    <div class="drawer-dropdown-card">
                      <div class="drawer-card-icon-wrapper">
                        <i :class="subItem.icon" class="drawer-card-icon"></i>
                      </div>
                      <div class="drawer-card-content">
                        <div class="drawer-card-title">{{ subItem.label }}</div>
                        <div class="drawer-card-description">{{ subItem.description }}</div>
                      </div>
                    </div>
                  </q-item>
                </div>
              </q-expansion-item>
            </li>
          </ul>
        </nav>

        <!-- Drawer Social Links -->
        <div class="drawer-social">
          <a href="https://web.facebook.com/greysoftng" target="_blank" class="drawer-social-link">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/greyhobb/" target="_blank" class="drawer-social-link">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/greyhobb" target="_blank" class="drawer-social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
            target="_blank"
            class="drawer-social-link"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>

        <!-- Animated Tech Elements -->
        <div class="drawer-tech-elements">
          <!-- Circuit Board Pattern -->
          <div class="tech-circuit"></div>

          <!-- Floating Particles -->
          <div class="tech-particles">
            <div v-for="n in 20" :key="`particle-${n}`" class="particle" :class="`p${n}`"></div>
          </div>

          <!-- Digital Wave -->
          <div class="tech-wave"></div>

          <!-- Binary Code -->
          <div class="tech-binary">01001010110</div>

          <!-- Grid Lines -->
          <div class="tech-grid"></div>

          <!-- Glowing Orbs -->
          <div class="tech-orbs">
            <div v-for="n in 5" :key="`orb-${n}`" class="orb" :class="`o${n}`"></div>
          </div>

          <!-- Floating Shapes -->
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
            <div class="shape shape-4"></div>
            <div class="shape shape-5"></div>
          </div>

          <!-- Pulse Rings -->
          <div class="pulse-rings">
            <div class="ring ring-1"></div>
            <div class="ring ring-2"></div>
          </div>
        </div>
      </div>
    </div>

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
            ><q-fab-action color="primary" icon="facebook" :disable="draggingFab"
          /></a>

          <a target="_blank" href="https://www.instagram.com/greyhobb/"
            ><q-fab-action color="primary" icon="fab fa-instagram" :disable="draggingFab"
          /></a>
          <a target="_blank" href="https://www.linkedin.com/company/greysoft-tech/mycompany/"
            ><q-fab-action color="primary" icon="fab fa-linkedin" :disable="draggingFab"
          /></a>
          <a target="_blank" href="https://twitter.com/greyhobb"
            ><q-fab-action color="primary" icon="fab fa-twitter" :disable="draggingFab"
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
import { ref, onMounted } from 'vue'

export default {
  // name: 'LayoutName',

  setup() {
    const isHeaderActive = ref(false)
    const isDrawerOpen = ref(false)
    const fabPos = ref([18, 18])
    const draggingFab = ref(false)

    const navigationItems = [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      {
        label: 'Our Solutions',
        dropdown: [
          {
            label: 'GreyTransform',
            to: '/greytransform',
            icon: 'fas fa-digital-tachograph',
            description: 'Digital transformation services',
          },
          {
            label: 'GreyHobb',
            to: '/greyhobb',
            icon: 'fas fa-robot',
            description: 'Innovative robotics solutions',
          },
          {
            label: 'GreyTech',
            to: '/greytech',
            icon: 'fas fa-microchip',
            description: 'Cutting-edge technology services',
          },
          {
            label: 'GreyAcademy',
            to: '/greyacademy',
            icon: 'fas fa-graduation-cap',
            description: 'Educational programs',
          },
          {
            label: 'Courses',
            to: '/greyacademy/courses',
            icon: 'fas fa-book',
            description: 'Educational courses and learning resources',
          },
          {
            label: 'Greysoft XR',
            to: { name: 'GreysoftXR' },
            icon: 'fas fa-vr-cardboard',
            description: 'Extended reality experiences',
          },
          {
            label: 'Careers',
            to: '/careers',
            icon: 'fas fa-briefcase',
            description: 'Job opportunities at Greysoft',
          },
        ],
      },
      {
        label: 'VR Tour',
        dropdown: [
          {
            label: 'GreyHobb Tour',
            to: 'https://kuula.co/share/collection/7vGlZ?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=-1',
            icon: 'fas fa-building',
            description: 'Virtual tour of GreyHobb',
          },
          {
            label: 'MS Square Tour',
            to: 'https://kuula.co/share/collection/7vbCd?logo=1&info=0&fs=1&vr=1&initload=0&thumbs=-1&alpha=0.90',
            icon: 'fas fa-cube',
            description: 'Explore MS Square virtually',
          },
        ],
      },
    ]

    const toggleMenu = () => {
      isDrawerOpen.value = !isDrawerOpen.value
      document.body.style.overflow = isDrawerOpen.value ? 'hidden' : ''
    }

    const moveFab = (ev) => {
      draggingFab.value = ev.isFirst !== true && ev.isFinal !== true
      fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y]
    }

    onMounted(() => {
      window.addEventListener('scroll', () => {
        isHeaderActive.value = window.scrollY > 50
      })
    })

    return {
      isHeaderActive,
      isDrawerOpen,
      navigationItems,
      toggleMenu,
      fabPos,
      draggingFab,
      moveFab,
    }
  },

  mounted() {
    const header = document.querySelector('.header')

    window.addEventListener('scroll', function () {
      window.scrollY >= 50 ? header.classList.add('active') : header.classList.remove('active')
    })
  },

  watch: {
    $route() {
      // Close drawer when route changes
      if (this.isDrawerOpen) {
        this.toggleMenu()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// Variables
$primary-color: #8d354a;
$accent-color: #f0d043;
$text-color: #ffffff;
$header-height: 80px;
$transition-timing: cubic-bezier(0.4, 0, 0.2, 1);

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
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
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  min-height: unset;
  padding: 0;
  order: 0;
  margin-right: auto;

  .logo-image {
    height: 40px;
    width: auto;
    transition: transform 0.3s $transition-timing;
  }

  .textt {
    color: #ab042c !important;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 700;

    .grey-part {
      color: #ab042c;
    }

    .soft-part,
    .ng-part {
      color: #44686f;
    }
  }

  &:hover .logo-image {
    transform: scale(1.05);
  }

  @media (max-width: 1023px) {
    order: 1;
    margin-right: auto;
    margin-left: 0;
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
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
  content: '';
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
  content: '';
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
  white-space: nowrap;
  padding-inline: 10px 5px;
  padding-block: 8px;
  transition: var(--transition-1);
  font-family: 'Roboto';
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
  .mobile-hide {
    display: none;
  }

  .logo-image {
    height: 32px !important;
  }

  .logo-text {
    font-size: 1.2rem !important;
  }

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

// Header Styles
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  background: rgba(13, 13, 35, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s $transition-timing;

  &--active {
    background: rgba(13, 13, 35, 0.95);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
}

// Menu Button
.menu-trigger {
  display: none;

  @media (max-width: 1023px) {
    display: block;
    order: 3;
    margin-left: auto;
  }

  .nav-open-btn {
    background: transparent;
    border: none;
    padding: 8px;
    cursor: pointer;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.1);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 50%;
    }

    &:hover {
      &::before {
        opacity: 1;
      }

      .menu-icon {
        span {
          &:nth-child(1) {
            transform: translateY(-2px);
          }
          &:nth-child(3) {
            transform: translateY(2px);
          }
        }
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .menu-icon {
    width: 24px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: $text-color;
      border-radius: 2px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
}

// Desktop Navigation
.desktop-nav {
  order: 2;

  @media (max-width: 1023px) {
    display: none;
  }

  .nav-list {
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-link {
    color: $text-color;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    position: relative;
    overflow: hidden;

    .dropdown-indicator {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 6px;
      background: rgba($accent-color, 0.2);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .dropdown-icon {
      font-size: 0.7rem;
      color: $accent-color;
      transition: transform 0.3s ease;
    }

    &:hover {
      .dropdown-indicator {
        background: rgba($accent-color, 0.4);
        transform: translateY(2px);
      }

      .dropdown-icon {
        transform: translateY(1px);
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: $accent-color;
      transition: all 0.3s $transition-timing;
      transform: translateX(-50%);
    }

    &:hover::after {
      width: 100%;
    }
  }
}

// Modern Dropdown
.modern-dropdown {
  background: rgba(13, 13, 35, 0.98);
  backdrop-filter: blur(15px);
  border-radius: 16px;
  padding: 1.25rem;
  min-width: 580px;
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 1),
    0 0 0 1px rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  z-index: 1010;
  position: relative;

  &.tour-dropdown {
    min-width: 350px;
  }

  @media (max-width: 768px) {
    min-width: 90vw;
    max-width: 90vw;

    .dropdown-grid {
      grid-template-columns: 1fr;
    }
  }

  // Override Quasar's default white background
  :deep(.q-menu__container) {
    background: transparent !important;
  }

  :deep(.q-item) {
    background: transparent !important;
    color: white !important;
  }

  :deep(.q-focus-helper) {
    display: none;
  }

  .dropdown-header {
    margin-bottom: 1rem;

    .dropdown-title {
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $accent-color;
      display: block;
      margin-bottom: 0.5rem;
    }

    .dropdown-divider {
      height: 2px;
      background: linear-gradient(90deg, $accent-color, transparent);
      width: 40%;
    }
  }

  .dropdown-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    box-shadow: rgba(33, 44, 66, 1);
    padding-top: 0.5rem;

    &.single-column {
      grid-template-columns: 1fr;

      .dropdown-item {
        max-width: 100%;

        .card-description {
          max-width: 280px;
        }
      }
    }
  }

  .dropdown-item {
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    min-height: auto;
    background: transparent !important;
    max-width: 280px;

    &:hover {
      transform: translateY(-3px);

      .card-arrow {
        opacity: 1;
        transform: translateX(0);
      }

      .card-icon {
        transform: scale(1.1);
      }
    }
  }

  .dropdown-card {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: $accent-color;
      opacity: 0.7;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%);
      z-index: 0;
    }
  }

  .card-icon-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($accent-color, 0.15);
    border-radius: 10px;
    margin-right: 1rem;
    position: relative;
    z-index: 1;
  }

  .card-icon {
    color: $accent-color;
    font-size: 1.2rem;
    filter: drop-shadow(0 0 5px rgba($accent-color, 0.5));
    transition: transform 0.3s ease;
  }

  .card-content {
    flex: 1;
    position: relative;
    z-index: 1;
    overflow: hidden;
  }

  .card-title {
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-description {
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  .card-arrow {
    color: $accent-color;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }
}

// CTA Button
.header-cta {
  order: 3;

  @media (max-width: 1023px) {
    order: 3;
  }

  .cta-button {
    position: relative;
    overflow: hidden;
    height: 40px;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, var(--q-primary) 0%, var(--q-primary-light, #c6435a) 100%);
      transition: all 0.3s ease;
      z-index: -1;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px -8px rgba(153, 51, 70, 0.5);

      &::before {
        opacity: 0.8;
      }

      .fa-arrow-right {
        transform: translateX(3px);
      }
    }

    .fa-arrow-right {
      transition: transform 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
}

// Tech Elements
.tech-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  opacity: 0.1;

  .tech-circle {
    position: absolute;
    top: -50%;
    right: 10%;
    width: 100px;
    height: 100px;
    border: 1px solid $accent-color;
    border-radius: 50%;
    animation: rotate 10s linear infinite;
  }

  .tech-dots {
    position: absolute;
    bottom: 20%;
    left: 5%;
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, $accent-color 1px, transparent 1px);
    background-size: 10px 10px;
    animation: float 5s ease-in-out infinite;
  }

  .tech-grid {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background:
      linear-gradient(rgba($accent-color, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba($accent-color, 0.2) 1px, transparent 1px);
    background-size: 10px 10px;
  }
}

// Fullscreen Drawer
.fullscreen-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(13, 13, 35, 0.98);
  backdrop-filter: blur(20px);
  z-index: 2000;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s $transition-timing;
  transform: translateY(100%);
  overflow: hidden;

  &.drawer--active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

// Drawer Content
.drawer-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

// Drawer Logo
.drawer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  position: relative;
  z-index: 10;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba($accent-color, 0.1), transparent);
    border-radius: 50px;
    z-index: -1;
  }

  .drawer-logo-image {
    height: 50px;
    width: auto;
    margin-right: 1rem;
    filter: drop-shadow(0 0 10px rgba($accent-color, 0.3));
    animation: pulse-glow 3s infinite alternate;
  }

  .drawer-logo-text {
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;

    .grey-part {
      color: #ab042c;
      text-shadow: 0 0 10px rgba(#ab042c, 0.5);
    }

    .soft-part,
    .ng-part {
      color: #44686f;
      text-shadow: 0 0 10px rgba(#44686f, 0.5);
    }
  }
}

// Drawer Close Button
.drawer-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: $text-color;
  font-size: 1.5rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s $transition-timing;

  &:hover {
    transform: rotate(90deg);
    background: rgba($accent-color, 0.2);
    box-shadow: 0 5px 20px rgba($accent-color, 0.3);
  }

  i {
    transition: all 0.3s ease;
  }

  &:hover i {
    color: $accent-color;
  }
}

// Drawer Navigation
.drawer-nav {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;

  .drawer-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .drawer-nav-item {
    width: 100%;
  }

  .drawer-nav-link {
    color: $text-color;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.75rem;
    width: 100%;
    text-align: center;
    transition: all 0.3s $transition-timing;
    border-radius: 12px;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba($accent-color, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    &:hover {
      color: $accent-color;
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.05);

      &::before {
        opacity: 1;
      }
    }

    :deep(.q-expansion-item__content) {
      padding-top: 0.5rem;
    }

    :deep(.q-item__section--side) {
      padding-right: 0;
      min-width: auto;
    }

    :deep(.q-icon) {
      font-size: 1rem;
      color: $accent-color;
      opacity: 0.8;
      transition: transform 0.3s ease;
    }

    &:hover :deep(.q-icon) {
      transform: translateY(3px);
      opacity: 1;
    }
  }

  :deep(.q-expansion-item__content) {
    background: transparent !important;
  }

  :deep(.q-item) {
    background: transparent !important;
    color: white !important;
  }

  :deep(.q-focus-helper) {
    display: none;
  }
}

// Drawer dropdown container
.drawer-dropdown-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;

  &.single-column {
    grid-template-columns: 1fr;

    .drawer-dropdown-item {
      max-width: 100%;

      .drawer-card-description {
        max-width: 280px;
      }
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

// Drawer dropdown items
.drawer-dropdown-item {
  padding: 0;
  transition: all 0.3s ease;
  border-radius: 12px;
  background: transparent !important;
  color: white !important;
  overflow: hidden;
  max-width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
}

.drawer-dropdown-card {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  width: 100%;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: $accent-color;
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%);
    z-index: 0;
  }
}

.drawer-card-icon-wrapper {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($accent-color, 0.15);
  border-radius: 8px;
  margin-right: 0.75rem;
  position: relative;
  z-index: 1;
}

.drawer-card-icon {
  color: $accent-color;
  font-size: 1.1rem;
  filter: drop-shadow(0 0 5px rgba($accent-color, 0.5));
  transition: transform 0.3s ease;
}

.drawer-card-content {
  flex: 1;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.drawer-card-title {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.drawer-card-description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.8rem;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// Drawer Social Links
.drawer-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  z-index: 10;

  .drawer-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: $text-color;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba($accent-color, 0.2), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      background: rgba($accent-color, 0.2);
      color: $accent-color;
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

      &::before {
        opacity: 1;
      }
    }
  }
}

// Animated Tech Elements
.drawer-tech-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 1;

  // Circuit Board Pattern
  .tech-circuit {
    position: absolute;
    top: 10%;
    right: 5%;
    width: 300px;
    height: 300px;
    border: 1px solid rgba($accent-color, 0.2);
    border-radius: 50%;
    animation: rotate 30s linear infinite;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
    }

    &::before {
      top: 50%;
      left: 50%;
      width: 70%;
      height: 70%;
      border: 1px solid rgba($accent-color, 0.15);
      transform: translate(-50%, -50%);
    }

    &::after {
      top: 50%;
      left: 50%;
      width: 40%;
      height: 40%;
      border: 1px solid rgba($accent-color, 0.1);
      transform: translate(-50%, -50%);
    }
  }

  // Floating Particles
  .tech-particles {
    position: absolute;
    width: 100%;
    height: 100%;

    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: $accent-color;
      border-radius: 50%;
      filter: blur(1px);
      opacity: 0.6;
      box-shadow: 0 0 10px rgba($accent-color, 0.8);
      animation: float-particle 15s ease-in-out infinite;
    }

    @for $i from 1 through 20 {
      .p#{$i} {
        left: random(100) * 1%;
        top: random(100) * 1%;
        animation-delay: random(10) * 0.5s;
        animation-duration: (10 + random(10)) * 1s;
      }
    }
  }

  // Digital Wave
  .tech-wave {
    position: absolute;
    bottom: 10%;
    left: 0;
    width: 100%;
    height: 50px;
    background: repeating-linear-gradient(
      45deg,
      rgba($accent-color, 0.05),
      rgba($accent-color, 0.05) 1px,
      transparent 1px,
      transparent 10px
    );
    animation: wave 20s linear infinite;
    opacity: 0.5;
  }

  // Binary Code
  .tech-binary {
    position: absolute;
    top: 30%;
    left: 10%;
    font-family: monospace;
    font-size: 14px;
    color: rgba($accent-color, 0.3);
    animation: fade-in-out 8s ease-in-out infinite;
    text-shadow: 0 0 5px rgba($accent-color, 0.5);
  }

  // Grid Lines
  .tech-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(rgba($accent-color, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba($accent-color, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  // Glowing Orbs
  .tech-orbs {
    position: absolute;
    width: 100%;
    height: 100%;

    .orb {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba($accent-color, 0.2) 0%, transparent 70%);
      animation: pulse-glow 5s ease-in-out infinite alternate;
    }

    @for $i from 1 through 5 {
      .o#{$i} {
        left: random(90) * 1%;
        top: random(90) * 1%;
        width: (20 + random(40)) * 1px;
        height: (20 + random(40)) * 1px;
        animation-delay: random(5) * 1s;
      }
    }
  }

  // Floating Shapes
  .floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;

    .shape {
      position: absolute;
      border: 1px solid rgba($accent-color, 0.2);
      animation: float 15s ease-in-out infinite;
      opacity: 0.7;

      &-1 {
        top: 20%;
        left: 10%;
        width: 50px;
        height: 50px;
        transform: rotate(45deg);
        animation-delay: 0s;
      }

      &-2 {
        top: 40%;
        right: 15%;
        width: 30px;
        height: 30px;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        animation-delay: 2s;
      }

      &-3 {
        bottom: 30%;
        left: 20%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        animation-delay: 4s;
      }

      &-4 {
        top: 60%;
        right: 30%;
        width: 25px;
        height: 25px;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        animation-delay: 1s;
      }

      &-5 {
        bottom: 20%;
        right: 10%;
        width: 35px;
        height: 35px;
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        animation-delay: 3s;
      }
    }
  }

  // Pulse Rings
  .pulse-rings {
    position: absolute;
    width: 100%;
    height: 100%;

    .ring {
      position: absolute;
      border: 1px solid rgba($accent-color, 0.2);
      border-radius: 50%;
      animation: pulse-ring 4s ease-out infinite;
      opacity: 0;

      &-1 {
        top: 70%;
        left: 30%;
        width: 100px;
        height: 100px;
      }

      &-2 {
        top: 20%;
        right: 20%;
        width: 150px;
        height: 150px;
        animation-delay: 2s;
      }
    }
  }
}

// Animations
@keyframes float-particle {
  0%,
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }
  25% {
    transform: translateY(-20px) translateX(10px);
    opacity: 1;
  }
  50% {
    transform: translateY(-40px) translateX(-10px);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-20px) translateX(-20px);
    opacity: 1;
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.5;
    filter: blur(5px);
  }
  50% {
    opacity: 1;
    filter: blur(3px);
  }
}

@keyframes fade-in-out {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0);
    opacity: 0.8;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .drawer-logo {
    flex-direction: column;
    padding: 1rem;

    .drawer-logo-image {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    .drawer-logo-text {
      font-size: 1.8rem;
    }
  }

  .drawer-nav {
    max-width: 300px;
  }

  .drawer-nav-link {
    font-size: 1.3rem;
    padding: 0.6rem;
  }

  .drawer-card-title {
    font-size: 0.9rem;
  }

  .drawer-card-description {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .drawer-logo {
    .drawer-logo-image {
      height: 40px;
    }

    .drawer-logo-text {
      font-size: 1.5rem;
    }
  }

  .drawer-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .drawer-content {
    padding: 1rem;
  }

  .drawer-social {
    gap: 0.75rem;

    .drawer-social-link {
      width: 40px;
      height: 40px;
      font-size: 1rem;
    }
  }
}
</style>
