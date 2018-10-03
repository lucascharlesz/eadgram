<template>
  <div class="phone-body">
    <div class="feed">
      <EadgramPost :post="post" v-for="(post, index) in posts" :key="index" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EadgramPost from '@/components/EadgramPost.vue';
import store from '@/data/store';

export default {
  name: 'PhoneBody',
  data() {
    return {
      posts: store.state.posts,
    };
  },
  components: {
    EadgramPost,
  },
};
</script>

<style lang="scss">
  .phone-body {
    height: 100%;
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
    height: 220px;
    padding: 30px 10px;
    white-space: nowrap;
    overflow-x: scroll;
  }
</style>
