<template>
  <div class="image-upload-container">
    <div v-show="imageLink" class="image-container">
      <img :src="imageLink" />
      <button @click="openImageUpload">CHANGE</button>
    </div>

    <div v-show="!imageLink" class="input-container">
      <label for="image-upload">
        UPLOAD
      </label>
      <input id="image-upload" ref="myImageUpload" type="file" @change="previewImage">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ImageUpload",
  data: function() {
    return {
      imageLink: ''
    };
  },
  mounted: function () {
    this.imageLink = this.$store.state.newPost.url;
  },
  methods: {
    openImageUpload() {
      this.$refs.myImageUpload.click();
    },

    async previewImage(el) {
      const imageBase64 = await this.getBase64(el.target.files[0]);
      this.imageLink = imageBase64;
      this.$store.commit('setUrl', this.imageLink);
    },

    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  }
});
</script>

<style lang="scss">
  .image-upload-container {
    width: 100%;
    padding-top: 100%;
    position: relative;
    label {
      cursor: pointer;
    }
    .image-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      button {
        position: absolute;
        top: 0;
        right: 0;
        background: #00000030;
        border: none;
        color: white;
        padding: 5px 10px;
      }
    }
    .input-container {
      width: 100%;
      label {
        height: 100%;
        width: 100%;
        font-size: 48px;
        text-align: center;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #image-upload {
        display: none;
      }
    }
  }
</style>
