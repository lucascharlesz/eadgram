<template>
  <div class="eadgram-footer">
    <div @click="backHome">
      <i class="fa fa-home"></i>
    </div>
    <div @click="uploadImage">
      <i class="fa fa-plus-square-o"></i>
    </div>
    <div class="user-detail">
      <img :src="user.avatar" />
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/users.service";
import store from "@/data/store";

export default {
  name: "Footer",
  data: function() {
    return {
      user: {}
    };
  },
  mounted: function() {
    UsersService.getUserById(0).then(res => {
      store.setUser(res.data);
      this.user = { ...store.state.user };
    });
  },
  methods: {
    uploadImage: function() {
      store.setHeaderStep(1);
      this.$router.push("/image-upload");
    },
    backHome: function() {
      store.setHeaderStep(0);
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