<template>
  <div id="nav-bottom">
    <router-link to="/">
      <img class="user-image" :src="user.avatar" />
    </router-link>
    <router-link to="/">
      <img class="user-image" :src="user.avatar" />
    </router-link>
    <router-link to="/about">
      <img class="user-image" :src="user.avatar" />
    </router-link>
    <router-link to="/profile">
      <img class="user-image" :src="user.avatar" />
    </router-link>
  </div>
</template>

<script>
import UsersService from "@/services/users.service";
export default {
  name: "NavBottom",
  data: function() {
    return {
      user: {}
    };
  },
  mounted: function() {
    UsersService.getUserById(0).then(res => {
      this.user = res.data;
    });
  },
};
</script>


<style scoped>
#nav-bottom {
  z-index: 1;
  background: white;
  display: flex;
  height: 64px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 10px 0px black;
}

#nav-bottom .user-image {
  height: 32px;
  width: 32px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
