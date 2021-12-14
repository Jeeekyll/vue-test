<template>
  <button @click="handleModalOpen" class="btn btn-primary">Login</button>

  <default-modal :is-active="isModalActive" :on-close="handleModalClose">
    <form
      @submit.prevent="onSubmit"
      class="login-modal__content"
      ref="loginForm"
    >
      <div class="form-item">
        <label class="form-label">
          Email
          <text-field
            :class="{ 'is-invalid': v$.email.$error }"
            v-model="email"
          />
        </label>
      </div>

      <div class="form-item">
        <label class="form-label">
          Password
          <text-field
            :class="{ 'is-invalid': v$.password.$error }"
            v-model="password"
            type="password"
          />
        </label>
      </div>

      <primary-button text="Login" type="submit" />
    </form>
  </default-modal>
</template>

<script>
import TextField from "./UI/TextField";
import DefaultModal from "./UI/DefaultModal";
import PrimaryButton from "./UI/PrimaryButton";
import useVuelidate from "@vuelidate/core";
import { email, maxLength, minLength, required } from "@vuelidate/validators";

export default {
  name: "LoginForm",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  components: { PrimaryButton, TextField, DefaultModal },
  data: () => ({
    isModalActive: false,
    email: "",
    password: "",
  }),
  methods: {
    handleModalOpen() {
      this.isModalActive = true;
    },
    handleModalClose() {
      this.isModalActive = false;
    },
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  validations: () => {
    return {
      email: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(40),
        email,
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(15),
      },
    };
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
