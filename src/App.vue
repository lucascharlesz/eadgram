<template>
  <div id="eadgram">
    <Header></Header>

    <div class="eadgram-body">
      <transition>
        <router-view/>
      </transition>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import PostsService from "@/services/posts.service";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"
import store from "@/data/store";

export default {
  name: "App",
  components: {Header, Footer},
  data() {
    return {
      header: store.state.header
    };
  },
  methods: {
    uploadImage(evt) {
      const {
        target: { files }
      } = evt;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = e => {
        store.setHeaderStep(1);
        store.setImage(e.target.result);
        this.$router.push("/post-filter");
      };
      document.querySelector("#file").value = "";
    }
  }
};
</script>

<style lang="scss">
@import "./../node_modules/font-awesome/css/font-awesome.css";
@import "./../node_modules/cssgram/source/css/cssgram.css";

body {
  margin: 0;
}
* {
  font-family: Arial, Helvetica, sans-serif;
}

#eadgram > {
  display: block;
  height: 100vh;
  width: 100vw;

  .eadgram-body {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 1 auto;
    height: calc(100vh - 48px - 48px);
  }
}
</style>

<style>.eadgram_logo{padding: 1px;}.eadgram_path{stroke-dasharray: 857.4342651367188; stroke-dashoffset: 857.4342651367188; fill: #00000000; stroke: #000; stroke-width: 1px; animation: draw 2s linear forwards, fillcolor 1s ease-in 0.5s forwards, strokecolor 1s linear 0.5s forwards;}@keyframes draw{to{stroke-dashoffset: 0;}}@keyframes fillcolor{from{fill: #00000000;}to{fill: #000000;}}@keyframes strokecolor{from{stroke: #000;}to{stroke: #0000;}}</style>
