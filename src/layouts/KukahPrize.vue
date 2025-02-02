<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-pa-md" elevated>
      <q-toolbar class="container navBar no_pad justify-between">
        <header class="header" id="header">
          <nav class="nav container">
            <a class="nav__logo">
              <img src="pe/kuklogo.png" alt="" />
              <span class="q-mt-md q-ml-sm">
                The<span class="text-green">Kukah</span><span class="ng">Prize</span></span
              ></a
            >
          </nav>
        </header>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-tabs class="column" active-color="primary">
        <div style="width: 100%" class="column q-py-lg items-center side_bar justify-center">
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/"
            exact
            label="home"
          />
          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/about"
            label="about"
            exact
          />
          <q-btn-dropdown
            class="text-weight-medium"
            style="color: black"
            label="Our Businesses"
            exact
          >
            <q-list>
              <q-item to="/our" exact clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label class="text-weight-bold">DAWIB INVESTMENT RESOURCES</q-item-label>
                </q-item-section>
              </q-item>

              <q-item to="/farms" exact clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label class="text-weight-bold">DAWIB FARM LIMITED</q-item-label>
                </q-item-section>
              </q-item>

              <q-item to="/rima" exact clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label class="text-weight-bold">RIMA GUARDS </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/our"
            label="Our Businesses"
          /> -->
          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/services"
            label="Our Services"
          /> -->

          <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/projects"
            label="Projects"
            exact
          />
          <q-route-tab
            label="Contact Us"
            ripple
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/contactUs"
            exact
          />

          <!-- <q-route-tab
            class="q-my-sm text-dark addbor text-weight-bold"
            to="/blog"
            label="blog"
          /> -->
        </div>
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>
<style scoped>
.nav {
  justify-content: center;
}
.nav__logo img {
  width: 90px;
  height: 50px;
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
@media (max-width: 850px) {
  .menu {
    display: none;
  }

  .pages {
    display: none;
  }
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
  .logo {
    padding-top: 0.6rem;
  }
}
</style>
