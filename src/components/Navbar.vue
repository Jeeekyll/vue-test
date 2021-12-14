<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link"> Home</router-link>
          <router-link to="/about" class="nav-item nav-link">
            About
          </router-link>
        </div>
        <template v-if="isAuth">
          <div class="nav-item mx-2 text-white">
            <img
              class="nav__avatar"
              :src="`${DOMAIN_URL}/${user.image}`"
              alt=""
            />
            <router-link to="/profile">
              {{ user.username }}
            </router-link>
          </div>
          <primary-button text="Logout" @click="logout" />
        </template>
        <template v-else>
          <div class="mx-2">
            <login-form />
          </div>

          <div class="mx-2">
            <register-form />
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PrimaryButton from "./UI/PrimaryButton";
import { DOMAIN_URL } from "../config";

export default {
  name: "Navbar",
  components: { PrimaryButton, RegisterForm, LoginForm },
  setup() {
    return {
      DOMAIN_URL,
    };
  },
  computed: {
    ...mapGetters(["user", "isAuth"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.nav__avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
