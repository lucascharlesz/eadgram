<template>
  <div class="feed">
    <Post :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import PostsService from "@/services/posts.service";

export default {
  name: 'Feed',
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted: function() {
    PostsService.getPosts().then(res => {
      this.$store.commit('setPosts', res.data);
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
    position: absolute;
    overflow-y: overlay;
    overflow-x: hidden;
  }
</style>
