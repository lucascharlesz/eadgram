export default {
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
  setUser(user) {
    this.state.user = { ...user };
  },
  setPost(post) {
    this.state.posts.push(post);
  },
  updatePost(post) {
    const index = this.state.posts.findIndex(p => p.id === post.id);
    this.state.posts[index].clapsCount = post.clapsCount;
  },
  setPosts(posts) {
    this.state.posts.splice(0, this.state.posts.length);
    posts.forEach(p => {
      this.state.posts.push(p);
    });
  },
  setHeaderStep(val) {
    this.state.header.step = val;
  },
  setSelectedFilter(filter) {
    this.state.newPost.filter = filter;
  },
  setUrl(url) {
    this.state.newPost.url = url;
  },
  resetNewPost() {
    this.state.newPost.url = "";
    this.state.newPost.filter = "normal";
    this.state.newPost.caption = "";
    this.state.header.step = 0;
  }
};