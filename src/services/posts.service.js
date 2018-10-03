import api from './api.js';

export default {
  getPosts() {
    return api.get('/posts?_expand=user');
  },
  createPost(post) {
    return api.post('/posts?_expand=user', post);
  },
  async clapToPost(postId) {
    const post = (await api.get('/posts/' + postId)).data;
    if (post) {
      post.clapsCount++;
      return api.put('/posts/' + postId, post)
    }
  }
}