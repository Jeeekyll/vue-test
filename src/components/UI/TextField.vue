<template>
  <input
    class="input form-control"
    :value="modelValue"
    @input="onInputChange"
  />
</template>

<script>
export default {
  name: "TextField",
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped></style>
