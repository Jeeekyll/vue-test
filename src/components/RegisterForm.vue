<template>
  <primary-button text="Register" @click="handleModalOpen" />

  <default-modal :is-active="isModalActive" :on-close="handleModalClose">
    <form @submit.prevent="onSubmit" class="login-modal__content">
      <div class="form-item">
        <label class="form-label">
          Username
          <text-field v-model="username" />
        </label>
      </div>

      <div class="form-item">
        <label class="form-label">
          Email
          <text-field v-model="email" />
        </label>
      </div>

      <div class="form-item">
        <label class="form-label">
          Password
          <text-field v-model="password" type="password" />
        </label>
      </div>

      <primary-button text="Register" type="submit" />
    </form>
  </default-modal>
</template>

<script>
import PrimaryButton from "./UI/PrimaryButton";
import DefaultModal from "./UI/DefaultModal";
import TextField from "./UI/TextField";

export default {
  name: "RegisterForm",
  components: { PrimaryButton, DefaultModal, TextField },
  data: () => ({
    username: "",
    email: "",
    password: "",

    isModalActive: false,
  }),
  methods: {
    handleModalClose() {
      this.isModalActive = false;
    },
    handleModalOpen() {
      this.isModalActive = true;
    },
    onSubmit() {
      this.$store.dispatch("register", {
        username: this.username,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.form-item {
  margin-bottom: 15px;
}

.login-modal__content {
  margin: 20px 0;
}

.form-label {
  display: block;
  margin-bottom: 4px;
}
</style>
