<template>
  <!-- <q-page> -->
  <component
    :is="LoadedComponent"
    :current-page="currentPage"
    v-if="(currentPage && portal_id) || loading"
  >
  </component>
  <main
    class="main"
    v-if="(!currentPage && portal_list && !loading) || !portal_id"
  >
    <div class="row justify-center items-center portal-selector">
      <div class="col-12">
        <h4 class="text-center text-h4">Choose Portal</h4>
      </div>
      <div
        class="col-12 col-md-8 justify-center flex q-mt-xl beauty-and-the-hover"
      >
        <div
          class="carder hovering cursor-pointer"
          v-for="portal in portal_list"
          :key="portal.id"
        >
          <div
            class="card-header"
            :style="{
              backgroundImage: `url(${portal.banner})`,
            }"
          >
            <div class="card-header-slanted-edge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200">
                <path class="polygon" d="M-20,200,1000,0V200Z" />
              </svg>
            </div>
          </div>

          <div class="card-body q-pa-md">
            <h5 class="text-h5">{{ portal.name }}</h5>
            <div class="text-primary">
              {{ portal.description }}
            </div>
            <q-btn
              rounded
              unelevated
              color="info"
              label="OPEN PORTAL"
              class="q-ma-sm"
              :to="{ name: 'portal.home', params: { portal: portal.slug } }"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- </q-page> -->
</template>

<script>
import Portal1 from "src/components/Portals/Portal1/LoaderComponent.vue";
import Portal2 from "src/components/Portals/Portal2/LoaderComponent.vue";
import Register from "src/components/Portals/RegisterForm.vue";
import LoadingComponent from "src/components/LoadingComponent.vue";

export default {
  name: "PortalLoader",
  watch: {
    "$route.params.portal": {
      handler(portal_id) {
        if (portal_id) {
          this.portal_id = portal_id;
          this.loadPage(portal_id);
        } else {
          this.portal_id = null;
        }
      },
      immediate: true,
    },
    "$route.meta.doRegistration": {
      handler(meta) {
        if (this.portal_id) {
          this.loadPage(this.portal_id);
        }
      },
      immediate: false,
    },
    "$route.params.page": {
      handler(page_id) {
        if (page_id && this.portal_id) {
          this.page_id = page_id;
          this.loadPage(this.portal_id, page_id);
        } else if (this.portal_id) {
          this.page_id = null;
          this.loadPage(this.portal_id);
        }
      },
      immediate: true,
    },
    loading: {
      handler(loading) {
        if (loading === true) {
          this.LoadedComponent = LoadingComponent;
        }
      },
      immediate: true,
    },
  },
  beforeCreate() {
    this.LoadedComponent = Portal2;
  },
  setup() {
    return {
      components: {
        Portal1,
        Portal2,
        Register,
      },
    };
  },
  data() {
    return {
      loading: true,
      currentPage: null,
      portal_list: null,
      portal_id: null,
      portal: {},
    };
  },
  created() {
    this.loadPortals();
  },
  methods: {
    loadPortals() {
      this.loading = true;
      this.$api
        .get("portals")
        .then(({ data }) => {
          this.loading = false;
          this.portal_list = data.data;
        })
        .catch((e) => {
          this.loading = false;
          this.$plugins.reader.error(e);
        });
    },
    resolvePortal(portal_id, current_page, LoadedComponent) {
      this.loading = true;
      this.$api
        .get("portals/" + portal_id)
        .then(({ data }) => {
          this.loading = false;
          this.portal = data.data;
          this.currentPage = current_page;
          this.currentPage.portal = this.portal;
          this.LoadedComponent = LoadedComponent;
          this.$store.bootstrap.setAttr(this.portal, "portal");
        })
        .catch((e) => {
          this.loading = false;
          this.$plugins.reader.error(e);
        });
    },
    loadPage(portal_id, page_id = null) {
      if (this.$route.name === "portal.register") {
        this.currentPage = {
          id: "register",
          name: "Register",
          slug: "register",
          description: "Register to the portal",
          banner: "https://picsum.photos/200/300",
          portal_id: portal_id,
          portal: this.portal,
        };

        if (!this.portal.id) {
          this.resolvePortal(portal_id, this.currentPage, Register);
        } else {
          this.LoadedComponent = Register;
          this.loading = false;
          this.$store.bootstrap.setAttr(this.currentPage.portal, "portal");
        }
        return;
      }

      this.loading = true;
      this.$api
        .get(`portals/${portal_id}/pages/${page_id || "index"}`)
        .then(({ data }) => {
          this.loading = false;
          this.currentPage = data.data;
          this.portal = this.currentPage.portal;
          this.$store.bootstrap.setAttr(this.currentPage.portal, "portal");
          this.LoadedComponent = this.components[this.currentPage.component];
        })
        .catch((e) => {
          this.loading = false;
          this.$plugins.reader.error(e);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  scroll-behavior: smooth;
  font-family: "Montserrat", sans-serif;
  font-size: var(--normal-font-size);
  color: var(--text-color);
}
.portal-selector {
  height: 100vh;
}
.carder {
  position: relative;
  width: 315px; /* Remove for full width */
  margin: 30px auto;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  background: #fff;
  transition: 1s box-shadow;
}
.card-header {
  position: relative;
  height: 220px;
  background-size: cover;
  background-position: top;
}
.card-header:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgb(5, 85, 134),
    rgba(181, 181, 181, 0.1)
  );
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  clip: rect(0, 0, 0, 0);
  border: none;
  overflow: hidden;
}
svg .polygon {
  fill: #fff;
}
.card-header-slanted-edge {
  position: absolute;
  bottom: -3px;
  z-index: 1;
  width: 100%;
  right: 0;
  left: 0;
}

.card-header-slanted-edge svg {
  display: block;
}

.card-body {
  text-align: center;
  padding-left: 10px;
}

.beauty-and-the-hover {
  & .hovering:hover {
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }

  & .hovering:hover::before,
  .hovering:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fda8cf;
    // border-radius: 75px;
    z-index: -10;
    animation: 1s clockwise infinite;
  }

  & .hovering:hover:after {
    background: #f3ce5e;
    animation: 2s counterclockwise infinite;
  }

  @keyframes clockwise {
    0% {
      top: -5px;
      left: 0;
    }
    12% {
      top: -2px;
      left: 2px;
    }
    25% {
      top: 0;
      left: 5px;
    }
    37% {
      top: 2px;
      left: 2px;
    }
    50% {
      top: 5px;
      left: 0;
    }
    62% {
      top: 2px;
      left: -2px;
    }
    75% {
      top: 0;
      left: -5px;
    }
    87% {
      top: -2px;
      left: -2px;
    }
    100% {
      top: -5px;
      left: 0;
    }
  }

  @keyframes counterclockwise {
    0% {
      top: -5px;
      right: 0;
    }
    12% {
      top: -2px;
      right: 2px;
    }
    25% {
      top: 0;
      right: 5px;
    }
    37% {
      top: 2px;
      right: 2px;
    }
    50% {
      top: 5px;
      right: 0;
    }
    62% {
      top: 2px;
      right: -2px;
    }
    75% {
      top: 0;
      right: -5px;
    }
    87% {
      top: -2px;
      right: -2px;
    }
    100% {
      top: -5px;
      right: 0;
    }
  }
}
</style>
