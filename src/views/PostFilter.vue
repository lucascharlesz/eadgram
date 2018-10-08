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

export default {
  name: 'PostFilter',
  props: ['selectedImage'],
  computed: {
    filters() {
      return this.$store.state.filters
    },
    newPost() {
      return this.$store.state.newPost
    }
  },
  data() {
    return {
      image: this.selectedImage,
    }
  },
  components: {
    FilterType
  },
  methods: {
    createPost() {
      this.$store.commit('setPost');
    },
  },
};
</script>

<style lang="scss" scoped>

  .image-filter-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
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
