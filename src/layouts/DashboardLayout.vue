<template>
  <q-layout view="hHr lpr lFf">
    <q-header
      elevated
      class="bg-white flexx q-pa-xs text-white"
      height-hint="90"
    >
      <q-toolbar class="no-padding flexx">
        <div class="left">
          <q-btn
            size="1.2rem"
            dense
            flat
            @click="toggleRightDrawer"
            class="menu_toggler text-primary"
          >
            <i class="ri-menu-2-line"></i>
          </q-btn>
          <q-btn
            dense
            color="secondary"
            round
            icon="notifications"
            class="q-ml-md"
          >
            <q-badge color="red" floating>4</q-badge>
          </q-btn>
        </div>

        <div class="right flexxx">
          <div class="text-primary heed q-px-md">
            Hey!,Sirgappy <strong></strong>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="250"
      class="bg-primary q-pa-lg"
      show-if-above
      v-model="rightDrawerOpen"
      side="left"
      elevated
    >
      <!-- drawer content -->

      <q-list class="sidebar">
        <q-item clickable v-ripple to="/user/dashboard">
          <div class="wrapp">
            <i class="ri-user-line"></i>
            <p class="q-ml-md">Manage Spaces</p>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/reservations">
          <div class="wrapp">
            <i class="ri-user-line"></i>
            <p class="q-ml-md">Reservations</p>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/paidReservations">
          <div class="wrapp">
            <i class="ri-user-line"></i>
            <p class="q-ml-md">Paid Reservations</p>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/transactions">
          <div class="wrapp">
            <i class="ri-user-line"></i>
            <p class="q-ml-md">Transactions</p>
          </div>
        </q-item>

        <!-- <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-settings-2-line"></i>
            <p class="q-ml-md">Settings</p>
          </div>
        </q-item> -->

        <q-item clickable v-ripple>
          <div class="wrapp">
            <i class="ri-logout"></i>
            <p class="q-ml-md">Logout</p>
          </div>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DashboardLayout",
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
p {
  margin-bottom: 0px;
}

.flexx {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.flexxx {
  display: flex;
  align-items: center;
}

.right img {
  width: 50px;

  height: 70px;
  padding-top: 10px;
}

.menu_toggler {
  border: 1px solid #fe724c;
  padding: 0.15rem;
  margin-left: 0.75rem;
  width: 45px;
  height: 25px;
  border-radius: 5px;
}
.con {
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}
.wrapp {
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0.75rem 0;
}

.heed {
  font-size: 12px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
}

@media (max-width: 500px) {
  .q-tab {
    margin: 0 !important;
    padding: 0 3px !important;
  }

  .heed {
    font-size: 12px;
  }
}
</style>
