<template>
  <div class="eadgram-header">
    <a @click="goToHome" v-if="header.step === 1" class="cancel-cta">Cancelar</a>
    <a @click="goToUpload" v-if="header.step === 2" class="cancel-cta">Anterior</a>
    <a @click="goToFilter" v-if="header.step === 3" class="cancel-cta">Anterior</a>

    <img src="../assets/eadgram.svg" />

    <a @click="goToFilter" class="next-cta" v-if="header.step === 1">Próximo</a>
    <a @click="goToPublish" class="next-cta" v-if="header.step === 2">Próximo</a>
    <a @click="publishPost" class="next-cta" v-if="header.step === 3">Publicar</a>
  </div>
</template>

<script>
import PostsService from "@/services/posts.service";

export default {
  name: "Header",
  computed: {
    header() {
      return this.$store.state.header;
    }
  },
  methods: {
    goToHome() {
      this.$store.commit('resetNewPost');
      this.$router.push("/");
    },
    goToUpload() {
      this.$store.commit('setHeaderStep', 1);
      this.$router.push("/upload");
    },
    goToFilter() {
      if (this.$store.state.newPost.url) {
        this.$store.commit('setHeaderStep', 2);
        this.$router.push("/filter");
      }
    },
    goToPublish() {
      if (this.$store.state.newPost.url) {
        this.$store.commit('setHeaderStep', 3);
        this.$router.push("/publish");
      }
    },

    publishPost() {
      const newPost = {
        type: "photo",
        url: this.$store.state.newPost.url,
        createdAt: new Date().getTime(),
        userId: 0,
        filter: this.$store.state.newPost.filter,
        caption: this.$store.state.newPost.caption,
        clapsCount: 0
      };
      PostsService.createPost(newPost).then(res => {
        this.$store.commit('setPost', res.data);
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

    border: 1px solid #1c5380;
    border-width: 1px 1px 0;
    box-shadow: 0 -1px 0 #06365f inset, 0 1px 0 rgba(255, 255, 255, 0.2) inset;
    border-radius: 4px 4px 0 0;
    background-color: #517fa4;
  }
  .eadgram-header > * {
    width: 33%;
    padding: 5px;
    color: white;
  }
  .eadgram-header > :first-child {
    text-align: left;
  }
  .eadgram-header > :last-child {
    text-align: right;
  }
  .cancel-cta,
  .next-cta {
    cursor: pointer;
  }
</style>