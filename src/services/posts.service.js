import api from './api.js';

export default {
  getPosts() {
    return api.get('/posts');
  },

  async clapToPost(postId) {
    const post = (await api.get('/posts/' + postId)).data;
    if (post) {
      post.clapsCount++;
      return api.put('/posts/' + postId, post)
    }
  }
}