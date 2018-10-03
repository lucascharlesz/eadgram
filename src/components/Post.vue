<template>
  <div class="eadgram-post">
    <div class="header level">
        <div class="level-left">
          <figure class="image is-32x32">
            <img :src="post.user && post.user.avatar" />
          </figure>
          <span class="username">{{post.user && post.user.username}}</span>
        </div>
    </div>
    <div class="image-container"
      :class="post.filter"
      :style="{ backgroundImage: 'url(' + post.url + ')' }"
      @dblclick="clapPost">
    </div>
    <div class="content">
      <img class="clap-image" src="./../assets/claps.svg" @click="clapPost" />
      <p class="likes">{{post.clapsCount}} likes</p>
      <p class="caption"><span>{{post.user && post.user.username}}</span> {{post.caption}}</p>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/posts.service";
import store from '@/data/store';

export default {
  name: 'Post',
  props: {
    post: Object,
  },
  methods: {
    clapPost() {
      PostsService.clapToPost(this.post.id).then(res => {
        if (res.data) {
          store.updatePost(res.data);
        }
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.eadgram-post {
  padding-top: 50px;
}

.eadgram-post ~ .eadgram-post {
  padding-top: 0;
}

.eadgram-post {
  padding: 5px 0;

  .header {
    height: 30px;
    border-bottom: 1px solid #fff;
    margin: 7.5px 10px;

    .image {
      display: inline-block;
    }

    img {
      border-radius: 99px;
    }

    .username {
      position: relative;
      top: 3px;
      padding-left: 5px;
      font-size: 0.9rem;
      font-weight: bold;
    }
  }

  .level {
    margin-bottom: 0.5rem !important;
  }

  .image-container {
    height: 330px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .content {
    margin: 7.5px 10px;
  }

  .far.fa-heart,
  .fas.fa-heart-o {
    cursor: pointer;
  }

  .fas.fa-heart {
    color: #f06595;
  }

  .likes {
    margin: 5px 0;
    margin-bottom: 5px !important;
    font-size: 0.85rem;
    font-weight: bold;
  }

  .caption {
    font-size: 0.85rem;

    span {
      font-weight: bold;
    }
  }
}

.eadgram-post:last-child {
  margin-bottom: 80px;
}

.clap-image {
  height: 32px;
  width: 32px;
  margin-right: 20px;
}

</style>
