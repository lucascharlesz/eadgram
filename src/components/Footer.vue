<template>
  <div class="eadgram-footer">
    <div @click="backHome">
      <i class="fa fa-home"></i>
    </div>
    <div @click="uploadImage">
      <i class="fa fa-plus-square-o"></i>
    </div>
    <router-link class="user-detail" to="/profile">
      <img :src="user.avatar" />
    </router-link>
  </div>
</template>

<script>
import UsersService from "@/services/users.service";

export default {
  name: "Footer",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted: function() {
    UsersService.getUserById(0).then(res => {
      this.$store.commit('setUser', res.data);
    });
  },
  methods: {
    uploadImage: function() {
      this.$store.commit('setHeaderStep', 1);
      this.$router.push("/upload");
    },
    backHome: function() {
      this.$store.commit('setHeaderStep', 0);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.eadgram-footer {
  display: flex;
  height: 48px;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 2px 0 black;

  div {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 36px;
      line-height: 48px;
      color: black;
    }
  }

  .user-detail {
    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      box-shadow: 0 0 2px 0 black;
    }
  }
}
</style>