<template>
  <div id="eadgram">
    <Header></Header>

    <div class="eadgram-body">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"

export default {
  name: "App",
  components: {Header, Footer},
  computed: {
    header() {
      return this.$store.state.header;
    }
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
        this.$store.setHeaderStep(1);
        this.$store.setImage(e.target.result);
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
  background-color: #f6f7f8;
  overflow: hidden;
  max-height: 100vh;
}
* {
  font-family: Arial, Helvetica, sans-serif;
}

#eadgram {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

#eadgram > {
  display: block;
  height: 100vh;
  width: 100vw;

  .eadgram-body {
    position: relative;
    flex: 1 1 auto;
    height: calc(100vh - 48px - 48px);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style>.eadgram_logo{padding: 1px;}.eadgram_path{stroke-dasharray: 857.4342651367188; stroke-dashoffset: 857.4342651367188; fill: #00000000; stroke: #000; stroke-width: 1px; animation: draw 2s linear forwards, fillcolor 1s ease-in 0.5s forwards, strokecolor 1s linear 0.5s forwards;}@keyframes draw{to{stroke-dashoffset: 0;}}@keyframes fillcolor{from{fill: #00000000;}to{fill: #000000;}}@keyframes strokecolor{from{stroke: #000;}to{stroke: #0000;}}</style>
