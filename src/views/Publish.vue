<template>
  <div class="post-publish">
    <div class="selected-image"
      :class="newPost.filter"
      :style="{ backgroundImage: 'url(' + newPost.image + ')' }"></div>
    <div class="caption-container">
      <textarea class="caption-input"
        placeholder="Write a caption..."
        v-model="newPost.caption"
        type="text">
      </textarea>
    </div>
  </div>
</template>

<script>
import store from '@/data/store';

export default {
  name: 'Publish',
  data() {
    return {
      image: this.selectedImage,
      newPost: store.state.newPost
    }
  },
  data() {
    return {
      newPost: store.state.newPost
    }
  }
};
</script>

<style lang="scss" scoped>
  .post-publish {
    height: 100%;
  }

  .caption-container {
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;

    textarea {
      border: 0;
      font-size: 1rem;
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid #eeeeee;
    }

    textarea:focus {
      outline: 0;
    }
  }
</style>
