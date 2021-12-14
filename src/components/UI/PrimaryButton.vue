<template>
  <button class="btn btn-primary">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
