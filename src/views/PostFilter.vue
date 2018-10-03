<template>
  <div class="post-filter">
    <div class="selected-image"
      :class="newPost.filter"
      :style="{ backgroundImage: 'url(' + newPost.image + ')' }"></div>
    <div class="filter-container">
      <FilterType v-for="(filter, index) in filters"
        :filter="filter"
        :image="newPost.image"
        :key="index" />
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
  .post-filter {
    height: 100%;
  }

  .selected-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 330px;
  }

  .filter-container {
    height: 210px;
    padding: 30px 10px;
    white-space: nowrap;
    overflow-x: scroll;
  }
</style>
