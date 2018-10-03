<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-header">
        <img :src="post.user.avatar">
        <span>{{ post.user.username }}</span>
      </div>

      <div class="post-content">
        <img :src="post.url" v-on:dblclick="clapPost(post.id)">
      </div>

      <div class="post-footer">
        <img class="clap-image" src="./../assets/claps.svg" v-on:click="clapPost(post.id)" />
        <p>Clapped {{ post.clapsCount }} time(s).</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/posts.service";

export default {
  name: "home",
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

.post .post-header {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.post .post-header img {
  height: 36px;
  width: 36px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 50%;
}

.post .post-header span {
  font-weight: bold;
}

.post .post-content img {
  vertical-align: middle;
}

.post .post-footer {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.post .post-footer .clap-image {
  height: 32px;
  width: 32px;
  margin-right: 20px;
}
</style>
