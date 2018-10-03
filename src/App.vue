<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./assets/eadgram.svg" />
      </div>

      <router-view/>

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
            @change="uploadImage"/>
          <label for="file">
            <i class="fa fa-plus-square-o fa-1-5"></i>
          </label>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    uploadImage(evt) {
      const { target: { files } } = evt;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        this.$router.push({ name: 'about', params: { selectedImage: e.target.result } });
      };
      // To enable reuploading of same files in Chrome
      document.querySelector('#file').value = '';
    },
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
      padding-top: 8px;
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

  .feed {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-right: -15px;
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
    overflow-x: hidden;
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
