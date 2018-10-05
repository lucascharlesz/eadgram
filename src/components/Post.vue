<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.user && post.user.avatar" />
      <span class="username">{{post.user && post.user.username}}</span>
    </div>
    <div class="post-body" @dblclick="clapPost">
      <div class="image-container">
        <img :src="post.url" :class="post.filter" />
      </div>
    </div>
    <div class="post-footer">
      <div class="claps-container">
        <img class="clap-image" src="./../assets/claps.svg" @click="clapPost" />
        <span class="claps">{{post.clapsCount}} clap(s)</span>
      </div>
      <div class="comments-container">
        <p class="caption">
          <span>{{post.user && post.user.username}}</span>
          {{post.caption}}
        </p>
      </div>
      <div class="date-container">
        <span>{{ post.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/posts.service";

export default {
  name: "Post",
  props: {
    post: Object
  },
  methods: {
    clapPost() {
      PostsService.clapToPost(this.post.id).then(res => {
        if (res.data) {
          this.$store.commit('updatePost', res.data);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post {
  margin-bottom: 30px;

  .post-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 48px;
    padding: 8px;
    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      box-shadow: 0 0 1px 0 black;
      margin-right: 10px;
    }
    span {
      font-weight: bold;
    }
  }

  .post-body {
    .image-container {
      width: 100%;
      padding-top: 100%;
      position: relative;
      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .post-footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .claps-container {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .clap-image {
        height: 32px;
        width: 32px;
        margin: 0 10px;
      }
      span {
        font-weight: bold;
      }
    }
    .comments-container {
      width: 100%;
      .caption {
        margin: 0 10px;
        span {
          font-weight: bold;
        }
      }
    }
    .date-container {
      width: 100%;
      span {
        margin: 0 10px;
        text-align: left;
        font-size: small;
        color: gray;
      }
    }
  }
}
</style>
