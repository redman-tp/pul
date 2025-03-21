<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" :class="{ 'header--scrolled': isScrolled }" bordered>
      <q-toolbar class="header__toolbar">
        <!-- Logo -->
        <div class="header__logo">
          <transition appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <q-item to="/" class="header__logo-link">
              <img src="/pe/greysoftNGicon-01.svg" alt="Greysoft Logo" />
              <span class="header__logo-text"
                ><span class="header__logo-grey">Grey</span
                ><span class="header__logo-soft">soft</span>
                <span class="header__logo-suffix">Technologies</span></span
              >
            </q-item>
          </transition>
        </div>

        <!-- Desktop Navigation -->
        <div class="header__desktop-nav">
          <q-tabs
            v-model="activeTab"
            indicator-color="accent"
            active-color="accent"
            class="header__tabs"
            no-caps
          >
            <q-route-tab
              v-for="link in navLinks"
              :key="link.name"
              :name="link.name"
              :to="link.to"
              exact
              class="header__tab"
            >
              <div class="header__tab-content">
                <span class="header__tab-label">{{ link.label }}</span>
              </div>
            </q-route-tab>
          </q-tabs>
        </div>

        <!-- Mobile Menu Button -->
        <q-btn
          flat
          round
          color="accent"
          class="header__menu-btn"
          aria-label="Menu"
          @click="toggleDrawer"
        >
          <div class="header__menu-icon" :class="{ 'header__menu-icon--active': drawerOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- Fullscreen Drawer -->
    <q-drawer
      v-model="drawerOpen"
      side="right"
      behavior="mobile"
      :width="1000"
      :breakpoint="0"
      overlay
      elevated
      content-class="drawer"
    >
      <div class="drawer__content">
        <!-- Tech Elements -->
        <div class="drawer__tech-elements">
          <div class="drawer__tech-element drawer__tech-element--circuit"></div>
          <div class="drawer__tech-element drawer__tech-element--dots"></div>
          <div class="drawer__tech-element drawer__tech-element--grid"></div>
          <div class="drawer__tech-element drawer__tech-element--binary"></div>
          <div class="drawer__tech-element drawer__tech-element--wave"></div>
        </div>

        <div class="drawer__header">
          <q-item to="/" class="drawer__logo" @click="drawerOpen = false">
            <img src="/pe/greysoftNGicon-01.svg" alt="Greysoft Logo" />
            <span class="drawer__logo-text">
              <span class="drawer__logo-grey">Grey</span><span class="drawer__logo-soft">soft</span>
              <span class="drawer__logo-suffix">Technologies</span>
            </span>
          </q-item>

          <q-btn
            flat
            round
            color="accent"
            class="drawer__close-btn"
            aria-label="Close Menu"
            @click="toggleDrawer"
          >
            <i class="fas fa-times"></i>
          </q-btn>
        </div>

        <div class="drawer__nav">
          <q-tabs
            vertical
            class="drawer__tabs"
            no-caps
            indicator-color="transparent"
            active-color="accent"
            v-model="activeDrawerTab"
          >
            <q-route-tab
              v-for="(link, index) in navLinks"
              :key="link.label"
              :to="link.to"
              exact
              :name="link.name"
              class="drawer__route-tab drawer__nav-item"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 100 + index * 50,
                  duration: 500,
                },
              }"
            >
              <div class="drawer__link-content">
                <span class="drawer__link-label">{{ link.label }}</span>
                <span class="drawer__link-number">0{{ index + 1 }}</span>
              </div>
            </q-route-tab>
          </q-tabs>
        </div>

        <div
          class="drawer__footer"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 500 } }"
        >
          <div class="drawer__social-links">
            <a href="#" class="drawer__social-link" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="drawer__social-link" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="drawer__social-link" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="drawer__social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div class="drawer__copyright">
            © {{ new Date().getFullYear() }} Greysoft Technologies
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import gsap from 'gsap'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const drawerOpen = ref(false)
    const activeTab = ref(null)
    const isScrolled = ref(false)
    const activeDrawerTab = ref(null)

    // Navigation links for the drawer
    const navLinks = [
      { name: 'home', label: 'Home', to: '/' },
      { name: 'greytransform', label: 'GreyTransform', to: '/greytransform' },
      { name: 'greyhobb', label: 'GreyHobb', to: '/greyhobb' },
      { name: 'greytech', label: 'GreyTech', to: '/greytech' },
      { name: 'greyacademy', label: 'GreyAcademy', to: '/greyacademy' },
      { name: 'greysoftxr', label: 'Greysoft XR', to: { name: 'GreysoftXR' } },
      { name: 'careers', label: 'Careers', to: '/careers' },
    ]

    // Logo animation
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }

    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        onComplete: done,
      })
    }

    const afterEnter = () => {
      // Animation completed
    }

    // Toggle drawer
    const toggleDrawer = () => {
      drawerOpen.value = !drawerOpen.value
    }

    // Handle scroll for header styling
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      drawerOpen,
      activeTab,
      isScrolled,
      navLinks,
      activeDrawerTab,
      beforeEnter,
      enter,
      afterEnter,
      toggleDrawer,
    }
  },
})
</script>

<style lang="scss">
// Variables
$primary-color: var(--q-primary, #8d354a);
$secondary-color: #f0d043;
$accent-color: #f0d043;
$text-color: #ffffff;
$dark-color: #1a1a1a;
$header-height: 70px;
$header-height-scrolled: 60px;
$transition-speed: 0.3s;

// Header Styles
.header {
  transition: all $transition-speed ease;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: none !important;
  position: relative;
  z-index: 100;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(240, 208, 67, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &--scrolled {
    background: rgba(0, 0, 0, 0.85);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

    .header__toolbar {
      height: $header-height-scrolled;
    }

    .header__logo-link img {
      width: 30px;
    }

    .header__logo-text {
      font-size: 1.2rem;
    }

    .header__logo-suffix {
      font-size: 0.9rem;
    }
  }

  &__toolbar {
    height: $header-height;
    transition: height $transition-speed ease;
    padding: 0 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
  }

  &__logo {
    display: flex;
    align-items: center;
    flex: 0 0 auto;

    &-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0;
      min-height: auto;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: $accent-color;
        transform: translateX(-100%);
        transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
      }

      &:hover::after {
        transform: translateX(0);
      }

      img {
        width: 40px;
        margin-right: 0.5rem;
        transition: all $transition-speed ease;
        filter: drop-shadow(0 0 8px rgba(240, 208, 67, 0.3));

        &:hover {
          transform: rotate(5deg) scale(1.05);
        }
      }
    }

    &-text {
      font-size: 1.4rem;
      color: #44686f;
      transition: all $transition-speed ease;
      letter-spacing: 0.5px;
    }

    &-grey,
    &-soft {
      font-weight: 700;
    }

    &-soft {
      opacity: 0.9;
    }

    &-suffix {
      font-weight: 400;
      opacity: 0.9;
      font-size: 1.1rem;
      margin-left: 4px;
    }
  }

  &__desktop-nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 1.5rem;
  }

  &__tabs {
    background: transparent;
  }

  &__tab {
    padding: 0 0.8rem;
    min-height: $header-height;
    font-weight: 400;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    color: #44686f;

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 0.5rem 0.5rem;
      border-radius: 4px;
    }

    &-label {
      position: relative;
      z-index: 1;
    }

    &--active {
      .header__tab-label {
        font-weight: 500;
        color: $primary-color;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 3px;
        background-color: $primary-color;
        border-radius: 3px 3px 0 0;
      }
    }
  }

  &__menu-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(240, 208, 67, 0.2) 0%, transparent 70%);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);

      &::before {
        opacity: 1;
        transform: scale(1);
      }

      .header__menu-icon span {
        &:nth-child(1) {
          transform: translateY(-1px);
        }
        &:nth-child(3) {
          transform: translateY(1px);
        }
      }
    }
  }

  &__menu-icon {
    width: 24px;
    height: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: $accent-color;
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
      box-shadow: 0 0 5px rgba(240, 208, 67, 0.5);
    }

    &--active {
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
        width: 100%;
      }

      span:nth-child(2) {
        opacity: 0;
        transform: translateX(-10px);
      }

      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
        width: 100%;
      }
    }
  }
}

// Drawer Styles
.drawer {
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.97) 0%,
    rgba(13, 13, 35, 0.99) 50%,
    rgba(26, 26, 26, 0.97) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.4);

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    position: relative;
    z-index: 2;
  }

  &__logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    min-height: unset;
    padding: 0;

    img {
      width: 40px;
      margin-right: 1rem;
      filter: drop-shadow(0 0 8px rgba(240, 208, 67, 0.3));
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    &-text {
      font-size: 1.5rem;
      color: #44686f;
      transition: all $transition-speed ease;
      letter-spacing: 0.5px;
    }

    &-grey,
    &-soft {
      font-weight: 700;
    }

    &-soft {
      opacity: 0.9;
    }

    &-suffix {
      font-weight: 400;
      opacity: 0.9;
      font-size: 1.1rem;
      margin-left: 4px;
    }
  }

  &__close-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(240, 208, 67, 0.2) 0%, transparent 70%);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    i {
      font-size: 1.2rem;
      color: $accent-color;
      transition: all 0.3s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px) rotate(90deg);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);

      &::before {
        opacity: 1;
        transform: scale(1);
      }

      i {
        transform: scale(1.1);
      }
    }
  }

  &__nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    padding: 2rem;
    overflow-y: auto;
    position: relative;
  }

  &__tabs {
    width: 100%;
    height: auto;
    background: transparent;
    display: flex;
    flex-direction: column;

    .q-tabs__content {
      width: 100%;
      flex-direction: column;
    }

    .q-tab__indicator {
      display: none;
    }
  }

  &__nav-item {
    margin-bottom: 1.5rem;
    width: 100%;
    position: relative;
  }

  &__route-tab {
    padding: 0;
    min-height: auto;
    width: 100%;
    opacity: 0.9;
    justify-content: flex-end;
    color: #44686f;
    border-radius: 10px;
    margin: 0.3rem 0;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 60%;
      background: linear-gradient(90deg, transparent, rgba($accent-color, 0.3));
      opacity: 0;
      transition: all 0.3s ease;
      border-radius: 4px 0 0 4px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.03);
      transform: translateX(-5px);

      &::before {
        width: 10px;
        opacity: 1;
        right: 0;
      }

      .drawer__link-number {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &--active {
      font-weight: 500;
      color: $primary-color;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 70%;
        background-color: $primary-color;
        border-radius: 3px 0 0 3px;
      }

      .drawer__link-label {
        transform: translateX(-10px);
      }

      .drawer__link-number {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &__link-content {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 100%;
    justify-content: space-between;
    border-radius: 10px;
  }

  &__link-label {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }

  &__link-number {
    font-size: 1.5rem;
    font-weight: 500;
    color: $accent-color;
    opacity: 0.7;
    transition: all 0.3s ease;
    transform: translateX(10px);
  }

  &__footer {
    padding: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 1;
    position: relative;
  }

  &__social-links {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }

  &__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: $text-color;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(240, 208, 67, 0.2) 0%, transparent 70%);
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      background: rgba($accent-color, 0.1);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

      &::before {
        opacity: 1;
        transform: scale(1);
      }

      i {
        color: $accent-color;
      }
    }

    i {
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
  }

  &__copyright {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }

  &__tech-elements {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.05;
  }

  &__tech-element {
    position: absolute;

    &--circuit {
      top: 10%;
      right: 5%;
      width: 300px;
      height: 300px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='0.5' d='M10,30 L90,30 M30,10 L30,90 M70,10 L70,90 M10,50 L90,50 M10,70 L90,70 M50,10 L50,90'/%3E%3Ccircle cx='30' cy='30' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='30' r='3' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='30' r='3' fill='%23ffffff'/%3E%3Ccircle cx='30' cy='50' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='50' r='3' fill='%23ffffff'/%3E%3Ccircle cx='30' cy='70' r='3' fill='%23ffffff'/%3E%3Ccircle cx='50' cy='70' r='3' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='70' r='3' fill='%23ffffff'/%3E%3C/svg%3E");
      animation: float 15s ease-in-out infinite;
    }

    &--dots {
      bottom: 15%;
      left: 10%;
      width: 250px;
      height: 250px;
      background-image: radial-gradient(circle, #ffffff 1px, transparent 1px);
      background-size: 15px 15px;
      animation: float 12s ease-in-out infinite reverse;
    }

    &--grid {
      bottom: 20%;
      right: 20%;
      width: 200px;
      height: 200px;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
      background-size: 20px 20px;
      animation: float 18s ease-in-out infinite;
    }

    &--binary {
      top: 25%;
      left: 15%;
      width: 200px;
      height: 300px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' viewBox='0 0 200 300'%3E%3Ctext x='10' y='20' font-family='monospace' font-size='10' fill='%23ffffff'%3E01001010110%3C/text%3E%3Ctext x='30' y='40' font-family='monospace' font-size='10' fill='%23ffffff'%3E1010001%3C/text%3E%3Ctext x='15' y='60' font-family='monospace' font-size='10' fill='%23ffffff'%3E01101001%3C/text%3E%3Ctext x='25' y='80' font-family='monospace' font-size='10' fill='%23ffffff'%3E10110010%3C/text%3E%3Ctext x='5' y='100' font-family='monospace' font-size='10' fill='%23ffffff'%3E0110101%3C/text%3E%3Ctext x='40' y='120' font-family='monospace' font-size='10' fill='%23ffffff'%3E10100111%3C/text%3E%3Ctext x='20' y='140' font-family='monospace' font-size='10' fill='%23ffffff'%3E01011%3C/text%3E%3Ctext x='10' y='160' font-family='monospace' font-size='10' fill='%23ffffff'%3E10110%3C/text%3E%3Ctext x='30' y='180' font-family='monospace' font-size='10' fill='%23ffffff'%3E011010%3C/text%3E%3Ctext x='15' y='200' font-family='monospace' font-size='10' fill='%23ffffff'%3E10001%3C/text%3E%3C/svg%3E");
      animation: float 20s ease-in-out infinite;
    }

    &--wave {
      top: 40%;
      right: 15%;
      width: 200px;
      height: 100px;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 5px,
        rgba(255, 255, 255, 0.5) 5px,
        rgba(255, 255, 255, 0.5) 10px
      );
      transform: rotate(-30deg);
      animation: wave 10s ease-in-out infinite;
    }
  }
}

// Animations
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(-30deg) translateY(0);
  }
  50% {
    transform: rotate(-30deg) translateY(-15px);
  }
}

// Page Transitions
.route-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

// Responsive Styles
@media (max-width: 1200px) {
  .header {
    &__toolbar {
      padding: 0 1.5rem;
    }

    &__desktop-nav {
      display: none; /* Hide desktop nav on mobile */
    }

    &__menu-btn {
      margin-left: auto;
    }
  }
}

@media (min-width: 1201px) {
  .header {
    &__menu-btn {
      display: none; /* Hide menu button on desktop */
    }
  }
}

@media (max-width: 600px) {
  .header {
    &__toolbar {
      padding: 0 1rem;
    }

    &__logo-text {
      font-size: 1.2rem;
    }

    &__logo-suffix {
      font-size: 0.85rem;
      display: none;
    }

    &__logo-link img {
      width: 30px;
    }
  }

  .drawer {
    &__link-number {
      font-size: 1.5rem;
    }

    &__link-label {
      font-size: 1.8rem;
    }
  }
}
</style>
