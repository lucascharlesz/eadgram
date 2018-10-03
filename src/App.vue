<template>
  <div id="app">
    <div id="nav-top">
      <span>Camera</span>
      EADGRAM
      <span>N sei</span>
    </div>
    <div id="content">
      <transition>
        <router-view/>
      </transition>
    </div>
    <div id="nav-bottom">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  height: 100vh;
  width: 100vw;
}
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
}
#nav-bottom, #nav-top {
  z-index: 1;
  background: white;
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 10px 0px black;
}
#content {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#content > * {
  overflow-y: overlay;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
}
</style>
