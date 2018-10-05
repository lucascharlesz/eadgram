import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    posts: [],
    filters: [
      {
        name: 'normal',
      },
      {
        name: 'clarendon',
      },
      {
        name: 'gingham',
      },
      {
        name: 'moon',
      },
      {
        name: 'lark',
      },
      {
        name: 'reyes',
      },
      {
        name: 'juno',
      },
      {
        name: 'slumber',
      },
      {
        name: 'aden',
      },
      {
        name: 'perpetua',
      },
      {
        name: 'mayfair',
      },
      {
        name: 'rise',
      },
      {
        name: 'hudson',
      },
      {
        name: 'valencia',
      },
      {
        name: 'xpro2',
      },
      {
        name: 'willow',
      },
      {
        name: 'lofi',
      },
      {
        name: 'inkwell',
      },
      {
        name: 'nashville',
      },
    ],
    header: {
      step: 0
    },
    newPost: {
      filter: "normal",
      url: "",
      caption: ""
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = { ...user };
    },
    setPost(state, post) {
      state.posts.push(post);
    },
    updatePost(state, post) {
      const index = state.posts.findIndex(p => p.id === post.id);
      state.posts[index].clapsCount = post.clapsCount;
    },
    setPosts(state, posts) {
      state.posts.splice(0, state.posts.length);
      posts.forEach(p => {
        state.posts.push(p);
      });
    },
    setHeaderStep(state, val) {
      state.header.step = val;
    },
    setSelectedFilter(state, filter) {
      state.newPost.filter = filter;
    },
    setUrl(state, url) {
      state.newPost.url = url;
    },
    resetNewPost(state) {
      state.newPost.url = "";
      state.newPost.filter = "normal";
      state.newPost.caption = "";
      state.header.step = 0;
    }
  },
  actions: {

  }
})
