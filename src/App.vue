<template>
  <div id="app">
    <div id="content">
      <transition>
        <router-view/>
      </transition>
    </div>
    <div id="nav">
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
#nav {
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}
#content {
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}
</style>
