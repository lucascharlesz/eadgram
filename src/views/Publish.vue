<template>
  <div class="post-publish">
    <div class="image-container">
      <img :src="newPost.url" :class="newPost.filter" />
    </div>
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
export default {
  name: "Publish",
  computed: {
    newPost() {
      return this.$store.state.newPost;
    }
  },
  data() {
    return {
      image: this.selectedImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.post-publish {
  position: absolute;
  height: 100%;
  width: 100%;
}

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

.caption-container {
  height: 210px;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;

  textarea {
    box-sizing: border-box;
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
