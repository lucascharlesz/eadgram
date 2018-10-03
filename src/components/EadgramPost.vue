<template>
  <div class="eadgram-post">
    <div class="header level">
        <div class="level-left">
          <figure class="image is-32x32">
            <img :src="post.userImage" />
          </figure>
          <span class="username">{{post.username}}</span>
        </div>
    </div>
    <div class="image-container"
      :class="post.filter"
      :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
      @dblclick="like">
    </div>
    <div class="content">
      <div class="heart">
        <i class="fa fa-1-5"
          :class="{'fas fa-heart': post.hasBeenLiked, 'far fa-heart-o': !post.hasBeenLiked}"
          @click="like"></i>
      </div>
      <p class="likes">{{post.likes}} likes</p>
      <p class="caption"><span>{{post.username}}</span> {{post.caption}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EadgramPost',
  props: {
    post: Object,
  },
  methods: {
    like() {
      this.post.likes = this.post.hasBeenLiked ? this.post.likes - 1 : this.post.likes + 1;
      this.post.hasBeenLiked = !this.post.hasBeenLiked;
    },
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

</style>
