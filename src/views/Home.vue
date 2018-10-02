<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-for="post in posts" :key="post.id" class="post">
      <img :src="post.url" v-on:dblclick="clapPost(post.id)">
      <p>Clapped {{ post.clapsCount }} time(s).</p>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import PostsService from "@/services/posts.service";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      posts: []
    };
  },
  mounted: function() {
    PostsService.getPosts().then(res => {
      this.posts = res.data;
    });
  },
  methods: {
    clapPost: function (postId) {
      PostsService.clapToPost(postId).then(res => {
        if (res.data) {
          this.posts.find(p => p.id === res.data.id).clapsCount = res.data.clapsCount;
        }
      });
    }
  }
};
</script>

<style>
.post img {
  width: 100%;
}
</style>
