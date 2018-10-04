<template>
  <div class="feed">
    <Post :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import PostsService from "@/services/posts.service";
import store from '@/data/store';

export default {
  name: 'Feed',
  data() {
    return {
      posts: store.state.posts,
    };
  },
  mounted: function() {
    PostsService.getPosts().then(res => {
      store.setPosts(res.data);
    });
  },
  components: {
    Post,
  },
};
</script>

<style lang="scss">
  .feed {
    height: 100%;
    width: 100%;
    overflow-y: overlay;
    overflow-x: hidden;
  }
</style>
