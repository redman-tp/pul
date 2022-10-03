<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <header class="header" data-header>
      <div class="container">
        <q-item :to="{ name: 'bootcamp.home' }" class="logo">
          Grey<span>Academy</span>
        </q-item>

        <nav class="navbar" data-navbar>
          <div class="wrapper">
            <q-item
              style="letter-spacing: 0.2em; padding: 0"
              to="/bootcampHome"
              class="logo"
            >
              Grey<span>Academy</span>
            </q-item>

            <button
              class="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <i class="fa-duotone fa-xmark"></i>
            </button>
          </div>

          <ul class="navbar-list">
            <li class="navbar-item">
              <div @click="goHome" class="navbar-link" data-nav-link>Home</div>
            </li>

            <li class="navbar-item">
              <div @click="gotoAbout" class="navbar-link" data-nav-link>
                About
              </div>
            </li>

            <li class="navbar-item">
              <div @click="gotoservices" class="navbar-link" data-nav-link>
                Service
              </div>
            </li>

            <li class="navbar-item">
              <div @click="gotocontact" class="navbar-link" data-nav-link>
                Contact
              </div>
            </li>
            <li class="navbar-item addMa">
              <q-btn
                to="/portals/bootcamp-2/register"
                class="navbar-link enroll"
                data-nav-link
                >ENROLL NOW</q-btn
              >
            </li>
          </ul>
        </nav>

        <div class="header-actions">
          <!-- <button
            class="header-action-btn"
            aria-label="toggle search"
            title="Search"
          >
            <i class="fa-duotone fa-magnifying-glass"></i>
          </button> -->

          <!-- <button class="header-action-btn" aria-label="cart" title="Cart">
            <i class="fa-duotone fa-cart-shopping"></i>

            <span class="btn-badge">0</span>
          </button>

          <a href="#" class="btn has-before">
            <span class="span">Try for free</span>

            <i class="fa-duotone fa-arrow-right"></i>
          </a> -->

          <button
            class="header-action-btn"
            aria-label="open menu"
            id="toggleMenu"
            data-nav-toggler
            @click="toggleMenu"
          >
            <i class="fa-duotone fa-bars"></i>
          </button>
        </div>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },

  methods: {
    toggleMenu() {
      const menu = document.getElementById("toggleMenu");
      const navbar = document.querySelector(".navbar");
      const navTogglers = document.querySelector(".nav-close-btn");
      const navLinks = document.querySelectorAll(".navbar-list");
      const overlay = document.querySelector(".overlay");

      const toggleNavbar = function () {
        navbar.classList.add("active");
        overlay.classList.add("active");
      };

      menu.addEventListener("click", toggleNavbar);

      const closeNavbar = function () {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
      };

      navTogglers.addEventListener("click", closeNavbar);
    },
    goHome() {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
      document.querySelector(".navbar").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
    },
    gotoAbout() {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      document.querySelector(".navbar").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
    },
    gotoservices() {
      document.getElementById("service").scrollIntoView({ behavior: "smooth" });
      document.querySelector(".navbar").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
    },

    gotocontact() {
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
      });
      document.querySelector(".navbar").classList.remove("active");
      document.querySelector(".overlay").classList.remove("active");
    },
  },
};
</script>

<style scoped>
.header .btn {
  display: none;
}

.has-before,
.has-after {
  position: relative;
  z-index: 1;
}

.has-before::before,
.has-after::after {
  position: absolute;
  content: "";
}
.enroll {
  padding: 16px 10px;
  background: #00ab30;
  border-radius: 4px;
  color: #fff !important;
  margin-top: 1rem;
}
.btn::before {
  inset: 0;
  background-image: var(--gradient);
  z-index: -1;
  border-radius: inherit;
  transform: translateX(-100%);
  transition: var(--transition-2);
}

.btn:is(:hover, :focus)::before {
  transform: translateX(0);
}

.logo {
  min-height: unset;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.5em;
  color: #333333;
}

.btn {
  background-color: var(--kappel);
  color: var(--white);
  font-family: var(--ff-league_spartan);
  font-size: var(--fs-4);
  display: flex;
  align-items: center;
  gap: 7px;
  max-width: max-content;
  padding: 10px 20px;
  border-radius: var(--radius-5);
  overflow: hidden;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  padding-block: 12px;
  box-shadow: var(--shadow-1);
  z-index: 4;
}

.header.active {
  position: fixed;
}

.header .container,
.header-actions,
.navbar .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.header-action-btn,
.nav-close-btn {
  position: relative;
  color: var(--eerie-black-1);
  font-size: 24px;
  transition: var(--transition-1);
  background: none;
}

.header-action-btn:is(:hover, :focus) {
  color: var(--kappel);
}

.header-action-btn .btn-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--kappel);
  color: var(--white);
  font-family: var(--ff-league_spartan);
  font-size: var(--fs-6);
  min-width: 20px;
  height: 20px;
  border-radius: var(--radius-circle);
}

.navbar {
  position: fixed;
  top: 0;
  left: -320px;
  background-color: var(--white);
  width: 100%;
  max-width: 320px;
  height: 100%;
  z-index: 2;
  transition: 0.25s var(--cubic-in);
}

.navbar.active {
  transform: translateX(320px);
  transition: 0.5s var(--cubic-out);
}

.navbar .wrapper {
  padding: 15px 20px;
  border-block-end: 1px solid var(--platinum);
}

.nav-close-btn {
  background-color: var(--white);
  box-shadow: var(--shadow-2);
  padding: 8px;
  border-radius: var(--radius-circle);
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-close-btn:is(:hover, :focus) {
  background-color: var(--kappel);
  color: var(--white);
}

.navbar-list {
  padding: 15px 20px;
}

.navbar-item:not(:last-child) {
  border-block-end: 1px solid var(--platinum);
}

.navbar-link {
  color: inherit;
  text-decoration: none;
  padding-block: 8px !important;
  display: inline-block;
  font-weight: var(--fw-500);
  transition: var(--transition-1);
}

.navbar-link:is(:hover, :focus) {
  color: var(--kappel);
}

.overlay {
  position: fixed;
  inset: 0;
  background-color: var(--black_80);
  pointer-events: none;
  opacity: 0;
  z-index: 1;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

/**
 * responsive for large than 575px screen
 */

@media (max-width: 500px) {
  .logo {
    min-height: unset;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #333333;
  }
}
@media (min-width: 768px) {
  /**
   * HEADER
   */

  .header .container {
    max-width: unset;
  }

  .header-actions {
    gap: 30px;
  }

  /**
   * HERO
   */

  .hero-banner {
    grid-template-columns: 1fr 0.9fr;
  }

  /**
   * HEADER
   */

  /* .header .container {
    padding-inline: 30px;
  } */

  .header .btn {
    display: flex;
    padding: 10px 30px;
    margin-inline: 20px;
  }
}

/**
 * responsive for large than 992px screen
 */

@media (min-width: 1000px) {
  /**
   * HEADER
   */

  .header-action-btn:last-child,
  .navbar .wrapper,
  .overlay {
    display: none;
  }

  .header.active {
    transform: translateY(-100%);
    animation: slideIn 0.5s ease forwards;
  }
  .header-actions {
    display: none;
  }
  .enroll {
    margin-top: 0rem;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .navbar,
  .navbar.active {
    all: unset;
  }

  .navbar-list {
    display: flex;
    gap: 30px;
    padding: 0;
  }

  .navbar-item:not(:last-child) {
    border-block-end: none;
  }

  .navbar-link {
    color: var(--eerie-black-1);
    padding-block: 20px;
  }

  .header .btn {
    margin-inline-end: 0;
  }
}
</style>
