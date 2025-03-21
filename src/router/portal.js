const routes = [
  {
    path: '/portals' + Math.ceil(Math.random() * 1000000009),
    component: () => import('src/layouts/OldMainLayout.vue'),
    children: [
      {
        path: '/portals',
        component: () => import('src/pages/PortalLoader.vue'),
        name: 'portal',
      },
    ],
  },
  {
    path: '/' + Math.ceil(Math.random() * 1000000009),
    component: () => import('layouts/bootcampReg.vue'),
    children: [
      {
        path: '/portals/:portal',
        component: () => import('src/pages/PortalLoader.vue'),
        name: 'portal.home',
      },
      {
        path: '/portals/:portal/pages/:page',
        component: () => import('src/pages/PortalLoader.vue'),
        name: 'portal.page',
      },
      {
        path: '/portals/:portal/posts/:post',
        component: () => import('src/pages/PortalLoader.vue'),
        name: 'portal.post',
      },
      {
        path: '/portals/:portal/register',
        component: () => import('src/pages/PortalLoader.vue'),
        name: 'portal.register',
        meta: {
          doRegistration: true,
        },
      },
      {
        path: '/payment/verify',
        component: () => import('pages/PaymentConfirmation.vue'),
        name: 'user.payment.verify',
      },
      {
        path: '/payment/verify/:ref',
        component: () => import('pages/PaymentConfirmation.vue'),
        name: 'user.payment.verify.ref',
      },
    ],
  },
]
export default routes
