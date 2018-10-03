<template>
  <div class="about">
    <h1 @click="createPost">This is an about page</h1>
  </div>
</template>

<script>
import store from '@/data/store';

export default {
  name: 'About',
  methods: {
    createPost() {
      store.setPost();
    },
  },
};
</script>

<style lang="scss">
  .about {
    height: 100%;
  }
</style>
