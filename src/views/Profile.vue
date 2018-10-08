<template>
  <div id="profile">

    <div class="profile-header">
      <div class="user-image">
        <img :src="user.avatar" />
      </div>
      <div class="user-detail">
        <p class="user-name">{{user.name}}</p>
        <p class="user-username">{{user.username}}</p>
      </div>
    </div>

    <div class="profile-body">
      <Post :post="post" v-for="(post, index) in posts" :key="index" />
    </div>

  </div>
</template>

<script>
import PostsService from '@/services/posts.service';
import Post from '@/components/Post';

export default {
  components: {Post},
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    PostsService.getPostsFromUser(this.user.id).then(res => {
      this.posts = res.data;
    });
  }
}
</script>

<style lang="scss">
  #profile {
    position: absolute;
    display: block;
    flex-direction: column;
    flex: 1 1 auto;
    height: calc(100vh - 48px - 48px);
    overflow: hidden;
  }

  .profile-header {
    display: block;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex: 1 1 auto;

    height: 150px;

    .user-image {
      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
      }
    }

    .user-name {
      font-size: 24px;
    }
    .user-username {
      font-size: 18px;
    }
  }

  .profile-body {
    height: 100%;
    width: 100%;
    overflow-y: overlay;
    overflow-x: hidden;
  }
</style>
