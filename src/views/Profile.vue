<template>
  <div class="container">
    <h3>Profile</h3>
    <template v-if="isAuth">
      <div class="profile">
        <div>Username: {{ user.username }}</div>
        <div>Email: {{ user.email }}</div>
        <div>Bio: {{ user.bio || 'No data specified' }}</div>
      </div>

      <primary-button
          :text="isEditFormActive ? 'Hide' : 'Edit'"
          class="mt-3"
          @click="isEditFormActive
          ? handleEditFormHide()
          : handleEditFormShow()"
      />

      <div v-show="isEditFormActive">
        <form @submit.prevent="onEditFormSubmit">
          <label class="edit-form__label">
            Username
            <text-field v-model="username"/>
          </label>

          <label class="edit-form__label">
            Email
            <text-field v-model="email"/>
          </label>

          <label class="edit-form__label">
            Bio
            <text-field v-model="bio"/>
          </label>

          <primary-button class="mt-3" text="Save" type="submit"/>
        </form>

      </div>
    </template>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import PrimaryButton from "@/components/UI/PrimaryButton";
import TextField from "@/components/UI/TextField";

export default {
  name: "Profile",
  components: {TextField, PrimaryButton},
  computed: {
    ...mapGetters([
      'user',
      'isAuth',
    ])
  },
  data: () => ({
    isEditFormActive: false,

    username: '',
    email: '',
    bio: '',
  }),
  methods: {
    handleEditFormShow() {
      this.isEditFormActive = true;
    },
    handleEditFormHide() {
      this.isEditFormActive = false;
    },
    async onEditFormSubmit() {
       try {
         this.$store.dispatch('update', {
           username: this.username,
           email: this.email,
           bio: this.bio,
         });

       } catch (error) {
         console.log(error);
       }
    }
  },
  watch: {
    user() {
      this.username = this.user.username;
      this.email = this.user.email;
      this.bio = this.user.bio;
    }
  }
};
</script>

<style scoped>
.edit-form__label {
  display: block;
}
</style>
