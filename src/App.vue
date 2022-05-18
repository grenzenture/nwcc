<template>
  <Header />
  <Home />
  <!-- Custom language switcher -->
  <LanguageSwitcher />
  <!-- <Services />
  <About />
  <Gallery />
  <Contacts />
  <Career />
  <Footer /> -->
</template>

<script>
import Header from "./components/header.vue";
import Home from "./pages/main/home.vue";
// import HelloI18n from "./components/HelloI18n.vue";

// import Services from "./pages/main/services.vue";
// import About from "./pages/main/about-us.vue";
// import Gallery from "./pages/main/gallery.vue";
// import Contacts from "./pages/main/contacts.vue";
// import Career from "./pages/main/career.vue";
// import Footer from "./components/footer.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    LanguageSwitcher,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
