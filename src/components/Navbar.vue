<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">
            Home
          </router-link>
          <router-link to="/about" class="nav-item nav-link">
            About
          </router-link>
        </div>
        <template v-if="isAuth">
          <div class="nav-item mx-2">{{ user.username }}</div>
          <button class="btn btn-primary">
            Logout
          </button>
        </template>
        <template v-else>
          <button
              class="btn btn-primary mx-2"
              @click="handleModalOpen"
          >
            Login
          </button>
          <button class="btn btn-primary">
            Register
          </button>
        </template>
      </div>
    </div>
  </nav>

  <default-modal
      :is-active="isModalActive"
      :on-close="handleModalClose"
  />
</template>

<script>
import {mapGetters} from 'vuex';
import DefaultModal from "./UI/DefaultModal";

export default {
  name: 'Navbar',
  components: {DefaultModal},
  computed: {
    ...mapGetters([
      'user',
      'isAuth',
    ])
  },
  data: () => ({
    isModalActive: false,
  }),
  methods: {
    handleModalClose() {
      this.isModalActive = false;
    },
    handleModalOpen() {
      this.isModalActive = true;
    }
  }
}
</script>

<style scoped>

</style>