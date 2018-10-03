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
    filter: {
      selected: 'normal'
    }
  },
  setPost(post) {
    this.state.posts.push({
      username: 'socleansofreshh',
      userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
      postImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg',
      likes: 36,
      hasBeenLiked: false,
      caption: "When you're ready for summer '18 ☀️",
      filter: 'perpetua',
    });
  },
  updatePost(post) {
    const index = this.state.posts.findIndex(p => p.id === post.id);
    this.state.posts[index].clapsCount = post.clapsCount;
  },
  setPosts(posts) {
    posts.forEach(p => {
      this.state.posts.push(p);
    });
  },
  setSelecterdFilter(filter) {
    this.state.filter.selected = filter;
  }
};