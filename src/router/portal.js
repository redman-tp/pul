const routes = [
  {
    path: "/" + Math.ceil(Math.random() * 1000000009),
    component: () => import("layouts/PortalLayout.vue"),
    children: [
      {
        path: "/portals",
        component: () => import("src/pages/PortalLoader.vue"),
        name: "portal",
      },
      {
        path: "/portals/:portal",
        component: () => import("src/pages/PortalLoader.vue"),
        name: "portal.home",
      },
      {
        path: "/portals/:portal/pages/:page",
        component: () => import("src/pages/PortalLoader.vue"),
        name: "portal.page",
      },
      {
        path: "/portals/:portal/posts/:post",
        component: () => import("src/pages/PortalLoader.vue"),
        name: "portal.post",
      },
      {
        path: "/portals/:portal/register",
        component: () => import("src/pages/PortalLoader.vue"),
        name: "portal.register",
        meta: {
          doRegistration: true,
        },
      },
    ],
  },
];
export default routes;
