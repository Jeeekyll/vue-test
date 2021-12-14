<template>
  <navbar />
  <router-view />
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },
  mounted() {
    this.$store.dispatch("checkAuth");
  },
};
</script>

<style scoped>
body {
  position: relative;
}

a {
  text-decoration: none !important;
}
</style>
