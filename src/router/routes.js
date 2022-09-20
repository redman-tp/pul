
const routes = [
  
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/greyhobb', component: () => import('pages/GreyHobb.vue') ,name: 'greyhobb'},
      { path: '/greytech', component: () => import('pages/GreyTech.vue'),name: 'greytech' },
      { path: '/greycreate', component: () => import('pages/GreyCreate.vue'),name: 'greycreate' },
      { path: '/greyacademy', component: () => import('pages/GreyAcademy.vue') },
      { path: '/metaverse', component: () => import('pages/Metaverse.vue'),name: 'metaverse' },
      { path: '/about', component: () => import('pages/About.vue'),name: 'about' },
    ]
  },
  {
    path: '/kukahapplication',
    component: () => import('layouts/MainLayout.vue'),
    children: [ 
      { path: '/kukah', component: () => import('pages/Kukah.vue'),name: 'kukah' },
      { path: '/application', component: () => import('pages/Application.vue'),name: 'application' },
      
      { path: '/login', component: () => import('pages/Auth/Login.vue'),name: 'login' },
      
    ]
  },
  {
    path: '/boot',
    component: () => import('layouts/bootcamp.vue'),
    children: [ 
      
      { path: '/bootcamp', component: () => import('pages/Bootcamp.vue'),name: 'bootcamp' },
      { path: '/bootcampHome', component: () => import('pages/BootcampHome.vue'),name: 'bootcampHome' },
      // { path: '/bootcampHome', component: () => import('pages/BootcampHome.vue'),name: 'bootcampHome' },
      { path: '/bootcamphome2', component: () => import('pages/Bootcamphome2.vue'),name: 'bootcamphome2' },
     
      
    ]
  },
  {
    path: '/userdashboard',
    component: () => import('layouts/Dashboard.vue'),
    children: [ 
      { path: '/user/dashboard', component: () => import('pages/Dashboard/Dashboard.vue'), name:'user.dashboard'},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
