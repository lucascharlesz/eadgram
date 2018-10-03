export default {
  state: {
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
      image: "",
      url: "",
      caption: ""
    }
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
    console.log(this.state.posts)
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
  setImage(img) {
    this.state.newPost.image = img;
  },
  resetNewPost() {
    this.state.newPost.image = "";
    this.state.newPost.url = "";
    this.state.newPost.filter = "normal";
    this.state.newPost.caption = "";
    this.state.header.step = 0;
  }
};