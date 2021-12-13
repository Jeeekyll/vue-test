<template>
  <navbar/>
  <router-view/>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {Navbar}
}
</script>

<style scoped>
body {
  position: relative;
}

</style>