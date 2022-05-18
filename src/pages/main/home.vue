/** * Главный экран */

<template>
  <section class="home-section">
    <main>
      <div itemprop="logo" class="logo"></div>
      <h1>NWCC</h1>
      <pre>{{ posts }}</pre>
    </main>
  </section>
</template>

<script>
import server from "@/server";

export default {
  name: "Home",
  data() {
    return {
      posts: null,
    };
  },

  computed: {
    loading() {
      return this.posts === null;
    },
  },

  async created() {
    let response = await server.get("markers/v1/post/");
    this.posts = response.data.map((post) => ({
      name: post.acf.Name,
      image: post.acf.image,
    }));
  },
};
</script>

<style lang="scss" scoped>

</style>
