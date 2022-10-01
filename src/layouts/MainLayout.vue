<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-sm" elevated>
      <q-toolbar class="navBar no_pad justify-between">
        <div class="logo">
          <transition
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
          >
            <q-item to="/" class="nav__logo">
              <img src="/pe/greysoftNGicon-01.svg" alt="" /> Grey<span
                >soft</span
              ><span class="ng">NG</span></q-item
            >
          </transition>
          <!-- <a class="nav__logo">
            <img src="/pe/greysoftNGicon-01.svg" alt="" /> Grey<span>soft</span
            ><span class="ng">NG</span></a
          > -->
        </div>
        <div class="nav__links">
          <q-tabs indicator-color="primary" dense active-color="primary">
            <q-route-tab label="Home" ripple no-caps to="/" exact />

            <q-route-tab label="GreyHobb" ripple no-caps to="/greyhobb" exact />

            <q-route-tab label="GreyTech" ripple no-caps to="/greytech" exact />
            <q-route-tab
              label="GreyCreate"
              ripple
              no-caps
              to="/greycreate"
              exact
            />
            <!-- <q-route-tab
              label="GreyAcademy"
              ripple
              no-caps
              to="/greyacademy"
              exact
            /> -->
            <q-route-tab
              label="Metaverse"
              ripple
              no-caps
              to="/metaverse"
              exact
            />
            <q-route-tab
              label="Portal"
              ripple
              no-caps
              :to="{ name: 'portal' }"
              exact
            />
          </q-tabs>
        </div>
        <q-btn
          flat
          dense
          round
          color="black"
          icon="menu"
          aria-label="Menu"
          class="nav__toggler"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-tabs class="column" active-color="primary">
        <div
          style="width: 100%"
          class="column q-py-lg items-center side_bar justify-center"
        >
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/"
            exact
            label="Home"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/greyhobb"
            label="GreyHobb"
            exact
          />

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/greytech"
            label="GreyTech"
            exact
          />
          <q-route-tab
            label="GreyCreate"
            ripple
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/greycreate"
            exact
          />
          <q-route-tab
            label="Metaverse"
            ripple
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/metaverse"
            exact
          />
            <q-route-tab
              label="Portal"
              ripple
            class="q-my-sm text-dark addbor text-weight-bold"
              :to="{ name: 'portal' }"
              exact
            />
        </div>
      </q-tabs>
    </q-drawer>

    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"> </component>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import gsap from "gsap";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };

    const afterEnter = (el) => {
      console.log("after enter");
    };
    return {
      afterEnter,
      enter,
      beforeEnter,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
/* .logo {
  padding-top: 0.6rem;
} */

.logo .q-item {
  padding: 0;
}
.logo img {
  width: 80%;
}
.nav__links ul,
.right {
  display: flex;
  gap: 0.65rem;
  align-items: center;
}
.nav__links ul {
  text-transform: capitalize;
}

.nav__toggler {
  display: none;
}

.contact {
  background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
  border-radius: 100px;
}
.page-col {
  display: flex;
  flex-direction: column;
}

.addbor {
  border: 1px solid #f4f4f4;
  padding: 0.55rem;
  width: 100%;
  display: flex;
  justify-content: center;
}

.socials {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.socials i {
  font-size: 3rem;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
@media (max-width: 850px) {
  .menu {
    display: block;
  }

  .pages {
    display: none;
  }
  /* .logo {
    width: 160px;
  } */
}
@media (max-width: 1100px) {
  .nav__toggler {
    display: flex;
  }
  .nav__links {
    display: none;
  }
}
@media (max-width: 600px) {
  .contact {
    background: linear-gradient(98.63deg, #005be3 24.12%, #27ab83 83.6%);
    border-radius: 100px;
    width: 80px;
    font-size: 8px;
    display: none;
  }

  .logo > div {
    font-size: 25px;
  }
  /* .logo {
    padding-top: 0.6rem;
  } */
}
</style>
