import portal from "./portal";

const routes = [
  ...portal,
  {
    path: "/",
    component: () => import("layouts/newHome.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Home.vue"),
        name: "index",
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/greyhobb",
        component: () => import("pages/GreyHobb.vue"),
        name: "greyhobb",
      },
      {
        path: "/greytech",
        component: () => import("pages/GreyTech.vue"),
        name: "greytech",
      },
      {
        path: "/greycreate",
        component: () => import("pages/GreyCreate.vue"),
        name: "greycreate",
      },
      // {
      //   path: "/greyacademy",
      //   component: () => import("pages/GreyAcademy.vue"),
      // },
      {
        path: "/metaverse",
        component: () => import("pages/MetaVerse.vue"),
        name: "metaverse",
      },
      {
        path: "/about",
        component: () => import("pages/IndexPage.vue"),
        name: "about",
      },
    ],
  },
  {
    path: "/auth" + Math.random() * 10,
    component: () => import("layouts/MainLayout.vue"),
    // meta: {
    //   requireGuest: true,
    // },
    children: [
      {
        path: "/login",
        component: () => import("pages/Auth/LoginPage.vue"),
        name: "auth.login",
      },
    ],
  },
  {
    path: "/userdashboard",
    component: () => import("layouts/DashboardLayout.vue"),
    children: [
      {
        path: "/user/dashboard",
        component: () => import("pages/Dashboard/DashboardPage.vue"),
        name: "user.dashboard",
      },
      {
        path: "/paidReservations",
        component: () => import("pages/Dashboard/PaidReservations.vue"),
        name: "user.paid",
      },
      {
        path: "/reservations",
        component: () => import("pages/Dashboard/Reservations.vue"),
        name: "user.reservations",
      },
      {
        path: "/transactions",
        component: () => import("pages/Dashboard/Transactions.vue"),
        name: "user.transactions",
      },
    ],
  },

  {
    path: "/kukahapplication",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/kukah",
        component: () => import("pages/KukahPrize.vue"),
        name: "kukah",
      },
      {
        path: "/application",
        component: () => import("pages/ApplicationPage.vue"),
        name: "application",
      },
    ],
  },
  {
    path: "/boot",
    component: () => import("layouts/BootcampLayout.vue"),
    children: [
      {
        path: "/bootcamp",
        component: () => import("pages/BootcampPage.vue"),
        name: "bootcamp",
      },
      {
        path: "/greyacademy",
        component: () => import("pages/BootcampHome.vue"),
        name: "bootcamp.home",
      },
      {
        path: "/bootcamp/home/expand",
        component: () => import("pages/BootcampHome2.vue"),
        name: "bootcamp.home.expand",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
