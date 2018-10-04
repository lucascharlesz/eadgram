<template>
  <div class="eadgram-header">
    <a @click="goToHome" v-if="header.step !== 0" class="cancel-cta">Cancelar</a>

    <img src="../assets/eadgram.svg" />

    <a @click="goToFilter" class="next-cta" v-if="header.step === 1">Próximo</a>
    <a @click="goToPublish" class="next-cta" v-if="header.step === 2">Próximo</a>
    <a @click="publishPost" class="next-cta" v-if="header.step === 3">Publicar</a>
  </div>
</template>

<script>
import store from "@/data/store";
import PostsService from "@/services/posts.service";

export default {
  name: "Header",
  data: function() {
    return {
      header: store.state.header
    };
  },
  methods: {
    goToHome() {
      store.resetNewPost();
      this.$router.push("/");
    },
    goToFilter() {
      store.setHeaderStep(2);
      this.$router.push("/filter");
    },
    goToPublish() {
      store.setHeaderStep(3);
      this.$router.push("/publish");
    },
    publishPost() {
      const newPost = {
        type: "photo",
        url: store.state.newPost.image,
        createdAt: new Date().getTime(),
        userId: 0,
        filter: store.state.newPost.filter,
        caption: store.state.newPost.caption,
        clapsCount: 0
      };
      PostsService.createPost(newPost).then(res => {
        store.setPost(res.data);
        this.goToHome();
      });
    }
  }
};
</script>

<style>
  .eadgram-header {
    height: 48px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 2px 0 black;
  }
  .eadgram-header > * {
    width: 33%;
    padding: 5px;
  }
  .eadgram-header > :first-child {
    text-align: left;
  }
  .eadgram-header > :last-child {
    text-align: right;
  }
</style>