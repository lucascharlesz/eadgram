<template>
  <div class="image-filter-container" v-if="newPost.url">
    <div class="image-container">
      <img :src="newPost.url" :class="newPost.filter" />
    </div>
    <div class="filter-container">
      <FilterType v-for="(filter, index) in filters" :filter="filter" :image="newPost.url" :key="index" />
    </div>
  </div>
</template>

<script>
import FilterType from '@/components/FilterType.vue';
import store from '@/data/store';

export default {
  name: 'PostFilter',
  props: ['selectedImage'],
  data() {
    return {
      image: this.selectedImage,
      filters: store.state.filters,
      newPost: store.state.newPost
    }
  },
  components: {
    FilterType
  },
  methods: {
    createPost() {
      store.setPost();
    },
  },
};
</script>

<style lang="scss" scoped>

  .image-filter-container {
    width: 100%;
    height: 100%;
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

    .filter-container {
      white-space: nowrap;
      overflow-x: scroll;
    }
  }
</style>
