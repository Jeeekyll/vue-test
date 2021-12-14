<template>
  <h3>Comments list</h3>

  <template v-if="isAuth">
    <form @submit.prevent="handleFormSubmit">
      <text-field
        :class="{ 'is-invalid': v$.message.$error }"
        v-model="message"
      />

      <primary-button text="Send" type="submit" />
    </form>
  </template>
  <template v-else>
    <div>Authorize to leave a comment</div>
  </template>

  <template v-if="comments.length > 0">
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <div>Author: {{ comment.author.username }}</div>
      <div>
        Created:
        {{ formatDistanceToNow(new Date(comment.createdAt)) }}
        ago
      </div>
      <div>{{ comment.text }}</div>
      <template v-if="isAuth && comment.author.id === user.id">
        <div @click="onDeleteBtnClick(comment.id)" class="text-danger">
          Remove
        </div>
      </template>
    </div>
  </template>
  <template v-else> Your comment will be first</template>
</template>
<script>
import { formatDistanceToNow } from "date-fns";
import { minLength, required } from "@vuelidate/validators";
import { mapGetters } from "vuex";
import useVuelidate from "@vuelidate/core";
import TextField from "./UI/TextField";
import PrimaryButton from "./UI/PrimaryButton";

export default {
  name: "CommentsList",
  components: { PrimaryButton, TextField },
  setup() {
    return {
      formatDistanceToNow,
      v$: useVuelidate(),
    };
  },
  computed: {
    ...mapGetters(["user", "isAuth"]),
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  emits: ["createComment", "deleteComment"],
  data: () => ({
    message: "",
  }),
  methods: {
    async handleFormSubmit() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.$emit("createComment", {
        text: this.message,
      });

      this.message = "";
      this.v$.$reset();
    },
    onDeleteBtnClick(idx) {
      this.$emit("deleteComment", idx);
    },
  },
  validations() {
    return {
      message: {
        required,
        minLength: minLength(3),
      },
    };
  },
};
</script>

<style scoped>
.comment {
  margin: 20px 0;
  border-bottom: 1px solid var(--bs-primary);
}
</style>
