<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./assets/eadgram.svg" />
        <a @click="goToHome" v-if="header.step !== 0" class="cancel-cta">Cancelar</a>
        <a @click="goToPublish" class="next-cta" v-if="header.step === 1">Próximo</a>
        <a @click="publishPost" class="next-cta" v-if="header.step === 2">Publicar</a>
      </div>

      <div class="phone-body">
        <router-view/>
      </div>

      <div class="phone-footer">
       <div class="home-cta">
        <router-link to="/">
          <i class="fa fa-home fa-1-5"></i>
        </router-link>
       </div>
       <div class="upload-cta">
         <input type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"
            :disabled="header.step !== 0" />
          <label for="file">
            <i class="fa fa-plus-square-o fa-1-5"
            :class="{ 'upload-disabled': header.step !== 0}"></i>
          </label>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/posts.service";
import store from '@/data/store';

export default {
  name: 'App',
  data() {
    return {
      header: store.state.header
    }
  },
  methods: {
    uploadImage(evt) {
      const { target: { files } } = evt;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        
        store.setHeaderStep(1);
        store.setImage(e.target.result);
        this.$router.push('/post-filter');
      };
      document.querySelector('#file').value = '';
    },
    goToHome() {
      store.resetNewPost();
      this.$router.push('/');
    },
    goToPublish() {
      store.setHeaderStep(2);
      this.$router.push('/publish');
    },
    publishPost() {

      const newPost = {
        "type": "photo",
        "url": store.state.newPost.image,
        "createdAt": new Date().getTime(),
        "userId": 0,
        "filter": store.state.newPost.filter,
        "caption": store.state.newPost.caption,
        "clapsCount": 0
      }
      PostsService.createPost(newPost).then(res => {
        store.setPost(res.data);
        this.goToHome();
      });
    }
  },
};
</script>

<style lang="scss">
  @import "./../node_modules/bulma/css/bulma.css";
  @import "./../node_modules/font-awesome/css/font-awesome.css";
  @import "./../node_modules/cssgram/source/css/cssgram.css";

  $small: 520px;
  $medium: 768px;
  $large: 1216px;

  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    overflow: hidden;
    background: #e6ecf1;
    font-family: "Roboto", sans-serif;

    .fa-1-5 {
      font-size: 1.5em;
    }
    .fa-2 {
      font-size: 2em;
    }
    .fa-3 {
      font-size: 3em;
    }
  }

  #app {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-phone {
    background-color: white;
    height: 620px;
    width: 375px;
    overflow: hidden;
  }

  .phone-header {
    height: 50px;
    width: 375px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background: #fafafa;
    border-bottom: 1px solid #eeeeee;
    z-index: 99;

    img {
      max-width: 120px;
      display: block;
      margin: 0 auto;
      height: 100%;
      padding-top: 2px;
    }

    .cancel-cta,
    .next-cta {
      position: absolute;
      top: 12px;
      color: #209cee;
      font-weight: bold;
      cursor: pointer;
    }

    .cancel-cta {
      left: 10px;
    }

    .next-cta {
      right: 10px;
    }
  }

  .phone-body {
    height: 100%;
  }

  .feed {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-right: -15px;
  }

  .phone-footer {
    height: 35px;
    width: 375px;
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
    background: #fafafa;
    border-top: 1px solid #eeeeee;
    z-index: 99;

    .home-cta {
      position: absolute;
      left: 10px;
      top: 6px;
      cursor: pointer;
      i {
        color: #000;
      }
    }

    .upload-cta {
      i {
        color: #000;
      }
      position: absolute;
      right: 10px;
      top: 6px;
      cursor: pointer;
      p {
        font-size: 0.63rem;
        position: absolute;
        left: -25px;
        top: 5px;
      }
      .upload-disabled {
        cursor: default;
        color:#888181;
      }
    }

    input[name="file"] {
      visibility: hidden;
    }

    label {
      cursor: pointer;
      z-index: 99;
    }
  }

  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-leave-to {
    opacity: 0;
  }

  // Media Queries
  @media (max-width: $small) {
    #app {
      height: 100% !important;
      padding-top: 0 !important;
    }

    .app-phone,
    .app-phone-scroll-cover {
      height: 100%;
      width: 100%;
    }

    .phone-header,
    .phone-footer {
      width: 100%;
    }
  }

  @media (max-height: $small) {
    .app-phone {
      transform: scale(0.6);
    }
  }
</style>
