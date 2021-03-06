import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'feed',
      component: () =>
        import('./views/Feed.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      props: true,
      component: () =>
        import('./views/ImageUpload.vue'),
    },
    {
      path: '/filter',
      name: 'filter',
      props: true,
      component: () =>
        import('./views/PostFilter.vue'),
    },
    {
      path: '/publish',
      name: 'publish',
      component: () =>
        import('./views/Publish.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () =>
        import('./views/Profile.vue'),
    },
  ],
});